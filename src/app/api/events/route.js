// src/app/api/events/route.js
import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

// GET: Fetch all events with registration count
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const events = await db.collection('events').aggregate([
      {
        $lookup: {
          from: 'registrations',
          localField: '_id',
          foreignField: 'eventId',
          as: 'registrations',
        },
      },
      {
        $addFields: {
          registrationCount: { $size: '$registrations' },
        },
      },
      {
        $project: {
          registrations: 0, // Exclude full registration data
        },
      },
      {
        $sort: { date: 1 },
      },
    ]).toArray();

    return NextResponse.json(events);
  } catch (error) {
    console.error('GET /api/events error:', error);
    return NextResponse.json({ error: 'Failed to fetch events.' }, { status: 500 });
  }
}

// POST: Create a new event
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description, date, price } = body;

    if (!title || !description || !date) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    await db.collection('events').insertOne({
      title,
      description,
      date: new Date(date),
      price: price || 0,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Event created successfully.' });
  } catch (error) {
    console.error('POST /api/events error:', error);
    return NextResponse.json({ error: 'Failed to create event.' }, { status: 500 });
  }
}
