const shapes = {
  circle: {
    shape: ["x", "y", "rx"] as const,
    color: "red"
  },
  square: {
    shape: ["x", "y", "h", "w"] as const,
    color: "green"
  }
}

type Shape = keyof typeof shapes

function resolveShape<T extends Shape>(shape: T): typeof shapes[T] {
  return shapes.square as any
}

const res = resolveShape("square")
//    ^?

const res_ = resolveShape("circle")
//    ^?
