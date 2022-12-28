import { useRouter } from "next/router";
// import types
import type { AppProps } from "next/app";
// custom components
import RootLayout from "components/layouts";
// css file imoprt
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();

  if (route.pathname === "/") return <Component {...pageProps} />;

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
