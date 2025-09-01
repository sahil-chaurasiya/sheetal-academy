// src/app/api/registrations/[eventId]/route.js
import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(req, context) {
  try {
    const { eventId } = await context.params; // ✅ await here

    if (!ObjectId.isValid(eventId)) {
      return NextResponse.json({ error: 'Invalid event ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const registrations = await db
      .collection('registrations')
      .find({ eventId: new ObjectId(eventId) })
      .sort({ registeredAt: -1 })
      .toArray();

    return NextResponse.json(registrations);
  } catch (error) {
    console.error('GET /api/registrations/[eventId] error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch registrations.' },
      { status: 500 }
    );
  }
}
