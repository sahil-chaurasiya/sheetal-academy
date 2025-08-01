import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  eventId: mongoose.Schema.Types.ObjectId,
  name: String,
  phone: String,
  email: String,
  createdAt: Date,
});

export default mongoose.models.Registration || mongoose.model('Registration', registrationSchema);
