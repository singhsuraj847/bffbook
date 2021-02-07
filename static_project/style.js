$(document).ready(function () {
  $("#modal-btn").click(function () {
    console.log("working");
    $(".ui.modal").modal("show");
  });
  $(".ui.dropdown").dropdown();
  $(".sidebar-btn").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
  $(".s-btn").click(function () {
    $(".sign-in")
      .addClass("active-sign-in")
      .siblings("sign-in")
      .removeClass("active-sign-up");
  });
  $(".cancel a").click(function () {
    $(".sign-in").removeClass("active-sign-in");
    $(".sign-in").removeClass("active-sign-up");
  });
});
