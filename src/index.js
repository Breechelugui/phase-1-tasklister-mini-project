document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const taskList =document.getElementById("tasks")
  const input = document.getElementById("new-task-description")
  // ad an event listener to the form"submit" and stop the default event from taking palce.

  form.addEventListener("submit",function (event) {event.preventDefault()
// clean the user's input.
  const taskText = input.value.trim() ;
  if (taskText === ""){return} // prevent addition of an empty task  to the li

  const li = document.createElement("li")
  li.textContent = taskText

   const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove"; // makes the content of the button remove
    deleteBtn.style.color ="red"
    deleteBtn.style.marginLeft = "10px"; // creates a space btw the item on the to-do and the delete button.
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteBtn); //adds the btn to the list.
    taskList.appendChild(li); // adds the list to the ul

    // input.value = ""; /// clears out the value 
  })
})