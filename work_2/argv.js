const fs = require('fs/promises');
const [, , car, year, color] = process.argv;

async function getCars() {
  const cars = await fs.readFile('Cars.json', 'utf-8');
  const parseCars = JSON.parse(cars);

  const carId = Date.now();

  const carInfo = {
    id: carId,
    model: car,
    year: year,
    color: color,
  };
  parseCars.push(carInfo);
  await fs.writeFile('cars.json', JSON.stringify(parseCars, null, 2), 'utf-8');
  console.log('done');
}
getCars();
