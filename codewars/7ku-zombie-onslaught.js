function zombie_shootout(zombies, range, ammo) {
  timeUntilDead = range * 2;
  
  if (ammo >= zombies && timeUntilDead < zombies || ammo < zombies && timeUntilDead <= ammo ) {
    return `You shot ${timeUntilDead} zombies before being eaten: overwhelmed.`;
  }
  
  if (ammo >= zombies && timeUntilDead >= zombies) {
    return `You shot all ${zombies} zombies.`;
  }
  
  if (ammo < zombies && timeUntilDead > ammo) {
    return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;  
  } 
  
}

console.log(zombie_shootout(100, 10, 20))
console.log(zombie_shootout(44, 27, 81))


// enough ammo? 
 //True
   // Do you kill all the zombies first? -> response 1
   // Do you get overwhelmed first -> response 2
 //False
   //Do you run out of ammo first? -> response 3
   //Do you get overwhelmed first? -> response 2