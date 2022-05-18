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
		email: "jsmith@email.com",
		imageUrl: "https://www.google.com/search?q=joe+smith&sxsrf=ALiCzsbhVQLP1oZUN-TxCZw4VuUvdudVWA:1652895928275&tbm=isch&source=iu&ictx=1&vet=1&fir=67mADXTLIuo8lM%252CrTWTYVqEK0pOmM%252C%252Fm%252F02pn3t0%253B1DM2REcTcwHXZM%252Cc_1vRf8bkl9w_M%252C_%253BamQ4y-3yzfxzoM%252C7zd4wN_5zeeE6M%252C_%253BxSbwc92A1X08qM%252CtT8Ql1ChPMrIwM%252C_%253B6kuY-vaxA6uGqM%252CMQZTB7X5PvboDM%252C_%253BbY3zSRitfBj7cM%252CsDtx01UT50hysM%252C_&usg=AI4_-kSd3Eu5U_0gxFtz4a3okC_hIS0CzQ&sa=X&ved=2ahUKEwiV6p6Vzen3AhVoTt8KHYa9D5IQ_B16BAhkEAE#imgrc=67mADXTLIuo8lM",
		gpa: 2.5
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "mjohnson@email.com",
		imageUrl: "https://www.google.com/search?q=mary+johnson&sxsrf=ALiCzsY6coyBEKml1nil93toOksOqpU4vA:1652896034565&tbm=isch&source=iu&ictx=1&vet=1&fir=v49LPqgUEfBMVM%252CgqKpc44MqnMOrM%252C%252Fm%252F0swl95y&usg=AI4_-kRNl5q9ZGYPQ_gCtMdS6ISQ_Qeexw&sa=X&ved=2ahUKEwiXlfbHzen3AhUGneAKHQq_DvwQ_B16BAhSEAI#imgrc=v49LPqgUEfBMVM",
		gpa: 3.5
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;