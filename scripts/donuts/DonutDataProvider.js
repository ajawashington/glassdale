import firebaseConfig from "../../settings"
const dbURL = firebaseConfig.APP_DATABASE_URL

let donutsArray = []

export const getDonuts = () => {
  return fetch(`${dbURL}/donuts.json`)
  .then(response => response.json())
  .then(donutsCollection => {
    donutsArray = donutsCollection
  })
}

export const useDonuts = () => donutsArray.slice()
