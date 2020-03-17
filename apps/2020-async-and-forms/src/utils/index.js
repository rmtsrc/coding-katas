export default function complexOperation(complexity = 1) {
  let result = 0;
  for (let i = 0; i < complexity * 1000; i += 1) {
    for (let j = 0; j < 700; j += 1) {
      for (let k = 0; k < 300; k += 1) {
        result = result + i + j + k;
      }
    }
  }
  return result;
}
