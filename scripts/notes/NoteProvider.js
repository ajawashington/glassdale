import firebaseConfig from "../../settings.js";

const dbURL = firebaseConfig.APP_DATABASE_URL;

const eventHub = document.querySelector(".container");
let notes = [];

export const saveNote = (note) => {
  debugger;
  return fetch(`${dbURL}/notes.json`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      _method: "PATCH",
    },
    body: JSON.stringify(note),
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
  debugger
  return fetch(`${dbURL}`)
    .then((response) => response.json())
    .then((parsedNotes) => {
      for (const [key, value] of Object.entries(parsedNotes)) {
        value.firebaseKey = key;
        notes.push(value);
      }
    });
};

export const useNotes = () => {
  return notes.slice();
};
const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged");

  eventHub.dispatchEvent(noteStateChangedEvent);
};
