import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Head from "next/head";
import Home from "../src/components/Home";
import ImageGalary from "../src/components/ImageGalary";
import Layout from "../src/layout/Layout";
import News from "../src/components/News";
import Newsletter from "../src/components/Newsletter";
import Partners from "../src/components/Partners";
import Process from "../src/components/Process";
import Service from "../src/components/Service";
import Skills from "../src/components/Skills";
import Testimonial from "../src/components/Testimonial";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return (
    <Layout dark>
      <Head>
        <title>Shaurav Das</title>
        {/* Meta description */}
        <meta
          name="description"
          content="I am Shaurav Das. I am keyboardist based in Dhaka, Bangladesh and I am very passionate and dedicated to my work."
        />

        {/* Meta keywords */}
        <meta
          name="keywords"
          content="Shaurav Das, shaurav das, shauravdas, shaurav das, shaurav, Shaurav, shauravdas.com, shaurav musician, shaurav bangladesh, shaurav khulna, shaurav dhaka, shaurav bd, shaurav keyboardist, shaurav singer, shaurav actor, best keyboardist in bangladesh, best keyboardist shaurav das, shaurav das official, shaurav das music, shaurav das official website, shourav das, shourav das Actor, shaurav das song, das shaurav,  best keyboardist in bangladesh shaurav das, best keyboardist in bangladesh shaurav, top 5 keyboardist in bangladesh, bangladesh keyboardist shaurav, reshmi & mati shaurav das, shaurav, shaurav website, shaurav last song, shaurav all song, shaurav bangla song, shaurav das official, shaurav das 2024, shaurav das songs, shaurav das website, shaurav das photos, shaurav das, shaurav das blog, shaurav das, shaurav, shaurav das web, shaurav das 2023, shaurav das 2025, shaurav das portfolio, shaurav das keyboardist, shaurav keyboardist, top 5 keyboardist in bangladesh, top 10 keyboardist in bangladesh, shaurav das india, shaurav das uk, shaurav das usa, shaurav das online, shaurav das music, shaurav das, shaurav, shaurav das social, shaurav das youtube, shaurav das location, shaurav das song, shaurav das music in bangladesh"
        />

        {/* Other meta tags */}
        {/* Example: Open Graph tags for social media */}
        <meta property="og:title" content="Shaurav Das" />
        <meta
          property="og:description"
          content="I'm keyboardist based in Bangladesh, and I'm very passionate and dedicated to my work."
        />
        <meta
          property="og:image"
          content="https://www.shauravdas.com/img/photos/Shauravdas-%20(21).jpg"
        />
        <meta
          property="og:url"
          content="https://www.facebook.com/shaurav.das"
        />
        <meta property="og:type" content="website" />

        {/* Example: Twitter card tags */}
        <meta name="twitter:card" content="shaurav das" />
        <meta name="twitter:title" content="Shaurav Das" />
        <meta
          name="twitter:description"
          content="I'm keyboardist based in Bangladesh, and I'm very passionate and dedicated to my work."
        />
        <meta
          name="twitter:image"
          content="https://www.shauravdas.com/img/photos/Shauravdas-%20(12).jpg"
        />
      </Head>
      <Home dark />
      {/* HERO */}
      {/* PROCESS */}
      {/* <Process dark /> */}
      {/* /PROCESS */}
      {/* ABOUT */}
      <About dark />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      <Skills dark />
      {/* /SKILLS */}
      {/* SERVICES */}
      <Service dark />
      {/* /SERVICES */}
      {/* TESTIMONIALS */}
      <ImageGalary />
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* PARTNERS */}
      <Partners dark />
      {/* /PARTNERS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
    </Layout>
  );
};
export default Index;
