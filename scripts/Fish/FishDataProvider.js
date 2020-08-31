const fishCollection = [
    {
        name: "Big Blue",
        species: "just a fish",
        size: 5,
        diet: "man",
        location: "outer space",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "cthulu",
        species: "old one",
        size: 3,
        diet: "the unending fear of the unknown",
        location: "nightmares",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "aquaman",
        species: "Jason Momoa",
        size: 6,
        diet: "protein powder",
        location: "atlantis",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "jaws",
        species: "great white shark",
        size: 240,
        diet: "teenagers",
        location: "beach town",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "piranha",
        species: "demon",
        size: 4,
        diet: "anything that moves",
        location: "amazon",
        image: "../images/blue_fish.jpg"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    fishCollection.forEach(fish => {
        if(fish.size%3 === 0){
            holyFish.push(fish);
        }
    }); 

    

    return holyFish.slice()
}

export const soldierFish = () => {
    // 3, 6, 9, 12, etc... fish
    const soldierFish = []

    fishCollection.forEach(fish => {
        if(fish.size%5 === 0 && !(fish.size%3 === 0)){
            soldierFish.push(fish);
        }
    }); 

    

    return soldierFish.slice()
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const normalFish =[];

    fishCollection.forEach(fish => {
        if(!(fish.size%3 === 0 || fish.size%5 === 0)){
            normalFish.push(fish);
        }
    });
    return normalFish.slice()
}


