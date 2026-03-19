import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COUNTRIES, useCountry } from "@/context/CountryContext";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingPage() {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const plans = selectedCountry.plans;

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Country-Based Pricing
          </h1>
          <p className="text-muted-foreground">
            Affordable plans priced for your local economy
          </p>
        </div>

        {/* Country selector */}
        <div className="mb-10">
          <h2 className="font-semibold text-sm text-foreground mb-3 text-center">
            Select Your Country
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {COUNTRIES.map((country, i) => (
              <button
                key={country.name}
                type="button"
                data-ocid={`pricing.country.item.${i + 1}`}
                onClick={() => setSelectedCountry(country)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all ${
                  selectedCountry.name === country.name
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-xs font-medium text-center leading-tight">
                  {country.name}
                </span>
                {selectedCountry.name === country.name && (
                  <CheckCircle className="w-3.5 h-3.5 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              data-ocid={`pricing.plan.card.${i + 1}`}
              className={`rounded-2xl p-6 border-2 flex flex-col ${
                i === 1
                  ? "border-primary bg-primary text-white shadow-lg"
                  : "border-border bg-card"
              }`}
            >
              {i === 1 && (
                <Badge className="bg-white/20 text-white border-0 w-fit mb-3 text-xs hover:bg-white/20">
                  Most Popular
                </Badge>
              )}
              <h3
                className={`font-semibold mb-1 ${i === 1 ? "text-white" : "text-foreground"}`}
              >
                {plan.name}
              </h3>
              <div
                className={`text-3xl font-bold mb-1 font-serif ${i === 1 ? "text-white" : "text-primary"}`}
              >
                {plan.localPrice}
              </div>
              <div
                className={`text-sm mb-5 ${i === 1 ? "text-white/70" : "text-muted-foreground"}`}
              >
                {plan.usdEquivalent} {plan.period}
              </div>
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-2 text-sm ${i === 1 ? "text-white/90" : "text-muted-foreground"}`}
                  >
                    <CheckCircle
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 1 ? "text-white" : "text-secondary"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-6 w-full ${
                  i === 1 ? "bg-white text-primary hover:bg-white/90" : ""
                }`}
                variant={i === 1 ? "default" : "outline"}
                asChild
              >
                <Link to="/courses">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* All countries table */}
        <div className="mt-14">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            All Countries — Plan Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 font-semibold text-muted-foreground">
                    Country
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-muted-foreground">
                    Basic Plan
                  </th>
                  <th className="text-left py-3 pr-4 font-semibold text-muted-foreground">
                    AI Tutor Plan
                  </th>
                  <th className="text-left py-3 font-semibold text-muted-foreground">
                    Certificate
                  </th>
                </tr>
              </thead>
              <tbody>
                {COUNTRIES.map((c) => (
                  <tr
                    key={c.name}
                    className="border-b border-border/50 hover:bg-muted/30"
                  >
                    <td className="py-3 pr-4">
                      {c.flag} {c.name}
                    </td>
                    <td className="py-3 pr-4 font-medium">
                      {c.plans[0].localPrice}{" "}
                      <span className="text-muted-foreground text-xs">
                        {c.plans[0].usdEquivalent}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-medium">
                      {c.plans[1].localPrice}{" "}
                      <span className="text-muted-foreground text-xs">
                        {c.plans[1].usdEquivalent}
                      </span>
                    </td>
                    <td className="py-3 font-medium">
                      {c.plans[2].localPrice}{" "}
                      <span className="text-muted-foreground text-xs">
                        {c.plans[2].usdEquivalent}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
