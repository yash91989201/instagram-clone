import React from "react";
// custom components
import SearchBox from "components/shared/SearchBox";
import UserAvatar from "components/shared/UserAvatar";
import IconBase from "components/shared/IconBase";
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { S3_STATIC_ASSET_URL } from "config";

export default function Index(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 px-3 bg-white border-b shadow-md lg:px-0">
      <div className="flex items-center justify-between max-w-5xl py-4 mx-auto">
        {/* logo wrapper */}
        <div className="">
          <h2 className="hidden text-lg font-medium md:block md:text-xl">
            Instagram
          </h2>
          <IconBase
            icon={<BsInstagram className="block md:hidden" />}
            icon_large
          />
        </div>
        <SearchBox />
        <div className="flex items-center space-x-3 ">
          <div className="items-center hidden md:flex md:space-x-3">
            <IconBase icon={<AiFillHome />} />
            <IconBase
              icon={<FiSend />}
              has_notification
              notification_count={20}
            />
            <IconBase icon={<AiOutlinePlusCircle />} />
            <IconBase icon={<MdGroups />} />
            <IconBase icon={<AiOutlineHeart />} />
          </div>
          <div className="block md:hidden">
            <IconBase icon={<RxHamburgerMenu className="text-2xl" />} />
          </div>
          <UserAvatar
            profile_src={`${S3_STATIC_ASSET_URL}/images/dummy_profile.jpg`}
            size="small"
          />
        </div>
      </div>
    </header>
  );
}
