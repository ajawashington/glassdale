let officers = [
  {
    "id": 1,
    "name": "Marques Balistreri"
  },
  {
    "id": 2,
    "name": "Alessia Bailey"
  },
  {
    "id": 3,
    "name": "Lazaro Leuschke",
  },
  {
    "id": 4,
    "name": "Braden Stoltenberg"
  },
  {
    "id": 5,
    "name": "Betty Flatley"
  },
]

export const useOfficers = () => {
  return officers.slice()
}

export const getOfficers = () => {
  /*
      Load database state into application state with a fetch().
      Make sure the last then() updates the officers array
  */
}
