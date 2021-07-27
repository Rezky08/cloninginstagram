import React from "react";
import ProfilePicture from "./ProfilePicture";
import UserPhoto from "@/assets/images/User-Icon-PNG.png";
import ProfileSetting from "./ProfileSetting";
import ProfileDetail from "./ProfileDetail";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user ?? {
        photo: UserPhoto,
        username: "rezky.setiawan85",
        displayName: "Rezky Setiawan | Web Developer",
        businessType: "Personal Blog",
        bio: `🎓 Information Technology Students | 💻 Coding | 💙Sharing is Caring
            .
            Yang mau tanya atau coding bareng boleh :)
            .
            📍Pesanggrahan, Jakarta
            `,
        link: "ini.space/rezkysetiawan",
      },
    };
  }
  render() {
    return (
      <div className="profile">
        <div className="profile-container flex gap-5 justify-center">
          <div className="profile-summary w-full sm:w-11/12">
            <div className="grid grid-flow-col items-start gap-3 sm:gap-28">
              <div className="col-span-1">
                <ProfilePicture src={this.state.user?.photo} />
              </div>
              <div className="col-span-1 sm:col-auto">
                <ProfileSetting user={this.state.user} />
                <ProfileDetail
                  user={this.state.user}
                  styleName="hidden sm:block"
                />
              </div>
            </div>
            <ProfileDetail user={this.state.user} styleName="block sm:hidden" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
