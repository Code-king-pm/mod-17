import { Router } from 'express';
const router = Router();

import { 
  getApplications, 
  getSingleApplication, 
  createApplication, 
  updateApplication, 
  deleteApplication, 
  addTag, 
  removeTag 
} from '../../controllers/appController.js';

// `/api/applications`
router.route('/')
  .get(getApplications) // Get all applications
  .post(createApplication); // Create a new application

// `/api/applications/:applicationId`
router.route('/:applicationId')
  .get(getSingleApplication) // Get a single application
  .put(updateApplication) // Update an application
  .delete(deleteApplication); // Delete an application

// `/api/applications/:applicationId/tags`
router.route('/:applicationId/tags')
  .post(addTag); // Add a tag to an application

// `/api/applications/:applicationId/tags/:tagId`
router.route('/:applicationId/tags/:tagId')
  .delete(removeTag); // Remove a tag from an application

export default router;
