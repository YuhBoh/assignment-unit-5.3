console.log('***** Music Collection *****')

//1.//
console.log('1.');
let collection = [];

//2.//
console.log('2.');
function addToCollection(title, artist, yearPublished){
album = {Title: title,
         Artist: artist,
         Year: yearPublished};

collection.push(album);

return album;
return collection;
}

console.log(addToCollection('Bob Song', 'Bob', 19));

//3.//
console.log('3.');
console.log(addToCollection('Boub Song', 'Boub', 1442));
console.log(addToCollection('Bab Song', 'Bab', 105));
console.log(addToCollection('Beb Song', 'Beb', 985));
console.log(addToCollection('Bib Song', 'Bib', 4785));
console.log(addToCollection('Bubb Song', 'Bubb', 0));
console.log(collection);

//4.//
console.log('4.');
function showCollection(array){

console.log(array.length);

for (album of collection){
  console.log(`${album.Title} by ${album.Artist}, published in ${album.Year}`);
}
}

//5.//
console.log('5.');
console.log(showCollection(collection));

//6.//
console.log('6.');

function findByArtist(artist){
let artistArray = [];

for (i=0; i<collection.length; i++) {
  if (artist === collection[i].Artist) {
    artistArray.push(collection[i]);
  }
}
return artistArray; //return HAS TO BE OUTSIDE FOR CODE BLOCK
}

console.log(findByArtist('Bib'));
console.log(findByArtist('Schloop'));

//7.//
console.log('7.');

console.log(findByArtist('Boub'));
console.log(findByArtist('Bab'));
console.log(findByArtist('Beb'));
console.log(findByArtist('Bib'));
console.log(findByArtist('Bubb'));

console.log(findByArtist('Beep'));
console.log(findByArtist('Boop'));
console.log(findByArtist('Biip'));
console.log(findByArtist('Buup'));
console.log(findByArtist('Baap'));



