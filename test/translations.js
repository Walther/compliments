const assert = require("assert");
const should = require("chai").should();
var fs = require("fs");

describe("Translations", () => {
  let languages;
  before(async () => {
    await fs.readdir("./locales", (err, lang) => {
      languages = lang;
    });
  });
  it("Translation files should exist", async () => {
    await Promise.all(
      languages.map(language => {
        let path = "./locales/" + language + "/translation.json";
        return new Promise((resolve, reject) =>
          fs.access(path, err => {
            if (err) {
              reject(err);
            } else {
              resolve(true);
            }
          })
        );
      })
    ).catch(err => {
      throw new Error(err);
    });
  });
});
