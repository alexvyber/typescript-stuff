enum Courses {
  TS,
  JS,
}

function setCoursePrice(course: Courses) {
  switch (course) {
    case Courses.TS:
      return "$29.99"

    case Courses.JS:
      return "$25.99"

    default:
      courseWarning(course)
    // throw new Error(`Course ${course} has not been priced.`);
  }
}
console.log(setCoursePrice(Courses.TS))
console.log(setCoursePrice(Courses.JS))

function courseWarning(course: never): never {
  throw new Error(`Course ${course} has not been priced.`)
}
