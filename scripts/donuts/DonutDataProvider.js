const dbURL = "https://deployed-projects-default-rtdb.firebaseio.com/glassdale"

let donutsArray = []

export const getDonuts = () => {
  return fetch(`${dbURL}/donuts.json`)
  .then(response => response.json())
  .then(donutsCollection => {
    donutsArray = donutsCollection
  })
}

export const useDonuts = () => donutsArray.slice()
