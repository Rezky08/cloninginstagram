import React from "react";

class Avatar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="avatar">
        <div className="avatar-container rounded-full overflow-hidden border-2 border-gray-500">
          <div className="avatar-container--inner rounded-full overflow-hidden border-2 h-5 w-5 text-center">
            {this.props.children ? (
              React.cloneElement(this.props.children, {
                className: "h-full w-full m-0",
              })
            ) : (
              <img src={this.props.src ?? null} alt="AvatarPhoto"></img>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
