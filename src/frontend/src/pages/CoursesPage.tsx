import { CourseCard } from "@/components/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CATEGORIES, COURSES } from "@/data/courses";
import { useState } from "react";

export function CoursesPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses =
    activeTab === "all"
      ? COURSES.filter((c) => c.isAvailable)
      : COURSES.filter((c) => c.isAvailable && c.categorySlug === activeTab);

  const upcomingCourses =
    activeTab === "all"
      ? COURSES.filter((c) => !c.isAvailable)
      : COURSES.filter((c) => !c.isAvailable && c.categorySlug === activeTab);

  return (
    <div className="py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            All Courses
          </h1>
          <p className="text-muted-foreground">
            18 courses available • Practical skills for career growth
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap h-auto gap-1 mb-6 bg-muted/50 p-1">
            <TabsTrigger value="all" data-ocid="courses.tab.1">
              All
            </TabsTrigger>
            {CATEGORIES.map((cat, i) => (
              <TabsTrigger
                key={cat.slug}
                value={cat.slug}
                data-ocid={`courses.tab.${i + 2}`}
              >
                {cat.icon} {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {filteredCourses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i + 1} />
              ))}
            </div>

            {upcomingCourses.length > 0 && (
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Coming Soon
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {upcomingCourses.map((course, i) => (
                    <CourseCard key={course.id} course={course} index={i + 1} />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
