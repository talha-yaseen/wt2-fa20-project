import React from 'react';
import axios from 'axios';
import StudentInfo from './StudentInfo';

class StudentsList extends React.Component {

  state = {
    students: []
  }

  constructor(props) {
      super(props);
  }

  componentDidMount(){
    axios.get(`http://localhost:9000/students/fetch`)
      .then(res => {
        const students = res.data;
        this.setState({ students });
      });
  }

  render() {
    return (
        <div className="container-fluid students-list">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Record ID</th>
                <th>CMS ID</th>
                <th>Full Name</th>
                <th>Group Name</th>
                <th>Github Link</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.students.map(student => 
                <tr>
                  <td>{student._id}</td>
                  <td>{student.cmsID}</td>
                  <td>{student.fullName}</td>
                  <td>{student.groupName}</td>
                  <td><a href="https://github.com/talha-yaseen">{student.githubLink}</a></td>
                  <td><button className="btn btn-success btn-view-student-info" onClick={this.toggleStudentInfo}>View</button> <button className="btn btn-warning">Edit</button> <a href={`http://localhost:9000/students/delete/${student._id}`} className="btn btn-danger">Delete</a><StudentInfo {...student} /></td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>
      );
  }
}

export default StudentsList;
