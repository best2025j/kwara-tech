import Head from "next/head";
import Cards from "../components/UI/Cards";
import Content from "../components/UI/Content";
import Footer from "../components/layout/Footer";
import Hero from "../components/UI/Hero";
import Nav from "../components/layout/Nav";
import Members from "../components/UI/Members";
import Courses from "../components/Courses/Courses";
import Staffs from "../components/UI/Staffs";
import Consulting from "../components/UI/Consulting";
import ProgramsLayout from "../components/Programs/ProgramsLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>kwaratech Academy</title>
        <meta name="description" content="Kwara tech academy" />
        <link rel="icon" href="/kwaraTech.jpg" />
      </Head>
      <Nav />
      <Hero />
      <Cards />
      <Content />
      <Members />
      <Courses />
      <Staffs />
      <Consulting />
      <ProgramsLayout />
      <Footer />
    </>
  );
}
