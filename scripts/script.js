// // Nice Scrolling
// $(document).ready(function () {
// 	"use strict";
// $("html").niceScroll({
//     cursorcolor:"#140606",
// 	cursorwidth:"12px",
// 	cursorborder:"#E41B17 solid 2px"
// });
// });

// Search

function handleSubmit(event) {
    // prevent page from reloading when form is submitted
    event.preventDefault();
    // get the value of the input field
    const inputValue = document.querySelector('#input-search').value;
    // remove whitespace from the input
    const searchQuery = inputValue.trim();
    // print `searchQuery` to the console
    console.log(searchQuery);
    }