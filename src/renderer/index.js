/**
 * Author: Michael Hadley, mikewesthad.com
 * Asset Credits:
 *  - Tileset by 0x72 under CC-0, https://0x72.itch.io/16x16-industrial-tileset
 */
import * as path from 'path';
import Phaser from "phaser";
import PlatformerScene from "./platformer-scene.js";
import Mod from "./mod.js";
import { Map } from './map';

const win = window.require('electron').remote.getCurrentWindow();
let size = win.getSize();

// 当前目录
const modPath = 'E:/Games/electron-phaser/mods';
window._require = new Function('mod', `
  try{
    return require(mod);
  }catch(err){
    console.error(err);
    return null;
  }
`)


let scene = new PlatformerScene();

const config = {
  type: Phaser.AUTO,
  "render.autoResize": true,
  width: size[0],
  height: size[1],
  parent: 'scene',
  pixelArt: true,
  backgroundColor: "#1d212d",
  scene: scene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};

const game = new Phaser.Game(config);
const modConfigs = window._require(modPath);
if (modConfigs) {
  let names = [];
  let mods = [];
  for (let config of modConfigs) {
    if (names.indexOf(config.name) > -1) {
      console.error(config.name + ' is load twice!');
    } else {
      config.path = path.join(modPath, config.name);
      mods.push(new Mod(scene, config));
    }
    names.push(config.name);
  }
  game.mods = mods;
}
game.scaleManager.scaleMode = 3;
window.game = game;
window.onresize = (xy) => {
  game.resize(window.innerWidth, window.innerHeight);
  // game.renderer.resize(window.innerWidth, window.innerHeight);
}
