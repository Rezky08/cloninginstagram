import React from "react";
import { ReactComponent as SettingIcon } from "@/assets/icons/instagram/Setting.svg";

class ProfileSetting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user ?? {},
    };
  }
  render() {
    return (
      <div className="profile-setting flex flex-col sm:flex-row items-center gap-4 ">
        <div className="w-4/5 sm:w-auto flex items-center">
          <span className="text-3xl font-light overflow-ellipsis overflow-hidden">
            {this.state.user?.username}
          </span>
          <SettingIcon className="inline sm:hidden" />
        </div>
        <div className="w-full sm:w-auto order-last sm:order-none">
          <button className="border block w-full sm:w-auto p-1 sm:p-2 rounded-md font-semibold ">
            Edit Profile
          </button>
        </div>
        <div className="sm:w-auto hidden sm:inline">
          <SettingIcon />
        </div>
      </div>
      // <div className="profile-setting grid sm:grid-flow-col auto-cols-auto sm:auto-cols-max items-center gap-4">
      //   <div className="col-span-10 sm:col-auto">
      //     <span className="text-3xl font-light overflow-ellipsis overflow-hidden">
      //       {this.state.user?.username}
      //     </span>
      //   </div>
      //   <div className="col-span-12 sm:col-auto order-last sm:order-none">
      //     <button className="border block w-full sm:w-auto p-1 sm:p-2 rounded-md font-semibold ">
      //       Edit Profile
      //     </button>
      //   </div>
      //   <div className="col-span-1 sm:col-auto">
      //     <SettingIcon />
      //   </div>
      // </div>
    );
  }
}

export default ProfileSetting;
