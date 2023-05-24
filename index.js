const createUniqueName = require("./util/util.js");

const generateUsername = (name) => {
  if (!!name.trim()) {
    let convertToArray = name.split(" ");
    return createUniqueName(convertToArray);
  } else {
    return "Error: no name found, unable to create username";
  }
};

module.exports = generateUsername;
