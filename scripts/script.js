// // Nice Scrolling
// $(document).ready(function () {
// 	"use strict";
// $("html").niceScroll({
//     cursorcolor:"#140606",
// 	cursorwidth:"12px",
// 	cursorborder:"#E41B17 solid 2px"
// });
// });

// // Search Wikipedia APP

// feach data from wikipedia APi 
async function searchWikipedia(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

// handle Submit 
async function handleSubmit(event) {
    // prevent page from reloading when form is submitted
    event.preventDefault();
    // get the value of the input field
    const inputValue = document.querySelector('#input-search').value;
    // remove whitespace from the input
    const searchQuery = inputValue.trim();
    try {
    const results = await searchWikipedia(searchQuery);
    console.log(results);
    let infos =results.query.search;
    console.log(results.query.search);
    document.getElementById('content').innerHTML = ''
        for(let info of infos) {
            let content = `
            <div class="card col-lg-3" style="width: 25rem;">
                <div class="card-body">
                    <h5 class="card-title" id="result-title">${info.title}</h5>
                    <p class="card-text" id="result-info"> ${info.snippet} </p>
                    <a href="https://en.wikipedia.org/?curid=${info.pageid}" class="btn btn-outline-success" id="more-info">See More</a>
                </div>
            </div>
            `
            document.getElementById('content').innerHTML += content
        }
    } catch (err) {
        console.log(err);
        // alert('Failed to search wikipedia');
    }
}