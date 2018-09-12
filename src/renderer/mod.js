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
                if (this.config.tilesets[name].type === "spritesheet") {
                    this.scene.load.spritesheet(
                        this.name + "-" + name,
                        path.join(this.config.path, this.config.tilesets[name].path),
                        {
                            frameWidth: this.config.tilesets[name].width,
                            frameHeight: this.config.tilesets[name].height,
                            margin: this.config.tilesets[name].margin,
                            spacing: this.config.tilesets[name].spacing
                        }
                    );
                }
            }
        }
    }
    create() {
        if (this.config.items && this.config.items.forEach) {
            this.config.items.forEach(item => {
                if (item.type == "player") {
                    item.tileset = this.name + "-" + item.tileset;
                    let modP = new ModPlayer(this.scene, item.spawn.x, item.spawn.y, item);
                    this.items.push(modP);
                    if (item.collides) {
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