const eventHub = document.querySelector(".container")
const dbURL = "https://deployed-projects-default-rtdb.firebaseio.com/glassdale/"

let notes = []

export const saveNote = note => {
  return fetch(`${dbURL}/notes.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
    .then((response) => {
      const responseBody = { firebasekey: response.data.name }
    })
  })
    .then(() => getNotes())
    .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
  return fetch(`${dbURL}/notes.jsonorderBy="id"&equalTo=${noteId}`, {
    method: "DELETE"
  })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}

export const getNotes = () => {
  debugger
  return fetch(`${dbURL}/notes.json`)
    .then(response => response.json())
    .then(parsedNotes => {
      notes = parsedNotes
    },
    )
}

export const useNotes = () => notes.slice()


const dispatchStateChangeEvent = () => {
  const noteStateChangedEvent = new CustomEvent("noteStateChanged")

  eventHub.dispatchEvent(noteStateChangedEvent)
}
