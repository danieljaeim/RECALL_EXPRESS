let applyStats = (itemStats, champStats) => {
    console.log('item', itemStats);
    console.log('champ', champStats);
    for (let [stat, value] of Object.entries(itemStats)) {
      switch (stat) {
         case "abilitypower":
            champStats.abilitypower += value;
         case "movespeed":
            champStats.movespeed += value;
         case "movespeed_percent":
            champStats.movespeed_percent += value;
         case "attackspeed_percent":
            champStats.attackspeed += value;
         case "health":
            champStats.health += value;
         case "mana":
            champStats.mp += value;
         case "armor":
            champStats.armor += value;
         case "magic_resist":
            champStats.spellblock += value;
         case "lifesteal_percent":
            champStats.lifesteal += value;
         case "crit_percent":
            champStats.crit += value;
         case "cooldown_percent":
            champStats.cooldown_reduction += value;
         case "bonus_health_percent":
            champStats.health = value;
         case "lifesteal_monsters_percent":
            champStats.lifesteal_monsters += value;
         case "mp_regen_percent":
            champStats.mp_regen += value;
         case "hp_regen_percent":
            champStats.hp_regen += value;
         case "mana_regen_flat":
            champStats.mp_regen += value;
         case "potion_healing":
            champStats.potion_healing += value;
         case "life_on_hit":
            champStats.life_on_hit += value;
         case "gold_per_5":
            champStats.gold_per_5 += value;
         default:
            console.log('couldn\'t find value');
    }

    console.log('changedstats', champStats)
    return champStats; 
    }
}

module.exports = applyStats; 