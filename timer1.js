const input = process.argv.slice(2);
input.sort((a,b) => {
  return a-b;
});

for(let num of input) {
  if (num >= 0) {
    setTimeout( ()=> { 
      process.stdout.write('\x07');
    }, num * 1000);
  }
}

