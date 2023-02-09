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
import { S3_STATIC_ASSET_URL } from "config";

export default function Index(): React.ReactElement {
  return (
    <header className="shadow-md bg-slate-50">
      <div className="flex items-center justify-between max-w-5xl px-2 py-4 mx-auto">
        {/* logo wrapper */}
        <div>
          <h2 className="hidden text-lg font-medium md:block md:text-xl">
            Instagram
          </h2>
          <BsInstagram className="text-4xl md:hidden" />
        </div>
        <SearchBox />
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 md:space-x-4 ">
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
          <UserAvatar
            profile_src={`${S3_STATIC_ASSET_URL}/images/dummy_profile.jpg`}
            size="small"
          />
        </div>
      </div>
    </header>
  );
}
