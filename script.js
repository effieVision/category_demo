var allContentItems;
var musicButton, poemButton, videoButton, digitalButton;

document.addEventListener('DOMContentLoaded', (event) => {

    allContentItems = document.getElementsByClassName('content-item');
    musicButton = document.getElementById('category-music');
    poemButton = document.getElementById('category-poem');
    videoButton = document.getElementById('category-video');
    digitalButton = document.getElementById('category-digital');


    musicButton.addEventListener('click', function() { hideAllExceptCategory("content-music") });
    poemButton.addEventListener('click', function() { hideAllExceptCategory("content-poem") });
    videoButton.addEventListener('click', function() { hideAllExceptCategory("content-video") });
    digitalButton.addEventListener('click', function() { hideAllExceptCategory("content-digital") });


});


function hideAllExceptCategory(categoryToShow) {

  console.log("Checking for class: " + categoryToShow);

  for (var i = 0; i < allContentItems.length; i++) {

      var itemToCheck = allContentItems[i];

      console.log("Classes in item #" + i + ": " + itemToCheck.classList);

      if (itemToCheck.classList.contains(categoryToShow) == false) {
        itemToCheck.classList.add('dimContent');
        itemToCheck.classList.remove('brightContent');
      }
      else {
        itemToCheck.classList.add('brightContent');
        itemToCheck.classList.remove('dimContent');
      }
  }
}
