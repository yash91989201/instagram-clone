import { S3_STATIC_ASSET_URL } from "config";
import Image from "next/image";
export default function SignIn(): React.ReactElement {
  return (
    <div className="flex items-center justify-center h-screen border border-red-400 bg-zinc-50">
      {/* image */}
      <div className="relative w-[410px] h-[560px]">
        <Image
          src={`${S3_STATIC_ASSET_URL}/images/landing_phone_bg.png`}
          alt="landing phone bg"
          fill
        />
      </div>
      {/* sign in form */}
      <form className="flex flex-col space-y-4 border border-red-500">
        <div className="p-6 bg-white">
          <h3 className="my-3 text-3xl font-semibold text-center">Instagram</h3>
          <div className="flex flex-col w-16 border border-red-500">
            <input type="text" name="username" className="border bg-zinc-50" />
            <input
              type="password"
              name="password"
              className="border bg-zinc-50"
            />
          </div>
          <hr />
        </div>
        <div className="bg-white">
          <p>
            <span>Don&apos;t have an account?</span>
            <span>Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
}
