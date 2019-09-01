//takes currentItem Stats and applies them to current champion, based on champion base stats

export default function applyItemStats(champStats, itemStats) {

  for (let [stat, value] of Object.entries(itemStats)) {
    switch (stat) {
      case "FlatHPPoolMod":
        champStats['hp'] += value;
        break; 
      case "FlatMPPoolMod":
        champStats['mp'] += value; 
        break; 
      case "FlatHPRegenMod":
        champStats['hp_regen'] += value; 
        break; 
      case "FlatArmorMod":
        champStats['armor'] += value; 
        break;
      case "FlatPhysicalDamageMod":
        champStats['attackdamage'] += value; 
        break; 
      case "FlatMagicDamageMod":
        champStats['ability_power'] = champStats['ability_power'] ? champStats['ability_power'] + value : value; 
        break; 
      case "FlatMovementSpeedMod":
        champStats['movespeed'] += value; 
        break; 
      case "PercentMovementSpeedMod":
        champStats['movespeed'] = champStats['movespeed'] + (champStats['movespeed'] * value);
        break;  
      case "PercentAttackSpeedMod":
        champStats['attackspeed'] += value; 
        break; 
      case "FlatCritChanceMod":
        champStats['crit'] += value;
        break; 
      case "FlatSpellBlockMod":
        champStats['magic_resist'] += value;
        break; 
      case "PercentLifeStealMod":
        champStats['lifesteal'] = champStats['lifesteal'] ? champStats['lifesteal'] + value : value; 
        break; 
      default:
        return champStats;
    }
  }
  return champStats; 
}