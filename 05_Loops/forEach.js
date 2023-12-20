// for each loop

const coding = ["JS","HTML","CSS","Node-JS","SQL","REACT","MONGO-DB"]

coding.forEach(function(value){
    console.log(value);
})

coding.forEach( (item)=> {
    console.log(item);
})

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item,value,arr) =>{  // returns keys,values and araay
    console.log(item,value,arr);
})

const myCoding = [
    {
        language: "HTML",
        framework: "--"
    },
    {
        language: "CSS",
        framework: "Tailwind"
    },
    {
        language: "Javascript",
        library: "REACT-JS"
    },
]

myCoding.forEach((item) => {
    console.log(item.language);
})