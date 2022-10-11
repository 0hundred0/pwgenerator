import randomizePW from "./RandomizePW";

const generatePW = (charsNum, options = []) => {
  let pwOutput = '';

  if(charsNum <= 4) {return ''};

  if(pwOutput.length <= charsNum) {
    pwOutput = randomizePW(options, charsNum);
  }

  return pwOutput.substring(0, charsNum);
}  

export default generatePW;

// .substring(1, charsNum + 1)