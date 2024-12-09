import mongoose from 'mongoose';
import { JOB_STATUS, JOB_TYPE, REMOTE, SKILL_LEVEL } from '../utils/constants';

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    salary: Number,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    remote: {
      type: String,
      enum: Object.values(REMOTE),
      default: REMOTE.HYBRID,
    },
    jobLocation: {
      type: String,
      default: 'my city',
    },
    skillLevel: {
      type: String,
      enum: Object.values(SKILL_LEVEL),
      default: SKILL_LEVEL.ASSOCIATE,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
