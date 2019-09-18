import request from 'request'; 
import db from '../db';
import fs from 'fs'; 


const CURRENT_PATCH = '9.13.1';
const BASE_URL = `http://ddragon.leagueoflegends.com/cdn/${CURRENT_PATCH}/data/en_US/champion.json`;

class Server {
  static async retrieveDataAPI() {
    await request(BASE_URL, async function (error, response, body) {
      if (!error && response.statusCode === 200) {
        let champData = JSON.parse(body);
        await Server.createTables();
        for (let champ in champData.data) {
          await Server.populateChampionTable(champData.data[champ]);
        }
      }
    }); 
  }

  static async createTables() {
    const response = await db.query(`
        DROP TABLE IF EXISTS champions;
        DROP TABLE IF EXISTS abilities;

        CREATE TABLE champions(
            name text PRIMARY KEY, 
            title text,
            hp FLOAT,
            hp_per_level FLOAT,
            mp FLOAT,
            mp_per_level FLOAT,
            movespeed FLOAT, 
            armor FLOAT, 
            armor_per_level FLOAT, 
            magic_resist FLOAT, 
            magic_resist_per_level FLOAT,
            attackrange FLOAT, 
            hp_regen FLOAT, 
            hp_regen_level FLOAT, 
            mp_regen FLOAT,
            mp_regen_level FLOAT, 
            attackdamage FLOAT,
            attackdamage_per_level FLOAT,
            attackspeed FLOAT,
            attackspeed_per_level FLOAT,
            crit FLOAT,
            crit_per_level FLOAT)`);

    return response.rows;
  }

  static async populateChampionTable(champObj) {
    let champStats = champObj.stats;
    const result = await db.query(`
            INSERT INTO champions (
                name, 
                title, 
                hp, 
                hp_per_level, 
                mp, 
                mp_per_level, 
                movespeed, 
                armor, 
                armor_per_level,
                magic_resist, 
                magic_resist_per_level, 
                attackrange, 
                hp_regen, 
                hp_regen_level, 
                mp_regen,
                mp_regen_level, 
                attackdamage, 
                attackdamage_per_level, 
                attackspeed, 
                attackspeed_per_level, 
                crit,
                crit_per_level)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
                $15, $16, $17, $18, $19, $20, $21, $22)
            `,
    [champObj.id, champObj.title, champStats.hp, champStats.hpperlevel,
      champStats.mp, champStats.mpperlevel, champStats.movespeed, champStats.armor,
      champStats.armorperlevel, champStats.spellblock, champStats.spellblockperlevel,
      champStats.attackrange, champStats.hpregen, champStats.hpregenperlevel,
      champStats.mpregen, champStats.mpregenperlevel, champStats.attackdamage,
      champStats.attackdamageperlevel, champStats.attackspeed, champStats.attackspeedperlevel,
      champStats.crit, champStats.critperlevel]);

    return result.rows[0];
  }
}

Server.retrieveDataAPI();