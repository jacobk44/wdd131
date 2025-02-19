const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


const selectElement = document.querySelector("#productSelect");

products.forEach(product =>{
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
})




const footerElement = document.getElementById("year");

const recentYear = new Date().getFullYear();

footerElement.innerHTML = `<span>© ${recentYear},❤  Jacob Amoah  ❤  Greater Accra.</span>`





function setLastModified() {
const modifiedDate = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
}


setLastModified();



let scores = [56, 78, 95, 77, 65, 86];
let target = scores.indexOf(78);

console.log(target);