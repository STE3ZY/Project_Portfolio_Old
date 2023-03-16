document.getElementById("show-more-btn").addEventListener("click", showMoreProjects);
document.getElementById("show-less-btn").addEventListener("click", showLessProjects);
document.getElementById("show-more-cert-btn").addEventListener("click", showMoreCertificates);
document.getElementById("show-less-cert-btn").addEventListener("click", showLessCertificates);

var showmore = document.getElementById("show-more-btn");
var showless = document.getElementById("show-less-btn");
var showmorecert = document.getElementById("show-more-cert-btn");
var showlesscert = document.getElementById("show-less-cert-btn");

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

function showMoreCertificates() {
  var additionalCertificates = document.getElementsByClassName("additional-certificate");
  for (var i = 0; i < additionalCertificates.length; i++) {
    additionalCertificates[i].style.display = "flex";
  }
  showmorecert.style.display = "none";
  showlesscert.style.display = "block";
}

function showLessCertificates() {
  var additionalCertificates = document.getElementsByClassName("additional-certificate");
  for (var i = 0; i < additionalCertificates.length; i++) {
    additionalCertificates[i].style.display = "none";
  }
  showmorecert.style.display = "block";
  showlesscert.style.display = "none";
}

