// Defining constant variables
var OPEN_WEATHER_API_KEY = "49160125f6ab2cf7e612c72cdd9d0e00";
var CITY_ICON = document.querySelector("#title-img");
var CITY_NAME = document.querySelector("#city-name");
var CITY_SEARCH_INPUT = document.querySelector("#city-search");
var CITY_SEARCH_BUTTON = document.querySelector("#search-button");
var HUMIDITY = document.querySelector("#humidity");
var TEMP = document.querySelector("#temp");
var WIND = document.querySelector("#wind");
var UV_INDEX = document.querySelector("#uv-index");
var RECENT_SEARCHES = document.querySelector("#recent-searches");
var FIVE_DAY_CONTAINER = document.querySelector("#five-day-container")
var Moment = moment();

// Event listeners for search button and return key in search input
CITY_SEARCH_BUTTON.addEventListener("click", () => {
    fetchLatLon(CITY_SEARCH_INPUT.value);
});
CITY_SEARCH_INPUT.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) {
        CITY_SEARCH_BUTTON.click();
    }
});

