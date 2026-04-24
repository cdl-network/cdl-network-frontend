import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGAPageTracking } from "./hooks/useGAPageTracking";
import Index from "./pages/Index";
import Drivers from "./pages/Drivers";
import Carriers from "./pages/Carriers";
import Partners from "./pages/Partners";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const GAPageTracker = () => {
  useGAPageTracking();
  return null;
};

//
// ✅ NEW THANK YOU PAGE COMPONENT (WITH META LEAD EVENT)
//
const ThankYou = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "120px",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#132a46" }}>
        Thank you. Your application has been received.
      </h1>

      <p style={{ marginTop: "16px", fontSize: "18px", color: "#6b7280" }}>
        Our team will contact you shortly.
      </p>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GAPageTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/carriers" element={<Carriers />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* ✅ ADD THANK YOU ROUTE HERE */}
          <Route path="/thank-you" element={<ThankYou />} />

          {/* KEEP THIS LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
