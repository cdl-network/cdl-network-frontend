import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="CDL Network – Terms of Use"
        description="Read CDL Network's terms of use. Understand the conditions for using our CDL-A driver and carrier matching services."
        canonicalUrl="https://www.cdlnetworkllc.com/terms-of-use"
      />
      <Navigation />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Please read this page carefully before using our website.
          </p>

          <div className="prose prose-slate max-w-none space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: November 2025</p>

            <p>
              Welcome to CDL Network, operated by CDL Network LLC ("we," "our," "us"). By accessing or using this
              website, you agree to these Terms of Use. If you do not agree, please stop using the website.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Purpose</h2>
              <p>
                This website helps carriers, brokers, and CDL-A drivers connect for recruiting and hiring purposes. Use
                of this site is voluntary and intended only for lawful business activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Misrepresent your identity or submit false information.</li>
                <li>Access, copy, or use data from the site for unauthorized purposes.</li>
                <li>Interfere with site performance or security.</li>
                <li>Use bots, scrapers, or automated tools to extract data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Ownership and intellectual property</h2>
              <p>
                All content, design, and code are the property of CDL Network LLC or its licensors. You may not copy,
                modify, or reuse materials without written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. No guarantees</h2>
              <p>
                This website is provided for informational purposes only. CDL Network LLC does not guarantee employment,
                placement, or business results through its use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Text Message Consent</h2>
              <p>No mobile opt-in or text message consent will be shared with third parties or affiliates</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Limitation of liability</h2>
              <p>
                We make reasonable efforts to keep the site accurate and available, but we do not warrant that it will
                always be error-free. CDL Network LLC is not responsible for damages or losses resulting from your use
                or inability to use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Third-party links</h2>
              <p>
                Our site may include links to external websites. We are not responsible for their content or privacy
                practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Modifications</h2>
              <p>
                We may update these Terms at any time. The "Last updated" date reflects the latest version. Continued
                use of our website means you accept any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Contact</h2>
              <p>For questions about these Terms, contact info@cdlnetworkllc.com.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
