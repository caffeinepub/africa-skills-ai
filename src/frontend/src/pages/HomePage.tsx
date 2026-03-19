import { CourseCard } from "@/components/CourseCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COUNTRIES, useCountry } from "@/context/CountryContext";
import { CATEGORIES, COURSES } from "@/data/courses";
import {
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle,
  ClipboardList,
  Download,
  Library,
  MessageSquare,
  Share2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export function HomePage() {
  const { selectedCountry, setSelectedCountry } = useCountry();
  const availableCourses = COURSES.filter((c) => c.isAvailable).slice(0, 8);
  const upcomingCourses = COURSES.filter((c) => !c.isAvailable).slice(0, 6);
  const plans = selectedCountry.plans;

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-white/20 text-white border-0 mb-4 hover:bg-white/20">
            Phase 1 • Now Enrolling
          </Badge>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            AI Powered Skills University for Africa
          </h1>
          <p className="text-white/80 text-lg mb-2 max-w-xl mx-auto">
            Learn practical job skills with personalised learning paths,
            affordable subscriptions, and professional certifications.
          </p>
          <p className="text-white/60 text-sm mb-8">
            Courses starting from local pricing equivalent to{" "}
            <strong className="text-white">~$1–3 per month</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              data-ocid="hero.primary_button"
              asChild
            >
              <Link to="/courses">Start Learning</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
              data-ocid="hero.secondary_button"
              asChild
            >
              <Link to="/courses">Browse Courses</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10"
              data-ocid="hero.country_button"
              asChild
            >
              <Link to="/pricing">Choose Your Country</Link>
            </Button>
          </div>
          {/* SVG Illustration */}
          <div className="flex justify-center">
            <svg
              role="img"
              aria-labelledby="edu-illustration-title"
              width="280"
              height="160"
              viewBox="0 0 280 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title id="edu-illustration-title">Education illustration</title>
              <rect
                x="40"
                y="80"
                width="200"
                height="60"
                rx="8"
                fill="white"
                fillOpacity="0.1"
              />
              <rect
                x="60"
                y="60"
                width="160"
                height="80"
                rx="8"
                fill="white"
                fillOpacity="0.15"
              />
              <rect
                x="80"
                y="50"
                width="120"
                height="90"
                rx="8"
                fill="white"
                fillOpacity="0.2"
              />
              <path
                d="M140 20 L160 50 L140 45 L120 50 Z"
                fill="white"
                fillOpacity="0.8"
              />
              <rect
                x="95"
                y="65"
                width="90"
                height="8"
                rx="4"
                fill="white"
                fillOpacity="0.5"
              />
              <rect
                x="95"
                y="80"
                width="70"
                height="6"
                rx="3"
                fill="white"
                fillOpacity="0.35"
              />
              <rect
                x="95"
                y="93"
                width="80"
                height="6"
                rx="3"
                fill="white"
                fillOpacity="0.35"
              />
              <circle cx="50" cy="30" r="12" fill="white" fillOpacity="0.3" />
              <circle cx="230" cy="40" r="8" fill="white" fillOpacity="0.25" />
              <circle cx="220" cy="120" r="6" fill="white" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 px-4 section-alt" id="countries">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Choose Your Country
            </h2>
            <p className="text-muted-foreground text-sm">
              Pricing is shown in your local currency
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {COUNTRIES.map((country, i) => (
              <button
                type="button"
                key={country.name}
                data-ocid={`country.item.${i + 1}`}
                onClick={() => setSelectedCountry(country)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 transition-all cursor-pointer ${
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
          {selectedCountry && (
            <p className="text-center mt-4 text-sm text-muted-foreground">
              Showing prices for{" "}
              <strong>
                {selectedCountry.flag} {selectedCountry.name}
              </strong>{" "}
              —{" "}
              <span className="text-primary font-semibold">
                {selectedCountry.plans[0].localPrice}
                {selectedCountry.plans[0].period} (
                {selectedCountry.plans[0].usdEquivalent})
              </span>{" "}
              to start
            </p>
          )}
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Course Categories
            </h2>
            <p className="text-muted-foreground text-sm">
              Practical skills for real career growth
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CATEGORIES.map((cat) => (
              <Link key={cat.slug} to={`/courses/${cat.slug}`}>
                <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-card transition-all cursor-pointer">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 section-alt">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Available Courses
            </h2>
            <p className="text-muted-foreground text-sm">
              Start learning today — 18 courses available now
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i + 1} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/courses">View All 18 Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Coming Soon
            </h2>
            <p className="text-muted-foreground text-sm">
              More courses launching soon
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {upcomingCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 section-alt" id="pricing">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Affordable Pricing
            </h2>
            <p className="text-muted-foreground text-sm">
              Prices for {selectedCountry.flag} {selectedCountry.name}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                data-ocid={`pricing.plan.card.${i + 1}`}
                className={`rounded-2xl p-6 border-2 flex flex-col ${
                  i === 1
                    ? "border-primary bg-primary text-white shadow-lg scale-105"
                    : "border-border bg-card"
                }`}
              >
                {i === 1 && (
                  <Badge className="bg-white/20 text-white border-0 w-fit mb-3 text-xs">
                    Most Popular
                  </Badge>
                )}
                <h3
                  className={`font-semibold text-sm mb-1 ${i === 1 ? "text-white" : "text-foreground"}`}
                >
                  {plan.name}
                </h3>
                <div
                  className={`text-2xl font-bold mb-1 font-serif ${i === 1 ? "text-white" : "text-primary"}`}
                >
                  {plan.localPrice}
                </div>
                <div
                  className={`text-xs mb-4 ${i === 1 ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {plan.usdEquivalent} {plan.period}
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-xs ${i === 1 ? "text-white/90" : "text-muted-foreground"}`}
                    >
                      <CheckCircle
                        className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${i === 1 ? "text-white" : "text-secondary"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-5 w-full ${
                    i === 1 ? "bg-white text-primary hover:bg-white/90" : ""
                  }`}
                  variant={i === 1 ? "default" : "outline"}
                  asChild
                >
                  <Link to="/pricing">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-muted-foreground">
            <Link to="/pricing" className="text-primary hover:underline">
              View pricing for all countries →
            </Link>
          </p>
        </div>
      </section>

      {/* AI Learning System */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Smart Learning Features
            </h2>
            <p className="text-muted-foreground text-sm">
              Smarter education built for African learners
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: MessageSquare,
                title: "Instant Feedback",
                desc: "Get instant explanations and feedback on exercises, available anytime you study.",
              },
              {
                icon: BrainCircuit,
                title: "AI Course Generator",
                desc: "Courses are dynamically updated with fresh material so your skills stay relevant.",
              },
              {
                icon: ClipboardList,
                title: "AI Practice Tests",
                desc: "Automatically generated quizzes test your understanding and reinforce what you learn.",
              },
              {
                icon: TrendingUp,
                title: "AI Career Path",
                desc: "The platform recommends the best courses based on your career goals and progress.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-card rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/learning">Learn More About Smart Learning</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 px-4 section-alt">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Professional Certifications
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Earn employer-recognised digital certificates that open doors to
                better opportunities.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Download, text: "Downloadable certificate PDF" },
                  { icon: Share2, text: "Shareable certificate link" },
                  { icon: ShieldCheck, text: "Employer-verifiable credential" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-secondary" />
                    </div>
                    {text}
                  </li>
                ))}
              </ul>
              <Button className="mt-6" asChild>
                <Link to="/certificates">View Certificates</Link>
              </Button>
            </div>
            {/* Certificate preview */}
            <div className="bg-white border-4 border-primary/20 rounded-2xl p-8 shadow-card relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary rounded-t-xl" />
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                  Certificate of Completion
                </p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Web Development Fundamentals
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This certifies successful completion of the course
                </p>
                <div className="w-24 h-0.5 bg-primary/30 mx-auto mb-4" />
                <p className="text-xs font-bold text-primary">
                  Africa Skills AI
                </p>
                <p className="text-xs text-muted-foreground">
                  AI Powered Skills University for Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Concept */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Your Learning Dashboard
            </h2>
            <p className="text-muted-foreground text-sm">
              Everything you need in one place
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
            {/* Mock dashboard header */}
            <div className="bg-foreground/95 px-5 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-white/50 text-xs">
                Africa Skills AI — Student Dashboard
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-border">
              {[
                { icon: BarChart3, label: "Progress", val: "68%" },
                { icon: Library, label: "Courses", val: "4 Active" },
                { icon: ClipboardList, label: "Quizzes", val: "12 Done" },
                { icon: Award, label: "Certs", val: "2 Earned" },
                { icon: MessageSquare, label: "AI Chat", val: "Online" },
              ].map(({ icon: Icon, label, val }) => (
                <div
                  key={label}
                  className="p-5 flex flex-col items-center gap-1"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{label}</span>
                  <span className="text-sm font-bold text-foreground">
                    {val}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-5">
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">
                    Web Development Fundamentals
                  </span>
                  <span className="text-primary">68%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium">Python Programming Basics</span>
                  <span className="text-secondary">30%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
