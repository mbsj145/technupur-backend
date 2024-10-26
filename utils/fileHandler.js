const fs = require('fs');

function processLargeFile(inputPath, outputPath) {
  const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(outputPath);

  readStream.pipe(writeStream);

  readStream.on('end', () => {
    console.log('File processing completed.');
  });

  readStream.on('error', (err) => {
    console.error('Error processing file:', err);
  });
}

module.exports = { processLargeFile };