// In the appender we are going to accomplish...
//  Take elements from HTML/ domBuilder that are based on user interation and append them to contatiners that are appear on HTML.
//  1) Call user search input elements container from DomBuilder.
//  2) Append input to search results container. 
//  3) Collect user selects/chooses/saves and creating element for that choice. 
//  3.5) Call the results selection. 
//  4) Append results selection to coresponding intinerary element. 
//  5) Drink Bueno BEER none of that cheap ass rot gut!!



let meetupName = [];

searchData.queryResourcesMeetup()
.then(fetchedMeetupData => {
    meetupDataNashville = fetchedMeetupData.top_match_events;
    // console.log (meetupDataNashville);

    meetupDataNashville.forEach( meetupIndex => {

        // console.log(meetupIndex);
        meetupName = meetupIndex.name.text;
    
        
    });

    
});

console.log(meetupName);

searchData.queryResourcesPark()
.then(userQuery => {
   let parkTest = userQuery;
   parkTest.forEach(allParks => {
       let parkSearchReturn = allParks.park_name + " " + allParks.mapped_location_address;
       console.log(parkSearchReturn);
       return (parkSearchReturn);

   });
});


// searchData.queryResourcesConcert()
// .then(fetchedConcertData => {
//     console.log(fetchedConcertData);



// });
    
    
    
