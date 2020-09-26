export default async function ({ addon, global, console }) {
  console.log("Hello, " + addon.auth.username);
}
