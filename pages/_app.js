import Footer from "../components/layout/Footer";
import "../styles/globals.css";
import Nav from "../components/layout/Nav";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = ["/Signin", "/Signup"];
  const noFooter = ["/", "/Signin", "/Signup"];

  return (
    <ThemeProvider defaultTheme="system">
      {/* no navabar on both signup and signin page... */}
      {noNav.includes(asPath) ? null : <Nav />}
      <Component {...pageProps} />
      {/* no footer on both signin and signup page... */}
      {noFooter.includes(asPath) ? null : <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
