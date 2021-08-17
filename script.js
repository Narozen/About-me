let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx bx-search-alt");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}
