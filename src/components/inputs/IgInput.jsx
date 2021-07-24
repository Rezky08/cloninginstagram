import React from "react";

class IgInput extends React.Component {
  constructor(props) {
    super(props);
    const defaultIconSize = "1rem";
    this.state = {
      iconSize: {
        width: props.iconSize ?? defaultIconSize,
        height: props.iconSize ?? defaultIconSize,
      },
    };
  }

  render() {
    return (
      <div className="ig-input border border-2 rounded-sm relative flex items-baseline bg-gray-50 p-1 px-3 gap-2">
        {this.props.iconLeft
          ? React.cloneElement(this.props.iconLeft, {
              ...this.state.iconSize,
              className: "ig-input-icon bg-gray-50 fill-current stroke-current",
            })
          : null}
        <input
          type={this.props.type}
          className="h-full w-full bg-transparent focus:outline-none"
          placeholder={this.props.placeholder}
        />
        {this.props.iconRight
          ? React.cloneElement(this.props.iconRight, {
              ...this.state.iconSize,
              className: "ig-input-icon bg-gray-50 fill-current stroke-current",
            })
          : null}
      </div>
    );
  }
}
export default IgInput;
