import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminal.js"

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

  getCriminals()
    .then(() => {
      const criminalsArray = useCriminals()

      let criminalsHTMLRepresentations = ""

      for (const criminal of criminalsArray) {
        criminalsHTMLRepresentations += Criminal(criminal)
      }
      
      criminalsContainer.innerHTML = `
        <h3>Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>`
    })
}
