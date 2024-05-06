// const mainSlider = tns({
//   container: ".products",
//   items: 1,
//   loop: false,
//   swipeAngle: false,
//   gutter: 8,
//   speed: 400,
//   controlsText: ['<i class="ic-chevron"></i>', '<i class="ic-chevron"></i>'],
//   preventScrollOnTouch: true,
//   responsive: {
//     768: {
//       items: 4,
//     },
//     1024: {
//       items: 5,
//       gutter: 16,
//       edgePadding: 24,
//     },
//   },
// });

const slider = tns({
  container: ".product-list",
  items: 1,
  loop: false,
  swipeAngle: false,
  mouseDrag: true,
  // gutter: 12,
  edgePadding: 48,

  controlsText: [
    '<div class="carousel-nav prev"></div>',
    '<div class="carousel-nav next"></div>',
  ],

  responsive: {
    768: {
      items: 3,
      gutter: 16,
      edgePadding: 24,
    },
  },
});
