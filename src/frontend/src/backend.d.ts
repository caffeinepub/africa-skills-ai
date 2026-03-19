import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CountryPricing {
    country: string;
    plans: Array<PricingPlan>;
}
export interface PricingPlan {
    localPrice: string;
    features: Array<string>;
    usdEquivalent: string;
    period: string;
    name: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}
export interface Course {
    id: bigint;
    title: string;
    isAvailable: boolean;
    description: string;
    category: string;
    durationWeeks: bigint;
}
export interface backendInterface {
    addCourse(title: string, category: string, durationWeeks: bigint, description: string, isAvailable: boolean): Promise<void>;
    getAllCategories(): Promise<Array<{
        icon: string;
        name: string;
        description: string;
    }>>;
    getAllCountryPricing(): Promise<Array<CountryPricing>>;
    getAvailableCourses(): Promise<Array<Course>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getCountryPricing(country: string): Promise<CountryPricing>;
    getCourse(id: bigint): Promise<Course>;
    getCoursesByCategory(category: string): Promise<Array<Course>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
