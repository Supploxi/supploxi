import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoBar from '../components/LogoBar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Supploxi — Supply Chain Management for US Importers</title>
        <meta name="description" content="Track shipments automatically, calculate Section 301 tariffs, and manage Chinese suppliers in one platform. Built for US e-commerce sellers." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Supploxi — Supply Chain Management for US Importers" />
        <meta property="og:description" content="Track shipments automatically, calculate Section 301 tariffs, and manage Chinese suppliers in one platform. Built for US e-commerce sellers." />
        <meta property="og:image" content="https://supploxi.com/og-image.png" />
        <meta property="og:url" content="https://supploxi.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Supploxi — Supply Chain Management for US Importers" />
        <meta name="twitter:description" content="Track shipments automatically, calculate Section 301 tariffs, and manage Chinese suppliers in one platform." />
      </Head>

      <Navbar />
      <Hero />
      <LogoBar />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
