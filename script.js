// hero changing ellements
function small_width() {
  if (window.innerWidth  <= 600) {
    document.getElementById("0").innerHTML = "Programmer";
    document.getElementById("1").innerHTML = "Data Scientist";
    document.getElementById("2").innerHTML = "Dentist";
    document.getElementById("header").innerHTML = "<span class=small>Kiarash Bakhshaei</span>";
  }
  else {
    document.getElementById("0").innerHTML = "I'm a Programmer";
    document.getElementById("1").innerHTML = "I'm a Data Scientist";
    document.getElementById("2").innerHTML = "I'm a Dentist";
    document.getElementById("header").innerHTML = "This is <span class=small>Kiarash Bakhshaei</span>";
  };
  jobs();
}
window.onload = small_width;
window.onresize = small_width;


var i = 1;
setInterval(jobs, 1250);
function jobs(){
  for (n = 0; n < 3; n++){
    document.getElementById(n.toString()).style.display = "none";
  };
  document.getElementById(i.toString()).style.display = "inline";
  i = (i + 1) % 3;
};

// highlight active link on scroll
document.addEventListener("DOMContentLoaded", function() {
  const nav_links = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", function() {
    const scroll_Position = window.scrollY;
    // check if scroll_Position = on of links
    nav_links.forEach(function(link) {
      const reference = link.getAttribute("href");
      
      //  if reference section exists
      const referenceElement = document.querySelector(reference);
      if (!referenceElement) return;
      
      // then find the top and bottom positions reference section
      const referenceTop = referenceElement.offsetTop;
      const referenceBottom = referenceTop + referenceElement.offsetHeight;
      
      // if the scroll position is in the reference section
      if (scroll_Position >= referenceTop && scroll_Position <= referenceBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});

// Function to show Persian content and hide English content
function showFarsiContent() {
  const englishElements = document.querySelectorAll('[name="english"]');
  const persianElements = document.querySelectorAll('[name="persian"]');
  englishElements.forEach(function(element) {
    element.classList.remove('show');
    element.classList.add('hide');
  });
  persianElements.forEach(function(element) {
    element.classList.remove('hide');
    element.classList.add('show');
  });
}

// Function to show English content and hide Persian content
function showEnglishContent() {
  const englishElements = document.querySelectorAll('[name="english"]');
  const persianElements = document.querySelectorAll('[name="persian"]');
  englishElements.forEach(function(element) {
    element.classList.remove('hide');
    element.classList.add('show');
  });
  persianElements.forEach(function(element) {
    element.classList.remove('show');
    element.classList.add('hide');
  });
}