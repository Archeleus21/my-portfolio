//project Images
//=======================================================
//stores element from the DOM
var aaMainImage = document.getElementById("aa-main-img");
var aaThumbnail = document.getElementById("aa-thumbnail");
var aeMainImage = document.getElementById("ae-main-img");
var aeThumbnail = document.getElementById("ae-thumbnail");
var peMainImage = document.getElementById("pe-main-img");
var peThumbnail = document.getElementById("pe-thumbnail");
var usMainImage = document.getElementById("us-main-img");
var usThumbnail = document.getElementById("us-thumbnail");
var zrMainImage = document.getElementById("zr-main-img");
var zrThumbnail = document.getElementById("zr-thumbnail");
var tdMainImage = document.getElementById("td-main-img");
var tdThumbnail = document.getElementById("td-thumbnail");

//var mainImage = ["alien-attack", "alien-escape"];
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
    //change specific galleries
    switch (targetElement.parentElement.id) {
      case aaThumbnail.id:
        //takes target element src and sets it to main image source
        aaMainImage.src = targetElement.getAttribute("src");
        break;
      case aeThumbnail.id:
        aeMainImage.src = targetElement.getAttribute("src");
        break;
      case peThumbnail.id:
        peMainImage.src = targetElement.getAttribute("src");
        break;
      case usThumbnail.id:
        usMainImage.src = targetElement.getAttribute("src");
        break;
      case zrThumbnail.id:
        zrMainImage.src = targetElement.getAttribute("src");
        break;
      case tdThumbnail.id:
        tdMainImage.src = targetElement.getAttribute("src");
        break;
      default:

    }
  }
}
//registers clicks on the thumbnails and calls function only when clicked
// THUMBNAIL.onclick = changeImage;
