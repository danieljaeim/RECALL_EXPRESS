let applyStats = (itemStats, champStats, champLevel, champBaseStatsObj) => {
   console.log('item', itemStats);
   console.log('champ', champStats);

   console.log('baseStats', champBaseStatsObj);
   for (let [stat, value] of Object.entries(itemStats)) {
      switch (stat) {
         case "abilitypower":
            champStats.abilitypower += value;
            continue;
         case "movespeed":
            champStats.movespeed += value;
            continue;
         case "movespeed_percent":
            champStats.movespeed_percent += value; 
            continue;
         case "attackspeed_percent":
            champStats.bonus_attackspeed += value; 
            continue;
         case "health":
            champStats.health += value;
            continue;
         case "mana":
            champStats.mp += value;
            continue;
         case "armor":
            champStats.armor += value;
            continue;
         case "magic_resist":
            champStats.spellblock += value;
            continue;
         case "lifesteal_percent":
            champStats.lifesteal += value;
            continue;
         case "crit_percent":
            champStats.crit += value;
            continue;
         case "cooldown_percent":
            champStats.cooldown_reduction = (champStats.cooldown_reduction + value) >= 45 ? 45 : champStats.cooldown_reduction + value;
            continue;
         case "bonus_health_percent":
            champStats.bonus_health
            continue;
         case "lifesteal_monsters_percent":
            champStats.lifesteal_monsters += value;
            continue;
         case "mp_regen_percent":
            champStats.mp_regen += value;
            continue;
         case "hp_regen_percent":
            champStats.hp_regen += value;
            continue;
         case "mana_regen_flat":
            champStats.mp_regen += value;
            continue;
         case "potion_healing":
            champStats.potion_healing += value;
            continue;
         case "life_on_hit":
            champStats.life_on_hit += value;
            continue;
         case "gold_per_5":
            champStats.gold_per_5 += value;
            continue;
         default:
            console.log('couldn\'t find value');
      }
   }

   console.log('new changedstats', champStats)
   return champStats;
}

module.exports = applyStats; 