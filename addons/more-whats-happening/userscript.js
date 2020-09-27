export default async function ({ addon, global, console }) {
var more = document.querySelector("p.box-header");
console.log(more);
more.insertAdjacentHTML('afterbegin', '<a href="https://scratch.mit.edu/messages/ajax/friends-activity/">See More</a>');
}
