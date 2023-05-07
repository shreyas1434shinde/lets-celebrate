let ListE = document.querySelector('#cards');
$(document).ready(function(){
	$('#hamburger').click(function(){
		$('.mob-nav').toggleClass('menu-open');
	});
});
$(document).ready(function () {
  $('.hamburger').click(() => {
    $('.hamburger').toggleClass('nav-open');
  });
});
$(document).ready(function () {
  $(".nav-itemss").click(function (){
    $(this).addClass("active1").siblings().removeClass("active1");
  });
});

// cards js start end here 


fetch('../asset/data.json')
.then(res => res.json())
.then(data => {
    data.forEach(post => {
        ListE.insertAdjacentHTML('beforeend', `<div class="none-3 col-md-4">
        <div class="card12 mb-3">
          <div class="content1">
            <div class="front px-3">
              <div class="core mt-5"> ${post.core} </div>
              <div class="card-title mt-3"> ${post.title}</div>
              <div class=" mt-3 mb-5 card-sub-title"> ${post.subTitle}</div>
              <div class="pt-2">
                <div class="text-white"> ${post.early}</div>
                <img src="" alt="">
              </div>
            </div>
            <div class="back px-3">
              <div class="core1 mt-5"> ${post.core} </div>
              <div class="pt-3">If they were to follow their natural instincts, the family unit has everything that it takes to bring up a child</div>
              <div class="pt-3">
                The system makes the family, and through it, the child feels inadequate. A reassurance is all that their wounded self-esteem needs.
              </div>
              <div class="text-blue pt-5 mt-5">EARLY CHILDHOOD</div>
            </div>
          </div>
        </div>
      </div>
      `)
      
    });
    $(function () {
      $(".none-3").slice(0, 6).show();
      $("body").on('click touchstart', '.load-more', function (e) {
          e.preventDefault();
          $(".none-3:hidden").slice(0, 3).slideDown();
          if ($(".none-3:hidden").length == 0) {
              $(".load-more").css('visibility', 'hidden');
          }
          $('html,body').animate({
              scrollTop: $(this).offset().top
          }, 2000);
      });
  });
})

$(function() {
    $(".heart").on("click", function() {
      $(this).toggleClass("is-active");
    });
});


$('.puzzle-car').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoplay:true,
  autoplayTimeout:1000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

$('.card-car').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  autoWidth:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})


 