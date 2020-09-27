export default async function ({ addon, global, console }) {
var link = document.querySelector("p.box-header");
console.log(link);
link.insertAdjacentHTML('afterbegin', '<a href="https://scratch.mit.edu/messages/ajax/friends-activity/">See More</a>');
}
