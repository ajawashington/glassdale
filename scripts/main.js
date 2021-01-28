import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { NoteForm } from "./notes/NoteForm.js";
import { ShowNoteButton } from "./notes/ShowNotesButton.js";
import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js"
import "./notes/NoteList.js"

OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
ShowNoteButton()

// Testing saveNote()
// import { saveNote } from "./notes/NoteProvider.js";
// const newNote = {
//   "text": "It's probably Bryan pt 3",
//   "suspect": "Bryan",
//   "date": "01/28/2021",
//   "author": "Scott",
//   "intuition": "Super suspicious"
// }
// saveNote(newNote)
