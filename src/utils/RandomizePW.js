const CHARS_ALL = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CHARS_SYMBOLS = '!@#$%^&*()';
const CHARS_NUMS = '0123456789';
const CHARS_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const CHARS_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Shuffle Method
String.prototype.shuffle = function () {
  var all = this.split(""),
  textLength = all.length;

  for(var i = textLength - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = all[i];
    all[i] = all[j];
    all[j] = tmp;
  }
  return all.join("");
}

// Main function
const randomizePW =  (options = [], characterLength) => {
  let characterPool = [];
  let password = '';

  // Randomizes if no options
  if(options.length === 0) {
    for(let i = 0; i < characterLength; i++) {
      let randomChar = Math.floor(Math.random() * CHARS_ALL.length + 1);
      password += CHARS_ALL.substring(randomChar, randomChar - 1);
    }
  }

  // Adds character strings together based on opts
  for(let i = 0; i < options.length; i++) {
    switch(options[i]) {
      case 'uppercase':
        characterPool.push(CHARS_UPPER);
        console.log(characterPool);
        break;
      case 'lowercase':
        characterPool.push(CHARS_LOWER);
        console.log(characterPool);
        break;
      case 'symbols':
        characterPool.push(CHARS_SYMBOLS);
        console.log(characterPool);
        break;
      case 'numbers':
        characterPool.push(CHARS_NUMS);
        console.log(characterPool);
        break;
      default:
        characterPool.push(CHARS_ALL);
        break;
    }
  }

  for(let i = 0; i < characterPool.length; i++) {
    for(let j = 0; j < Math.ceil(characterLength / characterPool.length); j++) {
      let randomChar = Math.floor(Math.random() * characterPool[i].length + 1);
      password += characterPool[i].substring(randomChar, randomChar - 1);
    }
  }

  return password.shuffle();
}

export default randomizePW;

// randomChar = Math.floor(Math.random() * CHARS_LOWER.length + 1);
        // password += CHARS_LOWER.substring(randomChar, randomChar - 1);