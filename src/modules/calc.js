import { animate, linear } from "./helper";

const calc = () => {
  const calcBlock = document.getElementById('calc');
  const calcType = document.querySelector('select[name="calc-type"]');
  const calcTypeMaterial = document.querySelector('select[name="calc-type-material"]');
  const calcInput = document.getElementById('calc-input');
  const calcTotal = document.getElementById('calc-total');

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcInputValue = +calcInput.value;

    let totalValue = 0;

    if (calcInput.value !== '') {
      totalValue = calcInputValue * calcTypeValue * calcTypeMaterialValue;
    } else {
      totalValue = 0;
    }

    animate({
      duration: 1000,
      timing: linear,
      draw: function (progress) {
        calcTotal.value = Math.round(totalValue * progress);
      }
    });
  }

  try {
    calcBlock.addEventListener('input', e => {
      if (e.target == calcType || e.target == calcTypeMaterial || e.target == calcInput) {
        countCalc();
      }
    })
  
    calcInput.addEventListener('input', () => {
      calcInput.value = calcInput.value.replace(/[^\d]+/gi, "")
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export default calc;