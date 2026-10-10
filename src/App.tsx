import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/features/hero/HeroSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { ToolkitSection } from '@/features/toolkit/ToolkitSection';
import { EducationSection } from '@/features/education/EducationSection';
import { ContactSection } from '@/features/contact/ContactSection';
import { Footer } from '@/components/layout/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-teal-900/10 selection:text-teal-950 relative">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Projects (Primer sección luego del hero) */}
        <ProjectsSection />

        {/* 3. Toolkit */}
        <ToolkitSection />

        {/* 5. Education */}
        <EducationSection />

        {/* 6. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
