import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="CDL Network – Privacy Policy"
        description="Learn how CDL Network protects your personal information. Our privacy policy explains data collection, usage, and your rights."
        canonicalUrl="https://www.cdlnetworkllc.com/privacy-policy"
      />
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Please read this page carefully before using our website.
          </p>

          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: November 2025</p>

            <p>
              CDL Network LLC ("we," "our," "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding it.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact details you provide (name, phone, email, company).</li>
                <li>Usage data such as pages visited and time spent.</li>
                <li>Technical data such as IP address, browser type, and device info.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Analytics and cookies</h2>
              <p>
                We use Google Analytics 4 (GA4) and Microsoft Clarity to analyze site performance and improve usability. These tools use cookies and tracking scripts to collect anonymized data like clicks, scrolls, and session heatmaps. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How we use information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to inquiries and requests.</li>
                <li>To improve site experience and detect technical issues.</li>
                <li>To ensure proper operation and prevent abuse.</li>
              </ul>
              <p className="mt-3">
                We do not sell or rent personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data retention</h2>
              <p>
                We keep personal data only as long as needed for its original purpose or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Security</h2>
              <p>
                We use reasonable measures to protect your data, though no system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your rights</h2>
              <p>
                You may request access, correction, or deletion of your personal data by emailing info@cdlnetworkllc.com. We will reply within a reasonable time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Updates to this policy</h2>
              <p>
                We may revise this Privacy Policy occasionally. The updated version will be posted here with a new "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact us</h2>
              <p>
                CDL Network LLC<br />
                Email: info@cdlnetworkllc.com
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
