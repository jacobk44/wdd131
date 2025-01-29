//Get HTML Element
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Create a click event listener for the chapter button
button.addEventListener("click", ()=>{
    if(input.value.trim() !==" "){
        // create a li element 
        const li = document.createElement("li");
        li.textContent = input.value;

        // create a delete button 
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";

        // Append the delete button to the li
        li.append(deleteButton);

        // Append the li element to teh list 
        list.append(li);

        // add an event listener to your delete button to remove the li element
        deleteButton.addEventListener("click", function(){
            list.removeChild(li);
            input.focus;
        });
    }
})
