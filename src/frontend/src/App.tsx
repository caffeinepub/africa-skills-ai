import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { CountryProvider } from "@/context/CountryContext";
import { AboutPage } from "@/pages/AboutPage";
import { CategoryPage } from "@/pages/CategoryPage";
import { CertificatesPage } from "@/pages/CertificatesPage";
import { ContactPage } from "@/pages/ContactPage";
import { CourseDetailPage } from "@/pages/CourseDetailPage";
import { CoursesPage } from "@/pages/CoursesPage";
import { HomePage } from "@/pages/HomePage";
import { PricingPage } from "@/pages/PricingPage";
import { SmartLearningPage } from "@/pages/SmartLearningPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/course/:id" element={<CourseDetailPage />} />
              <Route path="/courses/:slug" element={<CategoryPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/learning" element={<SmartLearningPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </CountryProvider>
  );
}
