n JavaScript, which comparison returns true?

0 == false;    // true
"5" === 5      // false
0 === false;   // false
null === undefined      // false 
null == undefined     // true  but why?  => 

Explanation:

== → abstract equality (loose equality).

It performs type coercion before comparing.

According to the spec, null and undefined are considered loosely equal.

Hence: null == undefined → true.

=== → strict equality.

It checks both type and value without coercion.

null is of type object, undefined is its own type.

Hence: null === undefined → false.


