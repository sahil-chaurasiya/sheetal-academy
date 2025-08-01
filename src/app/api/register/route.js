// src/app/api/register/route.js
import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, eventId } = body;

    if (!name || !email || !eventId) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    await db.collection('registrations').insertOne({
      name,
      email,
      phone: phone || null, // optional
      eventId: new ObjectId(eventId), // ✅ convert to ObjectId
      registeredAt: new Date(),
    });

    return NextResponse.json({ message: 'Registered successfully!' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to register.' }, { status: 500 });
  }
}
