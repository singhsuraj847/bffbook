$(document).ready(function () {
  $("#modal-btn").click(function () {
    console.log("working");
    $(".ui.modal").modal("show");
  });
  $(".ui.dropdown").dropdown();
  $(".sidebar-btn").click(function () {
    $(".wrapper").toggleClass("collapse");
  });
});
