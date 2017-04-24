var divDomTarget = document.getElementById("dog-food");
var divDomTarget2 = document.getElementById("cat-food");

// DOG FOODS
var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestSucess);
dataRequest.addEventListener("error", dataRequestFail);

function dataRequestSucess(event) {
    var data = JSON.parse(event.target.responseText);
    writeData(data);
}
function dataRequestFail(event) {
    alert("Data Request Failed");
}
function writeData(data) {
    var toWrite = `<h1>Dog Food</h1>`;
    var brands = data.dogbrands;
    for (var i = 0; i < brands.length; i++) {
        var brandTypes = brands[i].types;
        toWrite += `<div><h3><strong>${brands[i].name.toUpperCase()}</strong></h3><hr>`
        // console.log(brandTypes);
        for (var j = 0; j < brandTypes.length; j++) {
            var volumes = brandTypes[j].volumes;
            toWrite += `<h4>${brandTypes[j].type.toUpperCase()}</h4>`;
            // console.log(brandTypes[j]);
            for (var x = 0; x < volumes.length; x++) {
                toWrite += `<p>${volumes[x].name} - ${volumes[x].price}</p>`;
                console.log(toWrite);
                divDomTarget.innerHTML = toWrite + `</div>`;
            }
        }
    }
}
dataRequest.open("GET", "dogfood.json");
dataRequest.send();

// CAT FOODS
var dataRequest2 = new XMLHttpRequest();

dataRequest2.addEventListener("load", dataRequest2Sucess);
dataRequest2.addEventListener("error", dataRequest2Fail);

function dataRequest2Sucess(event) {
    var data = JSON.parse(event.target.responseText);
    writeData2(data);
}
function dataRequest2Fail(event) {
    alert("Data Request Failed");
}
function writeData2(data) {
    var toWrite = `<h1>Cat Food</h1>`;
    var brands = data.catbrands;
    for (var i = 0; i < brands.length; i++) {
        var brandTypes = brands[i].types;
        toWrite += `<div><h3><strong>${brands[i].name.toUpperCase()}</strong></h3><hr>`
        // console.log(brandTypes);
        for (var j = 0; j < brandTypes.length; j++) {
            var volumes = brandTypes[j].volumes;
            toWrite += `<h4>${brandTypes[j].type.toUpperCase()}</h4>`;
            // console.log(brandTypes[j]);
            for (var x = 0; x < volumes.length; x++) {
                toWrite += `<p>${volumes[x].name} - ${volumes[x].price}</p>`;
                console.log(toWrite);
                divDomTarget2.innerHTML = toWrite + `</div>`;
            }
        }
    }
}
dataRequest2.open("GET", "catfood.json");
dataRequest2.send();

