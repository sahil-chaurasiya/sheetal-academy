// File: src/app/api/jobs/[id]/route.js
import clientPromise from '@/lib/db';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ error: 'Invalid job ID' }), {
      status: 400,
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const result = await db.collection('jobs').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Job not found' }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: 'Job deleted successfully.' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete job.' }), {
      status: 500,
    });
  }
}
