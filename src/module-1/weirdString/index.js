// export const weirdString = (str = "") => {};

export const weirdString = (str = "") => {
   return str.split(' ').map(word => word.slice(0, word.length - 1).toLocaleUpperCase() + word.slice(-1).toLowerCase()).join(' ');
};
//  console.log(weirdString("My name is John"))