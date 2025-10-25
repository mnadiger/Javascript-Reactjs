//Given:
// const passLength = 12;
// const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
// const lower = "abcdefghijklmnopqrstuvwxyz"; 
// const numbers = "0123456789"; 
// const symbols = "!@#$%^&*()_+[]{}<>?,.";



function generatePassword(passLength) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?,.";

  if (passLength < 4) {
    throw new Error("Password length must be at least 4 to include all character types.");
  }
  

  // Pick one from each category to ensure at least one of each type
  const mandatoryChars = [
    upper[Math.floor(Math.random() * upper.length)],
    lower[Math.floor(Math.random() * lower.length)],
    numbers[Math.floor(Math.random() * numbers.length)],
    symbols[Math.floor(Math.random() * symbols.length)]
  ];



  // Combine all character sets
  const allChars = upper + lower + numbers + symbols;

  // Fill the rest of the password randomly
  const remainingLength = passLength - mandatoryChars.length;
  
  for (let i = 0; i < remainingLength; i++) {
    const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    mandatoryChars.push(randomChar);
  }

  // Shuffle the final array to randomize the order
  const shuffled = mandatoryChars.sort(() => Math.random() - 0.5);

  // Join to form final password
  return shuffled.join('');
}

// Example:
console.log(generatePassword(12));
