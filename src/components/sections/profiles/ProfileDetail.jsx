import React from "react";

class ProfileDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user ?? {},
    };
  }
  render() {
    return (
      <div
        className={
          "profile-detail text-left flex flex-col gap-0 text-sm sm:text-lg " +
          this.props?.styleName
        }
      >
        <span className="profile-detail--display-name font-semibold block">
          {this.state.user?.displayName}
        </span>
        <span className="profile-detail--business-type text-gray-400">
          {this.state.user?.businessType}
        </span>
        <p className="profile-detail--bio">
          {this.state.user?.bio?.split("\n").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </p>
        <a href={this.state.user?.link} className="font-bold">
          {this.state.user?.link}
        </a>
      </div>
    );
  }
}

export default ProfileDetail;
