document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yesBtn");
  const mainCard = document.querySelector(".card");
  const celebrateDiv = document.getElementById("celebrate");
  const buttonsDiv = document.querySelector(".buttons");

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

    // Play a lovely sound
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