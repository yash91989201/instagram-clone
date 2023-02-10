import { ReactElement } from "react";
import Image from "next/image";
import IconBase from "./IconBase";
import { RxAvatar } from "react-icons/rx";

interface UserAvatarSizes {
  size?: "small" | "medium" | "large";
}

interface UserAvatarProps extends UserAvatarSizes {
  profile_src?: string;
}

const userAvatarStyling = ({ size }: UserAvatarSizes) => {
  switch (size) {
    case "small": {
      return "w-8";
    }
    case "medium": {
      return "w-10";
    }
    case "large": {
      return "w-14";
    }
    default: {
      return "w-8 md:w-10 lg:w-12 xl:w-[calc(48px + 0.5vw)]";
    }
  }
};

export default function UserAvatar({
  profile_src,
  size,
}: UserAvatarProps): ReactElement {
  if (profile_src)
    return (
      <div
        className={`  ${userAvatarStyling({
          size,
        })} 
        rounded-full overflow-hidden  aspect-square relative  `}
      >
        {profile_src && <Image src={profile_src} alt="" fill />}
      </div>
    );
  return <IconBase icon={<RxAvatar />} icon_large />;
}
