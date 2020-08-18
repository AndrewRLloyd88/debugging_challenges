let input = process.argv[2];

const reverse = function(input) {
  return input.split('').reverse().join('');
};

if (input) {
  console.log(reverse(input));
}