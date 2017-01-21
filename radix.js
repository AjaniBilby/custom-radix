class Radix{
  constructor(chars){
    //If not assigned then default is 64
    if (typeof(chars) != "string"){
      this.chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_';
    }else{
      this.chars = chars;
    }
    this.base = this.chars.length;

    this.banDecimals = true;
  }

  get allowedDecimals(){
    return (this.chars.indexOf('.') == -1 && !this.banDecimals);
  }
}
Radix.prototype.numberToEncoding = function(value){
  if (typeof(value) != "number"){
    return null;
  }

  if (value >= this.base){
    var nextDigit = Math.floor(value / this.base);
    var rem = (value % this.base);

    return this.numberToEncoding(nextDigit)+this.chars[rem];
  }else{
    return this.chars[value];
  }
};
Radix.prototype.encodingToNumber = function(value){
  if (typeof(value) != "string"){
    return null;
  }

  var digits = value.split('');
  digits = digits.reverse();
  var output = 0;

  for (let i=0; i<digits.length; i++){
    if (digits[i] == this.chars[0]){
      continue;
    }

    output += this.chars.indexOf(digits[i]) * Math.pow(this.base, i);
  }

  return output;
};
Radix.prototype.convert = function(value){
  var offset = -1;

  if (typeof(value) == "string"){
    return this.encodingToNumber(value);
  }
  if (typeof(value) == "number"){
    return this.numberToEncoding(value);
  }
  return null;
};

Radix.prototype.add = function(a, b){
  return this.convert( this.convert(a)+this.convert(b) );
};
Radix.prototype.subtract = function(a, b){
  return this.convert( this.convert(a)-this.convert(b) );
};

Radix.prototype.multiply = function(a, b){
  return this.convert( this.convert(a)*this.convert(b) );
};
Radix.prototype.divide = function(a, b){
  return this.convert( this.convert(a)/this.convert(b) );
};

module.exports = Radix;
