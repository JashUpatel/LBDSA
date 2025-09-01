inp = 25;
out = [];

const decimalToBinary = (num) => {
  i = 0;
  bin = 0;

  while (num > 0) {
    bit = num % 2;
    bin = bin + bit * Math.pow(10, i++);
    num = Math.floor(num / 2);
  }

  return bin;
};

const decimalToBinaryUsingBitwise = (num) => {
  i = 0;
  bin = 0;

  while (num > 0) {
    bit = num & 1;
    bin = bin + bit * Math.pow(10, i++);
    num = num >> 1;
    console.log(num);
  }

  return bin;
};

const binaryToDecimal = (bin) => {
  i = 0;
  dec = 0;

  while (bin) {
    bit = bin % 10;
    dec = dec + bit * Math.pow(2, i++);
    bin = Math.floor(bin / 10);
  }

  return dec;
};

// const binaryToDecimalUsingBitwise = (bin) => {
//   i = 0;
//   dec = 0;
//   n = bin.toString().length;
//   while (bin > 0) {
//     bit = bin & 1;
//     console.log(bit);
//     dec = dec + bit * Math.pow(2, i++);
//     console.log(bin);
//     bin = bin.toString()[(0, n - i - 1)];
//     console.log(bin);
//   }

//   return dec;
// };

const binaryToDecimalUsingIteration = (bin) => {
  dec = 0;
  n = bin.toString().length;

  for (i = 0; i < n; i++) {
    bit = parseInt(bin.toString()[n - i - 1]);
    dec = dec + bit * Math.pow(2, i);
  }

  return dec;
};

// console.log(decimalToBinary(inp));
// console.log(decimalToBinaryUsingBitwise(inp));
// console.log(binaryToDecimal(101));
// console.log(binaryToDecimalUsingIteration(101));
// console.log(parseInt("101", 2)); //parseInt method by default converts binary input into decimal when base is set to 2
// console.log((inp >>> 0).toString(2)); // right shift operator with tostring method having base 2 to convert decimal to binary
// console.log(inp.toString(2)); // right shift operator with tostring method having base 2 to convert decimal to binary
