const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=a3a238db7e3932463061304b7f22746a&query=${searchQuery2}`;

const urlBook = `https://openlibrary.org/search.json?q=${searchQuery2}`;


const request1 = axios.get(urlMovie);
const request2 = axios.get(urlBook)

newArray = [];

request1.then((response) => {
  newArray.push(response.data.results)
  // console.log(response.data.results)
})
request2.then((response) => {
  // console.log(response.data.docs)
  newArray.push(response.data.docs)
})
.then((response) => {
  if (newArray.length > 0) {

    console.log('it works!')

    // console.log(newArray)

  } else {

    console.log('no beano')
  }
})
