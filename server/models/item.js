const db = require('../db');
const applyStats = require('../calculations/applyStats');

class Item {
    static async applyItemStats(itemTag, champStatsObj) {
        
        let itemQuery = await db.query(
            `SELECT *
            FROM items
            WHERE tag=$1`, 
        [itemTag]);

        let itemAppliedToStats = applyStats(itemQuery.rows[0], champStatsObj);

        return null;
    }
  
}

module.exports = Item; 