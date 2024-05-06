$(document).ready(function () {
  $(".header__btn-menu").click(function () {
    $(".header__gnb--mobile").css("display", "flex");
    $(".header__btn-menu").css("display", "none");
    $(".header__btn-close").css("display", "inline");
  });

  $(".header__btn-close").click(function () {
    $(".header__gnb--mobile").css("display", "none");
    $(".header__btn-menu").css("display", "inline");
    $(".header__btn-close").css("display", "none");
  });
});
