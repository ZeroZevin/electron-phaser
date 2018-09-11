import { Phaser, AnimationFrameConfig } from "phaser";

/**
 * A class that wraps up our 2D platforming player logic. It creates, animates and moves a sprite in
 * response to WASD/arrow keys. Call its update method from the scene's update and call its destroy
 * method when you're done with the player.
 */
export default class ModPlayer {
  constructor(scene, x, y, config) {
    this.scene = scene;
    // Create the animations we need from the player spritesheet
    const anims = scene.anims;
    if (config.anims && config.anims.forEach) {
      config.anims.forEach(anim => {
        let frames = [];
        anim.frame.forEach(f => {
          frames.push({ key: config.tileset, frame: f })
        });
        anims.create({
          key: config.name + "-" + anim.name,
          frames: frames,
          frameRate: 3,
          repeat: -1
        });
      })
    }

    // Create the physics-based sprite that we will move around and animate
    this.sprite = scene.physics.add
      .sprite(x, y, config.name, 0)
      .setDrag(1000, 0)
      .setMaxVelocity(300, 400)
      .setSize(18, 24)
      .setOffset(7, 9);
    this.sprite.anims.play(config.name + "-" + config.defaultAnimate, true)
  }

  freeze() {
    this.sprite.body.moves = false;
  }

  update() {
    const { keys, sprite } = this;
    const onGround = sprite.body.blocked.down;
    const acceleration = onGround ? 600 : 200;

    // Apply horizontal acceleration when left/a or right/d are applied
    if (keys.left.isDown || keys.a.isDown) {
      sprite.setAccelerationX(-acceleration);
      // No need to have a separate set of graphics for running to the left & to the right. Instead
      // we can just mirror the sprite.
      sprite.setFlipX(true);
    } else if (keys.right.isDown || keys.d.isDown) {
      sprite.setAccelerationX(acceleration);
      sprite.setFlipX(false);
    } else {
      sprite.setAccelerationX(0);
    }

    // Only allow the player to jump if they are on the ground
    if (onGround && (keys.up.isDown || keys.w.isDown)) {
      sprite.setVelocityY(-500);
    }

    // Update the animation/texture based on the state of the player
    if (onGround) {
      if (sprite.body.velocity.x !== 0) sprite.anims.play("player-run", true);
      else sprite.anims.play("player-idle", true);
    } else {
      sprite.anims.stop();
      sprite.setTexture("player", 10);
    }
  }

  destroy() {
    this.sprite.destroy();
  }
}
