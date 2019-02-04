window.cipher = {
  encode: function(key, message) {
    var n = key + 26;
    var result = "";

    for (let i = 0; i !== message.length; i++) {
      var c = message.charCodeAt(i);

      let valor = ((c - 65 + n) % 26) + 65;
      result += String.fromCharCode(valor);
    }
    return result;
  },

  decode: function(key, message) {
    var n = key + 26;
    var result = "";

    for (let i = 0; i !== message.length; i++) {
      var c = message.charCodeAt(i);

      valor = ((c - n + 65) % 26) + 65;
      result += String.fromCharCode(valor);
    }
    return result;
  }
};
