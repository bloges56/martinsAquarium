import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'

/**
 *  FishList which renders individual fish objects as HTML
 */

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.getElementById("cards_tips");
    const fishes = useFish();

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = "";
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish);
    }

    var fishListHTML = document.createElement('article');
    fishListHTML.id = "fish_list";
    fishListHTML.innerHTML = fishHTMLRepresentations;


    // Add to the existing HTML in the content element
    contentElement.insertBefore(fishListHTML, contentElement.childNodes[0]);
    
}