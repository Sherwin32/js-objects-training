/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysUntilDate(dateIn){ //dateIn format: "mm/dd/yyyy"
  console.log("dateIn: " + dateIn);
  var now = new Date();
  var monthIn = parseInt(dateIn[0]+dateIn[1])-1;
  var dayIn = dateIn[3]+dateIn[4];
  var yearIn = dateIn[6]+dateIn[7]+dateIn[8]+dateIn[9];
  console.log(`yyyymmdd: ${yearIn}${monthIn}${dayIn}`);
  var dayInDate = new Date(yearIn, monthIn, dayIn);
  console.log(dayInDate);
  var daysUntilDate = dayInDate.getTime() - now.getTime();
  daysUntilDate = Math.ceil(daysUntilDate / 1000 / 60 / 60 / 24);
  console.log(daysUntilDate);
  return daysUntilDate;
}

function birthdayReminder(peopleIn){
  var returnReminder = [];
  peopleIn.forEach(function(person){
    var now = new Date();
    var dobMonth = person.dob[0]+person.dob[1];
    var dobDay = person.dob[3]+person.dob[4];
    var dobYear = now.getYear()+1900;
    console.log(`dobYear: ${dobYear}`);
    var bodThisYear = new Date(`bodThisYear: ${dobMonth}/${dobDay}/${dobYear}`);
    if(now.getTime() > bodThisYear.getTime()){
      dobYear = dobYear+1;
    }
    returnReminder.push(`${person.name}'s birthday is in ${daysUntilDate(`${dobMonth}/${dobDay}/${dobYear}`)} days`);
  });

  return returnReminder;
  
}

// daysUntilDate("10/03/2017");
var testInput = [
  {name: "Sherwin", dob: "10/01/1991"},
  {name: "Jack", dob:"10/03/1987"}
];
var ans = birthdayReminder(testInput);
console.log(ans);