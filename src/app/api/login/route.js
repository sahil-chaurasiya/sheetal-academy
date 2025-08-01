// src/app/api/login/route.js
import { signToken } from '@/lib/auth';

const ADMIN_CREDENTIALS = {
  email: 'admin@sheetalacademy.com',
  password: 'sheetal123', // store securely later
};

export async function POST(req) {
  const { email, password } = await req.json();

  if (
    email === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  ) {
    const token = signToken({ email });
    return Response.json({ token });
  }

  return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
    status: 401,
  });
}
