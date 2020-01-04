const request = require("request");
const db = require('../db');

class Server {
  static async retrieveDataAPI() {
    await Server.createTables();
    await Server.populateChampionTable(); 
    await Server.populateItemsTable(); 
  }

  static async createTables() {
    const response = await db.query(`
        DROP TABLE IF EXISTS champions;
        DROP TABLE IF EXISTS items;

        CREATE TABLE champions(
            name text PRIMARY KEY, 
            title text,
            hp FLOAT,
            hp_per_level FLOAT,
            health_regen_percent FLOAT,
            bonus_health_percent FLOAT,
            mp FLOAT,
            mp_per_level FLOAT,
            movespeed FLOAT, 
            movespeed_percent FLOAT,
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
            bonus_attackspeed FLOAT, 
            abilitypower FLOAT,
            crit FLOAT,
            crit_per_level FLOAT,
            lifesteal FLOAT, 
            lifesteal_monsters FLOAT,
            cooldown_reduction FLOAT, 
            mana_regen_flat FLOAT,
            potion_healing FLOAT,
            life_on_hit FLOAT, 
            gold_per_5 FLOAT);
            
          CREATE TABLE items(
            tag INT PRIMARY KEY,
            name text, 
            unique_text text,
            abilitypower FLOAT,
            movespeed FLOAT,
            movespeed_percent FLOAT, 
            attack_speed_percent FLOAT, 
            health FLOAT,
            mana FLOAT,
            armor FLOAT, 
            magic_resist FLOAT, 
            lifesteal_percent FLOAT,
            crit_percent FLOAT, 
            cooldown_percent FLOAT, 
            bonus_health_percent FLOAT, 
            lifesteal_monsters_percent FLOAT, 
            mp_regen_percent FLOAT, 
            hp_regen_percent FLOAT, 
            mana_regen_flat FLOAT, 
            potion_healing FLOAT, 
            life_on_hit FLOAT,
            gold_per_5 FLOAT);`);

    return response.rows;
  }

  static async populateChampionTable() {
    const champData = require(`../data/en_US/champion.json`);
    for (let champName in champData.data) {
      let champObjData = champData.data[champName];
      let champObjStats = champData.data[champName].stats;
    
      const result = await db.query(`
              INSERT INTO champions (
                  name, 
                  title, 
                  hp, 
                  hp_per_level, 
                  health_regen_percent,
                  bonus_health_percent,
                  mp, 
                  mp_per_level, 
                  movespeed, 
                  movespeed_percent,
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
                  bonus_attackspeed,
                  crit,
                  crit_per_level,
                  abilitypower,
                  lifesteal,
                  lifesteal_monsters,
                  cooldown_reduction, 
                  mana_regen_flat, 
                  potion_healing,
                  life_on_hit, 
                  gold_per_5)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
                  $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27,
                  $28, $29, $30, $31, $32, $33, $34)
              `,
        [champObjData.id, champObjData.title, champObjStats.hp, champObjStats.hpperlevel, 0, 0,
        champObjStats.mp, champObjStats.mpperlevel, champObjStats.movespeed, 0, champObjStats.armor,
        champObjStats.armorperlevel, champObjStats.spellblock, champObjStats.spellblockperlevel,
        champObjStats.attackrange, champObjStats.hpregen, champObjStats.hpregenperlevel,
        champObjStats.mpregen, champObjStats.mpregenperlevel, champObjStats.attackdamage,
        champObjStats.attackdamageperlevel, champObjStats.attackspeed, champObjStats.attackspeedperlevel, 
        0, champObjStats.crit, champObjStats.critperlevel, 0, 0, 0, 0, 0, 0, 0, 0]);
      }
  }

  static async populateItemsTable() {
    const itemData = require('../data/en_US/item.json');
    for (let itemTag in itemData.data) {
      let item = itemData.data[itemTag];
      if (!item.maps['11']) continue;
      if (item.description.indexOf('<consumable>') > -1) continue;
      if (item.name.indexOf('Tower') > -1 || item.name.indexOf('Shield Totem') > -1) continue;
      let curItem = {
        tag: itemTag,
        name: item.name,
        stats: {
          'abilitypower': 0,
          'movespeed': 0,
          'movespeed_percent': 0,
          'attack_speed_percent': 0,
          'health': 0,
          'mana': 0,
          'armor': 0,
          'magic_resist': 0,
          'lifesteal_percent': 0,
          'crit_percent': 0,
          'cooldown_percent': 0,
          'bonus_health_percent': 0,
          'lifesteal_monsters_percent': 0,
          'mp_regen_percent': 0,
          'hp_regen_percent': 0,
          'mana_regen_flat': 0,
          'potion_healing': 0,
          'life_on_hit': 0,
          'gold_per_5': 0
        }
      }
      Server.parseDescription(item.description, curItem.stats);
      await this.enterItemData(curItem);
    }
  }

  static async enterItemData(curItem) {
    const result = await db.query(`
            INSERT INTO items (
                tag, 
                name,
                unique_text,
                abilitypower,
                movespeed,
                movespeed_percent, 
                attack_speed_percent, 
                health,
                mana,
                armor, 
                magic_resist, 
                lifesteal_percent, 
                crit_percent, 
                cooldown_percent, 
                bonus_health_percent, 
                lifesteal_monsters_percent, 
                mp_regen_percent, 
                hp_regen_percent, 
                mana_regen_flat, 
                potion_healing, 
                life_on_hit, 
                gold_per_5)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14,
              $15, $16, $17, $18, $19, $20, $21, $22)`,
      [curItem.tag,
      curItem.name,
      curItem.stats.unique_text,
      curItem.stats.abilitypower,
      curItem.stats.movespeed,
      curItem.stats.movespeed_percent,
      curItem.stats.attack_speed_percent,
      curItem.stats.health,
      curItem.stats.mana,
      curItem.stats.armor,
      curItem.stats.magic_resist,
      curItem.stats.lifesteal_percent,
      curItem.stats.crit_percent,
      curItem.stats.cooldown_percent,
      curItem.stats.bonus_health_percent,
      curItem.stats.lifesteal_monsters_percent,
      curItem.stats.mp_regen_percent,
      curItem.stats.hp_regen_percent,
      curItem.stats.mana_regen_flat,
      curItem.stats.potion_healing,
      curItem.stats.life_on_hit,
      curItem.stats.gold_per_5]);

    return result.rows[0];
  }

  static statsKey = {
    'attackdamage': 'attackdamage',
    'abilitypower': 'abilitypower',
    "movementspeed": 'movespeed',
    "movementspeedpercent": 'movespeed_percent',
    'attackspeedpercent': 'attack_speed_percent',
    'health': 'hp',
    'mana': 'mp',
    'armor': 'armor',
    'magicresist': 'magic_resist',
    'lifesteal': 'lifesteal',
    'lifestealpercent': 'lifesteal',
    'criticalstrikechancepercent': 'crit',
    'cooldownreductionpercent': 'cooldown_reduction',
    'bonushealthpercent': 'bonus_health_percent',
    'lifestealvs.monsterspercent': 'lifesteal_monsters',
    "basemanaregenpercent": 'mp_regen_percent',
    "basehealthregenpercent": 'hp_regen_percent',
    'manaper5seconds': 'mana_regen_flat',
    'increasedhealingfrompotionspercent': 'potion_healing',
    'lifeonhit': 'life_on_hit',
    'goldper10seconds': 'gold_per_5',
  }

  /*
  Iterate through the itemDescription stat blocks. Parse the first complete number found then
  */
  static parseDescription(itemDescription, itemStatsObj) {
    let longDescription = itemDescription.split('</stats>');
    itemDescription = longDescription[0];
    let uniqueDescription = longDescription[1]; //useful for later implementing unique
    let parsingStatNum = true;
    let currentStat = ""
    let curStatString = "";
    let hasPercentage = false;
    itemDescription = itemDescription.split('+');
    for (let ch = 1; ch < itemDescription.length; ch++) {
      let curStatBlock = itemDescription[ch];
      for (let i = 0; i < curStatBlock.length; i++) {
        let curChar = curStatBlock[i];
        if (parsingStatNum) {
          if (parseInt(curChar, 10) >= 0) {
            currentStat += curChar;
          } else {
            if (curChar === '%') {
              hasPercentage = true;
            }
            parsingStatNum = false;
          }
        } else if (curChar === '<') {
          break;
        } else {
          curStatString += curChar;
        }
      }
      hasPercentage ? curStatString += "percent" : "";
      curStatString = curStatString.trim().split(' ').join('').toLowerCase();
      itemStatsObj[this.statsKey[curStatString]] = parseInt(currentStat, 10);
      if (uniqueDescription) {
        itemStatsObj['unique_text'] = uniqueDescription;
      }

      currentStat = "";
      curStatString = "";
      parsingStatNum = true;
      hasPercentage = false;
    }
  }
}

Server.retrieveDataAPI();