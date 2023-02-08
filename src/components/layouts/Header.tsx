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
import { FiSend } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
import { S3_STATIC_ASSET_URL } from "config";

export default function Index(): React.ReactElement {
  return (
    <header className=" bg-slate-50 shadow-md">
      <div className="px-2 py-4 max-w-5xl mx-auto  flex justify-between items-center">
        {/* logo wrapper */}
        <h2 className="font-medium text-lg md:text-xl">Instagram</h2>
        <SearchBox />
        <div className="flex items-center space-x-3">
          <div className="flex items-center  space-x-2 md:space-x-4 ">
            <IconBase>
              <AiFillHome />
            </IconBase>
            <IconBase has_notification notification_count={20}>
              <FiSend />
            </IconBase>
            <IconBase>
              <AiOutlinePlusCircle />
            </IconBase>
            <IconBase>
              <MdGroups />
            </IconBase>
            <IconBase>
              <AiOutlineHeart />
            </IconBase>
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
