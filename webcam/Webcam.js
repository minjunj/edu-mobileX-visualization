var myStoredInterval = 0;

function getVideo() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var myVideoStream = document.getElementById("myVideo");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function (stream) {
        myVideoStream.srcObject = stream;
        myVideoStream.play();
      })
      .catch(function (error) {
        console.log("Error with video stream: ", error);
      });
  } else {
    alert("getUserMedia not supported by this browser.");
  }
}

function takeSnapshot() {
  var myCanvasElement = document.getElementById("myCanvas");
  var myVideoStream = document.getElementById("myVideo");
  var myCTX = myCanvasElement.getContext("2d");
  myCTX.drawImage(
    myVideoStream,
    0,
    0,
    myCanvasElement.width,
    myCanvasElement.height
  );
}

function takeAuto() {
  takeSnapshot(); // get snapshot right away then wait and repeat
  clearInterval(myStoredInterval);
  myStoredInterval = setInterval(function () {
    takeSnapshot();
  }, document.getElementById("myInterval").value);
}
