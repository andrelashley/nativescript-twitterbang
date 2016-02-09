var app = require("application");
var platformModule = require("platform");
var color = require("color");
var twitterBang = require("nativescript-twitterbang");

function pageLoaded(args) {
    var page = args.object; 
    // Change statusbar color on Lollipop
    if (platformModule.device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow(); 
        window.setStatusBarColor(new color.Color("#D50000").android);
    }   
}
exports.pageLoaded = pageLoaded;

function bangThis(args) {
    var view = args.object.android;
    twitterBang.bang(view);
}
exports.bangThis = bangThis;

function bangHeart(args) {
    var view = args.object.android;
    twitterBang.bang(view);
    args.object.src = "~/images/twitterHeart.png";
}
exports.bangHeart = bangHeart;