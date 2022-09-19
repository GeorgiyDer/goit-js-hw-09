import Notiflix from 'notiflix';
const FormEl = document.querySelector('form')

FormEl.addEventListener('submit', onFormSubmit)




function onFormSubmit(event) {
  event.preventDefault();
  const delayValue = event.currentTarget.delay.value
  const stepValue = event.currentTarget.step.value
  const amountValue = event.currentTarget.amount.value
  
  let delay = Number(delayValue);
  let step = Number(stepValue);
  let position = 0;
  // console.log(delay);
    
    for (let i = 0; i < amountValue; i += 1) {
    
    // console.log(delay);
    position += 1;
    
      // setTimeout(() => {
        createPromise(position, delay)
      .then((result) => {
        Notiflix.Notify.success(`✅ ${result}`);
      }, (error) => {
        Notiflix.Notify.failure(`❌ ${error}`);
      })
    // }, delay);
      delay = delay + step;
  }


}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
      resolve(`Fulfilled promise ${position} in ${delay}ms`)
    } else {
      reject(`Rejected promise ${position} in ${delay}ms`)
    }
    }, delay);
      
    });

}

