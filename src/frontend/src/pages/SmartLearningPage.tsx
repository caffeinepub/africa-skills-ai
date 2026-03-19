import {
  BookOpen,
  BrainCircuit,
  CheckCircle,
  ClipboardList,
  MessageCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

export function SmartLearningPage() {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Your Personalised Learning Journey
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Africa Skills AI uses smart technology to personalise your learning
            path, test your knowledge, and guide your career — all designed for
            your smartphone.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              icon: ClipboardList,
              title: "Adaptive Practice Tests",
              color: "bg-blue-50 text-blue-700",
              description:
                "After every lesson, you get automatically generated quizzes that test your understanding. Questions adapt to your performance so you always practice what you need most.",
              points: [
                "Generated after every lesson",
                "Adapts difficulty to your level",
                "Instant feedback on answers",
                "Tracks weak areas for revision",
              ],
            },
            {
              icon: BrainCircuit,
              title: "Smart Learning Paths",
              color: "bg-purple-50 text-purple-700",
              description:
                "Our platform maps out the best sequence of courses for your career goal. You always know what to learn next and why it matters for your future.",
              points: [
                "Personalised course sequence",
                "Step-by-step career roadmaps",
                "Matches skills to job market demand",
                "Updates as you complete courses",
              ],
            },
            {
              icon: MessageCircle,
              title: "Instant Feedback System",
              color: "bg-orange-50 text-orange-700",
              description:
                "Get immediate feedback on exercises and assessments. Detailed explanations help you understand exactly where you went wrong and how to improve.",
              points: [
                "Explanations for every answer",
                "Available in plain, simple language",
                "Relevant examples from African contexts",
                "Available 24/7 while you study",
              ],
            },
            {
              icon: TrendingUp,
              title: "Career Path Planner",
              color: "bg-green-50 text-green-700",
              description:
                "Tell the platform your career goal and it recommends the best courses, in the right order, to help you reach your goal as quickly as possible.",
              points: [
                "Personalised course recommendations",
                "Industry-aligned skill maps",
                "African job market insights",
                "Progress milestones and goals",
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
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
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
                desc: "Follow a smart course path",
              },
              {
                icon: Sparkles,
                step: "3",
                label: "Practice",
                desc: "Take adaptive quizzes and tests",
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
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-3">
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
