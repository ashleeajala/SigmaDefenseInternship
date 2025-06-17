function countTruthy(array) {
    let count = 0;
    for (let element of array) {
        if (element)
            count++;           
    }  
    return count;
}
const array = [0, null, undefined, '', 1, 2, 3, null, 4]
console.log(countTruthy(array))


const movie = {
    title: 'Hunger Games',
    releaseYear: 2012,
    rating: 7.2,
    director: 'Gary Ross'

}
// console.log(typeof movie.director)
function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);

}
showProperties(movie)