const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get single workouts
router.get('/:id', getSingleWorkout);

// post a new workout
router.post('/', createWorkout);

// delete workout
router.delete('/:id', deleteWorkout);

// update a workout
router.patch('/:id', updateWorkout);

module.exports = router;
