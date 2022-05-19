/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      imageUrl: "",
      email: "", 
      campusId: null,
      gpa: null,
      id: null, 
      redirect: false, 
      redirectId: null
    };
  }

//   componentDidMount() {
//     this.setState({
//         firstname: this.props.student.firstname,
//         lastname: this.props.student.lastname,
//         email: this.props.student.email,
//         imageUrl: this.props.student.imageUrl,
//         gpa: this.props.student.gpa,
//         campusId: this.props.student.campusId,
//         id: this.props.student.id
//     })
//   }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    // Updating information.
    let changestudent = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        imageUrl: this.state.imageUrl,
        email: this.state.email,
        campusId: this.state.campusId,
        gpa: this.state.gpa,
        id: this.state.id,
    };
    
    // Add edit student in back-end database
    let editstudent = await this.props.editStudent(changestudent);
    console.log(editstudent)

    this.setState({
        firstname: "", 
        lastname: "",
        imageUrl: "",
        email: "", 
        campusId: null,
        gpa: null, 
        id: null,
    })

  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
  }

  // Render editing student input form
  render() {
    // Redirect to the student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditStudentView 
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit} 
          student={this.props.student}     
        />
      </div>          
    );
  }
}

// The following input argument is passed to the "connect" function used by "EditStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
    return({
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student)),
    })
}

// Export store-connected container by default
// EditStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(null, mapDispatch)(EditStudentContainer);