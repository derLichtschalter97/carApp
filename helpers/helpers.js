//Allgemeine Helferfunktionen

const data = require('../data/data')

//Sortiert nach Datum
export function sortByProperty(property, array) {
  const types = {
    date: 'date',
  };
  const sortProperty = types[property];
  switch (sortProperty) {
      case 'date':
        array.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
        });
          break;
  
      default:
        array.sort((a, b) => b[sortProperty] - a[sortProperty]);
          break;
  }
  
  return array
}