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

//Calculate KM

export function calculateKM(months, days){

  //RESET
  for(let i = 0; i < months.length; i++){
    months[i].drived = 0
    months[i].over = 0
    months[i].percent = 0
  }

  //Every Day
  for(let i = 0; i < days.length; i++){
    let date = new Date(days[i].date)
    let year = date.getFullYear()
    let month = date.getMonth()

    //Search Month for the day
    for(let a = 0; a < months.length; a++){
      let monthDate = new Date(months[a].date)
      if(monthDate.getFullYear() === year){
        if(monthDate.getMonth() === month)
        months[a].drived += days[i].km
      }
    }
  }
  return months
}

//calculate how much its over
export function calculateOver(months, km){

  for(let i = 0; i < months.length; i++){
    if(months[i].drived > km){
      months[i].over = months[i].drived - km
      months[i].percent = 1
    }else{
      months[i].percent = months[i].drived / km
    }
  }
  return months
}