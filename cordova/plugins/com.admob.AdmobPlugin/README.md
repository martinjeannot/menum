admob phonegap(cordova) plugin
====================

admob phonegap(cordova) plugin，support ios and android<br/>
build base on phonegap 3.4 or cordova 3.5<br/>
home:https://github.com/gooogleadmob/phonegap-admob-plugin/<br/>
phonegap:http://docs.phonegap.com/en/edge/guide_cli_index.md.html#The%20Command-line%20Interface  <br/>

###how to install google admob phonegap plugin?
use the cordova command<br/>
cordova plugin add https://github.com/gooogleadmob/phonegap-admob-plugin/<br/>
or download the plugin ,then install with local location<br/>
cordova plugin add c:\phonegap-admob-plugin<br/>

how to use admob phonegap plugin?<br/>
###1.create and show admob banner ad in html5 app
```
    function showBanner() {
        var successCreateBannerView = function () {
            admobAd.showBanner(admobAd.AD_POSITION.BOTTOM_CENTER);//show banner at the bottom center 
        };
        var errorCreateBannerView = function (message) {
            console.log("create ad fail " + message);
        };
         admobAd.initBanner("your admob id here", admobAd.AD_SIZE.BANNER.width, admobAd.AD_SIZE.BANNER.height, successCreateBannerView, errorCreateBannerView);//create admob banner
    }
    showBanner();
```
###2.show admob Interstitial in cordova app ：
```
 function onInterstitialReceive(message) {
     admobAd.showInterstitial();//show Interstitial after receive or after game over
 }
 function successCreateInterstitial() {
     admobAd.cacheInterstitial();// load admob Interstitial
 }
  document.addEventListener('onAdmobInterstitialReceive', this.onInterstitialReceive, false);//handler admob event
  admobAd.initInterstitial("your admob id here", successCreateInterstitial);//create Interstitial ad

```
###3.handle admob ad event
you can handler all native event of admob ,as onInterstitialReceive <br/>
all event type is in AdEvent<br/>
```
document.addEventListener('onAdmobBannerDismiss', this.onAdmobEvent, false);
document.addEventListener('onAdmobBannerFailedReceive', this.onAdmobEvent, false);
document.addEventListener('onAdmobBannerLeaveApplication', this.onAdmobEvent, false);
document.addEventListener('onAdmobBannerPresent', this.onAdmobEvent, false);
document.addEventListener('onAdmobBannerReceive', this.onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialDismiss', this.onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialFailedReceive', this.onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialLeaveApplication', this.onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialPresent', this.onAdmobEvent, false);
document.addEventListener('onAdmobInterstitialReceive', this.onAdmobEvent, false);
```
###more function
1.show admob banner with Absolute position<br/>
showBannerAbsolute(x,y, successCallback, failureCallback)<br/>
2.hide admob banner<br/>
hideBanner()<br/>
3.test if Interstitial has loaded success<br/>
function isInterstitialReady( successCallback, failureCallback) <br/>
4.for more usage ,ref to index.js<br/>

contact:gooogleadmob@gmail.com
