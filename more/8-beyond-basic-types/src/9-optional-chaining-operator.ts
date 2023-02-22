export {}

type Product = {
  name: string
  info: ProductInfo | undefined
}

type ProductInfo = {
  level: string
  noOfStudents: number | undefined
}

const courses: Product[] = [
  {
    name: "JS",
    info: {
      level: "Beginner",
      noOfStudents: 2000,
    },
  },
  {
    name: "TS",
    info: {
      level: "Beginner",
      noOfStudents: undefined,
    },
  },
  {
    name: "Tailwind CSS",
    info: undefined,
  },
]

console.log(courses.map(course => course.info.noOfStudents))

const courseInfo = courses.map(course => {
  if (course.info) return course.info.noOfStudents
  return undefined
})

const courseInfo_ = courses.map(course => (course.info ? course.info.noOfStudents : undefined))

console.log(courses.map(course => course.info?.noOfStudents))
