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


/* Switch clock Animation */

// Switch clock Animation

// Helper function to position the GIF randomly
function positionGif(gif) {
    var maxheight = document.getElementById('profile').clientHeight - 90;
    var maxwidth = document.getElementById('profile').clientWidth - 90;
  
    // Generate a random position within the container
    var randomLeft = Math.floor(Math.random() * maxwidth);
    var randomTop = Math.floor(Math.random() * maxheight);
  
    gif.style.left = randomLeft + 'px';
    gif.style.top = randomTop + 'px';
    gif.style.position = 'absolute';
  }
  
  
  // Function to show the first GIF and set a timeout to show the second GIF
  function showFirstGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM1.gif';
    gif.style.width = '41%'; // Original size
    gif.style.height = '41%'; // Original size
    positionGif(gif);
    // Set a timeout to show the second GIF after 6000 milliseconds
    setTimeout(showSecondGif, 7000);
  }
  
  // Function to show the second GIF and set a timeout to show the third GIF
  function showSecondGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM2.gif';
    gif.style.width = '26%'; // Smaller size
    gif.style.height = '26%'; // Smaller size
    positionGif(gif);
    // Set a timeout to show the third GIF after 2000 milliseconds
    setTimeout(showFourthGif, 2000);
  }
  
  // Function to show the third GIF and set a timeout to show the fourth GIF
  function showThirdGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM3.gif';
    gif.style.width = '35%'; // Size for the third GIF
    gif.style.height = '35%'; // Size for the third GIF
    positionGif(gif);
    // Set a timeout to show the fourth GIF after 485 milliseconds
    setTimeout(showFirstGif, 487);
  }
  
  // Function to show the fourth GIF and set a timeout to show the first GIF
  function showFourthGif() {
    var gif = document.getElementById('gif');
    gif.src = 'src/MM4.gif';
    gif.style.width = '28%';
    gif.style.height = '28%';
    positionGif(gif);
    setTimeout(showFirstGif, 10000);
  }

  // Use `DOMContentLoaded` to ensure all DOM content is loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
    showThirdGif(); // Start with the fourth GIF
  });
