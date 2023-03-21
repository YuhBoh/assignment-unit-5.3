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

console.log(addToCollection('Bob', 'Bob Song', 19));
console.log(collection);

//3.//
console.log('3.');
console.log(addToCollection('Boub', 'Boub Song', 1442));
console.log(addToCollection('Bab', 'Bab Song', 105));
console.log(addToCollection('Beb', 'Beb Song', 985));
console.log(addToCollection('Bib', 'Bib Song', 4785));
console.log(addToCollection('Bubb', 'Bubb Song', 0));
console.log(collection);

//4.//
console.log('4.');
function showCollection(array){

console.log(array.length);

for (album of collection){
  console.log(`${album.Title} by ${album.Artist}, published in ${album.Year}`);
}
}

console.log(showCollection(collection));
