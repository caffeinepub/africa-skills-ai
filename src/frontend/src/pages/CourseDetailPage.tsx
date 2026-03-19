import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORIES, COURSES } from "@/data/courses";
import { ArrowLeft, CheckCircle, Clock, Star, Users } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const levelColor: Record<string, string> = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-blue-100 text-blue-800",
  Advanced: "bg-purple-100 text-purple-800",
};

export function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find((c) => c.id === Number(id));
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="py-20 text-center">
        <h2 className="font-serif text-2xl font-bold text-foreground">
          Course not found
        </h2>
        <Button asChild className="mt-4">
          <Link to="/courses">Browse Courses</Link>
        </Button>
      </div>
    );
  }

  const category = CATEGORIES.find((c) => c.slug === course.categorySlug);

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link
            to="/courses"
            className="hover:text-foreground"
            data-ocid="course.back_link"
          >
            All Courses
          </Link>
          <span>/</span>
          <Link
            to={`/courses/${course.categorySlug}`}
            className="hover:text-foreground"
          >
            {category?.name}
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">
            {course.title}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-2xl">{category?.icon}</span>
                <span className="text-sm font-semibold text-muted-foreground">
                  {course.category}
                </span>
                <Badge
                  className={`text-xs px-2 py-0.5 border-0 ${levelColor[course.level]}`}
                >
                  {course.level}
                </Badge>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {course.title}
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 bg-muted rounded-xl">
              <div className="flex items-center gap-1.5 text-sm text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>
                  <strong>{course.durationWeeks} weeks</strong>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>
                  <strong>Self-paced</strong> learning
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-foreground">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>
                  <strong>Certificate</strong> on completion
                </span>
              </div>
            </div>

            {/* What you'll learn */}
            {course.outcomes.length > 0 && (
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  What You Will Learn
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Course curriculum */}
            {course.modules.length > 0 && (
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Course Curriculum
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.modules.length} modules •{" "}
                  {course.modules.reduce((acc, m) => acc + m.topics.length, 0)}{" "}
                  lessons
                </p>
                <div className="border border-border rounded-xl overflow-hidden">
                  {course.modules.map((mod, i) => (
                    <div
                      key={mod.title}
                      className="border-b border-border last:border-0"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenModule(openModule === i ? null : i)
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                        data-ocid={`course.module.toggle.${i + 1}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-sm text-foreground">
                            {mod.title}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-xs ml-2">
                          {mod.topics.length} lessons
                        </span>
                      </button>
                      {openModule === i && (
                        <div className="bg-muted/30 px-4 pb-3">
                          <ul className="space-y-2 ml-10">
                            {mod.topics.map((topic) => (
                              <li
                                key={topic}
                                className="flex items-center gap-2 text-sm text-foreground py-1"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-card border-2 border-primary/20 rounded-2xl p-6 shadow-card">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary">
                  From ~${course.price_usd}
                  <span className="text-base font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Includes all course material + certificate
                </p>
              </div>
              <Button
                className="w-full mb-3 text-base py-5"
                data-ocid="course.enroll_button"
                asChild
              >
                <Link to="/pricing">Enrol Now</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/pricing">View Pricing Plans</Link>
              </Button>
              <div className="mt-5 space-y-2">
                {[
                  `${course.durationWeeks}-week programme`,
                  "Study on mobile or desktop",
                  "Self-paced — learn anytime",
                  "Certificate of completion",
                  "Lifetime access to material",
                ].map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs text-foreground"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border">
                <Link
                  to={`/courses/${course.categorySlug}`}
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Back to {category?.name} courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
