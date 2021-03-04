const dbURL = "https://deployed-projects-default-rtdb.firebaseio.com/glassdale/donuts.json"

let donutsArray = []

export const getDonuts = () => {
  debugger
  return fetch(`${dbURL}`)
  .then(response => response.json())
  .then(donutsCollection => {
    donutsArray = donutsCollection
    console.warn(donutsCollection)
  })
}

export const useDonuts = () => {
  donutsArray.slice()
}
