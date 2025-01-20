
  // Function to populate the last modified date
  function setLastModified() {
    const modifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
  }


    setLastModified();
