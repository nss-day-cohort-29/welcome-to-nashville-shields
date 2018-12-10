
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