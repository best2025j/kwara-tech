import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import AuthContext, { AuthContextPovider } from "../service/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = ["/Signin", "/Signup"];
  // const noFooter = ["/", "/Signin", "/Signup"];
  const noFooter = ["/Signin", "/Signup"];

  return (
    <>
      {/* no navabar on both signup and signin page... */}
      {noNav.includes(asPath) ? null : <Navbar />}
      <Component {...pageProps} />
      {/* no footer on both signin and signup page... */}
      {noFooter.includes(asPath) ? null : <Footer />}
    </>
  );
}

export default MyApp;
