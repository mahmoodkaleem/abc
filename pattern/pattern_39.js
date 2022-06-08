let n = 25;
for (i = n; i > 0; i--) {
  if (i % 2 != 0) {
    let z = 1;
    for (j = 1; j <= n; j++) {
      if (j >= i) {
        process.stdout.write(String(z) + " ");
        z++;
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
