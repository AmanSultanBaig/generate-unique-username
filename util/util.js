const createUniqueName = (nameArr) => {
  let generatedUsername = "";

  for (const chunk of nameArr) {
    generatedUsername += chunk.toLowerCase();
  }
  return generatedUsername + "_" + randomNumbers();
};

const randomNumbers = () => {
  let num = Math.random().toString().substring(2, 6);
  return num;
};

module.exports = createUniqueName;
