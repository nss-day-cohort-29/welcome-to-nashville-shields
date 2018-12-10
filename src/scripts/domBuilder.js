// adds section element and button for park to dom
let ParkChoiceCreate = document.createElement("Section");
let ParkChoiceCreateButton = document.createElement("Button");
let ParkChoiceClassGet = document.querySelector(".results__Container")
document.getElementsByClassName("ParkResultTempButton")
ParkChoiceCreateButton.innerHTML = "Save"
ParkChoiceCreate.textContent += " place Holder";
ParkChoiceClassGet.appendChild(ParkChoiceCreateButton);
ParkChoiceClassGet.appendChild(ParkChoiceCreate);
console.log(ParkChoiceCreate);;


// adds section element and button for Food to dom
let FoodChoiceCreate = document.createElement("Section");
let FoodChoiceCreateButton = document.createElement("Button");
let FoodChoiceClassAdd = FoodChoiceCreate.classList.add("FoodResultTemp");
let FoodChoiceClassGet = document.querySelector(".results__Container")
FoodChoiceCreate.textContent += " place Holder";
FoodChoiceCreateButton.innerHTML = "Save"
FoodChoiceClassGet.appendChild(FoodChoiceCreateButton);
FoodChoiceClassGet.appendChild(FoodChoiceCreate);

console.log(FoodChoiceCreate);;


// adds section element and button for Meetup to dom
let MeetupChoiceCreate = document.createElement("Section");
let MeetupChoiceCreateButton = document.createElement("Button");
let MeetupChoiceClassAdd = MeetupChoiceCreate.classList.add("MeetupResultTemp");
let MeetupChoiceClassGet = document.querySelector(".results__Container")
MeetupChoiceCreate.textContent += " place Holder";
MeetupChoiceCreateButton.innerHTML = "Save"
MeetupChoiceClassGet.appendChild(MeetupChoiceCreateButton);
MeetupChoiceClassGet.appendChild(MeetupChoiceCreate);
console.log(MeetupChoiceCreate);;


// adds section element and button for Concerts to dom
let ConcertsChoiceCreate = document.createElement("Section");
let ConcertsChoiceCreateButton = document.createElement("Button");
let ConcertsChoiceClassAdd = ConcertsChoiceCreate.classList.add("ConcertsResultTemp");
let ConcertsChoiceClassGet = document.querySelector(".results__Container")
ConcertsChoiceCreate.textContent += " place Holder";
ConcertsChoiceCreateButton.innerHTML = "Save"
ConcertsChoiceClassGet.appendChild(ConcertsChoiceCreateButton);
ConcertsChoiceClassGet.appendChild(ConcertsChoiceCreate);
console.log(ConcertsChoiceCreate);;




// adds section element  for Parks to itinerary
let ParkChoiceCreateSaved = document.createElement("Section");
let ParkChoiceClassSavedAdd = ParkChoiceCreateSaved.classList.add("ParkResultSaved");
let ParkChoiceClassSavedGet = document.querySelector(".itinerary__Container")
ParkChoiceClassSavedGet.textContent += " place Holder"
console.log(ParkChoiceCreateSaved);;




// adds section element  for Food to itinerary
let FoodChoiceCreateSaved = document.createElement("Section");
let FoodChoiceClassSavedAdd = FoodChoiceCreateSaved.classList.add("FoodResultSaved");
let FoodChoiceClassSavedGet = document.querySelector(".itinerary__Container")
FoodChoiceClassSavedGet.textContent += " place Holder"
console.log(FoodChoiceCreateSaved);;



// adds section element  for Meetup to itinerary
let MeetupChoiceCreateSaved = document.createElement("Section");
let MeetupChoiceClassSavedAdd = MeetupChoiceCreateSaved.classList.add("MeetupResultSaved");
let MeetupChoiceClassSavedGet = document.querySelector(".itinerary__Container")
MeetupChoiceClassSavedGet.textContent += " place Holder"
console.log(MeetupChoiceCreateSaved);;



// adds section element  for Concerts to itinerary
let ConcertsChoiceCreateSaved = document.createElement("Section");
let ConcertsChoiceClassSavedAdd = ConcertsChoiceCreateSaved.classList.add("ConcertsResultSaved");
let ConcertshoiceClassSavedGet = document.querySelector(".itinerary__Container")
ConcertshoiceClassSavedGet.textContent += " place Holder"
console.log(ConcertsChoiceCreateSaved);;
