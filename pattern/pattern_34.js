for (i = 9; i > 0; i--) {
  if (i % 2 != 0) {
    for (j = 1; j <= 9; j++) {
      if (j >= i) {
        process.stdout.write('*');
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
