import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit', handleSubmit)

// Notiflix.Notify.warning('Default parameters applied', {timeout: 5000})
// setParams(1000,500,10);

function handleSubmit(e) {
  e.preventDefault();

  const {delay, step, amount} = getParams();

    for (let index = 1; index <= amount; index++) {

      const promiseDelay = +delay + step*index;
      createPromise(index,promiseDelay)
      .then((result) => Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`))
      .catch(error => Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`));
    }

  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({position,delay});
      } else {
        reject({position,delay});
      }
      
    }, delay);
  });
}

function setParams(delay,step,amount) {
  form.elements.delay.value = delay;
  form.elements.step.value = step;
  form.elements.amount.value = amount;
}

function getParams() {
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  return {delay, step, amount};
}