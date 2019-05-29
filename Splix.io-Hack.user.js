// ==UserScript==
// @name         Splix.io Hack
// @description  Splixio Mods Features: Zoom Hack, Stop Your Player, Change Everything, Bot, FPS
// @namespace    GameHackerC
// @author       GameHackerC
// @version      1.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/splixio.user.js
// @downloadURL  https://iomods.org/mods/splixio.user.js
// @match        *://splix.io/*
// @match        *sandbox.moomoo.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==
setTimeout(function() {
//tanitim belgeseli
var colorize,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "IOGAMESLIST.ORG", "IOMODS.ORG", "IO-OYUNLAR.COM"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "SLITHERE.COM" || value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET") { colorize = true; } else { colorize = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
if(colorize == false){ministyler = "color:white;font-size:12px;padding:3px;";} else {ministyler = "color:yellow;font-size:12px;padding:3px;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+'</a> - ';
}

//genel isimlendirme ve ayarlar
 this.settings = {
            feature1: "Show FPS",
            feature2: "Zoom Hack",
            feature3: "Unlock Skins",
            feature4: "Auto Turn Bot",
            feature5: "Faster Movement",
            feature6: "Zoom IN/Out",
            feature7: "Stop Player -P Key-",
            feature8: "Auto Base",
            feature9: "Extra Features+",
            feature10: "Adblock Plus+",
            feature11: "Zoom In/Out",
            feature12: "Rainbow BG",
            feature13: "Change BG",
     l1: "slithere.com",
     l2: "krunkerio.net",
     l3: "krunkerio.org",
     l4: "zombsroyaleio.org",
     l5: "survivio.info",
     l6: "skribbl-io.net",
     l7: "mope-io.net",
     l8: "moomooioplay.com",
     l9: "shellshockio.org",
     l10: "iogameslist.org",
     l11: "shellshockio.org",
     l12: "diepioplay.com",
     l13: "diepioplay.org",
     string: "<a style=\"padding-right: 2px;\"></a><font color=\"black\">-</font><a style=\"padding-left: 6px;\"></a>",
     buttonpadder: "padding-left: 2px;",
     locationer: "location=yes,scrollbars=yes,status=yes,height=570,width=520",
     locationer2: "location=yes,scrollbars=yes,status=yes,left=800,height=570,width=520",
	 optionstyler: "font-weight:bold;color:black;font-size:14px;",
     optionstyler2: "font-weight:bold;color:black;font-size:14px;",
     optionstyler3: "color:black;font-size:11px;",
     facebooker: '<div id="fb-root" style="display: inline-block;"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v3.2"></script><div class="fb-like" style="display: inline-block;" data-href="https://facebook.com/slitherecom" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>',
     youtuber: "<script src=\"https://apis.google.com/js/platform.js\"></script><div class=\"g-ytsubscribe\" data-channelid=\"UCy6xGaMhm74YeHMDGgEr7kg\" data-layout=\"default\" style=\"display: inline-block;\" data-count=\"default\"></div>",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     tablostyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(255, 255, 255, 0.3);",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
   	 imagelist: '<a href="https://instagram.com/aecicekdagi" target="_blank"><img src="https://iomods.org/mods/instagram.jpg"></a> <a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg"></a> <a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg"></a></br>',
};

//degisenkisimlar
$('#leaderboard').append('<div style="'+this.settings.fpsstyle+'" id="fps" class="fps"></div>');
$('#nameForm').prepend('<div style="'+this.settings.fpsstyle+'" id="fps2" class="fps2"></div>');
$('#newsbox').prepend('<div style="'+this.settings.formstyle+'"><div class="option1"></div>'+this.settings.imagelist+''+this.settings.youtuber+''+this.settings.facebooker+'</div>');
$('#expandPage').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l1+'" target="blank">'+this.settings.feature1+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\'http://'+this.settings.l1+'\', \'_blank\', \''+this.settings.locationer+'\');" checked></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l2+'" target="blank">'+this.settings.feature2+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="allgame" onchange="window.open(\'http://'+this.settings.l2+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option1').on('click', '.allgame', function() { zoomhackuser(); });
$('.option2').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l3+'" target="blank">'+this.settings.feature3+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="allskins" onchange="window.open(\'http://'+this.settings.l3+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l4+'" target="blank">'+this.settings.feature4+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="highestscore" onchange="window.open(\'http://'+this.settings.l4+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option3"></div>');
$('.option2').on('click', '.allskins', function() { getskin(); });
$('.option2').on('click', '.highestscore', function() { edithighs(); });
$('.option3').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l5+'" target="blank">'+this.settings.feature5+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="serverch" onchange="window.open(\'http://'+this.settings.l5+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l6+'" target="blank">'+this.settings.feature6+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="skinindexer" onchange="window.open(\'http://'+this.settings.l6+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option4"></div>');
$('.option3').on('click', '.serverch', function() { editserver(); });
$('.option3').on('click', '.skinindexer', function() { editskinstate(); });
$('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l7+'" target="blank">'+this.settings.feature7+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="susername" onchange="window.open(\'http://'+this.settings.l7+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l8+'" target="blank">'+this.settings.feature8+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l8+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option5"></div>');
$('.option4').on('click', '.susername', function() { editsname(); });
$('.option5').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l9+'" target="blank">'+this.settings.feature9+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l9+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l10+'" target="blank">'+this.settings.feature10+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l10+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l12+'" target="blank">'+this.settings.feature12+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\'http://'+this.settings.l12+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l13+'" target="blank">'+this.settings.feature13+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\'http://'+this.settings.l13+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option7"></div>');
$('.option6').on('change', '.renkcont', function() { colorfulmod(); });
$('.option6').on('change', '.bgcont', function() { changebackground(); });
$('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l11+'" target="blank">'+this.settings.feature11+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+this.settings.l11+'\', \'_blank\', \''+this.settings.locationer2+'\');"> <a style="'+this.settings.optionstyler3+'" href="http://'+this.settings.l11+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option7').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.settings.liststyler+'">'+text+'</div>');
    }, 0);

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps2').innerHTML = 'FPS: ' + fps;
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
      var x2 = document.getElementById("fps2");
  if (x2.style.display === "none") {
    x2.style.display = "block";
  } else {
    x2.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    $('#beginScreen').css('background-color',''+changecolor+'');
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
                $("#beginScreen").css("background-color",selectedcolor);

      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}


(function() {

      window.addEventListener("load", function(){

        var game = {};

        setTimeout(function(){

            MAX_ZOOM = 10000;
            //BLOCKS_ON_SCREEN = 10000;
            USERNAME_SIZE = 6;
        }, 2000);



        var mouseWheelEvt= ((/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel");

        document.body.addEventListener(mouseWheelEvt, WheelHandler, true);

       function WheelHandler(event) {
           var zoom = BLOCKS_ON_SCREEN * Math.pow(0.93, event.wheelDelta / 120 || -event.detail || 0);
           if(zoom < 100) BLOCKS_ON_SCREEN = 100;
           else if(zoom > 16000) BLOCKS_ON_SCREEN = 16000;
           else BLOCKS_ON_SCREEN = zoom;
        }


        var leaderboard = document.getElementById("leaderboard");
        leaderboard.style.top = "48px";
        var myCssText = "color:white; font-weight: 700; position:fixed; right:  13px; top: 8px; z-index:100; padding: 5px 10px; opacity: .7; transform-orign: right top;";

        var myDiv = document.createElement("div");
        myDiv.className  = "greenBox";
          myDiv.id  = "greenBoxes";
        myDiv.style.cssText = myCssText;
        myDiv.innerHTML = "SLITHERE.COM - IOGAMESLIST.ORG";


        leaderboard.parentNode.insertBefore(myDiv, leaderboard.nextSibling);

        uiElems.push(myDiv);


        var paused = false;
        var loop = setInterval(function(){
                if(paused) {
                    sendDir((myPlayer.dir + 1)%4);
                }
            }, 100);

        window.addEventListener("keyup", function(e){
            if(e.keyCode == 80) paused ^= true;
        });

        var nameForm = document.getElementById("nameForm");
        var myBox = document.createElement("div");
        var br = document.createElement("br");


        nameForm.insertAdjacentHTML("beforeEnd", "<br><select style='float:left; margin-top: 20px; background:#bdf7c4' id='_servers' class='fancyBox'><option selected value='#'>Loading servers...</option></select>");


        var interval;

        var hashes = [];

        window.searchServersRecursive = function(obj, ping){
           if(obj && obj.hash) {
                  hashes.push({hash: obj.hash, ping: ping});
                  return;
           }
           if(Array.isArray(obj)) for(var i=0; i<obj.length; i++) searchServersRecursive(obj[i], ping);
           else {
              var arr = Object.getOwnPropertyNames(obj);
              if(arr[0] == "0") return;
              for(var i=0; i<arr.length; i++) {
                if(Array.isArray(obj[arr[i]])) searchServersRecursive(obj[arr[i]], ping);
              }
            }
        };


        function no0(){
          for (var i=0; i<window.servers.length; i++){
            if(window.servers[i].avgPing === 0) return false;
          }
          return true;
        }

        interval = setInterval(function(){
          if(window.servers.length > 0 && no0()) {
            clearInterval(interval);
            var no = 1 ;
            var options = "<option>Select server</option>";

            for(var i=0; i<servers.length; i++) searchServersRecursive(servers[i], servers[i].avgPing);

            hashes.sort(function(a, b){return a.ping - b.ping });

            for(var i=0; i<hashes.length; i++)
                  options += "\n<option value='#"+hashes[i].hash+"'>"+(no++)+". #" + hashes[i].hash + " ( " + hashes[i].ping + " )</option>";

            document.getElementById("_servers").innerHTML = options;
            if(window.location.hash.indexOf("#") != -1) document.getElementById("_servers").value = window.location.hash;
          }

        },100);

        var myStyle = (function() {
              var style = document.createElement("style");
              style.appendChild(document.createTextNode(""));
              document.head.appendChild(style);
              return style;
        })();

        var cssRules = document.styleSheets[0]["cssRules"];
        for(var i=0; i<cssRules.length; i++){

            if(cssRules[i].cssText.indexOf("#nameInput")!=-1) {

              var rule = "#_servers" + cssRules[i].cssText.match(/{.*}/)[0];
              rule = rule.replace("-webkit-appearance: none;", "");
              myStyle.sheet.insertRule(rule, 0);
           }
        }



        document.getElementById("_servers").onchange = function(){
          window.location.assign(document.getElementById("_servers").value);
        };



        var _showBegin = showBegin;
        var _hideBegin = hideBegin;


        window.showBegin = function(){
          if(window.location.hash.indexOf("#") != -1) document.getElementById("_servers").value = window.location.hash;
          _showBegin();
        };
    });
  })();
