const animationArr = (`|/-\\|/-\\`).split('');

const startTime = 200;
const endTime = 3000;
for (let i = startTime; i <= endTime; i += 200) {
  const nextChar = animationArr.pop();
  animationArr.unshift(nextChar);
  setTimeout(() => {
    process.stdout.write(`\r${nextChar}   `);
    if(i === endTime) {
      process.stdout.write('\n');
    }
  }, i);
}
