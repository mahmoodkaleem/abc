let n=15;
for(i = n; i > 0; i--)
   {
    if (i % 2 != 0)
    {
    for(j = 0; j<=n; j++) {
      if (j >= i) {
        process.stdout.write(String((n+2-i)/2) + " ");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
   }