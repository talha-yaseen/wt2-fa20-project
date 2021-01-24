import React from 'react';

class AddStudent extends React.Component {

  constructor(props) {
      super(props);
      
  }

  render() {
    return (
        <div class="container-fluid">
          <h4>Add New Student</h4>
          <form method="POST" action="http://localhost:9000/students/add">
            <table className="table table-sm table-borderless add-student-table">
              <tr>
                <td>CMS ID</td>
                <td><input type="text" name="cmsID" /></td>
              </tr>
              <tr>
                <td>Full Name</td>
                <td><input type="text" name="fullName" /></td>
              </tr>
              <tr>
                <td>Group Name</td>
                <td><input type="text" name="groupName" /></td>
              </tr>
              <tr>
                <td>Github Link</td>
                <td><input type="text" name="githubLink" /></td>
              </tr>
              <tr>
                <td>Bio</td>
                <td><textarea name="bio"></textarea></td>
              </tr>
              <tr>
                <td colspan="2"><input className="btn btn-success" type="submit" /></td>
              </tr>
            </table>
          </form>
        </div>
      );
  }
}

export default AddStudent;
