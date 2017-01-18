class Radix{
  constructor(chars){
    //If not assigned then default is 64
    if (typeof(chars) != "string"){
      chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    }
    var base = chars.length;


    this.numberToEncoding = function(value){
      if (typeof(value) != "number"){
        return null;
      }

      if (value >= base){
        var nextDigit = Math.floor(value / base);
        var rem = (value % base);

        return this.numberToEncoding(nextDigit)+chars[rem];
      }else{
        return chars[value];
      }
    };

    this.encodingToNumber = function(value){
      if (typeof(value) != "string"){
        return null;
      }

      var digits = value.split('');
      digits = digits.reverse();
      var output = 0;

      for (let i=0; i<digits.length; i++){
        if (digits[i] == chars[0]){
          continue;
        }

        output += chars.indexOf(digits[i]) * Math.pow(base, i);
      }

      return output;
    };

    this.convert = function(value){
      if (typeof(value) == "string"){
        return this.encodingToNumber(value);
      }
      if (typeof(value) == "number"){
        return this.numberToEncoding(value);
      }
      return null;
    };
  }
}

module.exports = Radix;
