"use strict";

let myHttp = new XMLHttpRequest();
let search = document.querySelector("#search");

myHttp.open(
  "GET",
  "https://api.weatherapi.com/v1/current.json?key=9fb8320fca4b4cb2b3c130440240201&q=London"
);

myHttp.send();

myHttp.addEventListener("readystatechange", function () {
  console.log(myHttp.readyState);
  if (myHttp.readyState == 4 && myHttp.status == 200) {
    let data = JSON.parse(myHttp.responseText);
    display(data);
  }
});

search.addEventListener("blur", function (e) {
  search.value = "";
});

function display(list) {
  let cartona = ``;
  cartona += `
    <div class="info-day col-md-4">
      <div class="today ">
        <div class="t-head py-2 px-1 d-flex justify-content-between align-items-center">
          <div class="day">${list.location.localtime}</div>
          <div class="date">${list.location.localtime.split(" ")[0]}</div>
        </div>
        <div class="t-body pb-3">
          <div class="container-fluid">
            <div class="location pt-3">${list.location.name}</div>
            <div class="num py-3 text-center text-white">${list.current.temp_c}<sup>o</sup>C</div>
            <div class="icon one">
              <i class="fa-solid fa-moon"></i>
            </div>
            <div class="custom mb-2">${list.current.condition.text}</div>
            <span class="small-icon">
              <i class="fa-solid fa-umbrella"></i>
              ${list.current.precip_mm}%
            </span>
            <span class="small-icon">
              <i class="fa-solid fa-meteor"></i>
              ${list.current.wind_kph}km/h
            </span>
            <span class="small-icon">
              <i class="fa-brands fa-creative-commons-sampling-plus"></i>
              ${list.current.wind_dir}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="info-day info-day-center text-center col-md-4">
      <div class="today">
        <div class="t-head py-2 px-1 d-flex justify-content-center align-items-center">
          <div class="day">${list.location.localtime}</div>
        </div>
        <div class="t-body pb-3">
          <div class="container-fluid">
            <div class="icon two pt-5 mt-3">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <div class="num2 fs-2 py-3 text-center text-white">${list.current.temp_f}<sup>o</sup>C</div>
            <p class="p">${list.current.wind_degree}<sup>o</sup></p>
            <div class="custom mb-2">${list.current.condition.text}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="info-day text-center col-md-4">
      <div class="today">
        <div class="t-head py-2 px-1 d-flex justify-content-center align-items-center">
          <div class="day">${list.location.localtime}</div>
        </div>
        <div class="t-body pb-3">
          <div class="container-fluid">
            <div class="icon three pt-5 mt-3">
              <i class="fa-solid fa-sun"></i>
            </div>
            <div class="num2 fs-2 py-3 text-center text-white">${list.current.temp_f}<sup>o</sup>C</div>
            <p class="p">${list.current.wind_mph}<sup>o</sup></p>
            <div class="custom mb-2">${list.current.condition.text}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;

  document.querySelector("#mydata").innerHTML = cartona;
}