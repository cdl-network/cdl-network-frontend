import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useEffect, useRef } from "react";

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  cdl_class: string;
  years_exp: number;
  truck_types: string[];
  notes: string;
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
    years_exp: 0,
    truck_types: [],
    notes: "",
  });

  // ---- META PIXEL QUIZ START TRACKING ----
  const quizStartedRef = useRef(false);

  useEffect(() => {
    // fire only when user moves from Step 1 → Step 2 (true quiz start)
    if (currentStep !== 1 && !quizStartedRef.current) {
      quizStartedRef.current = true;

      if (typeof fbq === "function") {
        fbq("trackCustom", "DriverQuizStart", {
          step: currentStep,
          cdl_class: formData.cdl_class || "",
        });
      }
    }
  }, [currentStep]);
  // ---- END META TRACKING ----

  const getTotalSteps = () => {
    if (formData.cdl_class === "has_cdl") return 4; // CDL question + truck type + years + contact
    if (formData.cdl_class === "training") return 3; // CDL question + message + contact
    if (formData.cdl_class === "no_cdl") return 3; // CDL question + textarea + contact
    return 1; // Just CDL question
  };

  const handleTruckTypeToggle = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      truck_types: prev.truck_types.includes(type)
        ? prev.truck_types.filter((t) => t !== type)
        : [...prev.truck_types, type],
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
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
        years_exp: formData.cdl_class === "has_cdl" ? formData.years_exp : 0,
        state: "",
        availability: "",
        preferred_region: "",
        truck_type_preference: formData.cdl_class === "has_cdl" ? formData.truck_types.join(", ") : "",
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
        // --- META LEAD EVENT ---
        if (typeof fbq === "function") {
          fbq("track", "Lead", {
            cdl_class: formData.cdl_class,
            years_exp: formData.years_exp,
            truck_types: formData.truck_types.join(", "),
          });
        }
        // -------------------------

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

  const totalSteps = getTotalSteps();
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* Progress Indicator */}
      {totalSteps > 1 && (
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
      )}

      {/* Step Content */}
      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm min-h-[400px]">
        {/* Step 1: CDL Status */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Do you have a valid CDL-A?</h2>
              <p className="text-sm text-muted-foreground">Select one option</p>
            </div>

            <div className="grid gap-3">
              {[
                { value: "has_cdl", label: "Yes" },
                { value: "training", label: "Still in training" },
                { value: "no_cdl", label: "No" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, cdl_class: option.value });
                    setTimeout(handleNext, 300);
                  }}
                  className={`p-5 rounded-xl border-2 transition-all text-left hover:border-accent/70 ${
                    formData.cdl_class === option.value
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-background text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 flex-shrink-0 rounded-full border-2 flex items-center justify-center ${
                        formData.cdl_class === option.value ? "border-accent bg-accent" : "border-muted-foreground"
                      }`}
                    >
                      {formData.cdl_class === option.value && (
                        <div className="w-2.5 h-2.5 flex-shrink-0 rounded-full bg-accent-foreground" />
                      )}
                    </div>
                    <span className="font-semibold text-base">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2A: Truck Type (has_cdl only) */}
        {currentStep === 2 && formData.cdl_class === "has_cdl" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Truck type preference?</h2>
              <p className="text-sm text-muted-foreground">Select all that apply</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { value: "Dry van", label: "Dry van" },
                { value: "Flat bed", label: "Flat bed" },
                { value: "Reefer", label: "Reefer" },
                { value: "Power only", label: "Power only" },
                { value: "Other", label: "Other" },
              ].map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => handleTruckTypeToggle(type.value)}
                  className={`p-4 rounded-xl border-2 transition-all text-center ${
                    formData.truck_types.includes(type.value)
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-background text-foreground hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div
                      className={`w-5 h-5 flex-shrink-0 rounded-md border-2 flex items-center justify-center ${
                        formData.truck_types.includes(type.value)
                          ? "border-accent bg-accent"
                          : "border-muted-foreground"
                      }`}
                    >
                      {formData.truck_types.includes(type.value) && (
                        <Check className="w-3 h-3 flex-shrink-0 text-accent-foreground" />
                      )}
                    </div>
                    <span className="font-semibold">{type.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2B: Training Message (training only) */}
        {currentStep === 2 && formData.cdl_class === "training" && (
          <div className="space-y-6 animate-fade-in flex items-center justify-center min-h-[300px]">
            <div className="text-center max-w-md space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <p className="text-lg text-foreground font-medium">
                We will be glad to work with you once you receive your CDL.
              </p>
            </div>
          </div>
        )}

        {/* Step 2C: Non-CDL Job Description (no_cdl only) */}
        {currentStep === 2 && formData.cdl_class === "no_cdl" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Tell us more</h2>
              <p className="text-sm text-muted-foreground">
                We work with non-CDL positions on an irregular basis. Please tell us more about the type of position you
                are looking for.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="job-description">What type of position are you looking for?</Label>
              <Textarea
                id="job-description"
                placeholder="e.g., warehouse work, dispatch, dock loading, logistics coordinator..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={6}
                className="resize-none"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Step 3A: Years of Experience (has_cdl only) */}
        {currentStep === 3 && formData.cdl_class === "has_cdl" && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Years of Experience</h2>
              <p className="text-sm text-muted-foreground">How long have you been driving?</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="100"
                placeholder="0"
                value={formData.years_exp || ""}
                onChange={(e) => setFormData({ ...formData, years_exp: parseInt(e.target.value) || 0 })}
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Final Step: Contact Info (all paths) */}
        {isLastStep && formData.cdl_class && (
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

            {/* Notes textarea - only for has_cdl path */}
            {formData.cdl_class === "has_cdl" && (
              <div className="space-y-2">
                <Label htmlFor="notes">Anything we should know? (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Examples: home weekly, SAP, team driver, specific lanes…"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                  className="resize-none"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons - Sticky on mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 sm:relative sm:border-0 sm:bg-transparent sm:p-0 sm:mt-6 z-50">
        <div className="max-w-2xl mx-auto flex gap-3">
          {currentStep > 1 && (
            <Button type="button" variant="outline" onClick={handleBack} className="flex-1 sm:flex-none">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          )}

          {!isLastStep ? (
            <Button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={currentStep === 1 && !formData.cdl_class}
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
