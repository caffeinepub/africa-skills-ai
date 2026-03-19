import type React from "react";
import { createContext, useContext, useState } from "react";

export interface PricingPlan {
  name: string;
  localPrice: string;
  usdEquivalent: string;
  period: string;
  features: string[];
}

export interface CountryData {
  name: string;
  flag: string;
  currency: string;
  plans: PricingPlan[];
}

export const COUNTRIES: CountryData[] = [
  {
    name: "Nigeria",
    flag: "🇳🇬",
    currency: "NGN",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "₦3,500",
        usdEquivalent: "~$2.30",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "₦6,000",
        usdEquivalent: "~$4.00",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "₦15,000",
        usdEquivalent: "~$10.00",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    currency: "KES",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "KSh 350",
        usdEquivalent: "~$2.70",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "KSh 600",
        usdEquivalent: "~$4.60",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "KSh 1,500",
        usdEquivalent: "~$11.50",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
    currency: "GHS",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "GH₵35",
        usdEquivalent: "~$2.40",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "GH₵60",
        usdEquivalent: "~$4.10",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "GH₵150",
        usdEquivalent: "~$10.30",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    currency: "ETB",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "ETB 130",
        usdEquivalent: "~$2.30",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "ETB 225",
        usdEquivalent: "~$4.00",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "ETB 560",
        usdEquivalent: "~$10.00",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    currency: "TZS",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "TSh 5,500",
        usdEquivalent: "~$2.10",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "TSh 9,500",
        usdEquivalent: "~$3.70",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "TSh 24,000",
        usdEquivalent: "~$9.30",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Uganda",
    flag: "🇺🇬",
    currency: "UGX",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "USh 8,500",
        usdEquivalent: "~$2.30",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "USh 14,500",
        usdEquivalent: "~$3.90",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "USh 36,000",
        usdEquivalent: "~$9.70",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    currency: "RWF",
    plans: [
      {
        name: "Basic Learning Plan",
        localPrice: "RWF 3,000",
        usdEquivalent: "~$2.10",
        period: "/month",
        features: [
          "Unlimited course access",
          "Practice quizzes",
          "Learning dashboard",
        ],
      },
      {
        name: "AI Tutor Plan",
        localPrice: "RWF 5,200",
        usdEquivalent: "~$3.70",
        period: "/month",
        features: [
          "Everything in Basic",
          "AI tutor support",
          "Personalized learning paths",
        ],
      },
      {
        name: "Professional Certificate",
        localPrice: "RWF 13,000",
        usdEquivalent: "~$9.30",
        period: "/course",
        features: [
          "Official certificate",
          "Skill assessments",
          "Career profile",
        ],
      },
    ],
  },
];

interface CountryContextType {
  selectedCountry: CountryData;
  setSelectedCountry: (c: CountryData) => void;
}

const CountryContext = createContext<CountryContextType>({
  selectedCountry: COUNTRIES[0],
  setSelectedCountry: () => {},
});

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(
    COUNTRIES[0],
  );
  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}
