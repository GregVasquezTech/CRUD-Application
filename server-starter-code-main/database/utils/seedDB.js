/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York."
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York."
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York."
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
        lastname: "Smith",
	    email: "email@email.com",
		image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fus-president%2Fjoe-biden&psig=AOvVaw1DxGlm1dr6WDwDWeJV6_hH&ust=1652655621632000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIjQpI6M4PcCFQAAAAAdAAAAABAD",
	    gpa: 2.5,
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
        lastname: "Johnson",
		email: "email1@email.com",
		image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F10%2FMary_Johnson_at_SSAcon_2015.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMary_Johnson_(writer)&tbnid=v49LPqgUEfBMVM&vet=12ahUKEwif4N3IjOD3AhWYhXIEHbcQAOgQMygAegUIARDCAQ..i&docid=gqKpc44MqnMOrM&w=3139&h=4708&q=mary%20johnson&ved=2ahUKEwif4N3IjOD3AhWYhXIEHbcQAOgQMygAegUIARDCAQ",
		gpa: 2.5
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;