// Business Logic for Destination
function Destination(location, landmarks, date, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.date = date;
  this.notes = notes;
}

// UI Logic
$(document).ready(function() {
  let seattle = new Destination(
    'Seattle', 
    [
      'Space Needle',
      'Climate Pledge Arena', 
      'Fremont Troll', 
      'The Showbox'
    ], 
    'April 30, 2022', 
    '(almost) Everywhere smells like weed'
  );

  let oregon = new Destination(
    'Oregon', 
    [
      'Crater Lake',
      'Portland Japanese Garden', 
      'Portland Art Museum', 
    ], 
    'June 1, 2021', 
    'Salem is a very small town with not much in it! But they do have sick skate parks!'
  );
  
  let washingtonDC = new Destination(
    'Washington D.C.', 
    [
      'Lincoln Memorial',
      'The White House', 
      'Smithsonian Museums', 
    ], 
    'Summer, 2019', 
    'Using an electric scooter to get around is fun and cheap.'    
  );

  let taipei = new Destination(
    "Taipei",
    [
      "Taipei 101",
      "Elephant Mountain",
      "Chiang Kai-Shek Memorial Hall",
      "National Palace Museum",
    ],
    "Summer, 2015",
    "It rains out of nowhere in the afternoon."
  );

  $("#destination-1").prepend(seattle.location);
  $("#destination-2").prepend(oregon.location);
  $("#destination-3").prepend(washingtonDC.location);
  $("#destination-4").prepend(taipei.location);

  $("#destination1-desc").append(seattle.landmarks);
  $("#destination2-desc").text(oregon.landmarks);
  $("#destination3-desc").text(washingtonDC.landmarks);
  $("#destination4-desc").text(taipei.landmarks);

  $("#destination1-desc").append(seattle.date);
  $("#destination2-desc").text(oregon.date);
  $("#destination3-desc").text(washingtonDC.date);
  $("#destination4-desc").text(taipei.date);  

  $(".destination").click(function() {
    $(this).children().toggle();
  });
});

/*
Create a website where you can keep track of all the places you've been. 

Business
Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. 

constructors for creating destinations

UI
Display those properties when a user clicks on a place's name. 

Complete the business logic for your place object (including specs, which should go in your README). 
If you complete the business logic, you may work on adding a user interface. (See the upcoming lessons for more on adding a UI.)
*/