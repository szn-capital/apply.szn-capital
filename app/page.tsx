import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import StudentResultsSection from "./components/StudentResultsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import MinimalFooter from "./components/MinimalFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero vimeoId="1200777428" />
      <TeamSection />
      <StudentResultsSection />
      <TestimonialsSection />
      <FAQSection />
      <MinimalFooter />
    </main>
  );
}
