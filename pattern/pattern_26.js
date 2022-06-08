for (i = 5; i > 0; i--) {
  let z=1
      for (j = 1; j <= 5; j++) {
        if (j >= i) {
          process.stdout.write(String(z));
          z++;
        } else {
          process.stdout.write(" ");
        }
      }
      console.log();
    }