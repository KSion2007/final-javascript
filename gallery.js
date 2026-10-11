/**
 * Update the main image viewer when hovering or focusing on a thumbnail.
 * @param {HTMLImageElement} previewPic - The thumbnail element triggering the event.
 */
function upDate(previewPic) {
  const displayBox = document.getElementById("image");

  // Update text with the image's alt text
  displayBox.innerHTML = previewPic.alt;

  // Change background image to the source of the preview image
  displayBox.style.backgroundImage = `url('${previewPic.src}')`;
}

/**
 * Reset the main viewer box back to its default state.
 */
function unDo() {
  const displayBox = document.getElementById("image");

  // Clear background image
  displayBox.style.backgroundImage = "url('')";

  // Reset default text
  displayBox.innerHTML = "Hover over or focus on an image below to display here.";
}

/**
 * Initializer function executed on body load.
 * Dynamically assigns tabindex="0" to all thumbnails to make them keyboard-accessible.
 */
function initGallery() {
  // Step 16.1: Console log verification
  console.log("Gallery initialized: Adding tabindex attributes to preview images.");

  // Step 16.2: Retrieve preview elements and loop through them
  const images = document.querySelectorAll(".preview");

  for (let i = 0; i < images.length; i++) {
    // Step 16.3: Add tabindex so each image can be navigated via the Tab key
    images[i].setAttribute("tabindex", "0");
  }
}