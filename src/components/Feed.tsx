import { ReactElement } from "react";
import Posts from "./sections/Posts";
// custom components
import Stories from "./sections/Stories";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

export default function Feed(): ReactElement {
  return (
    <>
      <section className="col-span-2 ">
        <Stories />
        <Posts />
      </section>
      <section>
        <MiniProfile />
        <Suggestions />
      </section>
    </>
  );
}
