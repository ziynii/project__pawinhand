$(document).ready(function () {
  $(".pet-img").click(function (e) {
    e.preventDefault();
    var reviewOrgTarget = $(this).attr("href");
    var reviewTabTarget = reviewOrgTarget.replace("#", "");

    $(".review-content__item").hide();
    $("#" + reviewTabTarget).css("display", "flex");

    $(".pet-img").removeClass("review__btn-active");
    $(this).addClass("review__btn-active");
  });

  function init() {
    $(".review-content__item").hide();
    $("#pet01").css("display", "flex");
  }

  init();
});
