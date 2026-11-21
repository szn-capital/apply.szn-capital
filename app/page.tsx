import Hero from "./components/Hero";
import TeamSection from "./components/TeamSection";
import StudentResultsSection from "./components/StudentResultsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BookCallSection from "./components/BookCallSection";
import MinimalFooter from "./components/MinimalFooter";
import StickyApply from "./components/StickyApply";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero vimeoId="1200777428" />
      <TeamSection />
      <BookCallSection id="book-call" />
      <StudentResultsSection />
      <TestimonialsSection />
      <FAQSection />
      <BookCallSection />
      <MinimalFooter />
      <StickyApply />
    </main>
  );
}
