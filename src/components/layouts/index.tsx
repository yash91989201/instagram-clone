import { ReactElement } from "react";
import Header from "./Header";

interface Props {
  children: JSX.Element;
}

export default function RootLayout({ children }: Props): ReactElement {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  md:max-w-3xl xl:max-w-6xl mx-auto">
        {children}
      </main>
    </>
  );
}
