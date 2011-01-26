function messageHandler(e) {
  var reply="<code>" + e.data + "</code>";
  var ms= Math.floor(Math.random()*2000);
    setTimeout(function() { postMessage(reply) }, ms);
}
addEventListener("message", messageHandler, true);
