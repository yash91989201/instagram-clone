import { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: JSX.Element;
}

export default function RootLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <main className="">{children}</main>
    </>
  );
}
