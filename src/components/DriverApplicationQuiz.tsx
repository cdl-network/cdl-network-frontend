import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  cdl_class: string;
  state: string;
  years_exp: string;
  preferred_region: string;
  availability: string;
  truck_type_preference: string;
  notes: string;
  routes: string[];
}

const DriverApplicationQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone: "",
    email: "",
    cdl_class: "",
    state: "",
    years_exp: "",
    preferred_region: "",
    availability: "",
    truck_type_preference: "",
    notes: "",
    routes: [],
  });

  const totalSteps = 4;

  const handleRouteToggle = (route: string) => {
    setFormData((prev) => ({
      ...prev,
      routes: prev.routes.includes(route)
        ? prev.routes.filter((r) => r !== route)
        : [...prev.routes, route],
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const payload = {
        lead_type: "driver",
        full_name: formData.full_name,
        phone: formData.phone,
        email: formData.email,
        cdl_class: formData.cdl_class,
        state: formData.state,
        years_exp: formData.years_exp ? parseInt(formData.years_exp) : 0,
        availability: formData.availability,
        preferred_region: formData.preferred_region,
        truck_type_preference: formData.truck_type_preference,
        notes: formData.notes,
      };

      const response = await fetch("https://cdlnetworkllc.vercel.app/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Server returned non-200 response");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-accent-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Thanks! A recruiter will reach out today.</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => (window.location.href = "tel:+13125558899")}
            >
              Tap to Call Recruiter
            </Button>
            <Button size="lg" variant="outline" onClick={() => (window.location.href = "/")}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-accent">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-accent transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm min-h-[400px]">
        {/* Step 1: Job Preferences */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Which routes are you open to?</h2>
              <p className="text-sm text-muted-foreground">Select all that apply</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["Local", "Regional", "OTR", "Not sure yet"].map((route) => (
                <button
                  key={route}
                  type="button"
                  onClick={() => handleRouteToggle(route)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    formData.routes.includes(route)
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-background text-foreground hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
                        formData.routes.includes(route) ? "border-accent bg-accent" : "border-muted-foreground"
                      }`}
                    >
                      {formData.routes.includes(route) && <Check className="w-3 h-3 text-accent-foreground" />}
                    </div>
                    <span className="font-semibold">{route}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">Preferred region?</Label>
              <Input
                id="region"
                placeholder="e.g., West Coast, Midwest, Southeast, Nationwide"
                value={formData.preferred_region}
                onChange={(e) => setFormData({ ...formData, preferred_region: e.target.value })}
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="truckType">Truck type preference?</Label>
              <Input
                id="truckType"
                placeholder="e.g., Dry Van, Flatbed, Reefer, Tanker, No preference"
                value={formData.truck_type_preference}
                onChange={(e) => setFormData({ ...formData, truck_type_preference: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Step 2: Driver Profile */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Driver Profile</h2>
              <p className="text-sm text-muted-foreground">Tell us about your experience</p>
            </div>

            <div className="space-y-2">
              <Label>CDL-A License?</Label>
              <RadioGroup value={formData.cdl_class} onValueChange={(value) => setFormData({ ...formData, cdl_class: value })}>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="cdl-yes" />
                    <Label htmlFor="cdl-yes" className="font-normal cursor-pointer">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="cdl-no" />
                    <Label htmlFor="cdl-no" className="font-normal cursor-pointer">
                      No
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                placeholder="0"
                value={formData.years_exp}
                onChange={(e) => setFormData({ ...formData, years_exp: e.target.value })}
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                placeholder="e.g., TX, CA, FL"
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Availability</Label>
              <RadioGroup value={formData.availability} onValueChange={(value) => setFormData({ ...formData, availability: value })}>
                <div className="space-y-2">
                  {[
                    { value: "immediate", label: "Immediate" },
                    { value: "2_weeks", label: "2 Weeks" },
                    { value: "1_month", label: "1 Month" },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`avail-${option.value}`} />
                      <Label htmlFor={`avail-${option.value}`} className="font-normal cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {/* Step 3: Contact Info */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Contact Info</h2>
              <p className="text-sm text-muted-foreground">How can we reach you?</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                autoFocus
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 312 555 8899"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
        )}

        {/* Step 4: Extra Details */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Anything else?</h2>
              <p className="text-sm text-muted-foreground">Optional — but helps us match you better</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Anything we should know?</Label>
              <Textarea
                id="notes"
                placeholder="Examples: home weekly, SAP, team driver, specific lanes…"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={6}
                className="resize-none"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons - Sticky on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 sm:relative sm:border-0 sm:bg-transparent sm:p-0 sm:mt-6">
        <div className="max-w-2xl mx-auto flex gap-3">
          {currentStep > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              className="flex-1 sm:flex-none"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </div>

      {/* Spacer for sticky buttons on mobile */}
      <div className="h-20 sm:hidden" />
    </div>
  );
};

export default DriverApplicationQuiz;
