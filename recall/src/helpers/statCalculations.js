//takes currentItem Stats and applies them to current champion, based on champion base stats

export default function applyItemStats(champStats, itemStats) {
  let thisChampStats = champStats['stats'];

  for (let [stat, value] of Object.entries(itemStats)) {
    switch (stat) {
      case "FlatHPPoolMod":
        thisChampStats['hp'] += value;
        break; 
      case "FlatMPPoolMod":
        thisChampStats['mp'] += value; 
        break; 
      case "FlatHPRegenMod":
        thisChampStats['hp_regen'] += value; 
        break; 
      case "FlatArmorMod":
        thisChampStats['armor'] += value; 
        break;
      case "FlatPhysicalDamageMod":
        thisChampStats['attackdamage'] += value; 
        break; 
      case "FlatMagicDamageMod":
        thisChampStats['ability_power'] = thisChampStats['ability_power'] ? thisChampStats['ability_power'] + value : value; 
        break; 
      case "FlatMovementSpeedMod":
        thisChampStats['movespeed'] += value; 
        break; 
      case "PercentMovementSpeedMod":
        thisChampStats['movespeed'] = thisChampStats['movespeed'] + (thisChampStats['movespeed'] * value);
        break;  
      case "PercentAttackSpeedMod":
        thisChampStats['attackspeed'] += value; 
        break; 
      case "FlatCritChanceMod":
        thisChampStats['crit'] += value;
        break; 
      case "FlatSpellBlockMod":
        thisChampStats['magic_resist'] += value;
        break; 
      case "PercentLifeStealMod":
        thisChampStats['lifesteal'] = thisChampStats['lifesteal'] ? thisChampStats['lifesteal'] + value : value; 
        break; 
      default:
        return champStats;
    }
  }
  return champStats; 
}