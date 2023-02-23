const names = ["Ben", "Alex", "Lynn", "Tyler"]
const mappedNames = names.map(
  name =>
    (console.log(name) as undefined) || {
      name,
      company: "uidotdev"
    }
)

const mappedNames_ = names.map(
  name => (
    console.log(name),
    {
      name,
      company: "uidotdev"
    }
  )
)
