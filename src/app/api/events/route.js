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
        $sort: { date: -1 }, // Newest events first
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

// DELETE: Remove an event by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Event ID is required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('events').deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Event not found.' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Event deleted successfully.' });
  } catch (error) {
    console.error('DELETE /api/events error:', error);
    return NextResponse.json({ error: 'Failed to delete event.' }, { status: 500 });
  }
}
