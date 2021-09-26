// export const debounce = (fn, delay = 0) => {}
export const debounce = (fn, delay = 0) => {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(this, args);
      }, delay);
  }
}

// function saveInput(){
//   console.log('Delayed function was called.');
// }
// const processChange = debounce(saveInput, 3000);
// processChange();