import { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface IconBase {
  icon: ReactElement;
  has_notification?: boolean;
  notification_count?: number;
  icon_large?: boolean;
}

export default function IconBase({
  icon,
  has_notification,
  notification_count,
  icon_large,
}: IconBase): ReactElement {
  const count_display = notification_count! > 9 ? "9+" : notification_count;
  return (
    <div
      className={`relative ${
        icon_large ? "p-0.5" : "p-1.5"
      }  rounded-full active:bg-gray-900/75 active:text-white `}
    >
      {has_notification && (
        <span className="absolute w-4 h-4 rounded-full bg-red-600/75 text-white text-xs font-semibold  p-2.5 flex items-center justify-center -right-2  -top-2">
          {count_display}
        </span>
      )}
      <span className={`${icon_large ? "text-3xl  " : "text-lg md:text-xl"}`}>
        {icon}
      </span>
    </div>
  );
}
