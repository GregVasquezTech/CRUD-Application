# CRUD-Application

# Created By: 
Gregory Vasquez

# Aided By: 
Ephraim Picker

# Instructions:
First, change directory to the server-starter-code. 
If you do not have node_modules in the server-start-code folder, run npm install. 
After it is done downloading, run npm start. You will get a message "Successfully seeded db" if it runs correctly.

Next, change directory to the client-starter-code
If you do not have node_modules in the client-starter-code folder, run npm install. 
After it is done downloading, run npm start. 

# User Story

As a user, I:
- [X] will land on a visually pleasing home page by default, which allows navigation to view all campuses and all students
-   [X] can navigate to all-campuses view, and
-   [X] see a list of all campuses in the database
-   [X] see an informative message if no campuses exist
-   [X] add a new campus
-     [X] with a validated form displaying real-time error messages
- [X] can navigate to a single-campus view, and
--- [X] see details about a single campus, including enrolled students (if any)
--- [X] see an informative message if no students are enrolled at that campus
--- [X] navigate to any student's single-student view 
--- [X] delete the campus 
--- [ ] edit campus information, including adding students to and deleting student from the campus
----- [ ] with a validated form displaying real-time error messages
- [X] can navigate to all-students view, and
--- [X] see a list of all students in the database
--- [X] see an informative message if no students exist
--- [X] add a new student
----- [X] with a validated form displaying real-time error messages
- [X] can navigate to a single-student view, and
--- [X] see details about a single student, including the campus at which the student is enrolled (if exists)
--- [ ] see an informative message if the student is not enrolled at a campus
--- [X] navigate to single-campus view of the student's enrolled campus
--- [X] delete the student
--- [ ] edit the student's information, including the campus at which the student is enrolled
----- [ ] with a validated form displaying real-time error messages

# Technical Requirements

ALL STUDENTS AND ALL CAMPUSES

Database (Sequelize)

- [X] Write a "campus" model with the following information:  
--- [X] name - not empty or null
--- [X] imageUrl - with a default value
--- [X] address - not empty or null 
--- [X] description - extremely large text
- [X] Write a "student" model with the following information: 
--- [X] firstName - not empty or null
--- [X] lastName - not empty or null
--- [X] email - not empty or null
--- [X] imageUrl - with a default value
--- [X] gpa - decimal between 0.0 and 4.0
- [X] Student may be associated with at most one campus
- [X] Campus may be associated with many students

API (Express, Sequelize)

- [X] Write a route to serve up all students
- [X] Write a route to serve up all campuses

State Management (Redux)

- [X] Write a "campuses" sub-reducer to manage campuses in the Redux Store
- [X] Write a "students" sub-reducer to manage students in the Redux Store

UI (React)

- [X] Write a component to display a list of all campuses, with at least the following information: campus names and images
- [X] Write a component to display a list of all students, with at least the following information: student names

Client-Side Routing (React Router)

- [X] Display the all-campuses view component when the URL matches "/campuses"
- [X] Display the all-students view component when the URL matches "/students"
- [X] Add links to the navigation bar that can be used to navigate to the all-campuses view and all-students view

SINGLE CAMPUS AND SINGLE STUDENT

API (Express, Sequelize)

- [X] Write a route to serve up a single campus (based on the campus id), including that campus's students
- [X] Write a route to serve up a single student (based on the student id), including that student's campus

UI (React)

- [X] Write a component to display a single campus with the following information:
--- [X] The campus's name, image, address, and description  
--- [X] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [X] Write a component to display a single student with the following information:
--- [X] The student's full name (first and last names), email, image, and GPA
--- [ ] The name of the student's campus (or a helpful message if the student doesn't have one)

Client-Side Routing (React Router)

- [X] Display the appropriate campus's information when the URL matches "/campuses/:campusId"
- [X] Display the appropriate student's information when the URL matches "/students/:studentId"
- [X] Clicking on the name of a campus from the all-campuses view should navigate to show that campus in the single-campus view
- [X] Clicking on the name of a student from the all-students view should navigate to show that student in the single-student view
- [X] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [X] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

EDITING A CAMPUS AND EDITING A STUDENT 

API (Express, Sequelize)

- [X] Write a route to edit a campus (based on the campus id)
- [X] Write a route to edit a student (based on the student id)

UI (React)

- [X] Write a component to display a form for editing a campus 
- [X] Display this component (the form) EITHER as part of the all-campuses view, or as its own single-campus view
- [ ] Submitting the form with valid inputs should: 
--- [ ] Make a request that causes the campus to be updated in the database 
--- [ ] Display the updated campus information without needing to refresh the web page
- [ ] Write a component to display a form for editing a student
- [ ] Display this component (the form) EITHER as part of the all-students view, or as its own single-student view
- [ ] Submitting the form with valid inputs should:
--- [ ] Make a request that causes the student to be updated in the database
--- [ ] Display the updated student information without needing to refresh the web page

ADDING A CAMPUS AND ADDING A STUDENT

API (Express, Sequelize)

- [X] Write a route to add a new campus
- [X] Write a route to add a new student

UI (React)

- [X] Write a component to display a form for adding a new campus, which contains input fields for at least the following campus information: name, address, and description
- [X] Display this component (the form) EITHER as part of the all-campuses view, or as its own single-campus view
- [X] Submitting the form with valid inputs should: 
--- [X] Make a request that causes the new campus to be persisted in the database
--- [X] Add the new campus to the list of campuses without needing to refresh the web page
- [X] Write a component to display a form for adding a new student, which contains input fields for at least the following student information: first name, last name, and email
- [X] Display this component (the form) EITHER as part of the all-students view, or as its own single-student view
- [X] Submitting the form with valid inputs should: 
--- [X] Make a request that causes the new student to be persisted in the database  
--- [X] Add the new student to the list of students without needing to refresh the web page

DELETING A CAMPUS AND DELETING A STUDENT

API (Express, Sequelize)

- [X] Write a route to delete a campus (based on the campus id)
- [X] Write a route to delete a student (based on the student id)

UI (React)

- [X] In the all-campuses view, include a "Delete" button next to each campus
- [X] Clicking the "Delete" button should:  
--- [X] Make a request that causes that campus to be deleted from the database 
--- [X] Delete the campus from the list of campuses without needing to refresh the web page
- [X] In the all-students view, include a "Delete" button next to each student
- [X] Clicking the "Delete" button should:
--- [X] Make a request that causes that student to be deleted from the database 
--- [X] Delete the student from the list of students without needing to refresh the web page
