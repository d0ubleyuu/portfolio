document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const humnav = document.getElementById("hum-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("shadow-xl", "shadow-[#334b355d]");
      humnav.classList.add("shadow-xl", "shadow-[#334b355d]");
    } else {
      nav.classList.remove("shadow-xl", "shadow-[#334b355d]");
      humnav.classList.remove("shadow-xl", "shadow-[#334b355d]");
    }
  });
});

document.getElementById("btnmore").addEventListener("click", () => {
  const gr = document.getElementById("gr-bottom");
  const cardlist = document.getElementById("cardlist");
  const btnmore = document.getElementById("btnmore");
  const btnless = document.getElementById("btnless");
  gr.classList.add("hidden");

  cardlist.classList.add("h-full");
  cardlist.classList.remove("h-[700px]");

  btnmore.classList.add("hidden");
  btnless.classList.remove("hidden");
});

document.getElementById("btnless").addEventListener("click", () => {
  const gr = document.getElementById("gr-bottom");
  const cardlist = document.getElementById("cardlist");
  const btnmore = document.getElementById("btnmore");
  const btnless = document.getElementById("btnless");

  cardlist.classList.add("h-[700px]");
  cardlist.classList.remove("h-full");

  btnmore.classList.remove("hidden");
  btnless.classList.add("hidden");

  gr.classList.remove("hidden");
});

document.getElementById("btnmoreblog").addEventListener("click", () => {
  const gr = document.getElementById("gr-bottomblog");
  const cardlist = document.getElementById("cardlistblog");
  const btnmore = document.getElementById("btnmoreblog");
  const btnless = document.getElementById("btnlessblog");
  gr.classList.add("hidden");

  cardlist.classList.add("h-full");
  cardlist.classList.remove("h-[610px]");

  btnmore.classList.add("hidden");
  btnless.classList.remove("hidden");
});

document.getElementById("btnlessblog").addEventListener("click", () => {
  const gr = document.getElementById("gr-bottomblog");
  const cardlist = document.getElementById("cardlistblog");
  const btnmore = document.getElementById("btnmoreblog");
  const btnless = document.getElementById("btnlessblog");

  cardlist.classList.add("h-[610px]");
  cardlist.classList.remove("h-full");

  btnmore.classList.remove("hidden");
  btnless.classList.add("hidden");

  gr.classList.remove("hidden");
});
