// Load notes on page load
window.onload = function () {
    displayNotes();
  };
  
  function addNote() {
    const title = document.getElementById("note-title").value.trim();
    const content = document.getElementById("note-content").value.trim();
  
    if (title === "" || content === "") {
      alert("Please fill out both fields!");
      return;
    }
  
    const note = {
      title: title,
      content: content
    };
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
  
    // Clear form
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
  
    displayNotes();
  }
  
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
  
  function displayNotes() {
    const container = document.getElementById("note-container");
    container.innerHTML = "";
  
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.forEach((note, index) => {
      const div = document.createElement("div");
      div.className = "note";
      div.innerHTML = `
        <button onclick="deleteNote(${index})">X</button>
        <h2>${note.title}</h2>
        <p>${note.content}</p>
      `;
      container.appendChild(div);
    });
  }
