// boolean
var isCool = true;
// number
var age = 54;
// string
var eyeColor = 'brown';
var favouriteQuote = "I'm not old. I'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.small;
// Any - !!!!!!!! BE CAREFUL
var whatever = 'aghhhhhhhhh noooooooo!!!!!';
whatever = basket;
// void
var sing = function () {
    console.log('la la la la la');
};
// never
var error = function () {
    throw Error('ooooop');
};
