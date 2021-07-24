import React from "react";

class Avatar extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="avatar">
        <div className="bg-black rounded-full h-6 w-6 flex items-center justify-center">
          <div className="border-2 border-white bg-white avatar-container rounded-full overflow-hidden h-5 w-5">
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
