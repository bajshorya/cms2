import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;

  const showNavbar =
    !pathname.startsWith("/signin") && !pathname.startsWith("/signout");

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
