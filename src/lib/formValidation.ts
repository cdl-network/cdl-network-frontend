import { z } from "zod";

// Phone validation - US style phone numbers
const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

// Driver application schema
export const driverApplicationSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(phoneRegex, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  cdl_class: z.enum(["has_cdl", "training", "no_cdl"], {
    errorMap: () => ({ message: "Please select your CDL status" }),
  }),
  years_exp: z.number().min(0).max(50).optional(),
  truck_types: z.array(z.string()).optional(),
  notes: z.string().max(2000, "Notes must be less than 2000 characters").optional(),
});

// Carrier inquiry schema
export const carrierInquirySchema = z.object({
  contact_name: z
    .string()
    .trim()
    .min(1, "Contact name is required")
    .max(100, "Name must be less than 100 characters"),
  company_name: z
    .string()
    .trim()
    .min(1, "Company name is required")
    .max(200, "Company name must be less than 200 characters"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(phoneRegex, "Please enter a valid phone number"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  fleet_size: z.string().min(1, "Please select your fleet size"),
  lane_type: z.string().max(200, "Lane type must be less than 200 characters").optional(),
  hiring_needs: z
    .string()
    .trim()
    .min(1, "Please describe your hiring needs")
    .max(2000, "Hiring needs must be less than 2000 characters"),
});

// Contact form schema (Index and Partners pages)
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254, "Email must be less than 254 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

// Type exports
export type DriverApplicationData = z.infer<typeof driverApplicationSchema>;
export type CarrierInquiryData = z.infer<typeof carrierInquirySchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Validation result types
export type ValidationSuccess<T> = { success: true; data: T };
export type ValidationError = { success: false; errors: Record<string, string> };
export type ValidationResult<T> = ValidationSuccess<T> | ValidationError;

// Validation helper function
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data };
  }
  
  const errors: Record<string, string> = {};
  result.error.errors.forEach((err) => {
    const path = err.path.join(".");
    if (path && !errors[path]) {
      errors[path] = err.message;
    }
  });
  
  return { success: false, errors };
}
