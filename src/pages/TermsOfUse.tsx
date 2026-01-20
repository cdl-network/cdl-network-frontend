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

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. SMS Terms and Conditions</h2>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">1. SMS Consent Communication</h3>
                  <p>
                    The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with 
                    third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">2. Types of SMS Communications</h3>
                  <p className="mb-2">
                    If you have consented to receive text messages from CDL Network LLC, you may receive messages related 
                    to the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-2">
                    <li>Account notification</li>
                    <li>Customer care</li>
                  </ul>
                  <p className="text-sm text-muted-foreground italic">
                    Example: "Hello, this is a friendly reminder of your documents pending CDL-A and Medical card. 
                    You can reply STOP to opt out of SMS messaging from CDL Network LLC at any time." For assistance, 
                    text HELP. Message frequency may vary. Message and data rates may apply.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">3. Message Frequency</h3>
                  <p>
                    Message frequency may vary depending on the type of communication. For example, you may receive 
                    up to 3-5 SMS messages per week related to your potential employments.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">4. Potential Fees for SMS Messaging</h3>
                  <p>
                    Please note that standard message and data rates may apply, depending on your carrier's pricing plan. 
                    These fees may vary if the message is sent domestically or internationally.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">5. Opt-In Method</h3>
                  <p>
                    You may opt-in to receive SMS messages from CDL Network LLC in the following ways:
                  </p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>
                      By submitting an online form:{" "}
                      <a 
                        href="https://www.cdlnetworkllc.com/drivers" 
                        className="text-accent underline hover:text-accent/80"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.cdlnetworkllc.com/drivers
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">6. Opt-Out Method</h3>
                  <p>
                    You can opt out of receiving SMS messages at any time. To do so, simply reply "STOP" to any SMS 
                    message you receive. Alternatively, you can contact us directly to request removal from our messaging list.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">7. Help</h3>
                  <p className="mb-2">
                    If you are experiencing any issues, you can reply with the keyword HELP. Or, you can get help 
                    directly from us at{" "}
                    <a 
                      href="https://www.cdlnetworkllc.com/" 
                      className="text-accent underline hover:text-accent/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.cdlnetworkllc.com/
                    </a>{" "}
                    or call us at{" "}
                    <a href="tel:+18723274090" className="text-accent underline hover:text-accent/80">
                      +1 (872) 327-4090
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Additional Options: If you do not wish to receive SMS messages, you can choose not to check the 
                    SMS consent box on our forms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">8. Standard Messaging Disclosures</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Message and data rates may apply.</li>
                    <li>You can opt-out at any time by texting "STOP."</li>
                    <li>
                      For assistance, text "HELP" or visit our{" "}
                      <a href="/privacy" className="text-accent underline hover:text-accent/80">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="/terms" className="text-accent underline hover:text-accent/80">
                        Terms and Conditions
                      </a>{" "}
                      pages.
                    </li>
                    <li>Message frequency may vary.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
