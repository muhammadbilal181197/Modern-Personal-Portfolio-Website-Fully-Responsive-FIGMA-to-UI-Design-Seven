let screen = document.querySelector("#screen");
let btns = document.querySelectorAll(".button");

let count = 1;
btns.forEach((items) => {
  items.addEventListener("click", () => {
    if (items.classList.contains("customNextBtn")) {
      count++;
      if (count > 4) {
        count = 1;
      }
    }
    if (items.classList.contains("customPrevBtn")) {
      count--;
      if (count < 1) {
        count=4;
      }
    }
    screen.innerText = count;
  });
});

let tabClick1 = document.querySelector(".tab_click1");
let tabClick2 = document.querySelector(".tab_click2");
let tabClick3 = document.querySelector(".tab_click3");
let tabClick4 = document.querySelector(".tab_click4");
let tabClick5 = document.querySelector(".tab_click5");
let tabClicked = document.querySelector(".tab_clicked");
let tabImg1 = document.querySelector(".tab_img1");
let tabImg2 = document.querySelector(".tab_img2");
let tabImg3 = document.querySelector(".tab_img3");
let tabImg4 = document.querySelector(".tab_img4");
let tabImg5 = document.querySelector(".tab_img5");

tabClick1.addEventListener("click", () => {
  tabImg1.style.display = "block";
  tabImg2.style.display = "none";
  tabImg3.style.display = "none";
  tabImg4.style.display = "none";
  tabImg5.style.display = "none";
  tabClicked.style.top = "0";
  tabClick1.classList.add("clicked");
  if (
    tabClick2.classList.contains("clicked") ||
    tabClick3.classList.contains("clicked") ||
    tabClick4.classList.contains("clicked") ||
    tabClick5.classList.contains("clicked")
  ) {
    tabClick2.classList.remove("clicked");
    tabClick3.classList.remove("clicked");
    tabClick4.classList.remove("clicked");
    tabClick5.classList.remove("clicked");
  }
});

tabClick2.addEventListener("click", () => {
  tabImg1.style.display = "none";
  tabImg2.style.display = "block";
  tabImg3.style.display = "none";
  tabImg4.style.display = "none";
  tabImg5.style.display = "none";
  tabClicked.style.top = "30px";
  tabClick2.classList.add("clicked");
  if (
    tabClick1.classList.contains("clicked") ||
    tabClick3.classList.contains("clicked") ||
    tabClick4.classList.contains("clicked") ||
    tabClick5.classList.contains("clicked")
  ) {
    tabClick1.classList.remove("clicked");
    tabClick3.classList.remove("clicked");
    tabClick4.classList.remove("clicked");
    tabClick5.classList.remove("clicked");
  }
});

tabClick3.addEventListener("click", () => {
  tabImg1.style.display = "none";
  tabImg2.style.display = "none";
  tabImg3.style.display = "block";
  tabImg4.style.display = "none";
  tabImg5.style.display = "none";
  tabClicked.style.top = "60px";
  tabClick3.classList.add("clicked");
  if (
    tabClick1.classList.contains("clicked") ||
    tabClick2.classList.contains("clicked") ||
    tabClick4.classList.contains("clicked") ||
    tabClick5.classList.contains("clicked")
  ) {
    tabClick1.classList.remove("clicked");
    tabClick2.classList.remove("clicked");
    tabClick4.classList.remove("clicked");
    tabClick5.classList.remove("clicked");
  }
});

tabClick4.addEventListener("click", () => {
  tabImg1.style.display = "none";
  tabImg2.style.display = "none";
  tabImg3.style.display = "none";
  tabImg4.style.display = "block";
  tabImg5.style.display = "none";
  tabClicked.style.top = "90px";
  tabClick4.classList.add("clicked");
  if (
    tabClick1.classList.contains("clicked") ||
    tabClick2.classList.contains("clicked") ||
    tabClick3.classList.contains("clicked") ||
    tabClick5.classList.contains("clicked")
  ) {
    tabClick1.classList.remove("clicked");
    tabClick2.classList.remove("clicked");
    tabClick3.classList.remove("clicked");
    tabClick5.classList.remove("clicked");
  }
});

tabClick5.addEventListener("click", () => {
  tabImg1.style.display = "none";
  tabImg2.style.display = "none";
  tabImg3.style.display = "none";
  tabImg4.style.display = "none";
  tabImg5.style.display = "block";
  tabClicked.style.top = "120px";
  tabClick5.classList.add("clicked");
  if (
    tabClick1.classList.contains("clicked") ||
    tabClick2.classList.contains("clicked") ||
    tabClick3.classList.contains("clicked") ||
    tabClick4.classList.contains("clicked")
  ) {
    tabClick1.classList.remove("clicked");
    tabClick2.classList.remove("clicked");
    tabClick3.classList.remove("clicked");
    tabClick4.classList.remove("clicked");
  }
});

let screen1 = document.querySelector("#screen1");
let tabList = document.querySelectorAll(".tab_click");

let counter = 1;

tabList.forEach((items) => {
  items.addEventListener("click", () => {
    if (items.classList.contains("tab_click1")) {
      counter = `01`;
    } else if (items.classList.contains("tab_click2")) {
      counter = `02`;
    } else if (items.classList.contains("tab_click3")) {
      counter = `03`;
    } else if (items.classList.contains("tab_click4")) {
      counter = `04`;
    } else if (items.classList.contains("tab_click5")) {
      counter = `05`;
    }
    screen1.innerText = counter;
  });
});

//

let rotateRight1 = document.querySelector(".orange_right");
let rotateLeft1 = document.querySelector(".orange_left");
let right1 = document.querySelector(".right");
let left1 = document.querySelector(".left");

left1.addEventListener("click", () => {
  if ((left1.style.display = "block")) {
    left1.style.display = "none";
    rotateLeft1.style.display = "block";
    rotateRight1.style.display = "none";
    right1.style.display = "block";
  }
});

right1.addEventListener("click", () => {
  if ((right1.style.display = "block")) {
    right1.style.display = "none";
    rotateRight1.style.display = "block";
    rotateLeft1.style.display = "none";
    left1.style.display = "block";
  }
});

let rotateRight2 = document.querySelector(".orange_right2");
let rotateLeft2 = document.querySelector(".orange_left2");
let right2 = document.querySelector(".right2");
let left2 = document.querySelector(".left2");

left2.addEventListener("click", () => {
  if ((left2.style.display = "block")) {
    left2.style.display = "none";
    rotateLeft2.style.display = "block";
    rotateRight2.style.display = "none";
    right2.style.display = "block";
  }
});

right2.addEventListener("click", () => {
  if ((right2.style.display = "block")) {
    right2.style.display = "none";
    rotateRight2.style.display = "block";
    rotateLeft2.style.display = "none";
    left2.style.display = "block";
  }
});

let rotateRight3 = document.querySelector(".orange_right3");
let rotateLeft3 = document.querySelector(".orange_left3");
let right3 = document.querySelector(".right3");
let left3 = document.querySelector(".left3");

left3.addEventListener("click", () => {
  if ((left3.style.display = "block")) {
    left3.style.display = "none";
    rotateLeft3.style.display = "block";
    rotateRight3.style.display = "none";
    right3.style.display = "block";
  }
});

right3.addEventListener("click", () => {
  if ((right3.style.display = "block")) {
    right3.style.display = "none";
    rotateRight3.style.display = "block";
    rotateLeft3.style.display = "none";
    left3.style.display = "block";
  }
});

$(document).ready(function () {
  //social
  var owl = $(".social_slide").owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 6,
        dotsEach: 3,
      },
    },
  });
  // customer slider
  var owl = $(".customer_carousel").owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
        dotEach: 3,
      },
    },
  });
  $(".customNextBtnCustomer").click(function () {
    owl.trigger("next.owl.carousel");
  }),
    $(".customPrevBtnCustomer").click(function () {
      owl.trigger("prev.owl.carousel");
    });
  // slider one

  var slider1 = $(".slider1").owlCarousel({
    loop: true,
    margin: 25,
    dots: true,
    responsiveClass: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
        dotEach: 3,
      },
    },
  });
  $(".customNextBtn").click(function () {
    slider1.trigger("next.owl.carousel");
  }),
    $(".customPrevBtn").click(function () {
      slider1.trigger("prev.owl.carousel");
    });

  // Immersive

  var slider2 = $(".carousel_2").owlCarousel({
    loop: true,
    // margin: 10,
    dots: false,
    // margin: 50,
    // center:true,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1199: {
        items: 4,
        dotsEach: 3,
      },
    },
  });
  $(".customNextBtn2").click(function () {
    slider2.trigger("next.owl.carousel");
  }),
    $(".customPrevBtn2").click(function () {
      slider2.trigger("prev.owl.carousel");
    });

  // main_carousel
  var main = $(".main_carousel");
  main.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    // autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 1,
      },
    },
  });
  $(".play").on("click", function () {
    main.trigger("play.owl.autoplay", [2000]);
  });
  $(".stop").on("click", function () {
    main.trigger("stop.owl.autoplay");
  });

  // carousel
  var slider = $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    stagePadding: 2,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      575: {
        items: 1,
        margin: 0,
      },
      767: {
        items: 2,
        margin: 0,
      },
      992: {
        items: 3,
      },
      1199: {
        items: 4.2,
        margin:45,
      },
      1400:{
        items :4.5,
        margin:30,
      }
    },
  });
  $(".prev").click(function () {
    slider.trigger("prev.owl.carousel");
  }),
    $(".next").click(function () {
      slider.trigger("next.owl.carousel");
    });
});
