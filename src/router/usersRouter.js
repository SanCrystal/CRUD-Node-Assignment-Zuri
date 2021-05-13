//require express
const express = require('express');

//require express router
const router = express.Router();

//require users controllers
const { createNewUser, fetchSingleUser, fetchAllUsers, updateUser, deleteUser, homepage } = require('../controllers/usersControllers');
//homepage route
router.get('/', homepage)
    //route for creating a new user 
router.post('/users/register', createNewUser);

//route for fetching single user
router.get('/users/:id', fetchSingleUser);

//route for fetching all users
router.get('/users', fetchAllUsers);

//route for updating user
router.put('/users/:id', updateUser);

//route for deleting user
router.delete('/users/:id', deleteUser)

module.exports = router;