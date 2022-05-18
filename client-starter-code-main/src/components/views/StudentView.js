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
      <img src={student.imageUrl} />
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h2>Student at {student.campus.name}</h2>
      <h2>email: {student.email}</h2>
      <h3>gpa: {student.gpa}</h3>
    </div>
  );

};

export default StudentView;