/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;

  let studentStatus;
  if (campus.students.length === 0) {
    studentStatus = <p>There are no students in {campus.name}</p>
  }
  else {
    studentStatus = <p>Here are all the students in {campus.name}:</p>
  }
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <img style={{"width" : "500px", "height": "500px"}} src={campus.imageUrl} alt=""/>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      {studentStatus}
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
            <Link to={`/student/${student.id}`}>
            <img style={{"width": "100px", "height": "100px"}} src={student.imageUrl}/><h2>{name}</h2>
            </Link>             
          </div>
        );
      })
      }
    </div>
  );
};

export default CampusView;