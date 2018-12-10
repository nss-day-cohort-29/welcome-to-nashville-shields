
// This is JD's code for pulling data on Parks.

let parkDataContainer = {};
//const parkData = {
   // getResources() {
      fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP",
      {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
      .then(parkDataContainer => parkDataContainer.json())
      .then(parkDataContainer => {
         console.log(parkDataContainer);
      });
      //}
   
  // }
  console.log(parkDataContainer);
// Zomato API - Nick

let foodData = {};
fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
   {headers: {
        "user-key": "b370c0e063c48a8441ba08df6238f015"
}})
    .then(foodData => foodData.json())
    .then(foodData => {
        console.table(foodData);
    });
    

let MeetUpDataNashvile = {};
fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
    {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
    .then(MeetUpNashvile => MeetUpNashvile.json())
    .then(MeetUpNashvile => {
        console.table(MeetUpNashvile);
      });

