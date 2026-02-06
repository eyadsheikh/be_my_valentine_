document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const mainCard = document.querySelector(".card");
  const celebrateDiv = document.getElementById("celebrate");
  const buttonsDiv = document.querySelector(".buttons");

  // Playful "No" button moves when hovered or clicked
  function moveNoBtn() {
    const container = buttonsDiv;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    // Random new position
    let left = Math.random() * (containerWidth - btnWidth);
    let top = Math.random() * (containerHeight - btnHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = left + "px";
    noBtn.style.top = top + "px";
    noBtn.style.transition = "left 0.2s, top 0.2s";
  }

  noBtn.addEventListener("mouseenter", moveNoBtn);
  noBtn.addEventListener("click", moveNoBtn);

  // "Yes" button triggers all the lovely stuff!
  yesBtn.addEventListener("click", function () {
    // Hide buttons
    buttonsDiv.style.display = "none";

    // Show celebration message with lovely text
    celebrateDiv.innerHTML = "💖 Love you Joudy! 💖<br><span style='font-size:24px;'>You make every day brighter!</span>";
    celebrateDiv.classList.remove("hidden");
    celebrateDiv.style.fontSize = "2em";
    celebrateDiv.style.color = "#d72638";

    // Change background color and animate
    document.body.style.background = "linear-gradient(135deg, #ffe0e9 0%, #ffa8c2 100%)";
    mainCard.style.boxShadow = "0 0 40px #d72638";

    // Play a lovely sound (add love.mp3 to docs/)
    let audio = new Audio("love.mp3");
    audio.play();

    // Add floating animated hearts
    for (let i = 0; i < 18; i++) {
      let heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.innerHTML = "&#10084;";
      heart.style.left = Math.random() * 90 + "%";
      heart.style.animationDelay = Math.random() * 2 + "s";
      heart.style.fontSize = Math.random() * 1.5 + 1 + "em";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }

    // Optionally, shake the card a tiny bit for fun
    mainCard.classList.add("shake");
    setTimeout(() => {
      mainCard.classList.remove("shake");
    }, 1000);
  });
});