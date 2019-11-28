var nightTheme = {
    ParticleColor:"#ffffff",
    ParticleLineColor:"#ffffff",
    BodyBackground:"black",
    ParticleOpacity:"0.3286994724774322",
    MenuColor:"white",
    LogoNameColor :"#6589BA",
    oddColor: "#6589BA",
    evenColor:"white",
    TimeLineLine:"white",
    TimeLineContentBackground:"rgba(0,0,0,0.5)",
    TimeLineArrowColor:"white",
    DayNightDullColor:"#444343",
    ContactImages:"black",
    buttonColor:"black",
    buttonBorder:"1px solid white"
}
var dayTheme ={
  ParticleColor:"#6610f2",
  ParticleOpacity: "0.3286994724774322",
  ParticleLineColor:"#000",
  BodyBackground:"white",
  MenuColor:"#424288",
  LogoNameColor :"#424288",
  oddColor:"#424288",
  evenColor:"black",
  TimeLineLine:"#aba6a6",
  TimeLineContentBackground:"#cec9c9",
  TimeLineArrowColor:"#cec9c9",
  DayNightDullColor:"#bfbdbd",
  ContactImages:"day",
  buttonColor:"#424288",
  buttonBorder:"0px"
  // slickColor

}

function setSiteTheme(value){
  var currentTheme;
  switch(value){
    case "day": 
      currentTheme= dayTheme;
    break;
    case "night":
      currentTheme=nightTheme;
    break;
  }
  $("#pageBody").css('background-color', currentTheme.BodyBackground);
  particleBackground.particles.color.value=currentTheme.ParticleColor;
  particleBackground.particles.opacity.value=currentTheme.ParticleOpacity;
  particleBackground.particles.line_linked.color=currentTheme.ParticleLineColor;
  $("#logoName").css("color",currentTheme.LogoNameColor);
  $(".odd").css("color",currentTheme.oddColor);
  $(".even").css("color",currentTheme.evenColor);
  var styleElem = document.head.appendChild(document.createElement("style"));
  styleElem.innerHTML = " .scroll-down:before { border: 2px solid "+currentTheme.oddColor+";border-width: 0px 0 2px 2px;}::-webkit-scrollbar-thumb {background:"+currentTheme.oddColor+"; border-radius: 10px;}"+
                        ".slick-next:before {color:"+currentTheme.oddColor+"} .slick-prev:before {color:"+currentTheme.oddColor+"}"
                        +".cd-timeline__container::before {background:"+currentTheme.TimeLineLine+";}";
  $(".cd-timeline__img").css("box-shadow","0 0 0 4px "+currentTheme.TimeLineLine+", inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)");
  $(".cd-timeline__img").css("background",currentTheme.BodyBackground);
  $(".cd-timeline__content").css("background",currentTheme.TimeLineContentBackground);
  let root = document.documentElement;
  root.style.setProperty('--color-white',currentTheme.TimeLineArrowColor);
  $(".slick-arrow").css("color",currentTheme.oddColor);
  $(".day-night-icon").css("color",currentTheme.DayNightDullColor);
  $(".active-icon").css("color",currentTheme.oddColor);
  $("#SubmitForm").css("background",currentTheme.buttonColor);
  $("#SubmitForm").css("border",currentTheme.buttonBorder);

  // $(".odd").removeClass("text-anchor");
  $(".highlight-text").removeClass("highlight-text").delay(1000).queue(function(next){
    $(this).addClass('highlight-text');
    next();
  });
  $("#github").attr("src","img/github-"+currentTheme.ContactImages+".png");
  $("#gmail").attr("src","img/gmail-"+currentTheme.ContactImages+".png");
  $("#linkedin").attr("src","img/linkedin-"+currentTheme.ContactImages+".png");
  // $("#titleAnchor").addClass("highlight-text");
  // $(".odd").addClass("text-anchor");
  $(".nav-head").css("color",currentTheme.MenuColor);
  // $(".nav-bar").css("background-color",currentTheme.MenuColor);
  particlesJS("background", particleBackground);
  // console.log("changed site theme");
}
var particleBackground= {
  "particles": {
      "number": {
        "value": 5,
        "density": {
          "enable": true,
          "value_area": 600.0236182596568
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "https://www.sprinklr.com/wp-content/themes/sprinklr/assets/images/logo_sprinklr.svg",
          "width": 10,
          "height": 10
        }
      },
      "opacity": {
        "value": 0.3286994724774322,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 47.34885849793636,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 9.59040959040959,
          "size_min": 5.594405594405594,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6.413648243462092,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 320.6824121731046,
          "rotateY": 481.0236182596568
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
}
$(document).ready(function(){
  var clientTime=new Date();
  
  if(localStorage.getItem('ThemePreference')=="night" || (!localStorage.getItem('ThemePreference') &&(clientTime.getHours()>=21 || clientTime.getHours()<=6)) ){
    setSiteTheme("night");
    $('.toggle-switch').attr('data-checked',"true");
    $(".active-icon").removeClass("active-icon");
    $('#icon-moon').addClass('active-icon');
  }
  else{
    $('.toggle-switch').attr('data-checked',"false");
    $('.toggle-switch').click();
    $("#icon-moon").removeClass("active-icon");
    $('#icon-sun').addClass('active-icon');
    setSiteTheme("day");
  }
  $(document).on('input propertychange', "#FeedbackContent", function () {
    if($("#FeedbackContent").val()){
      $("#SubmitForm").removeAttr('disabled');
    $("#SubmitForm").css('cursor',"pointer");
    }
    else{
    $("#SubmitForm").attr('disabled','disabled'); 
    $("#SubmitForm").css('cursor',"not-allowed");
    }
});
  
  $("#SubmitForm").click(function(){
    $("#SubmitForm").attr('disabled','disabled'); 
    $("#SubmitForm").css('cursor',"not-allowed"); 
    $("#Feedbackform").fadeOut(100);
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbzAmUVN25YsvZibfjSqL2bajG2QU2dd0Vuyfi_6ug/exec",
      data: $("#Feedbackform").serialize(), 
      success: function(data)
      {
      }
    });
  
    $("#ThankyouMessage").fadeIn(1500);
  });
  $('.toggle-switch').on('click', function() {
    $('#icon-sun').toggleClass('active-icon');
    $('#icon-moon').toggleClass('active-icon');
    if( $('.toggle-switch').attr('data-checked')=="true"){
      $('.toggle-switch').attr('data-checked',"false");
      setSiteTheme("day");
      localStorage.setItem('ThemePreference', "day");
    }
    else{
      $('.toggle-switch').attr('data-checked',"true"); 
      setSiteTheme("night");   
      localStorage.setItem("ThemePreference","night")  
    }
  });
  var loading = $(".loading");
  // loading.delay(loading.attr("delay-hide")).slideUp();
    $("#closePopup").click(function(){
      $("#popup1").hide();
    })
    particlesJS("background", particleBackground
   );
    $('.scroller').on('click', function(e) {
      e.preventDefault();
      var time =  $(this).data("time");
      time = time?time:1000; 
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top+2}, time, 'linear');
    });
    loading.fadeOut(3000);
    var typed = new Typed("#aboutMe", {
        strings: ["Hello, World!","This is "],
        typeSpeed: 60,
        backSpeed: 0,
        backDelay: 0,
        cursor:" ",
        onComplete: function(self) { var typed = new Typed("#wrongText", {strings: ["S",""],
            typeSpeed: 60,showCursor: false,smartBackspace: false,
            onComplete: function(pos, self) { 
                var typed = new Typed("#myName", {strings: ["Sri Manikanta Palakollu"],
                typeSpeed:60,showCursor: false,loop: false,backDelay: 0,
                onStart:function(pos, self){
                }
            });
            var typed = new Typed("#logoName", {strings: ["Sri Manikanta Palakollu"], typeSpeed: 60,
            onComplete: function(pos, self) { 
                $("#myText").addClass("tracking-out-contract-bck");
                setTimeout(function(){
                    $("#myText").removeClass("tracking-out-contract-bck");
                    $("#myText").hide();
                    $("#myText").html("Hello World, This is Sri Manikanta Palakollu");
                    $("#myText").fadeIn(2000);
                    $("#titleAnchor").fadeIn(1000);
                    $("#MessageTo").fadeIn(1000);
                    $("#titleAnchor").addClass("highlight-text");
                    $("#scroll-message").fadeIn(3000);
                }, 1000);
                },
            backDelay: 0,showCursor: false,loop: false});
            
            } ,
            }); },
        showCursor: false,
        smartBackspace: true,
        startDelay: 0,
        loop: false,});
        var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: "#testUpdate",triggerHook:0,reverse:true,duration:$("#timelineSection").offset().top-$("#testUpdate").offset().top-$(window).height()-100})
                   .setPin("#outerLap", {
                    pushFollowers: false
                }) 
                    .addTo(controller);
    var screenAni = new ScrollMagic.Scene({triggerElement: "#something-shit",triggerHook:1,reverse:true})
                   .on('start end', function (e){
                    $("#furtherDetails").fadeIn("2000");
                    })
                    .setClassToggle("#laptop-screen","open")
                    .addTo(controller); 
    var pysortProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-1",triggerHook:0})
                    .on('start', function () {
                        changeProjectContent("pysort","0");
                    })
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("",""): changeProjectContent("AESTool","1"))
                   })
                   .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var AESToolProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-2",triggerHook:0})
                   .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("pysort","0"): changeProjectContent("twilight","2"))
                   })
                   .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var twilightProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-3",triggerHook:0})
                   .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("AESTool","1"): changeProjectContent("childurl","3"))
                   })
                   .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var childurlProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-4",triggerHook:0})
                   .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("twilight","2"): changeProjectContent("nst","4"))
                   })
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var nstProj  = new ScrollMagic.Scene({triggerElement: "#something-shit-child-5",triggerHook:0})
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("childurl","3"): changeProjectContent("nst","5"))
                   })
                   .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var  nstProj  = new ScrollMagic.Scene({triggerElement: "#something-shit-child-6",triggerHook:0})
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("nst","4"): changeProjectContent("scrapper","6"))
                   })
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller); 
    var scrapper  = new ScrollMagic.Scene({triggerElement: "#something-shit-child-7",triggerHook:0})
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("dns","5"): changeProjectContent("rls","7"))
                   })
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller);
    var rls  = new ScrollMagic.Scene({triggerElement: "#something-shit-child-8",triggerHook:0})
                    .on('start end', function (e){
                         (e.type == "start" ? changeProjectContent("scrapper","6"): changeProjectContent("skill","8"))
                    })
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller);
    var  skillProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-9",triggerHook:0})
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("rls","7"): changeProjectContent("others","9"))
                    })
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller);
    var othersProj = new ScrollMagic.Scene({triggerElement: "#something-shit-child-10",triggerHook:0})
                    .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("skill","8"):changeProjectContent("others","9"))
                    })
                   .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller);
    var othersProj2 = new ScrollMagic.Scene({triggerElement: "#something-shit-child-11",triggerHook:0,reverse:true,duration:200})
                   .on('start end', function (e){
                        (e.type == "start" ? changeProjectContent("others","9"):changeProjectContent("",""));
                        $("#dummyDisplayTest").hide();
                        
                    })
                    .setPin("#something-shit-child-11",{pushFollowers:true})
                    .setClassToggle("#projectsHeading","highlight-text")
                    .addTo(controller);
    var timelineScene = new ScrollMagic.Scene({triggerElement: "#timelineContent",reverse:true,triggerHook:0,duration:300})
    .on('start end', function (e){
    })
    .setClassToggle(".cd-timeline__content","cd-timeline__content--bounce-in")
     .setPin("#timelineContent",{pushFollowers:true})
     .addTo(controller);
     var timelineScene2 = new ScrollMagic.Scene({triggerElement: "#timelineSection",reverse:true,triggerHook:0.2})
    .on('start end', function (e){
    })
    .setClassToggle("#timelineHeading","highlight-text")
     .addTo(controller);
     
     var skillsScene = new ScrollMagic.Scene({triggerElement: "#technicalStackContent",reverse:true,triggerHook:0,duration:300})
    .on('start end', function (e){
      $('.skills-image').addClass("shake");
  
  var delay = setTimeout(function(){
    $(".skills-image").removeClass("shake");
  }, 1500)
    })
    .setPin("#technicalStackContent",{pushFollowers:true})
    .setClassToggle("#technicalStackHeading","highlight-text")
     .addTo(controller);
     var acheivementsScreen = new ScrollMagic.Scene({triggerElement: "#AchievementsContent",reverse:true,triggerHook:0,duration:300})
    .on('start end', function (e){
    })
    .setPin("#AchievementsContent",{pushFollowers:true})
    .setClassToggle("#AchievementsHeading","highlight-text")
     .addTo(controller);
     var  connect= new ScrollMagic.Scene({triggerElement: "#Connect",reverse:true,triggerHook:0,duration:300})
    .on('start end', function (e){
      $("#SriManikantaPalakollu").removeClass("highlight-text")
        $("#SriManikantaPalakollu").html("");
        var typed2 = new Typed("#SriManikantaPalakollu", {strings: ["Sri Manikanta Palakollu | +91(991)-257-5995"],
                typeSpeed:60,showCursor: false,loop: false,backDelay: 0,
                onComplete: function(pos, self) { 
                  $("#SriManikantaPalakollu").addClass("highlight-text")
                }
              });
                
    })
    .setClassToggle(".skills-image","imageRot")
     .addTo(controller);
    $(".project-name").on('click', function(event) {
                       var previousIndex = $("#CurrentSelectedProject").data("value");
                       previousIndex = parseInt(previousIndex);
                       var currentIndex= $('.project-name').index(this)
                        switch($(this).data('view')){
                            case "pysort": 
                            changeProjectContent("pysort","0");
                            break;
                            case "AESTool": 
                            changeProjectContent("AESTool","1");
                            break;
                            case "twilight":
                            changeProjectContent("twilight","2");
                            break;
                            case "childurl": 
                            changeProjectContent("childurl","3");
                            break;
                            case "nst": 
                            changeProjectContent("nst","4");
                            break;
                            case "dns": 
                            changeProjectContent("dns","5");
                            break;
                            case "scrapper": 
                            changeProjectContent("scrapper","6");
                            break;
                            case "rls": 
                            changeProjectContent("rls","7");
                            break;
                            case "skill": 
                            changeProjectContent("skill","8");
                            break;
                            case "others": 
                            changeProjectContent("others","9");
                            break;
                        }
                      });
    
    $("#slick").slick({
        dots:false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 9,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]});
        $("#slickComments").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            nextArrow: '<i style="color:#6589BA" class="fa fa-arrow-right"></i>',
            prevArrow: '<i style="color:#6589BA" class="fa fa-arrow-left"></i>',
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }]
    
            });
        function VerticalTimeline( element ) {
            this.element = element;
            this.blocks = this.element.getElementsByClassName("cd-timeline__block");
            this.images = this.element.getElementsByClassName("cd-timeline__img");
            this.contents = this.element.getElementsByClassName("cd-timeline__content");
            this.offset = 0.8;
        };
    
        VerticalTimeline.prototype.hideBlocks = function() {
            if ( !"classList" in document.documentElement ) {
                return; // no animation on older browsers
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
                        self.images[i].classList.add("cd-timeline__img--hidden"); 
                        self.contents[i].classList.add("cd-timeline__content--hidden"); 
                    }
                })(i);
            }
        };
    
        VerticalTimeline.prototype.showBlocks = function() {
            if ( ! "classList" in document.documentElement ) {
                return;
            }
            var self = this;
            for( var i = 0; i < this.blocks.length; i++) {
                (function(i){
                    if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
                        self.images[i].classList.add("cd-timeline__img--bounce-in");
                        self.contents[i].classList.add("cd-timeline__content--bounce-in");
                        self.images[i].classList.remove("cd-timeline__img--hidden");
                        self.contents[i].classList.remove("cd-timeline__content--hidden");
                    }
                })(i);
            }
        };
    
        var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
            verticalTimelinesArray = [],
            scrolling = false;
        if( verticalTimelines.length > 0 ) {
            for( var i = 0; i < verticalTimelines.length; i++) {
                (function(i){
                    verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
                })(i);
            }
    
            //show timeline blocks on scrolling
            window.addEventListener("scroll", function(event) {
                if( !scrolling ) {
                    scrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
                }
            });
        }
    
        function checkTimelineScroll() {
            verticalTimelinesArray.forEach(function(timeline){
                timeline.showBlocks();
            });
            scrolling = false;
        };

        
});
var previousScrollTopPosition=0 ;
var windowHeight = $(window).height();
var currentPosition = $(window).scrollTop();
var currentPosition = $(window).scrollTop();

function toggle() {
    var element = document.getElementById("laptop-screen");
    element.classList.toggle("open");
}

function changeProjectContent(name,value,slickIndex){
    if(name==""){
        $("#TechInvolved").html("");
        $("#MyRole").html("");
        $("#Status").html("");
        $("#Period").html("");
        $("#projectDescriptionText").addClass("fadeOutUp");
        $("#TechInvolved").addClass("fadeOutUp");
        $("#MyRole").addClass("fadeOutUp");
        $("#Status").addClass("fadeOutUp");
        $("#Period").addClass("fadeOutUp");
        $("#ProjectLink").hide(); 
        return;
    }
    $("#CurrentSelectedProject").attr("data-value",value);
    $("#projectDescriptionText").html($("#"+name+"-description").html());
    $("#TechInvolved").html($("#"+name+"-tech").html());
    $("#MyRole").html($("#"+name+"-role").html());
    $("#Status").html($("#"+name+"-status").html());
    $("#Period").html($("#"+name+"-timeline").html());
    if(value){
        $('#slick').slick('slickGoTo', parseInt(value) );
        $("#"+name+"-heading").focus();
    }
    $("#"+name+"-heading").focus();
    $("#LaptopScreenText").html(name.toUpperCase());
    $("#projectDescriptionText").addClass("fadeInUp");
    $("#TechInvolved").addClass("fadeInUp");
    $("#MyRole").addClass("fadeInUp");
    $("#Status").addClass("fadeInUp");
    $("#Period").addClass("fadeInUp");
    $("#projectDescriptionText").addClass("fadeInUp");
    switch(name){
      case "pysort": 
        $("#ProjectLink").show();
        $("#ProjectLink").attr("href","https://pypi.org/project/pysort/");
      break;
      case "AESTool":
        $("#ProjectLink").show();  
        $("#ProjectLink").attr("href","https://github.com/srimani-programmer/AES-Cryptographic-Tool");
      break;
      case "twilight":
          $("#ProjectLink").show();
          $("#ProjectLink").attr("href","https://github.com/srimani-programmer/Twilight");
      break;
      case "childurl": 
        $("#ProjectLink").show();
        $("#ProjectLink").attr("href","https://github.com/srimani-programmer/Child-Url");
      break;
      case "nst": 
      $("#ProjectLink").show();
      $("#ProjectLink").attr("href","https://github.com/srimani-programmer/Network_Scanning_Tools");
      break;
      case "dns": 
      $("#ProjectLink").show();
      $("#ProjectLink").attr("href","https://github.com/srimani-programmer/DNS-Scanner");
      break;
      case "scrapper": 
      $("#ProjectLink").show();
      $("#ProjectLink").attr("href","https://github.com/srimani-programmer/Image_Scraper");
      break;
      case "rls": 
      $("#ProjectLink").show();
      $("#ProjectLink").attr("href","https://github.com/srimani-programmer/NASA-SPACE-APP-CHALLENGE-2018");
      break;
      case "skill": 
      $("#ProjectLink").show();
      $("#ProjectLink").attr("href","https://github.com/srimani-programmer/Skill-Development");
      break;
      case "others": 
      $("#ProjectLink").hide();
      break;
  }
}