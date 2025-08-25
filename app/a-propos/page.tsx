import AboutCompany from "@/components/aboutUs/About-company";
import AboutSince from "@/components/aboutUs/About-since";
import AboutStats from "@/components/aboutUs/AboutStats";
import Hero from "@/components/aboutUs/Hero";
import HistorySection from "@/components/aboutUs/HistorySection";
import Expertise from "@/components/aboutUs/Specification";


export const metadata = {
  title: "À Propos - Electricien Nice Expert | 15 ans d'Expérience",
  description: "Découvrez Electricien Nice Expert, entreprise familiale avec 15 ans d'expérience dans l'électricité à Nice. Électriciens certifiés et services professionnels.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <HistorySection />
      <AboutCompany />
      <AboutSince />
      <AboutStats />
      <Expertise />
    </div>
  );
}