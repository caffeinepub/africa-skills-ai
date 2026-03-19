import {
  BookOpen,
  Bot,
  BrainCircuit,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export function AILearningPage() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            AI-Powered Learning System
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A smarter way to learn. Our AI tutors, adaptive courses, and career
            tools work together to give you the best education experience on
            your smartphone.
          </p>
        </div>

        {/* Main features */}
        <div className="space-y-8">
          {[
            {
              icon: Bot,
              title: "AI Tutor",
              color: "bg-blue-50 text-blue-600",
              description:
                "Your personal AI tutor is available 24/7. Ask any question about your course material and get clear, instant answers in plain language. No waiting for a teacher.",
              points: [
                "Available 24/7, any time you study",
                "Answers in your local language context",
                "Explains concepts step by step",
                "Gives examples relevant to Africa",
              ],
            },
            {
              icon: BrainCircuit,
              title: "AI Course Generator",
              color: "bg-purple-50 text-purple-600",
              description:
                "Our platform constantly updates course material using AI to ensure you are learning the most relevant, up-to-date skills that employers actually need.",
              points: [
                "Content stays current with industry changes",
                "New examples added regularly",
                "Lessons optimised for mobile learning",
                "Covers African market context",
              ],
            },
            {
              icon: ClipboardList,
              title: "AI Practice Tests",
              color: "bg-orange-50 text-orange-600",
              description:
                "AI-generated quizzes test your knowledge after every lesson. Questions are tailored to your performance, so you practice what you need most.",
              points: [
                "Auto-generated after every lesson",
                "Adapts difficulty to your level",
                "Instant feedback on answers",
                "Tracks weak areas for revision",
              ],
            },
            {
              icon: TrendingUp,
              title: "AI Career Path",
              color: "bg-green-50 text-green-600",
              description:
                "Tell the platform your career goal and it will recommend the best courses, in the right order, to help you reach your goal as fast as possible.",
              points: [
                "Personalised course recommendations",
                "Step-by-step career roadmaps",
                "Matches skills to job market demand",
                "Updates as you complete courses",
              ],
            },
          ].map(({ icon: Icon, title, color, description, points }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                    {title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    {description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-14 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                step: "1",
                label: "Set Your Goal",
                desc: "Tell us your career objective",
              },
              {
                icon: BookOpen,
                step: "2",
                label: "Learn",
                desc: "Follow AI-curated course path",
              },
              {
                icon: MessageCircle,
                step: "3",
                label: "Ask Questions",
                desc: "AI tutor helps you understand",
              },
              {
                icon: ClipboardList,
                step: "4",
                label: "Get Certified",
                desc: "Earn your professional certificate",
              },
            ].map(({ icon: Icon, step, label, desc }) => (
              <div
                key={step}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mb-3">
                  {step}
                </div>
                <Icon className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-semibold text-sm text-foreground">
                  {label}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
