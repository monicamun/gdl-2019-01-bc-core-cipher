window.cipher = {
  encode: function(message, key) {
    var n = key + 26;
    var result = "";
    
    for (let i = 0; i !== message.length; i++) {
      var c = message.charCodeAt(i);

      c = ((c - 65 + n) % 26) + 65;
      result += String.fromCharCode(c);
    }
    return result;
  },

  decode: function(message, key) {
    var n = key + 26;
    var result = "";

    for (let i = 0; i !== message.length; i++) {
      var c = message.charCodeAt(i);

      c = ((c - n + 65) % 26) + 65;
      result += String.fromCharCode(c);
    }
    return result;
  }
};
