const args = process.argv.slice(2).sort((a,b) => a - b);

for (const num of args) {
  if (NaN) {
    continue;
  }
  if (num >= 1) {
    setTimeout(() =>{
      process.stdout.write('\x07');
      process.stdout.write(`timer at ${num} seconds \n`);
    }, num * 1000);
  }
}