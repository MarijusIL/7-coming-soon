import { formatNumber } from './formatNumber.js';


function updateClock(DOMelements, timeValues) {
    for (let i = 0; i < DOMelements.length; i++) {
        const formatedNumber = i > 0 ? formatNumber(timeValues[i]) : timeValues[i];
        DOMelements[i].innerText = formatedNumber;
    }
}

export { updateClock }