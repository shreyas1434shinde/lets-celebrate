let ListE = document.querySelector('#cards');


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
      $(".none-3").slice(0, 3).show();
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





 