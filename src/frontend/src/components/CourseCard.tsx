import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Course } from "@/data/courses";
import { BookOpen, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-100 text-blue-800",
  Business: "bg-purple-100 text-purple-800",
  "Digital Marketing": "bg-orange-100 text-orange-800",
  "Skilled Trades": "bg-yellow-100 text-yellow-800",
  Agriculture: "bg-green-100 text-green-800",
  Healthcare: "bg-red-100 text-red-800",
};

const levelBadge: Record<string, string> = {
  Beginner: "bg-emerald-50 text-emerald-700",
  Intermediate: "bg-sky-50 text-sky-700",
  Advanced: "bg-violet-50 text-violet-700",
};

interface CourseCardProps {
  course: Course;
  index?: number;
}

export function CourseCard({ course, index = 1 }: CourseCardProps) {
  if (!course.isAvailable) {
    return (
      <div
        data-ocid={`course.card.item.${index}`}
        className="bg-muted/40 rounded-xl p-5 border border-border relative"
      >
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="text-xs">
            Coming Soon
          </Badge>
        </div>
        <div
          className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3 ${categoryColors[course.category] || "bg-gray-100 text-gray-700"}`}
        >
          {course.category}
        </div>
        <h3 className="font-semibold text-muted-foreground text-sm mb-1">
          {course.title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
          <Clock className="w-3.5 h-3.5" />
          {course.durationWeeks} weeks
        </div>
      </div>
    );
  }

  return (
    <div
      data-ocid={`course.card.item.${index}`}
      className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-md hover:border-primary/30 transition-all flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[course.category] || "bg-gray-100 text-gray-700"}`}
        >
          {course.category}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${levelBadge[course.level] || "bg-gray-50 text-gray-600"}`}
        >
          {course.level}
        </span>
      </div>
      <h3 className="font-semibold text-foreground text-sm mb-2 flex-1">
        {course.title}
      </h3>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
        {course.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {course.durationWeeks} weeks
        </div>
        <Link to={`/course/${course.id}`}>
          <Button size="sm" variant="outline" className="text-xs h-7 px-3">
            <BookOpen className="w-3 h-3 mr-1" />
            View Course
          </Button>
        </Link>
      </div>
    </div>
  );
}
