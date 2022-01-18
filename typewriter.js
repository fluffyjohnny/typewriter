const sentence = "hello there from lighthouse labs";

const animation = (str) => {
  let time = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char + '\n');
    }, time += 50);
  } // <= 1s delay to make it noticeable. Can dial it down later.
};

animation(sentence);