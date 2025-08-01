import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  location: String,
  createdAt: Date,
});

export default mongoose.models.Event || mongoose.model('Event', eventSchema);
