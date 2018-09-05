/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tileset by 0x72 under CC-0, https://0x72.itch.io/16x16-industrial-tileset
 */

import Phaser from "phaser";
import PlatformerScene from "./platformer-scene.js";

const config = {
  type: Phaser.AUTO,
  width: 805,
  height: 600,
  pixelArt: true,
  backgroundColor: "#1d212d",
  scene: PlatformerScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);
