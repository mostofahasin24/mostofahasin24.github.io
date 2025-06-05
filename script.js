// Replace with your channel's playlist ID if needed
const channelVideos = [
  "dQw4w9WgXcQ", // replace with your actual video IDs
  "3JZ_D3ELwOQ",
  "9bZkp7q19f0"
];

const grid = document.getElementById("video-grid");

channelVideos.forEach(id => {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${id}`;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  grid.appendChild(iframe);
});

// Optional: You can manually write your subscriber count or use YouTube API (requires token)
document.getElementById("subscriber-count").innerText = "Approx. 120+ subscribers";
