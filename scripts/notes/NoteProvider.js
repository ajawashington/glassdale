const dbURL = 'https://deployed-projects-default-rtdb.firebaseio.com/glassdale/notes.json'

const eventHub = document.querySelector(".container");
let notes = [];

export const saveNote = (note) => {
  return fetch(`${dbURL}/notes.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note)
  })
    .then(() => getNotes())
    .then(dispatchStateChangeEvent);
};

export const deleteNote = (noteId) => {
  return fetch(`${dbURL}/notes.json?orderBy="id"&equalTo=${noteId}`, {
    method: "DELETE",
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent);
};

export const getNotes = () => {

  return fetch(`${dbURL}`)
    .then((response) => response.json())
    .then((parsedNotes) => {
      notes = parsedNotes;
    });
};

export const useNotes = () => notes.slice();

const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");

  eventHub.dispatchEvent(noteStateChangedEvent);
};
