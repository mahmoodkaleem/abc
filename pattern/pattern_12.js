for (i = 0; i < 5; i++) {
    for (j = 0; j < i + 1; j++) {
      process.stdout.write(String(j+1) + ' ');
    }
    console.log();
  }