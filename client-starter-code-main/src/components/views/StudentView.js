/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.image}</h1>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.image} />
      <h3>Student at {student.campus.name}</h3>
      <h3>email: {student.email}</h3>
      <h3>gpa: {student.gpa}</h3>
    </div>
  );

};

export default StudentView;