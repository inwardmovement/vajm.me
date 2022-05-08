// TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.querySelector(".top-btn")) {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.querySelector(".top-btn").style.display = "flex";
    } else {
      document.querySelector(".top-btn").style.display = "none";
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ENABLE POPOVERS
$(function () {
  $('[data-toggle="popover"]').popover()
})

// ENABLE TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// EXTERNAL LINKS
var links = $(document.links).filter(function() {
  return this.hostname !== location.hostname
    && !this.classList.contains('no-external-icon');
});
for (var i = 0; i < links.length; i++) {
  links[i].innerHTML += "<span style=\"white-space: nowrap;\">" + externalLinkIcon + "</span>";
};
