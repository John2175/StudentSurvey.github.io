var id; 
var prof_name;
var prof_pic;



function decodeJwtResponse(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function onSignIn(responsePayload){
  id = document.getElementsByClassName("sub");
  prof_name = document.getElementsByClassName("profile_name");
  prof_pic = document.getElementsByClassName("profile_pic");
  for(var i = 0; i < name.length; i++){
    prof_name[i].innerText=responsePayload.name;   
    prof_pic[i].src=responsePayload.picture;
    }
}

function handleCredentialResponse(response) {
  // decodeJwtResponse() is a custom function defined by you
  // to decode the credential response.
  const responsePayload = decodeJwtResponse(response.credential);

  console.log("ID: " + responsePayload.sub);
  console.log('Full Name: ' + responsePayload.name);
  console.log('Given Name: ' + responsePayload.given_name);
  console.log('Family Name: ' + responsePayload.family_name);
  console.log("Image URL: " + responsePayload.picture);
  console.log("Email: " + responsePayload.email);
  onSignIn(responsePayload);
}








function toggleMenu()
{
  var menu = document.getElementById("myMenu");
  var menuicon = document.getElementById("menu-icon");
  if (menu.style.width === "150px") 
  {
  //  menuicon.textContent = "|||"
    menu.style.width = "0";
  } 
  else 
  {
  //  menuicon.textContent = "☰"
    menu.style.width = "150px";
  }
}

function onFocusMain()
{
  var menu = document.getElementById("myMenu");
  if (menu.style.width === "150px") 
  {
  //  menuicon.textContent = "☰"
    menu.style.width = "0";
  }
}

function navigate(page)
{
  window.location.href = "../" + page + ".html"
}


