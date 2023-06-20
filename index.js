import * as fs from "fs"
import * as tf from 'ten';

async function loadImagesAndPreprocess(folderPath) {
  const imageFiles = fs.readdirSync(folderPath);

  const images = [];
  for (const file of imageFiles) {
    const imagePath = `${folderPath}/${file}`;
    const imageTensor = await loadImageAndPreprocess(imagePath);
    images.push(imageTensor);
  }

  return images;
}

async function loadImageAndPreprocess(imagePath) {
  const buffer = fs.readFileSync(imagePath);
  const tfImageBuffer = tf.node.decodeImage(buffer);
  const tfNormalized = tfImageBuffer.toFloat().div(255);
  return tfNormalized;
}

async function run() {
  const folderPath = 'assets';
  const imageTensors = await loadImagesAndPreprocess(folderPath);

  // Ви можете використовувати `imageTensors` для подальшого аналізу та розпізнавання об'єктів.
  // Наприклад, передайте їх до моделі TensorFlow.js для отримання передбачень.
}

run();