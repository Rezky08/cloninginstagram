import React from "react";

class DefaultContainer extends React.Component {
  render() {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-8/12 py-4 px-3 sm:px-4 sm:py-5">
          {this.props?.children}
        </div>
      </div>
    );
  }
}

export default DefaultContainer;
