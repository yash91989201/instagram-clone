import { ReactElement } from "react";

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
  const count_display =
    notification_count! > 9 ? "9+" : notification_count?.toString();
  return (
    <div
      className={`relative ${
        icon_large ? "p-0.5" : "p-1.5"
      }  rounded-full cursor-pointer`}
    >
      {has_notification && (
        <span className="absolute w-4 h-4 rounded-full bg-red-600/75 text-white text-xs font-semibold  p-2.5 flex items-center justify-center -right-2  -top-2">
          {count_display}
        </span>
      )}
      <span className={`${icon_large ? "text-3xl" : "text-xl"}`}>{icon}</span>
    </div>
  );
}
