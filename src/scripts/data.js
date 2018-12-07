/* Zomato API - Nick
user-key: "b370c0e063c48a8441ba08df6238f015"
city id: 1138 */

fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25")
    .then(search => search.json())
    .then(parsedSearch => {
        console.table(parsedSearch)
    });
