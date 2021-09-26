// export const cutStrings = (arr = []) => {};

export const cutStrings = (arr = []) => {
    let arrOfLengths = [];
    for (let elem of arr) {
        arrOfLengths.push(elem.length)
    }
    let shortest = Math.min.apply(null, arrOfLengths);
    return arr.map(elem => elem.slice(0,2))
};

// console.log(cutStrings(["123a", "4b", "555c", "d33"]))