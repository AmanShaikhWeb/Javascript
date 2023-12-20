const coding = ["JS","HTML","CSS","Node-JS","SQL","REACT","MONGO-DB"] 

const myCodes= coding.forEach((item)=>{
    console.log(item);
})

console.log(myCodes); // returns undefined

// filter

const numbers = [1,2,3,4,5,6,7,8,9,10]

const myNum = numbers.filter((num) => {
    return num > 4
})

console.log(myNum);

// using foreach

const newNums = []

numbers.forEach((num) => {
  if (num > 4) {
    newNums.push(num)
  }
})

console.log(newNums);

//

const books = [
    {
      title: "The Silent Echo",
      genre: "Mystery",
      releaseDate: 2011,
      author: "Emma Davies",
      edition: "First Edition"
    },
    {
      title: "Beyond the Horizon",
      genre: "Science Fiction",
      releaseDate: 2020,
      author: "Ryan Mitchell",
      edition: "Second Edition"
    },
    {
      title: "Whispers in the Wind",
      genre: "Romance",
      releaseDate: 2017,
      author: "Sophie Johnson",
      edition: "Revised Edition"
    },
    {
      title: "City of Shadows",
      genre: "Thriller",
      releaseDate: 2010,
      author: "David Collins",
      edition: "First Edition"
    },
    {
      title: "The Enchanted Garden",
      genre: "Fantasy",
      releaseDate: 2015,
      author: "Elena Rodriguez",
      edition: "Special Collector's Edition"
    },
    {
      title: "Echoes of Eternity",
      genre: "Historical Fiction",
      releaseDate: 2009,
      author: "Jonathan Williams",
      edition: "First Edition"
    },
    {
      title: "Lost in Time",
      genre: "Adventure",
      releaseDate: 2021,
      author: "Lila Martinez",
      edition: "Second Edition"
    },
    {
      title: "Midnight Serenade",
      genre: "Mystery",
      releaseDate: 2019,
      author: "Olivia Turner",
      edition: "First Edition"
    },
    {
      title: "Starlight Sonata",
      genre: "Science Fiction",
      releaseDate: 2018,
      author: "Michael Adams",
      edition: "Revised Edition"
    },
    {
      title: "Dancing with Destiny",
      genre: "Romance",
      releaseDate: 2016,
      author: "Sophie Taylor",
      edition: "First Edition"
    }
  ];


  let myBooks = books.filter((bk)=> bk.genre === "Science Fiction")
  myBooks = books.filter((bk) =>{
    return bk.edition ===  "First Edition" && bk.releaseDate >= 2010
  })

  console.log(myBooks);

