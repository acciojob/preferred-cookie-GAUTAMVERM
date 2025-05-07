//your JS code here. If required.
// Get a cookie by name
function getCookie(name) {
  const cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    const [key, value] = cookieArr[i].split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

window.onload = function () {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    document.getElementById("fontsize").value = savedSize;
  }

  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    document.getElementById("fontcolor").value = savedColor;
  }
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.getElementById("fontsize").value;
  const color = document.getElementById("fontcolor").value;

  setCookie("fontsize", size, 7);
  setCookie("fontcolor", color, 7);

  document.documentElement.style.setProperty("--fontsize", size + "px");
  document.documentElement.style.setProperty("--fontcolor", color);
});
