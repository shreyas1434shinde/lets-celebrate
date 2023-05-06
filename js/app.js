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
        ListE.insertAdjacentHTML('beforeend', `<div class="col-md-4 none-3">
        <div class="card12 mb-3">
          <div class="content1">
            <div class="front">
              <div>${post.title}</div>
              <div class="pb-5 mb-5">${post.subTitle}</div>
            </div>
            <div class="back">
             <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reprehenderit cumque soluta saepe nulla inventore eos quidem laudantium beatae. Rerum,
             </div>
             <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure excepturi, impedit nemo 
             </div>
            </div>
          </div>
        </div>
      </div>
      `)
      
    });
    $(function () {
      $(".none-3").slice(0, 18).show();
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


 