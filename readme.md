#Radix varaible encoder

##Setup
```
var encoding = '012345';

var radix = new Radix(encoding);
```
This encoding will allow you to convert two and from a base 5 number system, although you do not only have to put numbers in you can also put any UTF-8 / Unicode character into the string to create a larger encoding.
***Note***: Default encoding is Radix64.

##Convert To
```
radix.numberToEncoding(42)
```

##Convert back to base 10 (normal numbers)
```
radix.encodingToNumber(encodedNumber)
```

##Add
```
var a = radix.convert(4);
var b = radix.convert(8);

var result = radix.add(a, b);
```

##Subtract
```
var a = radix.convert(4);
var b = radix.convert(8);

var result = radix.subtract(a, b);
```

##Multiply
```
var a = radix.convert(4);
var b = radix.convert(8);

var result = radix.multiply(a, b);
```

##Divide
```
var a = radix.convert(4);
var b = radix.convert(8);

var result = radix.divide(a, b);
```
