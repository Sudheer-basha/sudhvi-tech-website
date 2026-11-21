import { z } from 'zod';

// ─── Contact Form Schema ────────────────────────────────────
export const USER_TYPES = [
  'Student',
  'Parent',
  'College Representative',
  'Other',
] as const;

export const CONTACT_SUBJECTS = [
  'Course Enquiry',
  'Academic Project Development',
  'College Partnership',
  'Internship Guidance',
  'Placement Preparation',
  'Other',
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name must not exceed 80 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  userType: z.enum(USER_TYPES, {
    errorMap: () => ({ message: 'Please identify whether you are a Student, Parent, or College Representative' }),
  }),
  subject: z.string().min(1, 'Please select an inquiry category'),
  programInterest: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1500, 'Message must not exceed 1500 characters'),
  botField: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// ─── Enrollment Step Schemas ────────────────────────────────
export const QUALIFICATIONS = [
  'B.Tech / B.E',
  'Degree / BCA / B.Sc',
  'MCA',
  'M.Tech / M.Sc',
  'Other Degree',
] as const;

export const YEARS_OF_STUDY = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  'Final Year',
  'Graduated / Immediate Placement',
] as const;

export const LEARNING_MODES = [
  'Hybrid (Online Lectures + Weekend Lab)',
  'Online Live Interactive Mentorship',
  'In-Person Campus Lab Session',
] as const;

export const BATCH_TIMINGS = [
  'Weekday Evening (7:00 PM – 9:00 PM)',
  'Weekday Morning (7:30 AM – 9:30 AM)',
  'Weekend Intensive (Saturday & Sunday)',
  'Flexible Self-Paced with Mentor Sync',
] as const;

export const PRIMARY_GOALS = [
  'Campus Placement Preparation & Job Readiness',
  'Final-Year Major Academic Project Completion',
  'Skill Transition into AI & Modern Tech Stacks',
  'Internship Preparation & Portfolio Building',
] as const;

export const PROJECT_SUPPORT_OPTIONS = [
  'Yes — Full Academic Major Project Guidance (Documentation + Viva)',
  'Yes — Live Industry Case Study Portfolio',
  'No — Course Learning Only',
] as const;

// Step 1: Personal & Academic Info
export const enrollStep1Schema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(80, 'Name must not exceed 80 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  city: z
    .string()
    .min(2, 'Please enter your current city of residence')
    .max(60, 'City name is too long'),
  qualification: z.enum(QUALIFICATIONS, {
    errorMap: () => ({ message: 'Please select your current academic qualification' }),
  }),
  college: z
    .string()
    .min(3, 'Please enter your college or university name')
    .max(120, 'College name is too long'),
  yearOfStudy: z.enum(YEARS_OF_STUDY, {
    errorMap: () => ({ message: 'Please select your year of study or graduation status' }),
  }),
});

// Step 2: Program Selection
export const enrollStep2Schema = z.object({
  course: z
    .string()
    .min(1, 'Please select an industry program'),
  learningMode: z.enum(LEARNING_MODES, {
    errorMap: () => ({ message: 'Please choose your preferred learning mode' }),
  }),
  batchTiming: z.enum(BATCH_TIMINGS, {
    errorMap: () => ({ message: 'Please select your preferred batch timing' }),
  }),
  primaryGoal: z.enum(PRIMARY_GOALS, {
    errorMap: () => ({ message: 'Please select your primary learning objective' }),
  }),
  projectSupport: z.enum(PROJECT_SUPPORT_OPTIONS, {
    errorMap: () => ({ message: 'Please indicate whether project mentorship is required' }),
  }),
});

// Step 3: Consent & Confirmation
export const enrollStep3Schema = z.object({
  referral: z.string().optional(),
  additionalNotes: z.string().max(500, 'Notes must not exceed 500 characters').optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: 'You must provide consent for SUDHVI TECH to contact you regarding this enrollment inquiry',
    }),
  }),
  botField: z.string().optional(),
});

export type EnrollStep1Data = z.infer<typeof enrollStep1Schema>;
export type EnrollStep2Data = z.infer<typeof enrollStep2Schema>;
export type EnrollStep3Data = z.infer<typeof enrollStep3Schema>;
export type EnrollFormData  = EnrollStep1Data & EnrollStep2Data & EnrollStep3Data;
