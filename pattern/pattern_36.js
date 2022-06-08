let n=11
for (i = n; i > 0; i--) {
  if (i % 2 != 0) {
    for (j = 0; j <= n; j++) {
      if (j >= i) {
        process.stdout.write(String(n+1-i)+ ' ');
      } else {
        process.stdout.write(' ');  
      }
    }
  }
  console.log();
}
