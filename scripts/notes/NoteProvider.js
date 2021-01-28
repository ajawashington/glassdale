let notes = []

export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
}

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(response => response.json())
    .then(parsedNotes => {
      notes = parsedNotes
    })
}

export const useNotes = () => notes.slice()
