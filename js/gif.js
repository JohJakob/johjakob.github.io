//
// gif.js
// johjakob.de
//
// © 2018 Johannes Jakob
// Made with <3 in Germany
//

function showStaticImage(image, button) {
  var path = button.dataset.staticPath;
  var filetype = button.dataset.staticFiletype;

  image.src = path + "." + filetype;
  image.srcset = path + "@2x." + filetype + " 2x, " + path + "." + filetype + " 1x";
  image.style.cursor = "default";

  button.innerText = "Show dynamic image";
  button.onclick = function() { showDynamicImage(image, button) };
}

function showDynamicImage(image, button) {
  var path = button.dataset.dynamicPath;
  var filetype = button.dataset.dynamicFiletype;

  image.src = path;
  image.srcset = path + "@2x." + filetype + " 2x, " + path + "." + filetype + " 1x";
  image.style.cursor = "default";

  button.innerText = "Show static image";
  button.onclick = function() { showStaticImage(image, button) };
}
