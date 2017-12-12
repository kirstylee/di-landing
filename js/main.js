$(document).ready(function () {
  preventDocumentOverlayScroll();
  buttonInit();

});


function footerExpand() {
    $('#footer-tncs-trigger').click(function(event) {
        event.preventDefault();
        $('.footer-tncs').toggleClass('show');
        setTimeout(function(){
            $("html, body").animate({ scrollTop: $(document).height() }, 0);
        }, 100);
    });
}


function buttonInit() {

  // Mobile Menu
  $("#mobileMenu").click(function(){
    mobileMenuOptions(this);
  });
  $("#navBlocker").click(function(){
    $("#mobileMenu, #dashboardMenu").trigger("click");
  });

  // Footer Menus
  $("h6").click(function(){
    $(this).toggleClass("open");
    $(this).next("ul").toggleClass("open");
  });
}


function mobileMenuOptions(el) {
  $("body").toggleClass("menuOpen");
  var menuType = $(el).data("menu");

  switch(menuType) {
    // Add more menu type actions if necessary
    case "dropdown":
      toggleDocumentNoScroll();
      break;
    case "slideout":
      $("#pageWrapper").toggleClass("open");
      break;
    default:
  }
}



$(document).on("scroll", function(){
  if
  ($(document).scrollTop() > 100){
    $("nav").addClass("sticky");
  }
  else
  {
    $("nav").removeClass("sticky");
  }
});






function preventDocumentOverlayScroll() {

  // Prevent background scrolling on overlay elements

  // Nav overlay blocker
  $(document).on("touchmove", "#navBlocker", function(e){
    e.preventDefault();
  });

  // Modals prevent outer modal wrapper from scrolling
  $(".modal").on("touchmove",function(e){
    if(!$(".modal-body").has($(e.target)).length)
      e.preventDefault();
  });


  // iOS prevent background scrolling on overlay/fixed positioned elements on rubber-band scrolling
  $(".scrollContent").each(function() {

    var _overlay = this;
    var _clientY = null; // remember Y position on touch start

    _overlay.addEventListener('touchstart', function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch
        _clientY = event.targetTouches[0].clientY;
      }
    }, false);

    _overlay.addEventListener('touchmove', function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch
        disableRubberBand(event);
      }
    }, false);

    function disableRubberBand(event) {
      var clientY = event.targetTouches[0].clientY - _clientY;

      if (_overlay.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll
        event.preventDefault();
      }

      if (isOverlayTotallyScrolled() && clientY < 0) {
        //element is at the top of its scroll
        event.preventDefault();
      }
    }

    function isOverlayTotallyScrolled() {
      return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
    }

  });

}