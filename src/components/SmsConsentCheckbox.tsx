import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SmsConsentCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  showError?: boolean;
}

const SmsConsentCheckbox = ({ checked, onCheckedChange, showError = false }: SmsConsentCheckboxProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Checkbox
          id="sms-consent"
          checked={checked}
          onCheckedChange={(checked) => onCheckedChange(checked === true)}
          className="mt-1"
        />
        <Label
          htmlFor="sms-consent"
          className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
        >
          By checking this box, you agree to receive conversational text messages related to account
          notification and customer care from CDL Network LLC. You may reply STOP to opt-out at any time.
          Reply HELP to{" "}
          <a href="tel:+18723274090" className="text-accent underline hover:text-accent/80">
            1 (872) 327-4090
          </a>{" "}
          for assistance. Message and data rates may apply. Message frequency will vary. This is our{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-accent/80"
          >
            Privacy Policy
          </a>{" "}
          &{" "}
          <a
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-accent/80"
          >
            Terms and Conditions
          </a>
          .
        </Label>
      </div>
      {showError && !checked && (
        <p className="text-xs text-destructive ml-7">Please agree to continue.</p>
      )}
    </div>
  );
};

export default SmsConsentCheckbox;
