import { Eye, Globe2, Target, Users } from "lucide-react";

export function AboutPage() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Hero */}
        <div className="hero-gradient rounded-2xl text-white p-10 mb-12 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            About Africa Skills AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            We believe every African has the right to world-class education at a
            price they can afford.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground mb-2">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-sm">
              To provide high-quality, affordable skills education powered by AI
              to every learner across Africa — from Lagos to Nairobi, Accra to
              Addis Ababa.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
              <Eye className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-serif text-xl font-bold text-foreground mb-2">
              Our Vision
            </h2>
            <p className="text-muted-foreground text-sm">
              A continent where every young person can learn in-demand skills,
              earn professional certifications, and build a better career — from
              their smartphone.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Countries", value: "7", icon: Globe2 },
            { label: "Courses", value: "18+", icon: Target },
            { label: "Course Categories", value: "6", icon: Eye },
            { label: "Languages Supported", value: "English", icon: Users },
          ].map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="section-alt rounded-xl p-5 text-center border border-border"
            >
              <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-serif text-2xl font-bold text-foreground">
                {value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Why Africa */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Why Africa Needs This
          </h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              Africa has the world’s youngest and fastest-growing population. By
              2030, over 375 million young Africans will need jobs. The skills
              gap is one of the biggest challenges facing the continent.
            </p>
            <p>
              Traditional education is expensive and slow to adapt. Employers
              need workers with practical, up-to-date digital and technical
              skills. Africa Skills AI bridges this gap with affordable,
              AI-powered courses accessible from any smartphone.
            </p>
            <p>
              Our pricing is designed for each local economy — from as little as
              the equivalent of $1-3 per month, making quality education truly
              accessible.
            </p>
          </div>
        </div>

        {/* Future roadmap */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
            Platform Roadmap
          </h2>
          <div className="space-y-3">
            {[
              {
                phase: "Phase 1 (Now)",
                items: "Website, 18 courses, 7 countries, country pricing",
                status: "live",
              },
              {
                phase: "Phase 2",
                items: "User accounts, learning dashboards, progress tracking",
                status: "planned",
              },
              {
                phase: "Phase 3",
                items:
                  "AI tutor chat, AI-generated quizzes, career path engine",
                status: "planned",
              },
              {
                phase: "Phase 4",
                items: "Mobile payments (M-Pesa, Airtel Money), certificates",
                status: "planned",
              },
            ].map(({ phase, items, status }) => (
              <div
                key={phase}
                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <div
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0 mt-0.5 ${
                    status === "live"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {status === "live" ? "Live" : "Planned"}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {phase}
                  </p>
                  <p className="text-xs text-muted-foreground">{items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
