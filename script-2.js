var cross = document.querySelector("#cross");
var show = document.querySelector("#show");
var aside = document.querySelector("#aside");
var mainContent = document.querySelector("#mainContent");


cross.addEventListener("click", function(){
aside.style.width="10%";
mainContent.style.width="90%";
cross.style.display="none";
show.style.visibility="visible";
})
show.addEventListener("click", function(){
aside.style.width="20%";
mainContent.style.width="80%";
cross.style.display="block";
show.style.visibility="hidden";
})