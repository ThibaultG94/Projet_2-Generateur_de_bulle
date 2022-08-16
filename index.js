const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  let size = Math.random() * 200 + 100 + "px";

  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 100 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--y", Math.random() * 100 - 100 + "%");
  bubble.style.setProperty("--x", Math.random() * 110 + "%");

  setTimeout(() => {
    bubble.remove("span");
  }, 8000);
};
setInterval(bubbleGenerator, 1500);
