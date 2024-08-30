console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = []; 
//Create the addToCollection function 
function addToCollection(collection,title, artist, yearPublished) {
// Create a new album object
let newAlbum = {
collection: collection,
title: title,
artist: artist,
yearPublished: yearPublished
};
// ADD the new album to the collection
collection.push(newAlbum);
// Return the newly created album
return newAlbum; 
}
// Use and test the addToCollection function
console.log(addToCollection(myCollection, "Today", "Elvis Presley", 1975));
console.log(addToCollection(myCollection, "Abbey Road", "The Beatles", 1969));
console.log(addToCollection(myCollection, "Rare", "Selena Gomez", 2020));
console.log(addToCollection(myCollection, "souled Out", "Jhene Aiko", 2014));
console.log(addToCollection(myCollection, "Red", "Taylor Swift", 2012));
console.log(addToCollection(myCollection, "One", "Maher Zain", 2016));
// Log the entire myCollection array
console.log(myCollection); 
// Create a function named showCollection
function showCollection(collection) {
for (let album of collection) {
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}
// Example collection of album objects 3
let albums = [
{title: "Easy On Me", artist: "Adele", yearPublished: 2021 },
{title: "Eternal Sunshine", artist: "Ariana Grande", yearPublished: 2024},
{title: "Endless Summer", artist: "Hannah Montana", yearPublished: 2023},
];
// testing the showCollection function 
showCollection(albums); ß
// Add function findByArtist
function findByArtist(collection, artist) {
  // Create an empty array to hold matching results
  let results = []; 
  // Loop through collection 
  for (let album of collection) {
    // check if artist matches 
    if (album.artist === artist) {
      // add the album to the results array
      results.push(album); 
     }
  }
  // Return the array with matching results 
  return results;
}
// Example collection of albums
let albumCollection = [
    { title: "Album1", artist: "Artist1", year: 2002 },
    { title: "Album2", artist: "Artist2", year: 2003 },
    { title: "Album3", artist: "Artist1", year: 2004 },
    { title: "Album4", artist: "Artist3", year: 2005 }
];
// testing the function 
console.log(findByArtist(albumCollection, "Artist1")); // should return 2 albums
console.log(findByArtist(albumCollection, "Artist4")); // should return an empty array 
console.log(findByArtist(albumCollection, "Artist2")); // should return 1 album 
// Create search function
function search(collection, searchCriteria) {
  // check if searchCriteria has properties and is provided 
  if(!searchCriteria || (!searchCriteria.artist && !searchCriteria.yearPublished)) {
    return collection; 
  }
  return collection.filter(item => {
    let matches = true; 
    if (searchCriteria.artist) {
      matches = matches && item.artist === searchCriteria.artist;
    }
    if (searchCriteria.yearPublished) {
      matches = matches && item.yearPublished === searchCriteria.yearPublished;
    }
    return matches;
  });
  }
  // example 
  let disks = [
    {artists: 'Ray charles', yearPublished: 1957, title: 'Ray Charles '},
    {artists: 'Ray charles', yearPublished: 1962, title: 'Modern Sounds in Country and Western Music' },
    {artists: 'Hank Williams', yearPublished: 1951, title: 'Cold Heart'},
    {artists: 'Marty Robbins', yearPublished: 1959, title: 'El Paso'},
  ];
  let searchCriteria = { artist: 'Ray Charles', yearPublished: 1957};
  let results = search(disks, searchCriteria);
  console.log(results); // output [{ artists: 'Ray Charles' yearPublished: 1957}, title: 'Ray Charles'}]
// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
