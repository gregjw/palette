document.addEventListener('DOMContentLoaded', function() {
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
    analytics.load("coilKhNu5rAGdAxjARgQSd25061ZLywc");
    analytics.page();
  }}();

  if(localStorage.getItem("colour0") != undefined){
    document.getElementById("topcolour").style.backgroundColor = localStorage.getItem("colour0")
    document.getElementById("bottomcolour").style.backgroundColor = localStorage.getItem("colour1")
  }

  function mixPalette(){
    var a, b = "";
    var palette = [
      ["#FF8B8B","#F9F8E6"],
      ["#F9F7E8","#62BFAD"],
      ["#61BFAD","#FFFFFF"],
      ["#E54B4B","#FFFFFF"],
      ["#167C80","#FFFFFF"],
      ["#B7E3E4","#F03F35"],
      ["#EFE8D8","#FF4552"],
      ["#OO5397","#E13334"],
      ["#32B67A","#FFFFFF"],
      ["#FACACO","#000000"],
      ["#F3C9DD","#CEECF7"],
      ["#OBBCD6","#E6625E"],
      ["#BFB5D7","#FFFFFF"],
      ["#BEA1A5","#2D1FE8"],
      ["#FOCF61","#EBE8E1"],
      ["#OE38B1","#FFFFFF"],
      ["#A6CFE2","#0B0C11"],
      ["#371722","#BBAB9B"],
      ["#C7C6C4","#008E8F"],
      ["#D9BAAD","#CF2F89"],
      ["#F1C3B8","#19227D"],
      ["#EF3E4A","#96CBD1"],
      ["#COC2CE","#FE667B"],
      ["#EECODB","#162BF4"],
      ["#B6CACO","#C02A1B"],
      ["#C5BEAA","#B32A48"],
      ["#FDFO6F","#D31B33"],
      ["#EDB5DB","#BEDFD4"],
      ["#17C37B","#FFFFFF"],
      ["#2C3979","#15A29C"],
      ["#1B1D1C","#EA1821"],
      ["#E88565","#181A27"],
      ["#FFEFE5","#1FC8A9"],
      ["#F4C7EE","#008FD3"],
      ["#77EEDF","#28292B"],
      ["#E57O66","#28292B"],
      ["#EED974","#28292B"],
      ["#FBFE56","#0B64C0"],
      ["#A7BBC3","#C886A2"],
      ["#3C485E","#E9E8D4"],
      ["#O55A5B","#E6E6E6"],
      ["#178E96","#FDE3C8"],
      ["#D3E8E1","#E44A66"],
      ["#CBAOAA","#FAE397"],
      ["#9C9CDD","#F9BDBD"],
      ["#20AD65","#FEC8BE"],
      ["#E75152","#58B89D"],
      ["#4F3A4B","#FBECCF"],
      ["#112378","#E75152"],
      ["#E33946","#FBECCF"]
    ];
    picked = palette[Math.floor((Math.random() * palette.length) + 1)];
    return picked
  }

  function generatePalette() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    else if (Notification.permission === "granted") {
      var array = mixPalette();
      document.getElementById("topcolour").style.backgroundColor = array[0];
      document.getElementById("bottomcolour").style.backgroundColor = array[1];
      localStorage.setItem("colour0", array[0]);
      localStorage.setItem("colour1", array[1]);
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if(!('permission' in Notification)) {
          Notification.permission = permission;
        }
        if (permission === "granted") {
          var array = mixPalette();
          document.getElementById("topcolour").style.backgroundColor = array[0];
          document.getElementById("bottomcolour").style.backgroundColor = array[1];
          localStorage.setItem("colour0", array[0]);
          localStorage.setItem("colour1", array[1]);
        }
      });
    }
  }

  var featherVisit = document.getElementById('feather-link');
  featherVisit.addEventListener('click', function() {
    chrome.tabs.update({url: "http://feather-cfm.com?ref=twenty"});
    window.close();
  });

  var featherVisitSubtitle = document.getElementById('feather-link-subtitle');
  featherVisitSubtitle.addEventListener('click', function() {
    chrome.tabs.update({url: "http://feather-cfm.com?ref=twenty"});
    window.close();
  });

  var checkPageButton = document.getElementById('startTimer');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {

      setTimeout(function(){
        chrome.browserAction.setIcon({path : "off.png"});
        generatePalette();
      }, 500);

      chrome.browserAction.setIcon({path : "on.png"});
    });
  }, false);

  var topColour = document.getElementById('topcolour');
  var bottomColour = document.getElementById('bottomcolour');

  topColour.addEventListener('click', function() {
    topColour.style.opacity = 0.8;
    bottomColour.style.opacity = 1;
    topColour.css("background-color").focus().select();
    document.execCommand('copy');
  }, false);

  bottomColour.addEventListener('click', function() {
    bottomColour.style.opacity = 0.8;
    topColour.style.opacity = 1;
    bottopColour.css("background-color").focus().select();
    document.execCommand('copy');
  }, false);
}, false);