import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const items = await db.collection('banners')
      .find({})
      .sort({ createdAt: -1 })
      .toArray();
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch.' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { label, imageUrl, linkUrl, type, isActive, startDate, endDate } = body;

    if (!label || !imageUrl)
      return NextResponse.json({ error: 'Label and image are required.' }, { status: 400 });

    const client = await clientPromise;
    const db = client.db();
    await db.collection('banners').insertOne({
      label,
      imageUrl,
      linkUrl:   linkUrl   || '',
      type:      type      || 'banner',
      isActive:  isActive  !== false,
      startDate: startDate ? new Date(startDate) : null,
      endDate:   endDate   ? new Date(endDate)   : null,
      order:     0,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Published successfully.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create.' }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { id, isActive, startDate, endDate } = body;
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    const update = {};
    if (isActive  !== undefined) update.isActive  = isActive;
    if (startDate !== undefined) update.startDate = startDate ? new Date(startDate) : null;
    if (endDate   !== undefined) update.endDate   = endDate   ? new Date(endDate)   : null;

    const client = await clientPromise;
    const db = client.db();
    await db.collection('banners').updateOne({ _id: new ObjectId(id) }, { $set: update });
    return NextResponse.json({ message: 'Updated.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update.' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required.' }, { status: 400 });

    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('banners').deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0)
      return NextResponse.json({ error: 'Not found.' }, { status: 404 });

    return NextResponse.json({ message: 'Deleted.' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete.' }, { status: 500 });
  }
}