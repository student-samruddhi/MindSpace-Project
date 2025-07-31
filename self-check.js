document.addEventListener("DOMContentLoaded", () => {
  const moods = ["happy", "neutral", "sad", "angry", "crying"];
  const messageBox = document.getElementById("msg");
  const container = document.querySelector(".msg-container");

  const messages = {
    happy: "That's wonderful! Keep spreading joy today 😊",
    neutral: "It's okay to have a calm or quiet day. Stay balanced 💛",
    sad: "We're here for you. Take a deep breath. This feeling will pass 💙",
    angry: "Let it out gently. Try a breathing exercise to cool off 💨",
    crying: "You're not alone. Sending you a big warm hug 🤗",
  };

  moods.forEach((mood) => {
    const button = document.getElementById(mood);
    if (button) {
      button.addEventListener("click", () => {
        showMoodMessage(mood);
      });
    }
  });

  function showMoodMessage(mood) {
    messageBox.textContent =
      messages[mood] || "Thanks for sharing how you feel.";
    container.classList.remove("hide");
  }
});
