// WAYOUT MENU - JAVASCRIPT CODES

// Get current width of the viewport
getCurrentWidth = $(window).width();

// WINDOW ON RESIZE FUNCTION
$( window ).resize(function() {
  // Get scrollbar width (RECALCULATE ON RESIZE)
  function scrollbarWidth() {
    var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
    $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
    inner = $inner[0],
    outer = $outer[0];
    jQuery('body').append(outer);
    var width1 = inner.offsetWidth;
    $outer.css('overflow', 'scroll');
    var width2 = outer.clientWidth;
    $outer.remove();
    return (width1 - width2);
  }

  // Set properties of full-width megamenu and show it (RECALCULATE ON RESIZE)
  getWidth = $(window).width(); // Get width of the viewport
  scrollB = scrollbarWidth(); // Get width of the scrollbar
  realWidth = getWidth - scrollB; // Calculate real width of the screen
  offset = $('.top-nav > ul').offset(); // Top navigation absolute offset acc.to document

  // WAYOUT MENU - FULL-WIDTH NAV (RECALCULATE ON RESIZE)
  $(".top-nav > ul > li.fw").each(function() {
    var fwdiv = $(this).next('div');
    $(this).hover(function() {
      $(this).find('a').addClass('fw-hovered');
      fwdiv.css( 'width', realWidth );
      fwdiv.css( 'left', -offset.left);
      fwdiv.slideDown('fast');
    },function () {
      $(this).find('a').removeClass('fw-hovered');
      fwdiv.slideUp('fast');
    })
  })

  $('.top-nav > ul div.top-nav-mega-full-width').bind('mouseenter', function(e) {
    $(this).stop(true, true);
    $(this).prev('li').find('a').addClass('fw-hovered');
  }).bind('mouseleave', function(e) {
    $(this).stop(true, true).slideUp('fast');
    $(this).prev('li').find('a').removeClass('fw-hovered');
  });

  // Show social media buttons only on fullscreen mode, and resize elements size on window resize
  if (getCurrentWidth == getWidth) {
    $('.social-media').css('visibility', 'visible');
    $('#onResize').remove();
  } else {
    $('.social-media').css('visibility', 'hidden');
    $('head').append('<link rel="stylesheet" type="text/css" id="onResize" href="css/onresize.css">');
  }
})

$(document).ready(function(){

  // Count and remove shopping cart items
  var count = $(".shop-item").length;
  $("p.itemcount").text("You have " + count + " item(s).");
  $(function() {
    $(".item-remove > a").on("click", function() {
      $(this).parent().parent().remove();
      var count = $(".item-remove").length;
      $("p.itemcount").text("You have " + count + " item(s).");
    });
  });

  // Get scrollbar width
  function scrollbarWidth() {
    var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
    $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
    inner = $inner[0],
    outer = $outer[0];
    jQuery('body').append(outer);
    var width1 = inner.offsetWidth;
    $outer.css('overflow', 'scroll');
    var width2 = outer.clientWidth;
    $outer.remove();
    return (width1 - width2);
  }

  // Set properties of full-width megamenu and show it
  getWidth = $(window).width(); // Get width of the viewport
  scrollB = scrollbarWidth(); // Get width of the scrollbar
  realWidth = getWidth - scrollB; // Calculate real width of the screen
  offset = $('.top-nav > ul').offset(); // Top navigation absolute offset acc.to document

  // WAYOUT MENU - FULL-WIDTH NAV
  $(".top-nav > ul > li.fw").each(function() {
    var fwdiv = $(this).next('div');
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    $(this).hover(function() {
      $(this).find('a').addClass('fw-hovered');
      fwdiv.css( 'width', realWidth );
      if (is_chrome) {
        fwdiv.css( 'left', -offset.left-12);
      } else {
        fwdiv.css( 'left', -offset.left);
        $('.top-nav > ul > li > ul.top-nav-mega-2.top-nav-rtl').css('left','-533px');
      }
      fwdiv.stop(true, true).slideDown('fast');
    },function () {
      $(this).find('a').removeClass('fw-hovered');
      fwdiv.stop(true, true).slideUp('fast');
    })
  })

  $('.top-nav > ul div.top-nav-mega-full-width').bind('mouseenter', function(e) {
    $(this).stop(true, false);
    $(this).prev('li').find('a').addClass('fw-hovered');
    $('.curtain').css('visibility', 'visible');
    $('.curtain').stop(true,false).fadeIn(200);
  }).bind('mouseleave', function(e) {
    $(this).stop(true, true).slideUp('fast');
    $(this).prev('li').find('a').removeClass('fw-hovered');
    $('.curtain').stop(true,true).fadeOut(250);
  });

  // mobile check: http://coveroverflow.com/a/11381730/989439
  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  // // WAYOUT MENU - SIDE MENU and TOGGLERS
  var effect = 'st-effect-1', // to use different effects, just change the number (i.e st-effect-3)
  effectNr = effect.substr(effect.length-1),
  container = document.getElementById( 'main-container' ),
  eventtype = mobilecheck() ? 'touchstart' : 'click',
  effectReset = function() {
    $(container).removeClass('reveal-hidden-menu');
  },
  loginEffect = 'login-effect',
  loginContainer = document.getElementById( 'login-container' );
  searchEffect = 'search-effect',
  searchContainer = document.getElementById( 'search-container' );
  shopEffect = 'shop-effect',
  shopContainer = document.getElementById( 'shop-container' );

  // WAYOUT MENU - TRIGGER SIDEBAR
  $('#brien-button').bind('click', function(ev) {
    if ( $(container).hasClass('reveal-hidden-menu') ) {
      $(container).removeClass('reveal-hidden-menu');
      // Curtain effect fade out
      $('.curtain').stop(false,false).fadeOut(250);
    } else {
      ev.stopPropagation();
      ev.preventDefault();
      container.className = 'main-container'; // clear
      $(container).addClass(effect);
      setTimeout( function() {
        $(container).addClass('reveal-hidden-menu');
      }, 25 );
      // Curtain effect fade in
      $('.curtain').css('visibility', 'visible');
      $('.curtain').stop(false,false).fadeIn(200);
    }
  })

  // OPTIONAL - hide side-menu on body click. If you want to activate this uncomment below lines
  // $('body').click(function(){
  //   if ( $(container).hasClass('reveal-hidden-menu') ) {
  //     $(container).removeClass('reveal-hidden-menu');
  //   }
  // })

  // trigger login-form effect
  $('#login-form').click(function () {
    $(loginContainer).delay( 800 ).toggleClass(loginEffect);
    $(searchContainer).removeClass(searchEffect);
    $(shopContainer).removeClass(shopEffect);
  })

  // trigger search-form effect
  $('.search-toggle').click(function () {
    $(searchContainer).delay( 800 ).toggleClass(searchEffect);
    $(loginContainer).removeClass(loginEffect);
    $(shopContainer).removeClass(shopEffect);
  })

  // trigger shopping cart effect
  $('.shop-toggle').click(function () {
    $(shopContainer).delay( 800 ).toggleClass(shopEffect);
    $(searchContainer).removeClass(searchEffect);
    $(loginContainer).removeClass(loginEffect);
  })

  // side menu effect toggler
  $('.side-menu-effect-toggle').change(function () {
    //effect = $("option:selected", this);
    effect = this.value;
  })

  // show arrows for 2nd and 3rd level if they have sub list items
  $(".top-nav ul ul li:has(li)").find(' > a').css({'background-image' : 'url(img/icon-right.png)' , 'background-repeat' : 'no-repeat' , 'background-position' : '130px 15px'});

  // show tooltip for social media buttons
  $("body").tooltip({
    selector: '[data-toggle="tooltip"]'
  });

  $(".social-media > a").attr({
    "data-placement": "bottom",
    "data-toggle": "tooltip"
  });

  $('.top-nav > ul > li').hover(
    function () {
      $('.curtain').css('visibility', 'visible');
      $('.curtain').stop(false,false).fadeIn(200);
    },
    function () {
      $('.curtain').stop(false,false).fadeOut(250);
    }
  );
  
})