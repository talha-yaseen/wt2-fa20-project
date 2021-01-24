var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Define schema
var StudentSchema = mongoose.Schema({
  cmsID: String,
  fullName: String,
  groupName: String,
  githubLink: String,
  bio: String
});
	 
// Compile schema to model
var Student = mongoose.model('Student', StudentSchema);

// Fetch students
router.get('/fetch', function(req, res, next) {
    // Connect to MongoDB 
    mongoose.connect('mongodb://localhost:27017/webproject');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection Error:'));
	db.once('open', function() {
	    console.log("Connection Successful!");
	 
	    // Get list of students
	    Student.find(function(err, data) {
	    	res.send(data);
	    });
	     
	});
});


// Add student
router.post('/add', function(req, res, next) {

    // Connect to MongoDB 
    mongoose.connect('mongodb://localhost:27017/webproject');
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Connection Error:'));
	db.once('open', function() {
	    console.log("Connection Successful!");
	 
	    // Create a new student from POST data
	    var newStudent = new Student({ cmsID: req.body.cmsID, fullName: req.body.fullName, groupName: req.body.groupName, githubLink: req.body.githubLink, bio: req.body.bio});
	 
	    // Save model to DB
	    newStudent.save(function (err, stud) {
	      if (err) return console.error(err);
	      console.log(stud.fullName + " has been added to the student db!");

	      res.send('<p>The student has been added to the database!</p><a href="http://localhost:3000">Click here to return to the main page.</a>');
	    });
	     
	});
});

router.get('/add', function(req, res, next) {
    res.send('No data passed!');
});

// Delete a student
router.get('/delete/:id', function(req, res, next) {
	let studentID = req.params.id;
	Student.deleteOne( { _id: studentID }, function(err) {
		if(err) console.log(err);
		else
			res.send('<p>Record successfully deleted!</p><a href="http://localhost:3000">Click here to return to the main page.</a>');
	} );
    
});

module.exports = router;