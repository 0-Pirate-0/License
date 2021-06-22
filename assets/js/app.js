const license = document.querySelector('.license');
const numOfLic = license.querySelector('select');
const totalSum = license.querySelector('.license__content--total span');
const licenseSel = license.querySelector('.license__selected span');

function calculate() {
    let choosePlan = document.querySelector('input[type="radio"]:checked');
    totalSum.textContent = choosePlan.value * numOfLic.value;
    licenseSel.textContent = choosePlan.closest('.license__item').querySelector('p').textContent;
}

license.addEventListener('change', calculate);

calculate();