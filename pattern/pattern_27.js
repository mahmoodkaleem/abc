for (i = 5; i > 0; i--) {
      for (j = 1; j <= 5; j++) {
        if (j >= i) {
          process.stdout.write(String.fromCharCode(70-i));
        } else {
          process.stdout.write(" ");
        }
      }
      console.log();
    }