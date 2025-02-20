
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




const products = [
    {
      id: "fc-1888",
      name: "All-Purpose Cleaner",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Glass Cleaner",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Disinfectant Spray",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Floor Cleaner",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Bathroom Cleaner",
      averagerating: 5.0
    },
    {
      id: "jj-1944",
      name: "Kitchen Degreaser",
      averagerating: 6.0
    },
    {
      id: "jj-1229",
      name: "Furniture Poolish",
      averagerating: 7.0
    }
  ];


const selectElement = document.querySelector("#productSelect");

products.forEach(product =>{
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
})


