import React from 'react';

class StudentInfo extends React.Component {

  constructor(props) {
      super(props);
      
  }

  render() {
    return (
        <div className="student-info">
          <h5>Student Information</h5>
          <p><strong>CMS ID: </strong> {this.props.cmsID}</p>
          <p><strong>Full Name: </strong> {this.props.fullName}</p>
          <p><strong>Group Name: </strong> {this.props.groupName}</p>
          <p><strong>Github Link: </strong> {this.props.githubLink}</p>
          <p><strong>Bio: </strong> {this.props.bio}</p>
        </div>
      );
  }
}

export default StudentInfo;
