import { AIUnit, MainCharactor } from "./unit.ts";
import * as card from "./card.ts";
import { Combat } from "./game-def.ts";
import { log } from "./logger.ts";

const robber = new AIUnit("强盗", {
  hand: [
    new card.Attack3(),
    new card.Heal(),
  ],
  deck: [],
  equipped: [
    new card.Health(),
  ],
});
const mainC = new MainCharactor("主角", {
  hand: [
    new card.Attack1(),
    new card.Attack2(),
    new card.Heal(),
  ],
  deck: [],
  equipped: [
    new card.Health(),
  ],
});
const combat = new Combat(mainC, robber);

log("迎面一个强盗朝你走来，你要怎么做？");
combat.begin();