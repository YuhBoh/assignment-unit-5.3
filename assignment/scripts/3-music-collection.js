console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished){
album = {Title: title,
         Artist: artist,
         Year: yearPublished};

collection.push(album);

return album;
}

console.log(addToCollection('bob', 'boob', 19));
console.log(collection);