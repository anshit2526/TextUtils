const name = "Anshit Krishan";
const age = 19;
const love = "Web Development";
const score = 100;

const arrowFunction = () => {
    console.log("Hello there")
}

export default name;
export {age, love, score}  // This syntax is correct for exporting

// // And the following syntax is also correct for exporting
// export{age}
// export {love}
// export {loveAge}