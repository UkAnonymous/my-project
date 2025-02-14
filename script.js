const flipBook = (elBook) => {
    elBook.style.setProperty("--c", 0); // Set current page
    elBook.querySelectorAll(".page").forEach((page, idx) => {
      page.style.setProperty("--i", idx);
      page.addEventListener("click", (evt) => {
        if (evt.target.closest("a")) return;
        const curr = evt.target.closest(".back") ? idx : idx + 1;
        elBook.style.setProperty("--c", curr);
      });
    });
  };
 document.querySelectorAll(".book").forEach(flipBook);


  // Play audio function
function playaudio() {
  var audio = document.getElementById('guitaraudio');
  if (audio) {
    audio.play().catch(error => {
      console.log('Autoplay blocked:', error);
    });
  }
}

// Trigger audio on first page flip
document.querySelector('.page').addEventListener('click', playaudio);
 