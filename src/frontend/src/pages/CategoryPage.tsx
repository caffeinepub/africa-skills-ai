import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { CATEGORIES, COURSES } from "@/data/courses";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find((c) => c.slug === slug);
  const availableCourses = COURSES.filter(
    (c) => c.isAvailable && c.categorySlug === slug,
  );
  const upcomingCourses = COURSES.filter(
    (c) => !c.isAvailable && c.categorySlug === slug,
  );

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h2 className="font-serif text-2xl font-bold">Category not found</h2>
        <Button asChild className="mt-4">
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> All Courses
        </Link>
        <div className="flex items-center gap-4 mb-8">
          <div className="text-5xl">{category.icon}</div>
          <div>
            <h1 className="font-serif text-3xl font-bold text-foreground">
              {category.name}
            </h1>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
        </div>

        <h2 className="font-semibold text-lg mb-4 text-foreground">
          Available Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {availableCourses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i + 1} />
          ))}
        </div>

        {upcomingCourses.length > 0 && (
          <div>
            <h2 className="font-semibold text-lg mb-4 text-foreground">
              Coming Soon
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingCourses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i + 1} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
