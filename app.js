//
//
// Hi There, Have a good day

const body = document.body;
const main = document.getElementById("main_scroll");

let sx = 0, // For scroll positions
  sy = 0;
let dx = sx, // For container positions And Force (Percentage 70% Recommended)
  dy = sy,
  Force = 70;

// Onpage Load And Refresh Events

body.style.height = main.clientHeight + "px";

ResetPage();

window.addEventListener("beforeunload", (e) => {
  ResetPage();
});

function ResetPage() {
  window.scrollTo(0, 0);

  body.scrollTo(0, 0);
  main.style = ``;
}

window.addEventListener("resize", (e) => {
  var resizetime = setTimeout(() => {
    let bodyHeight = main.getBoundingClientRect().height;
    body.style.height = `${bodyHeight}px`;
    window.requestAnimationFrame(render);
    easeScroll();

    clearTimeout(resizetime);
  }, 1200);
});
// Momentum Scrolling

// Scroll Functions
window.addEventListener("scroll", (e) => {
  easeScroll();

  HeadersResponse();
});

function easeScroll() {
  sx = window.pageXOffset;
  sy = window.pageYOffset;
}

window.requestAnimationFrame(render);

function render() {
  //We calculate our container position by linear interpolation method
  dx = li(dx, sx, Force / 1000);
  dy = li(dy, sy, Force / 1000);

  dx = Math.floor(dx * 100) / 100;
  dy = Math.floor(dy * 100) / 100;

  main.style.transform = `translate(-${dx}px, -${dy}px)`;

  window.requestAnimationFrame(render);
}

function li(a, b, n) {
  return (1 - n) * a + n * b;
}

// Search Box OnFocus MotherFucker...!!!

const SearchInput = document.querySelector("#Search_text");
const SearchBox = document.querySelector(".searchbox");

SearchInput.addEventListener("focus", (e) => {
  SearchBox.classList.add("searchbox_active");
});

SearchInput.addEventListener("focusout", (e) => {
  SearchBox.classList.remove("searchbox_active");
});

// Header React
const HeaderTop = document.querySelector(".top");
const HeaderBelow = document.querySelector("#below");

const HeaderFill = document.querySelector("#header_fill");

const HeaderLeft = document.querySelector("#Left_side");
const HeaderRight = document.querySelector("#Right_side");

function HeadersResponse() {
  if (window.scrollY > 2) {
    HeaderTop.style.height = `0`;
    HeaderTop.style.opacity = `0`;

    HeaderFill.style.opacity = `100%`;

    HeaderLeft.style.height = `3vw`;
    HeaderRight.style.height = `3vw`;
  } else if (window.scrollY < 2) {
    HeaderTop.style = ``;
    HeaderFill.style = ``;

    HeaderLeft.style = ``;
    HeaderRight.style = ``;
  }
}

//
//
//
// Header Pop Out

const tag = document.querySelectorAll(".tag");
const Pop_item = document.querySelectorAll(".Pop_item");

const Item_holder = document.querySelectorAll("#Item_holder");

for (let index = 0; index < tag.length; index++) {
  tag[index].addEventListener("mouseenter", (e) => {
    let newPopHeight = Item_holder[index].clientHeight;

    Pop_item[index].style.height = `${newPopHeight}px`;
  });
  tag[index].addEventListener("mouseleave", (e) => {
    Pop_item[index].style = ``;
  });
  Pop_item[index].addEventListener("mouseenter", (e) => {
    let newPopHeight = Item_holder[index].clientHeight;

    Pop_item[index].style.height = `${newPopHeight}px`;
  });
  Pop_item[index].addEventListener("mouseleave", (e) => {
    Pop_item[index].style = ``;
  });

  if (index == tag.length - 1) {
    break;
  }
}
