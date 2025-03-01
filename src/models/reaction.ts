import { Schema, model, Document } from 'mongoose';
import Tag from './Tag.js';

interface ireaction extends Document {
 
  createdAt: Date;
  buildSuccess: boolean;
  description: string;
  tags: typeof Tag[];
  getResponses: number;
}

// Schema to create Post model
const applicationSchema = new Schema<ireaction>(
  {
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 4,
      maxLength: 500,
    },
    tags: [Tag],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
applicationSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Application model
const Application = model('reaction', applicationSchema);

export default Application;
