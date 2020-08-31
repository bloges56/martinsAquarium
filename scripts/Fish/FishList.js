import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

/**
 *  FishList which renders individual fish objects as HTML
 */

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.getElementById("cards_tips");
    const holyFish = mostHolyFish();
    const swordFish = soldierFish();
    const normalFish = nonHolyFish();

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = "";
    var holyFishHTML = document.createElement('div');
    holyFishHTML.id = "holy_fish";
    holyFishHTML.classList.add("fish_list_section");
    holyFish.map(fish => {
        holyFishHTML.innerHTML += Fish(fish);
    })

    var soldierFishHTML = document.createElement('div');
    soldierFishHTML.id = "soldier_fish";
    soldierFishHTML.classList.add("fish_list_section");
    swordFish.map(fish => {
        soldierFishHTML.innerHTML += Fish(fish);
    })

    var normalFishHTML = document.createElement('div');
    normalFishHTML.id = "normal_fish";
    normalFishHTML.classList.add("fish_list_section");
    normalFish.map(fish => {
        normalFishHTML.innerHTML += Fish(fish);
    })



    var fishListHTML = document.createElement('article');
    fishListHTML.id = "fish_list";

    fishListHTML.innerHTML += "<h2>Holy Fish</h2>"
    fishListHTML.appendChild(holyFishHTML);

    fishListHTML.innerHTML += "<h2>Soldier Fish</h2>"
    fishListHTML.appendChild(soldierFishHTML);

    fishListHTML.innerHTML += "<h2>Normal Fish</h2>"
    fishListHTML.appendChild(normalFishHTML);


    // Add to the existing HTML in the content element
    contentElement.insertBefore(fishListHTML, contentElement.childNodes[0]);
    
}