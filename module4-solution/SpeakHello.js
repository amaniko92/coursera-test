(function () {
  var speakWord = "Hello";
  var helloSpeaker = function (name){
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);
