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

  // Active Navigation on Scroll
  activateNavigation();
  // Trigger scroll check on page load
  window.dispatchEvent(new Event("scroll"));
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

// Active Navigation on Scroll
function activateNavigation() {
  const navLinks = document.querySelectorAll(
    'a[href="#home"], a[href="#about"], a[href="#portfolio"], a[href="#blog"], a[href="#contact"]'
  );
  const sections = document.querySelectorAll("section[id]");

  function updateActiveLink() {
    let current = "";
    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Debug: log untuk section home
      if (section.id === "home") {
        console.log(
          "Home - offsetTop:",
          sectionTop,
          "scrollPosition:",
          scrollPosition,
          "sectionHeight:",
          sectionHeight
        );
      }

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    // Remove active class from all links
    navLinks.forEach((link) => {
      link.classList.remove("bg-secondary", "text-dark");
      link.classList.add("text-light");
    });

    // Add active class to current section
    if (current) {
      const activeLink = document.querySelector(`a[href="#${current}"]`);
      if (activeLink) {
        activeLink.classList.remove("text-light");
        activeLink.classList.add("bg-secondary", "text-dark");
      }
    }
  }

  // Initial check dengan delay
  setTimeout(() => {
    updateActiveLink();
  }, 100);

  // On scroll
  window.addEventListener("scroll", updateActiveLink);
}
