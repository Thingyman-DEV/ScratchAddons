export default async function ({ addon, global, console }) {
var more = document.querySelector("div.box-header > p");
more.insertAdjacentHTML('afterbegin', '<a href="https://scratch.mit.edu/messages/ajax/friends-activity/">See More</a>');
}
