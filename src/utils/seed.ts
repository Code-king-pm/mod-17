import connection from '../config/connection.js';
import { User, Application } from '../models/index.js';
import { getRandomName, getRandomApplications } from './data.js';
import { Types } from 'mongoose';

connection.on('error', (err) => console.error(err));

connection.once('open', async () => {
  console.log('Connected to database.');

  // Ensure that connection.db is available
  const db = connection.db;
  if (!db) {
    console.error('Database connection is not established.');
    process.exit(1);
  }

  // Delete existing collections if they exist
  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map((col) => col.name);

  if (collectionNames.includes('users')) await db.dropCollection('users');
  if (collectionNames.includes('applications')) await db.dropCollection('applications');


  // Generate Users
  const users = [];
  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const [first, last] = fullName.split(' ');

    users.push({
      first,
      last,
      age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
    });
  }

  // Generate Applications with Reactions that contain Tags
  const tagBodies = ['Technology', 'Science', 'Education', 'Health', 'Travel', 'Food', 'Lifestyle'];

  const applications = getRandomApplications(10).map((app) => ({
    ...app,
    reactions: [
      {
        reactionId: new Types.ObjectId(),
        reactionBody: 'heyyy.',
        createdAt: new Date(),
        tags: tagBodies.map((tag) => ({
          tagId: new Types.ObjectId(),
          tagBody: tag,
          createdAt: new Date(),
        })),
      },
    ],
  }));

  // Insert data into the database
  await User.insertMany(users);
  await Application.insertMany(applications);

  console.table(users);
  console.table(applications);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});