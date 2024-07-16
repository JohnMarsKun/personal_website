/* Clock */
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();


// random gif positions
function positionGif(gif) {

  // Generate a random position within the container
  var randomLeft = Math.random() * 100;
  var randomTop = Math.random() * 70;

  gif.style.left = randomLeft + '%';
  gif.style.top = randomTop + '%';
}
  
  
  // Function to show the first GIF and set a timeout to show the second GIF
  function showFirstGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM1.gif';
    gif.style.width = '25%'; // Original size
    gif.style.height = '25%'; // Original size
    positionGif(gif);
    // Set a timeout to show the second GIF after 7000 milliseconds
    setTimeout(showSecondGif, 7000);
  }
  
  // Function to show the second GIF and set a timeout to show the third GIF
  function showSecondGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM2.gif';
    gif.style.width = '16%'; // Smaller size
    gif.style.height = '16%'; // Smaller size
    positionGif(gif);
    // Set a timeout to show the third GIF after 2000 milliseconds
    setTimeout(showFourthGif, 2000);
  }
  
  // Function to show the third GIF and set a timeout to show the fourth GIF
  function showThirdGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM3.gif';
    gif.style.width = '25%'; // Size for the third GIF
    gif.style.height = '25%'; // Size for the third GIF
    positionGif(gif);
    // Set a timeout to show the fourth GIF after 485 milliseconds
    setTimeout(showFirstGif, 487);
  }
  
  // Function to show the fourth GIF and set a timeout to show the first GIF
  function showFourthGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM4.gif';
    gif.style.width = '18%';
    gif.style.height = '18%';
    positionGif(gif);
    setTimeout(showFirstGif, 10000);
  }

  // Use `DOMContentLoaded` to ensure all DOM content is loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
    showThirdGif(); // Start with the fourth GIF
  });
