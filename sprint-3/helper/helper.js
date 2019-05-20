const fs = require("fs");

function writeJSONFile(filename, content) {
  console.log(filename, content);
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

const getNewId = array => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

module.exports = {
  writeJSONFile,
  getNewId
};
