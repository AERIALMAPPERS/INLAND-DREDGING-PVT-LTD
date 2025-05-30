//function to validate user email address
function criteria() { 
    const form = document.getElementById('form');
    const validChars = ['.', '@', '_','-'];
    let email = document.getElementById('email').value;    
    let msg = document.getElementById('msg');
    let firstAt = email.indexOf('@');
    let lastAt = email.lastIndexOf('@');
    let lastDot = email.lastIndexOf('.');
    let firstChar = email.charAt(0);
    
    let state = true;
    
    email = email.trim().toLowerCase();
    msg.innerHTML = '';

    if(firstChar=='@' || firstChar=='.' ||firstChar=='_' || firstChar=='-' ||  !isNaN(firstChar)){
        msg.innerHTML = "invalid fisrt character for Email address";
        state = false;
    }
    else if(email.length<8){
        msg.innerHTML = "your email is too short!";
        state = false;
    }
    else if((firstAt<2) || (firstAt!=lastAt)){
        msg.innerHTML = "Error in @";
        state = false;
    }
    else if(lastDot-lastAt<3){
        msg.innerHTML = "Error in domain name";
        state = false;
    }
    else if(email.length-lastDot<3){
        msg.innerHTML = "Error in .com";
        state = false;
    }
    else {
        for(var i=0; i<email.length && state == true; i++){
       
            if((email.charCodeAt(i)>=97 && email.charCodeAt(i)<=122)){
                continue;
            }
            else if ((email.charCodeAt(i)>=48 && email.charCodeAt(i)<=57)) {
                continue;
            }
            else if (validChars.indexOf(email.charAt(i))!=-1){
                continue;
            }
            else {
                msg.innerHTML = "Please use valid email characters";
                state = false;
            }
         }
    }

    if (state == true) {
        msg.innerHTML = 'Thank You :) Your Message has been submitted successfully. <br> You shall here form us very soon!';
        document.getElementById('email').classList.remove("invalid")
    }
    else {
        document.getElementById('email').classList.add("invalid")
    }   
}    

form.addEventListener("submit", (e) => {
    e.preventDefault();
    criteria();
});

//SEARCH
const search = document.getElementById('search');
const searchBar = document.getElementById('searchBar');
//click on the Magnifier icon to toggle the search bar
search.addEventListener('click', function (){
    searchBar.classList.toggle('show')
    searchBar.classList.toggle('hide')
})
//press escape to close the search bar
 document.addEventListener('keydown', (event) => {
     var keyName = event.key;
     console.log("keyName");
     if ((keyName == 'Escape' && searchBar.classList.contains('show') == true)) {
            searchBar.classList.toggle('show')
            searchBar.classList.toggle('hide')    
         }
 } )

//  about slide section //


 function displayImageAndHighlight(event, imageUrl, area) {
  event.preventDefault(); // Prevent link behavior

  var img = document.getElementById("displayedImage");
  img.onload = function () {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    if (area === 'district1') {
      var coords = [100, 100, 200, 200, 300, 150];
      drawPolygon(ctx, coords);
    } else if (area === 'district2') {
      var coords = [150, 250, 250, 350, 200, 400];
      drawPolygon(ctx, coords);
    }

    img.src = canvas.toDataURL(); // Update image with highlighted one
  };

  img.src = imageUrl;
}

function drawPolygon(ctx, coords) {
  ctx.beginPath();
  ctx.moveTo(coords[0], coords[1]);
  for (var i = 2; i < coords.length; i += 2) {
    ctx.lineTo(coords[i], coords[i + 1]);
  }
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
  ctx.fill();
}