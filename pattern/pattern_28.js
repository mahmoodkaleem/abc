
for (i = 5; i > 0; i--) {
  z=5
    for (j = 1; j <= 5; j++) {
      if (j >= i) {
        process.stdout.write(String.fromCharCode(70-z)+ ' ');
        z--;
      }
      else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }