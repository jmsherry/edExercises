
/**
* COMMENTS AND ESCAPING
*/

// In javascript two forward slashes (as in the beginning of this line) is a single line comment.

/*
* This is a multi-line comment. Anything between '/*' and the reverse is not processed
*/

// Characters like the slashes, /*, "", '', etc have meaning in the code. if you want them just to print out, rather than be
// interpreted then you'll need to 'escape' them, like so:

console.log("<a href=\"home\">"); //<-- semi-colons are line terminators; you need them after you give an instruction.
