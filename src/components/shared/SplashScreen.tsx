import { S3_STATIC_ASSET_URL } from "config";
import Image from "next/image";

export default function SplashScreen(): React.ReactElement {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen">
      <Image
        src={`${S3_STATIC_ASSET_URL}/images/instagram_icon_outline.png`}
        alt="icon for instagram"
        width={64}
        height={64}
        className="absolute w-16 aspect-square top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={`${S3_STATIC_ASSET_URL}/images/from_meta.png`}
        alt="icon for instagram"
        width={80}
        height={40}
        className="absolute w-20 h-10 top-[95%] left-1/2 -translate-x-1/2 -translate-y-3/4"
      />
    </div>
  );
}
