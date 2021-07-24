import React from "react";

class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="profile-picture h-20 w-20 sm:h-40 sm:w-40 bg-gray-200 rounded-full">
        <div className="profile-picture-container rounded-full overflow-hidden w-full h-full">
          {this.props.children ? (
            React.cloneElement(this.props.children, {
              className: "h-full w-full m-0",
            })
          ) : (
            <img src={this.props.src ?? null} alt="ProfilePicture"></img>
          )}
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
