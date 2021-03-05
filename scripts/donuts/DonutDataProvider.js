const dbURL = "https://deployed-projects-default-rtdb.firebaseio.com/glassdale/donuts.json"

let donutsArray = []

export const getDonuts = () => {
  return fetch(`${dbURL}`)
  .then(response => response.json())
  .then(donutsCollection => {
    for (const [key, value] of Object.entries(donutsCollection)) {
      value.firebaseKey = key;
      donutsArray.push(value)
    }
  })
}

export const useDonuts = () => {
  return donutsArray.slice()
}
