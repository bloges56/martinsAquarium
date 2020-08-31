/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="fish_card">
            <div><img  class="fish_image image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.size}</div>
            <div class="fish__location">Harvest Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
    `
}