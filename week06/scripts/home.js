
const menuButton = document.querySelector("#menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", function () {
  navList.classList.toggle("show");
  menuButton.classList.toggle("show");
});



const footerElement = document.getElementById("year");

const recentYear = new Date().getFullYear();

footerElement.innerHTML = `<span>© ${recentYear},❤  Jacob Amoah  ❤  Greater Accra.</span>`





function setLastModified() {
const modifiedDate = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
}


setLastModified();
