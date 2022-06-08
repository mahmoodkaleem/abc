for (i = 0; i < 5; i++) {
    for (j =0; j<5-i; j++) {
      process.stdout.write(String.fromCharCode(65+j) + ' ');
    }
    console.log();
  }