import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    salary: Number,
    jobStatus: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'internship', 'contract'],
      default: 'full-time',
    },
    remote: {
      type: String,
      enum: ['hybrid', 'on-site', 'remote'],
      default: 'hybrid',
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    skillLevel: {
      type: String,
      enum: [
        'internship',
        'entry level',
        'associate',
        'mid-senior level',
        'director',
        'executive',
      ],
      default: 'entry level',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
