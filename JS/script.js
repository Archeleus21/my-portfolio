//project Images
//=======================================================
//stores element from the DOM
const PROJECTS = document.getElementById("projects");
console.log(PROJECTS);
const MAINIMAGE = document.getElementById("main-img");
const THUMBNAIL = document.getElementById("thumbnail");

//event handler function
function changeImage(e)
{
  //for compatibility for IE8 or earlier
  e = e || window.event;
  //target will happen on actual image
  var targetElement = e.target || e.srcElement;
  //lets keep main image from getting turned into a NULL value
  if(targetElement.tagName == "IMG")
  {
    //takes target element src and sets it to main image source
    MAINIMAGE.src = targetElement.getAttribute("src");
  }
}
//registers clicks on the thumbnails and calls function only when clicked
THUMBNAIL.onclick = changeImage;
