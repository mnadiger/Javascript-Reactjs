//Vowel Repeater

//Given a string, return a new version of the string where each vowel is duplicated one more time than the previous vowel you encountered. For instance, the first vowel in the sentence should remain unchanged. The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.
	//•	The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
	//•	The original vowel should keep its case.
	//•	Repeated vowels should be lowercase.
	//•	All non-vowel characters should keep their original case.


//Example Walkthrough

//Input: "Hello"
	//1.	"H" → not a vowel → result = "H"
	//2.	"e" → first vowel → vowelCount = 1 → "e" + "e".repeat(0) → "e" → result = "He"
	//3.	"l" → not a vowel → result = "Hel"
	//4.	"l" → not a vowel → result = "Hell"
	//5.	"o" → second vowel → vowelCount = 2 → "o" + "o".repeat(1) → "oo" → result = "Helloo"

// 👉 Final output = "Helloo"



function vowelRepeater(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
      // First instance keeps original case, rest are lowercase
      result += char + char.toLowerCase().repeat(vowelCount - 1);
    } else {
      result += char;
    }
  }

  return result;
}

// Example usage
console.log(vowelRepeater("Hello World"));  
// Output: "Heellooo Wooorld"







Explaination:

We’re inside a loop, looking at one character at a time.

⸻

1. char

This is the original vowel we found in the string.
	•	The first time we see a vowel, we want to keep its original case (uppercase or lowercase).
	•	Example: if char = "E", we add "E".

⸻

2. char.toLowerCase()

All extra repeats of this vowel must be lowercase (as per the rules).
	•	Example: if char = "E", the repeats should be "e" not "E".

⸻

3. .repeat(vowelCount - 1)
	•	vowelCount tracks how many vowels we’ve encountered so far.
	•	The first vowel should appear once (repeat(0) → no extra copies).
	•	The second vowel should appear twice (repeat(1) → one extra copy).
	•	The third vowel should appear three times (repeat(2) → two extra copies).
	•	And so on…

⸻

4. Putting it together

So we append:
	•	The original vowel (char)
	•	Plus the correct number of lowercase repeats (char.toLowerCase().repeat(vowelCount - 1))
    
    
    


cleaner versiknif the logic:


function vowelRepeater(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  let result = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      // Count this vowel
      vowelCount++;

      // Start with the original vowel (keeps its original case)
      let repeated = char;

      // Add the extra vowels (all in lowercase)
      for (let i = 1; i < vowelCount; i++) {
        repeated += char.toLowerCase();
      }

      // Append to result
      result += repeated;
    } else {
      // Non-vowel → add as is
      result += char;
    }
  }

  return result;
}

// Example usage
console.log(vowelRepeater("Hello World"));  
// Output: "Heellooo Wooorld"






