import React from "react";
import { ReactComponent as InstagramLogo } from "@/assets/icons/instagram-text.svg";
import { ReactComponent as HomeIcon } from "@/assets/icons/instagram/Home.svg";
import { ReactComponent as MessengerIcon } from "@/assets/icons/instagram/Messenger.svg";
import { ReactComponent as ExploreIcon } from "@/assets/icons/instagram/Explore.svg";
import { ReactComponent as NotificationIcon } from "@/assets/icons/instagram/Notification.svg";
import { ReactComponent as SearchIcon } from "@/assets/icons/instagram/Search.svg";
import UserPhoto from "@/assets/images/User-Icon-PNG.png";
import IgInput from "@/components/inputs/IgInput";
import Avatar from "@/components/Avatar";

class Header extends React.Component {
  render() {
    return (
      <div className="ig-header-container px-4 pt-4 pb-3 bg-white  border-b-2 border-gray-300 flex justify-center w-screen">
        <div className="flex justify-between items-center gap-4 sm:gap-7 w-full sm:w-full md:w-4/6">
          <span className="ig-header-brand text-3xl">
            <InstagramLogo width="7rem" height="2rem" />
          </span>
          <div className="hidden sm:hidden md:block">
            <IgInput
              className="h-8 w-60 sm:hidden md:block"
              iconLeft={<SearchIcon />}
              iconSize="0.7rem"
              placeholder="Search"
            ></IgInput>
          </div>
          <div className="ig-header-menu flex gap-4 sm:gap-7 items-center">
            <span className="ig-header-item">
              <HomeIcon className="invert" width="1.5rem" height="1.5rem" />
            </span>
            <span className="ig-header-item">
              <MessengerIcon width="1.5rem" height="1.5rem" />
            </span>
            <span className="ig-header-item">
              <ExploreIcon width="1.5rem" height="1.5rem" />
            </span>
            <span className="ig-header-item">
              <NotificationIcon width="1.5rem" height="1.5rem" />
            </span>
            <span className="ig-header-item">
              <Avatar src={UserPhoto} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
