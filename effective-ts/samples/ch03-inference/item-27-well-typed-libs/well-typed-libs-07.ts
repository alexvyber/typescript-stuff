// requires node modules: @types/lodash

const csvData = "...";
const rawRows = csvData.split("\n");
const headers = rawRows[0].split(",");
import _ from "lodash";
interface BasketballPlayer {
  name: string;
  team: string;
  salary: number;
}
declare const rosters: { [team: string]: BasketballPlayer[] };
let allPlayers: BasketballPlayer[] = [];
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players); // OK
}
