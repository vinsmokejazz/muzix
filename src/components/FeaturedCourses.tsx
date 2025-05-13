import courseData from "../data/music_courses.json"
import { GlowingEffect } from "./ui/glowing-effect"

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
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className=" text-sm md:text-md  mb-2 font-medium
        bg-clip-text bg-gradient-to-b from-slate-50
        to-yellow-500  text-transparent
        ">FEATURED COURSES</h2>

          <p className="text-3xl sm:text-4xl leading-8 
         font-extrabold tracking-tight ">Learn with Best</p>
        </div>
      </div>


      <div className="mt-10">
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center ">

             

              <div className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                   <GlowingEffect
                blur={0}
                borderWidth={3}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01} />
                  
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}