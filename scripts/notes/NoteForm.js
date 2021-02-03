import { saveNote } from "./NoteProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <h2>Notes</h2>
    <form action="">
        <fieldset>
            <label for="note-suspect">Suspect: </label>
            <input type="text" id="note-suspect" name="note-suspect">
        </fieldset>
        <fieldset>
            <label for="note-author">Author: </label>
            <input type="text" id="note-author" name="note-author">
        </fieldset>
        <fieldset>
            <label for="note-date">Date: </label>
            <input type="date" id="note-date" name="note-date">
        </fieldset>
        <fieldset>
            <label for="note-intuition">Intuition: </label>
            <input type="text" id="note-intuition" name="note-intuition">
        </fieldset>
        <fieldset>
            <label for="note-text">Note: </label>
            <input type="text" id="note-text" name="note-text">
        </fieldset>
        <button id="saveNote">Save Note</button>
    </form>
    `}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        clickEvent.preventDefault()
        const suspect = document.getElementById("note-suspect").value
        const author = document.getElementById("note-author").value
        const date = document.getElementById("note-date").value
        const intuition = document.getElementById("note-intuition").value
        const text = document.getElementById("note-text").value
        // debugger
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            "text": text,
            "suspect": suspect,
            "date": date,
            "author": author,
            "intuition": intuition
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
