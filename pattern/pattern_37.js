let n=9;
for(i = n; i > 0; i--)
   {
    if (i % 2 != 0)
    {
    for(j = 0; j<=n; j++) {
      if (j >= i) {
        process.stdout.write(String.fromCharCode((n+130-i)/2 + ' '));
      } else {
        process.stdout.write("");
      }
    }
    console.log();
  }
   }