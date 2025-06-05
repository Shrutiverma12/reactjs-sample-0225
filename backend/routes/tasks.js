import express from 'express';
import auth from '../middleware/auth.js';
import Task from '../models/Task.js';

const router = express.Router();

// Apply auth middleware
router.use(auth);

// Get all user tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort('-createdAt');
  res.json(tasks);
});

// Add a new task
router.post('/', async (req, res) => {
  const task = await Task.create({ ...req.body, user: req.user._id });
  res.status(201).json(task);
});

// Update task
router.put('/:id', async (req, res) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// Delete task
router.delete('/:id', async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
  res.json({ message: 'Deleted' });
});

export default router;
