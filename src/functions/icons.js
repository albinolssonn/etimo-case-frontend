import bug from "../assets/types/bug.png";
import dark from "../assets/types/dark.png";
import dragon from "../assets/types/dragon.png";
import electric from "../assets/types/electric.png";
import fairy from "../assets/types/fairy.png";
import fighting from "../assets/types/fighting.png";
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import ghost from "../assets/types/ghost.png";
import grass from "../assets/types/grass.png";
import ground from "../assets/types/ground.png";
import ice from "../assets/types/ice.png";
import normal from "../assets/types/normal.png";
import poison from "../assets/types/poison.png";
import psychic from "../assets/types/psychic.png";
import rock from "../assets/types/rock.png";
import steel from "../assets/types/steel.png";
import water from "../assets/types/water.png";

const icons = {
  bug: bug,
  dark: dark,
  dragon: dragon,
  electric: electric,
  fairy: fairy,
  fighting: fighting,
  fire: fire,
  flying: flying,
  ghost: ghost,
  grass: grass,
  ground: ground,
  ice: ice,
  normal: normal,
  poison: poison,
  psychic: psychic,
  rock: rock,
  steel: steel,
  water: water,
};

export function searchIcon(search) {
  if (search) {
    search = Object.entries(icons).filter((icon) => icon[0] === search);
    return search[0][1];
  }
}
