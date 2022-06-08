for (i = 0; i<5; i++) {
    for (j = 0; j<5; j++) {
      process.stdout.write(String.fromCharCode(j+65) + ' ');
    }
    console.log();
  }