import { Tip }  from './Tip.js'
import { useTip } from './TipDataProvider.js'

export const TipList = () =>
{
    const contentElement = document.getElementById("cards_tips");
    const tips = useTip();

    let tipHTMLRepresentations = `
    <h3>Tips</h3>
    `;
    tips.map(tip => {
        tipHTMLRepresentations += Tip(tip);
    })

   contentElement.innerHTML += `
        <aside id="tips_list">
            ${tipHTMLRepresentations}
        </aside>
   `;
}