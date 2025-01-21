
const footerElement = document.getElementById("year");

const recentYear = new Date().getFullYear();

footerElement.textContent = `© ${recentYear},❤ Jacob Amoah ❤ Greater Accra.`




  // Function to populate the last modified date
  function setLastModified() {
    const modifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
  }

  
    setLastModified();
