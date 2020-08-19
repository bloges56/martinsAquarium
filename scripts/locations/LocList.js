import { useLocs } from './locDataProvider.js'
import { Location } from './Location.js'

export const LocList = () => {
    const contentElement = document.getElementById("places_section");
    const allLocs = useLocs();

    var placesList = document.createElement("ul");
    placesList.id = "places_list";
    for (const loc of allLocs){
        placesList.innerHTML += Location(loc);
    }

    contentElement.innerHTML += `
        <h3>Places</h3>
        ${placesList.innerHTML}
    `
}