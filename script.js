function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const typed = new Typed('.title-multiline',{
  strings : ['Frontend Developer','FullStack Developer','Software Engineer'],
  typeSpeed : 100,
  backSpeed : 100,
  backDelay : 1000,
  loop : true
});

const newTyped = new Typed('.title-multiline1',{
  strings : ['build','develop','grow','work'],
  typeSpeed : 100,
  backSpeed : 100,
  backDelay : 1000,
  loop : true
});

function copyOnClick() {  
  var tempInput = document.createElement("input");
  tempInput.style = "position: absolute; left: -1000px; top: -1000px";
  tempInput.value = "amolmathur2001@gmail.com";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Link copied");
}