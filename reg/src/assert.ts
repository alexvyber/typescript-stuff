type NormalUser = {
  role: "admin" | "editor" | "guest"
}

type AdminUser = {
  permessions: {
    one: true
  }
} & NormalUser

function assertUserIsAdmin(
  user: NormalUser | AdminUser
): asserts user is AdminUser {
  if (user.role !== "admin") {
    throw new Error("Not an admin user")
  }
}
