export {}

const Obj = {
  asdf: "asdf",
  aasdf: 12
} as const

;(
  Object.entries(Obj) as Array<
    [key: keyof typeof Obj, value: (typeof Obj)[keyof typeof Obj]]
  >
).map(([key, value]) => {})

Object.entries(Obj).map(([key, value]) => {})

const friends = ["Ben", null, "Alex", undefined, "Lynn", undefined, 1] as const

const filteredFriends = friends.filter(Boolean)
filteredFriends // ["Ben", "Alex", "Lynn"]

const filteredFriendsAsserted = friends.filter(
  (item): item is NonNullable<(typeof friends)[number]> => Boolean(item)
)

filteredFriendsAsserted
type Type = (typeof filteredFriendsAsserted)[number]
//   ^?
const str: Type = "Alex"
