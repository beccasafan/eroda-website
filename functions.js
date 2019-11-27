// JavaScript Document

var square_banners = ["square-ad-00.png","square-ad-01.png","square-ad-02.png"];
var horiz_banners = ["horiz-ad-00.png","horiz-ad-01.png","horiz-ad-02.png"];

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