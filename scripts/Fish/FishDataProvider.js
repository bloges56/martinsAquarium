const fishCollection = [
    {
        name: "Big Blue",
        species: "just a fish",
        length: 5,
        diet: "man",
        location: "outer space",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "cthulu",
        species: "old one",
        length: 7200,
        diet: "the unending fear of the unknown",
        location: "nightmares",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "aquaman",
        species: "Jason Momoa",
        length: 75,
        diet: "protein powder",
        location: "atlantis",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "jaws",
        species: "great white shark",
        length: 240,
        diet: "teenagers",
        location: "beach town",
        image: "../images/blue_fish.jpg"
    },
    {
        name: "piranha",
        species: "demon",
        length: 4,
        diet: "anything that moves",
        location: "amazon",
        image: "../images/blue_fish.jpg"
    }

]

export const useFish = () => {
    return fishCollection.slice()
}


