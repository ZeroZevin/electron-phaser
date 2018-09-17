import * as Phaser from 'Phaser'

import './style.css'

import { PreloadScene } from './scene/preload/preload'
import { BootScene } from './scene/boot/boot'
import { MainScene } from './scene/main/main'
// import { TestScene } from './scene/test/test'

// import {} from './scene/'

// const scenes: Phaser.Scene[] = [
//   new PreloadScene({ key: 'preloadScene', active: true }),
//   new BootScene({ key: 'bootScene', active: false, visible: false }),
// ]

const scenes: Phaser.Scene[] = [
  // new PreloadScene({ key: 'preloadScene', active: true }),
  // new BootScene({ key: 'bootScene', active: true, visible: true }),
  new MainScene({ key: 'mainScene', active: true }),
]

class Game extends Phaser.Game {
  private _$mainEl: HTMLElement

  get $mainEl () {
    return this._$mainEl
  }

  constructor (config: GameConfig) {
    super(config)

    this.init()
  }

  init () {
    const $mainEl = document.getElementById('app')

    if ($mainEl) {
      this._$mainEl = $mainEl
    } else {
      this._$mainEl = document.createElement('div')
      this._$mainEl.setAttribute('id', 'app')
      document.body.appendChild(this._$mainEl)
    }
  }
}

let game: Game

window.addEventListener('load', function (event) {
  game = new Game({
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: 'app',
    // backgroundColor: '#888888',
    scene: scenes,
    dom: {
      createContainer: true,
    },
  })

  window.addEventListener('resize', (event) => {
    game.resize(window.innerWidth, window.innerHeight)
  })
})

export { game }
