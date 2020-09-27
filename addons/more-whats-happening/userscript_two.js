export default async function ({ addon, global, console }) {
var top = document.getElementById('activity-feed');
top.insertAdjacentHTML('afterbegin', '<h1>What's Happening<h1>');
top.insertAdjacentHTML('beforebegin', '<a href:"https://scratch.mit.edu/">Go back to Scratch</a>');
}
