// function getCookie(cname) {
// 	var name = cname + "=";
// 	var ca = document.cookie.split(";");
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == " ") {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
// }

// const buttonColors = {
// btnLike: "blue",
// 	btnHeart: "red",
// 	btnWow: "yellow",
// 	btnSad: "brown",
// 	btnAngry: "red",
// };

// // function buttonClick(button) {
// // 	const buttons = document.querySelectorAll(".btn");

// // 	// Set all buttons to grey
// // 	buttons.forEach((btn) => (btn.style.color = "black"));

// // 	// Set the clicked button to its specific color
// // 	button.style.color = buttonColors[button.id];
// // }
// function buttonClick(button) {
// 	const buttons = document.querySelectorAll(".btn");

// 	// Set all buttons to grey
// 	buttons.forEach((btn) => (btn.style.color = "black"));

// 	// Set the clicked button color
// 	button.style.color = buttonColors[button.id];

// 	// Store user reaction in a cookie (expires in 30 days)
// 	document.cookie = `userReaction-${button.getAttribute("data-id")}=${
// 		button.id
// 	}; expires=Fri, 16 Dec 2024 23:59:59 GMT`;
// }

// // Update reaction on page load
// window.onload = function () {
// 	updateReactionFromCookie();
// };

// function updateReactionFromCookie() {
// 	const btn = document.getElementById("btnLike");
// 	// console.log();
// 	const cookieValue = getCookie(`userReaction-${btn.getAttribute("data-id")}`);

// 	// if (document.cookie.match(/userReaction=(.*)/)) {
// 	// console.log(document.cookie);

// 	// const cookieMatch = document.cookie.match(
// 	// 	/userReaction-${btn.getAttribute("data-id")}=(.*)/
// 	// );
// 	// }
// 	console.log(cookieValue);

// 	if (cookieValue) {
// 		const button = document.getElementById(cookieValue);
// 		if (button) {
// 			button.classList.add("active");
// 			button.style.color = buttonColors[button.id];
// 		}
// 	}
// }
const buttonColors = {
	btnLike: "blue",
	btnHeart: "red",
	btnWow: "yellow",
	btnSad: "brown",
	btnAngry: "red",
};

function buttonClick(button) {
	const buttons = document.querySelectorAll(".btn");

	// Set all buttons to grey
	buttons.forEach((btn) => (btn.style.color = "gray"));

	// Set the clicked button to its specific color
	button.style.color = buttonColors[button.id];
}
