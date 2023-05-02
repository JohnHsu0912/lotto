//-------swiper
let swiper = new Swiper('.swiper', {
  loop: false, //循環
  speed: 300, //切換速度
  slidesPerView: 1, //一次顯示幾個
  slidesPerGroup: 1, //依次滑動幾個
  lazy: {
    //圖片延遲載入
    loadPrevNext: true,
  },
  pagination: {
    // 如果需要分页器
    el: '.swiper-pagination',
  },
});
