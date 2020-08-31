import { useLocs } from './locDataProvider.js'
import { Location } from './Location.js'

export const LocList = () => {
    const contentElement = document.getElementById("places_section");
    const allLocs = useLocs();

    var placesList = document.createElement("ul");
    placesList.id = "places_list";
    allLocs.map(location => {
        placesList.innerHTML += Location(location);
    })

    contentElement.innerHTML += `
        <h3>Places</h3>
        ${placesList.innerHTML}
    `
}