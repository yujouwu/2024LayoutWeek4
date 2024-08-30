import "./assets/scss/all.scss";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  useClassNames: true,
  initClassName: false,
  animatedClassName: "animate__animated",
});

$(document).ready(function () {
  $(".tab-item").on("click", function () {
    let target = $(this).data("target");

    $(".tab-item").removeClass("active");
    $(".tab-content").removeClass("active");

    $(this).addClass("active");
    $(target).addClass("active");
  });
});
