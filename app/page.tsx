import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DisclaimerBanner from "./components/DisclaimerBanner";
import PracticeAreas from "./components/PracticeAreas";
import KnowledgeHub from "./components/KnowledgeHub";
import FAQ from "./components/FAQ";
import CaseLaw from "./components/CaseLaw";
import Glossary from "./components/Glossary";
import Advocates from "./components/Advocates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <DisclaimerBanner />
        {/* About anchor so /about nav link also works as hash */}
        <div id="about" style={{ scrollMarginTop: 80 }} />
        <PracticeAreas />
        <KnowledgeHub />
        <FAQ />
        <CaseLaw />
        <Glossary />
        <Advocates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
