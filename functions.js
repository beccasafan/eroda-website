// JavaScript Document

var square_banners = ["ay-square-anim-01.gif", "ay-square-anim-00.gif"];
var horiz_banners = ["ay-horiz-anim-00.gif", "ay-horiz-anim-01.gif"];

function getRandomSquare(imgAr, path) {
    path = path || '../images/'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "Ad">';
    document.querySelector("#square-banner a").innerHTML = imgStr;    
}

function getRandomHoriz(imgAr, path) {
    path = path || '../images/'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "Ad">';
    document.querySelector("#banner a").innerHTML = imgStr;
    
}