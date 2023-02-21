import Notiflix from 'notiflix';

const form = document.querySelector('.form')
// const  delay = form.querySelector('[name=delay]');
// const  step = form.querySelector('[name=step]');
// const  amount = form.querySelector('[name=amount]');
// const  submit = form.querySelector('button');

form.addEventListener('submit', handleSubmit)

Notiflix.Notify.warning('Default parameters applied', {timeout: 5000})
setParams(1000,500,10);

function handleSubmit(e) {
  e.preventDefault();

  // const  delay = form.querySelector('[name=delay]').value;
  // const  step = form.querySelector('[name=step]').value;
  // const  amount = form.querySelector('[name=amount]').value;

  const {delay, step, amount} = getParams();

  setTimeout(() => {
    for (let index = 1; index <= amount; index++) {
      const d = step*index;
      createPromise(index,d)
      .then((result) => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    }
  }, delay)

  form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
      
    }, delay);
  });
}

function setParams(d,s,a) {
  form.elements.delay.value = d;
  form.elements.step.value = s;
  form.elements.amount.value = a;
}

function getParams() {
  const delay = form.elements.delay.value;
  const step = form.elements.step.value;
  const amount = form.elements.amount.value;
  return {delay, step, amount};
}