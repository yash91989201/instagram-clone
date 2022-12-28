import React from "react";

interface Props {
  children: JSX.Element;
}

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
