var string = "Welcome to this Javascript Guide!";
function reverse(string, separator) {
  return string.split(separator).reverse().join(separator);
}
var reverseSentence = reverse(string, "");
console.log(reverseSentence)