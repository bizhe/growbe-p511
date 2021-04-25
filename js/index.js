$(document).ready(function () {
  $(".team-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 30,
    responsive: {
      600: {
        items: 2,
      },
    },
  });

  $(".news-carousel").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 30,
    responsive: {
      600: {
        items: 2,
      },
    },
  });

  // $(".news-carousel").slick({
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   dots: true,
  //   infinite: true,
  //   centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //       },
  //     },
  //   ],
  // });
});
