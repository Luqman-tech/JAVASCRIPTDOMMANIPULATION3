// Change the paragraph text when button is clicked
document.getElementById("change-text").addEventListener("click", () => {
    const message = document.getElementById("message");
    message.textContent = "✨ Boom! The content just changed dynamically!";
  });
  
  // Change style of heading when button is clicked
  document.getElementById("change-style").addEventListener("click", () => {
    const title = document.getElementById("page-title");
    title.style.color = "#4CAF50";
    title.style.letterSpacing = "2px";
    title.style.textTransform = "uppercase";
  });
  
  // Add a new item to list
  document.getElementById("add-item").addEventListener("click", () => {
    const list = document.getElementById("todo-list");
    const newItem = document.createElement("li");
    newItem.textContent = "Practice JavaScript DOM 💡";
    list.appendChild(newItem);
  });
  
  // Remove last item from list
  document.getElementById("remove-item").addEventListener("click", () => {
    const list = document.getElementById("todo-list");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    } else {
      alert("No more items to remove!");
    }
  });
  