const searchButtonElement = document.getElementById("btn");
const searchInputElement = document.getElementById("searchForm");
const searchBoxElement = document.getElementById("searchBox");

searchButtonElement.addEventListener("click", (e) => {
    searchBoxElement.classList.toggle("active");
  searchInputElement.focus();
});
