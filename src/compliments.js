const i18next = require("i18next");
var Backend = require("i18next-node-fs-backend");

/**
 * A class providing compliments ❤️
 */
class Compliments {
  constructor(language = "en") {
    this.language = language;
    i18next.use(Backend).init({
      lng: this.language,
      backend: {
        loadPath: "./locales/{{lng}}/translation.json"
      }
    });
  }
  /**
   * Returns a compliment
   */
  get() {
    let compliment = i18next.t("You look beautiful today");
    return compliment;
  }
}

exports.Compliments = Compliments;
