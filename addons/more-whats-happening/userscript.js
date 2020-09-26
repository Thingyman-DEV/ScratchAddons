export default async function ({ addon, global, console }) {
  var header = document.createElement('h1');
header.textContent = "TTest!";
document.body.appendChild(header);
}
