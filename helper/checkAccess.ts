export async function checkAccess() {
  try {
    const response = await fetch("/api/users/verify", {
      method: "GET",
    });
    const user = await response.json();

    if (user.status === 502) {
      throw new Error("Sign up failed");
    }
    console.log("ready to push");
    return user;
  } catch (error) {
    console.error("Error:", error);
  }
}
