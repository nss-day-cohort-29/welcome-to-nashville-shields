 nh-api-code-setup
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
    
let parkData = {};
fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=lfAtpDX8XuYvee5T9U6FnVpFP",
    {Authorization: {Bearer: "lfAtpDX8XuYvee5T9U6FnVpFP"}})
    .then(parkData => parkData.json())
    .then(parkData => {
        console.log(parkData)})

let MeetUpDataNashvile = {};
fetch("https://www.eventbriteapi.com/v3/events/search/?token=MSVL4Q3GQBOU2GKYHRP2#",
    {Authorization: {Bearer: "MSVL4Q3GQBOU2GKYHRP2#"}})
    .then(MeetUpNashvile => MeetUpNashvile.json())
    .then(MeetUpNashvile => {
        console.table(MeetUpNashvile)})
const parkData = {
    getResources() {
      return fetch("https://data.nashville.gov/resource/xbru-cfzi.json")
      .then(function(response){
        response.json()
    })
    .then(response => console.log(response));
    },
    queryResources(userInput) {
      return fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?q=${userInput}`)
      .then(response => response.json());
    }
  };

  parkData.getResources();
