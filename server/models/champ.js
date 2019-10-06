const db = require('../db');

class Champ {

  static async getChampStats(name) {

    let caseName = name[0].toUpperCase() + name.slice(1);
    caseName = caseName.replace(/\s/g, '');

    let champQuery = await db.query(`
          SELECT * 
          FROM champions
          WHERE name LIKE $1`,
    [caseName]);

    champQuery = {...champQuery.rows[0], ability_power: 0 };

    return champQuery;
  }

  static async getListOfNames() {

    let nameQuery = await db.query(`
          SELECT *
          FROM champions`
    );
    const namesArray = nameQuery.rows.map(champ => champ.name);

    return namesArray;
  }

  static async getOrderByStat(statistic) {
    //refactor for query syntax, why doesn't statistic get passed correctly to query
    let statQuery = await db.query(`
          SELECT * 
          FROM champions
          ORDER BY ${statistic} DESC`);

    return statQuery.rows;
  }
}

module.exports = Champ;

