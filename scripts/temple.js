
  document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const navList = document.querySelector(".navigation");

    menuButton.addEventListener("click", function () {
      navList.classList.toggle("show");
      menuButton.classList.toggle("show");
    });
  });



// Footer 