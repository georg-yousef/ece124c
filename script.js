var expand = document.getElementById('myModal');


var gall = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");


var showModal = function(){
    expand.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for (var i = 0; i < gall.length; i++) {
    gall[i].addEventListener('click', showModal);
}

var span = document.getElementsByClassName("press")[0];


span.onclick = function() { 
    expand.style.display = "none";

}
