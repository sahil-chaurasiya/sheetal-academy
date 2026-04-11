// File: src/app/api/jobs/route.js

import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const jobs = await db.collection('jobs').find().sort({ createdAt: -1 }).toArray();
    return Response.json(jobs);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch jobs.' }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return new Response(JSON.stringify({ error: 'Title and description are required.' }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('jobs').insertOne({
      title,
      description,
      createdAt: new Date(),
    });

    return Response.json({ message: 'Job posted successfully.', id: result.insertedId });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to post job.' }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) {
      return new Response(JSON.stringify({ error: 'Job ID is required.' }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('jobs').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Job not found.' }), { status: 404 });
    }

    return Response.json({ message: 'Job deleted successfully.' });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to delete job.' }), { status: 500 });
  }
}
