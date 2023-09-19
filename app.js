"use strict";
let procitajViseAuto = null;
/*Global */
let cars = [
{
    proizvodjac: "Bugatti",
    model: "Chiron",
    boja: "Black",
    godiste: 2022,
    kilometraza: 5.000,
    transmisija: "Automatic",
    gorivo: "Petrol",
    broj_vrata: 2 / 3,
    kubikaza: 6.0,
    kilovata: 700,
    konjskih_snaga: 1300,
    pogon: "Rear",
    tip: "Sports Car",
    sjedecih_mjesta: 2,
    urlSlike: "assets/Bugatti.png",
    cijena: 6000000,
    cijenaUSD: "$6.000.000",

},
  {
    proizvodjac: "BMW",
    model: "120i",
    boja: "Red",
    godiste: 2007,
    kilometraza: 150.000,
    transmisija: "Manual",
    gorivo: "Petrol",
    broj_vrata: 4 / 5,
    kubikaza: 2.0,
    kilovata: 105,
    konjskih_snaga: 160,
    pogon: "4X4",
    tip: "Small Car",
    sjedecih_mjesta: 5,
    urlSlike: "assets/BMW 120i.png",
    cijena: 10000,
    cijenaUSD: "$10.000",
},
{
    proizvodjac: "Ferrari",
    model: "812",
    boja: "White",
    godiste: 2021,
    kilometraza: 23.000,
    transmisija: "Automatic",
    gorivo: "Petrol",
    broj_vrata: 2 / 3,
    kubikaza: 4.4,
    kilovata: 270,
    konjskih_snaga: 560,
    pogon: "Rear",
    tip: "Cabriolet",
    sjedecih_mjesta: 2,
    urlSlike: "assets/Ferrari.png",
    cijena: 350000,
    cijenaUSD: "$250.000",
},
{
    proizvodjac: "Koenigsegg",
    model: "Agera",
    boja: "Black",
    godiste: 2020,
    kilometraza: 14.000,
    transmisija: "Automatic",
    gorivo: "Petrol",
    broj_vrata: 2 / 3,
    kubikaza: 5.0,
    kilovata: 800,
    konjskih_snaga: 1600,
    pogon: "Rear",
    tip: "Sports Car",
    sjedecih_mjesta: 2,
    urlSlike: "assets/koenigsegg.png",
    cijena: 7000000,
    cijenaUSD: "$7.000.000",

},
{
    proizvodjac: "Lexus",
    model: "RZ",
    boja: "Black",
    godiste: 2023,
    kilometraza: 0,
    transmisija: "Automatic",
    gorivo: "Hybrid",
    broj_vrata: 4 / 5,
    kubikaza: 0.8,
    kilovata: 200,
    konjskih_snaga: 270,
    pogon: "4X4",
    tip: "SUV",
    sjedecih_mjesta: 5,
    urlSlike: "assets/lexus2.png",
    cijena: 59650,
    cijenaUSD: "$59.650",
},
{
    proizvodjac: "Ford",
    model: "Mustang",
    boja: "Beige",
    godiste: 1987,
    kilometraza: 130.000,
    transmisija: "Manual",
    gorivo: "Diezel",
    broj_vrata: 2 / 3,
    kubikaza: 2.5,
    kilovata: 130,
    konjskih_snaga: 245,
    pogon: "Rear",
    tip: "Coupe",
    sjedecih_mjesta: 5,
    urlSlike: "assets/mustang.png",
    cijena: 70000,
    cijenaUSD: "$70.000",
},
{
    proizvodjac: "Smart",
    model: "Fortwo",
    boja: "White",
    godiste: 2007,
    kilometraza: 220.000,
    transmisija: "Manual",
    gorivo: "Diezel",
    broj_vrata: 2 / 3,
    kubikaza: 1.2,
    kilovata: 40,
    konjskih_snaga: 80,
    pogon: "Front",
    tip: "Small Car",
    sjedecih_mjesta: 2,
    urlSlike: "assets/Smart.png",
    cijena: 3000,
    cijenaUSD: "$3.000",
},  
{
  proizvodjac: "Tata",
  model: "Nexon",
  boja: "Blue",
  godiste: 2021,
  kilometraza: 3.000,
  transmisija: "Automatic",
  gorivo: "Diezel",
  broj_vrata: 4 / 5,
  kubikaza: 2.0,
  kilovata: 80,
  konjskih_snaga: 170,
  pogon: "Front",
  tip: "SUV",
  sjedecih_mjesta: 5,
  urlSlike: "assets/tata.png",
  cijena: 32000,
  cijenaUSD: "$32.000",
},
{
  proizvodjac: "Volvo",
  model: "S60",
  boja: "Red",
  godiste: 2023,
  kilometraza: 0,
  transmisija: "Automatic",
  gorivo: "Petrol",
  broj_vrata: 4 / 5,
  kubikaza: 2.5,
  kilovata: 140,
  konjskih_snaga: 210,
  pogon: "4X4",
  tip: "Saloon",
  sjedecih_mjesta: 5,
  urlSlike: "assets/volvo.png",
  cijena: 90000,
  cijenaUSD: "$90.000",
}
];

let users = [{
    username: "imran.k",
    email: "imran@gmail.com",
    password: "1234"
}];

function User(ime, email, password) {
    this.ime = ime;
    this.email = email;
    this.password = password;
};

function signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = new User(username, email, password);
    const postojeciKorisnikUsername = users.find(k => k.username === users.username);
    const postojeciKorisnikEmail = users.find(k => k.email === users.email);

    if (postojeciKorisnikUsername) {
        document.getElementById("poruka").innerHTML = "Account already exist!"
    } else if (postojeciKorisnikEmail) {
        document.getElementById("poruka").innerHTML = "Account already exist!"
    } else {
        users.push(user);
        document.getElementById("poruka").innerHTML = 'Account is successfully created!';
    }
}

function login() {
    debugger;
    const username = document.getElementById("username").value;
    const user = users.find((element) => element.username === username);
    const postojiUser = user != undefined;
    if (postojiUser) {
        const password = document.getElementById("password").value;
        if (user.password === password) {
            window.open("loginMessage.html", "_self");
        } else {
            document.getElementById("poruka").innerHTML = 'You have entered incorrect password or username!';
        }
    } else {
        document.getElementById("poruka").innerHTML = 'Account does not exist, please sign up!';

    }
}

function loadCars() {
    cars.forEach((element) => {
        document.getElementById("cars-section").innerHTML += `<div class="card">
        <img src="${element.urlSlike}" alt="${element.model}" style="width:100%">
        <h1>${element.proizvodjac}</h1>
        <p class="price">${element.cijenaUSD} </p>
        <p>Details</p>
        Kilometre: ${element.kilometraza}, 
        Body Type: ${element.tip}, 
        Number of Seats: ${element.sjedecih_mjesta},
        Power HP: ${element.konjskih_snaga},
        Transmission: ${element.transmisija}</p>
      </div>`;
    })
}
loadCars();

//Kategorija All
function loadAllCars() {
    let pozadina = document.getElementById("background");
    if (pozadina != null && pozadina != undefined) {
        document.getElementById("background").remove();
    }
    document.getElementById("cars-section").innerHTML = "";
    cars.forEach((element) => {
        document.getElementById("cars-section").innerHTML += `<div class="card">
        <img src="${element.urlSlike}" alt="${element.model}" style="width:100%">
        <h1>${element.proizvodjac}</h1>
        <p class="price">${element.cijenaUSD}</p>
        <p class="price">${element.cijenaUSD} </p>
        <p>Details</p>
        Kilometre: ${element.kilometraza}, 
        Body Type: ${element.tip}, 
        Number of Seats: ${element.sjedecih_mjesta},
        Power HP: ${element.konjskih_snaga},
        Transmission: ${element.transmisija} </p>
      </div>`;
    })
}

//Kategorija Under 20k
function loadLess20k() {
    let pozadina = document.getElementById("background");
    if (pozadina != null && pozadina != undefined) {
        document.getElementById("background").remove();
    }
    document.getElementById("cars-section").innerHTML = "";
    cars.forEach((element) => {
        debugger;
        if (element.cijena < 20000) {
            document.getElementById("cars-section").innerHTML += `<div class="card">
        <img src="${element.urlSlike}" alt="${element.model}" style="width:100%">
        <h1>${element.proizvodjac}</h1>
        <p class="price">${element.cijenaUSD}</p>
        <p>Details</p>
        Kilometre: ${element.kilometraza}, 
        Body Type: ${element.tip}, 
        Number of Seats: ${element.sjedecih_mjesta},
        Power HP: ${element.konjskih_snaga},
        Transmission: ${element.transmisija} </p>
      </div>`;
        };
    })
}

//Automatic categorija
function loadAutomatic() {
    let pozadina = document.getElementById("background");
    if (pozadina != null && pozadina != undefined) {
        document.getElementById("background").remove();
    }
    document.getElementById("cars-section").innerHTML = "";
    cars.forEach((element) => {
        debugger;
        if (element.transmisija === "Automatic") {
            document.getElementById("cars-section").innerHTML += `<div class="card">
        <img src="${element.urlSlike}" alt="${element.model}" style="width:100%">
        <h1>${element.proizvodjac}</h1>
        <p class="price">${element.cijenaUSD}</p>
        <p>Details</p>
        Kilometre: ${element.kilometraza}, 
        Body Type: ${element.tip}, 
        Number of Seats: ${element.sjedecih_mjesta},
        Power HP: ${element.konjskih_snaga},
        Transmission: ${element.transmisija} </p>
      </div>`;
        };
    })
}

//Manual categorija
function loadManual() {
    let pozadina = document.getElementById("background");
    if (pozadina != null && pozadina != undefined) {
        document.getElementById("background").remove();
    }
    document.getElementById("cars-section").innerHTML = "";
    cars.forEach((element) => {
        debugger;
        if (element.transmisija === "Manual") {
            document.getElementById("cars-section").innerHTML += `<div class="card">
        <img src="${element.urlSlike}" alt="${element.model}" style="width:100%">
        <h1>${element.proizvodjac}</h1>
        <p class="price">${element.cijenaUSD}</p>
        <p>Details</p>
        Kilometre: ${element.kilometraza}, 
        Body Type: ${element.tip}, 
        Number of Seats: ${element.sjedecih_mjesta},
        Power HP: ${element.konjskih_snaga},
        Transmission: ${element.transmisija} </p>
      </div>`;
        };
    })
}