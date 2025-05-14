import Link from "next/link"
import courseData from "../data/music_courses.json"
import { GlowingEffect } from "./ui/glowing-effect"
import { Button } from "./ui/moving-border"

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
    <section className="py-10 bg-gradient-to-b from-slate-950 to-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="animate-fade-in-up">
            <p className="text-sm font-semibold tracking-wide uppercase text-yellow-500 mb-4">
              Premium Learning
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-transparent bg-gradient-to-bl bg-clip-text from-white
             to-gray-400 sm:text-5xl">
              Featured Courses
            </h2>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Master your craft with our most popular courses
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course, index: number) => (
            <div
              key={course.id}
              className="group relative animate-card-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-800/70 border border-gray-700/30 group-hover:border-indigo-400/20">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-700 pt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className=" text-yellow-500 font-medium">
                        ${course.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        • {course.instructor}
                      </span>
                    </div>
                    <button className="text-violet-500 hover:text-violet-600 transition-colors text-sm font-medium">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
            <Link href={"/courses"}>
            <Button >View All courses</Button>
            </Link>
        </div>
    </section>
  )
}