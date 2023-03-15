document.getElementById("show-more-btn").addEventListener("click", showMoreProjects);
document.getElementById("show-less-btn").addEventListener("click", showLessProjects);

var showmore = document.getElementById("show-more-btn");
var showless = document.getElementById("show-less-btn");

function showMoreProjects() {
  var additionalProjects = document.getElementsByClassName("additional-project");
  for (var i = 0; i < additionalProjects.length; i++) {
    additionalProjects[i].style.display = "flex";
  }
  showmore.style.display = "none";
  showless.style.display = "block";
}

function showLessProjects() {
  var additionalProjects = document.getElementsByClassName("additional-project");
  for (var i = 0; i < additionalProjects.length; i++) {
    additionalProjects[i].style.display = "none";
  }
  showmore.style.display = "block";
  showless.style.display = "none";
}

