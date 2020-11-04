jQuery(document).ready(function(){


// loader
setTimeout(function(){ 

$('.loader').fadeOut(); }, 1000);




var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
    },
    scrollContainer: null,  
    resetAnimation: true,  
  }
);
wow.init();


// scroll-Top

$(window).scroll(function(){
  if($(this).scrollTop() > 500){
    $('.scrolltotop').fadeIn();
  }
  else{
    $('.scrolltotop').fadeOut();
  }
   
   
});
   
$('.scrolltotop').click(function(){
  $('html,body').animate({scrollTop:0}, 1000);
  return false;
});



// run this when browser is ready
(() => {
  let player = videojs("my_video_1");
  player.addClass('next-ems-player');

  let qualityLevels = player.qualityLevels();

  // disable quality levels with less than 720 horizontal lines of resolution when added
  // to the list.
  qualityLevels.on("addqualitylevel", function (event) {
    let qualityLevel = event.qualityLevel;

    if (qualityLevel.height >= 720) {
      qualityLevel.enabled = true;
    } else {
      qualityLevel.enabled = false;
    }
  });

  // example function that will toggle quality levels between SD and HD, defining and HD
  // quality as having 720 horizontal lines of resolution or more
  let toggleQuality = (function () {
    let enable720 = true;

    return function () {
      for (var i = 0; i < qualityLevels.length; i++) {
        let qualityLevel = qualityLevels[i];
        if (qualityLevel.height >= 720) {
          qualityLevel.enabled = enable720;
        } else {
          qualityLevel.enabled = !enable720;
        }
      }
      enable720 = !enable720;
    };
  })();

  let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex; // -1 if no level selected

  // Listen to change events for when the player selects a new quality level
  qualityLevels.on("change", function () {
    console.log("Quality Level changed!");
    console.log("New level:", qualityLevels[qualityLevels.selectedIndex]);
  });

  console.log("all quality levels: ", player.qualityLevels());

  console.log(player);
  player.selectorQuality();
})();



// run this when browser is ready
(() => {
  let player = videojs("my_video_2");
  player.addClass('next-ems-player');

  let qualityLevels = player.qualityLevels();

  // disable quality levels with less than 720 horizontal lines of resolution when added
  // to the list.
  qualityLevels.on("addqualitylevel", function (event) {
    let qualityLevel = event.qualityLevel;

    if (qualityLevel.height >= 720) {
      qualityLevel.enabled = true;
    } else {
      qualityLevel.enabled = false;
    }
  });

  // example function that will toggle quality levels between SD and HD, defining and HD
  // quality as having 720 horizontal lines of resolution or more
  let toggleQuality = (function () {
    let enable720 = true;

    return function () {
      for (var i = 0; i < qualityLevels.length; i++) {
        let qualityLevel = qualityLevels[i];
        if (qualityLevel.height >= 720) {
          qualityLevel.enabled = enable720;
        } else {
          qualityLevel.enabled = !enable720;
        }
      }
      enable720 = !enable720;
    };
  })();

  let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex; // -1 if no level selected

  // Listen to change events for when the player selects a new quality level
  qualityLevels.on("change", function () {
    console.log("Quality Level changed!");
    console.log("New level:", qualityLevels[qualityLevels.selectedIndex]);
  });

  console.log("all quality levels: ", player.qualityLevels());

  console.log(player);
  player.selectorQuality();
})();





// run this when browser is ready
(() => {
  let player = videojs("my_video_3");
  player.addClass('next-ems-player');

  let qualityLevels = player.qualityLevels();

  // disable quality levels with less than 720 horizontal lines of resolution when added
  // to the list.
  qualityLevels.on("addqualitylevel", function (event) {
    let qualityLevel = event.qualityLevel;

    if (qualityLevel.height >= 720) {
      qualityLevel.enabled = true;
    } else {
      qualityLevel.enabled = false;
    }
  });

  // example function that will toggle quality levels between SD and HD, defining and HD
  // quality as having 720 horizontal lines of resolution or more
  let toggleQuality = (function () {
    let enable720 = true;

    return function () {
      for (var i = 0; i < qualityLevels.length; i++) {
        let qualityLevel = qualityLevels[i];
        if (qualityLevel.height >= 720) {
          qualityLevel.enabled = enable720;
        } else {
          qualityLevel.enabled = !enable720;
        }
      }
      enable720 = !enable720;
    };
  })();

  let currentSelectedQualityLevelIndex = qualityLevels.selectedIndex; // -1 if no level selected

  // Listen to change events for when the player selects a new quality level
  qualityLevels.on("change", function () {
    console.log("Quality Level changed!");
    console.log("New level:", qualityLevels[qualityLevels.selectedIndex]);
  });

  console.log("all quality levels: ", player.qualityLevels());

  console.log(player);
  player.selectorQuality();
})();






});

