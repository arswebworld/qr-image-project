setTimeout(() => {
  document.getElementById("loading").style.display = "none";

  
  document.getElementById("resultText").innerHTML =
    "😅 Sorry! কাউকে খুঁজে পাইনি…<br>Maybe destiny is still loading 💔";

  document.getElementById("resultText").style.display = "block";
}, 3000);
