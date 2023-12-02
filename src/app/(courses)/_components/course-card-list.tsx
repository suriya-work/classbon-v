import { CourseSummary } from "@/types/course-summary.interface"
import { CourseCard } from "./course-card";

export type CourseCardListProps = {
    courses: CourseSummary[];
}

export const CourseCardList: React.FC<CourseCardListProps> = ({ courses }: CourseCardListProps) => {
    return (
        <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-start gap-6 mt-10">
            {
                courses.map((course) => (
                    <CourseCard key={`course-${course.slug}`} {...course} />
                ))
            }

        </div>
    )
}