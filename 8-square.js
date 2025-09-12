let size = process.argv[2];

if (!size || isNaN(size)) {
  console.log('Missing size');
} else {
  size = Number(size);
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      console.log('X'.repeat(size));
    }
  }
}
