// create web server, use express and router to handle requests

// import express module
const express = require('express');
// create router
const router = express.Router();

// import comments controller
const commentsCtrl = require('../controllers/comments');

// create a comment
router.post('/api/comments', commentsCtrl.createComment);
// get all comments
router.get('/api/comments', commentsCtrl.getAllComments);
// get a comment by id
router.get('/api/comments/:id', commentsCtrl.getCommentById);
// update a comment by id
router.put('/api/comments/:id', commentsCtrl.updateComment);
// delete a comment by id
router.delete('/api/comments/:id', commentsCtrl.deleteComment);

// export router
module.exports = router;