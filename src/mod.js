import Phaser from "phaser";
import * as path from 'path';
import ModPlayer from "./modPlayer";
export default class Mod {
    constructor(scene, config) {
        this.name = config.name;
        this.displayName = config.displayName;
        this.scene = scene;
        this.config = _require(config.path);
        this.config.path = config.path;
        this.items = [];
    }
    preload() {
        if (this.config.tilesets && typeof (this.config.tilesets) == 'object') {
            for (let name in this.config.tilesets) {
                this.scene.load.spritesheet(
                    name,
                    path.join(this.config.path, this.config.tilesets[name]),
                    {
                        frameWidth: 32,
                        frameHeight: 32,
                        margin: 1,
                        spacing: 2
                    }
                );
            }
        }
    }
    create() {
        if(this.config.items && this.config.items.forEach) {
            this.config.items.forEach(item => {
                if(item.type == "player") {
                    let modP = new ModPlayer(this.scene, item.spawn.x, item.spawn.y, item);
                    this.items.push(modP);
                    if(item.collid){
                        this.scene.physics.world.addCollider(modP.sprite, this.scene.groundLayer);
                    }
                }
            });
        }
    }
    update(time, delta) {
        // console.log('update ' + this.displayName);
    }
}