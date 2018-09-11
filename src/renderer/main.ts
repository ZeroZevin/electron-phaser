import * as Phaser from 'Phaser'

import './style.css'

import { PreloadScene } from './scene/preload/preload'
import { BootScene } from './scene/boot/boot'
// import {} from './scene/'

const scenes: Phaser.Scene[] = [
  new PreloadScene({ key: 'preloadScene', active: true }),
  new BootScene({ key: 'bootScene', active: false, visible: false }),
]

class Game extends Phaser.Game {
  private _$mainEl: HTMLElement
  private _$UIEl: HTMLElement

  get $mainEl () {
    return this._$mainEl
  }

  get $UIEl () {
    return this._$UIEl
  }

  constructor (config: GameConfig) {
    super(config)

    this.init()
  }

  init () {
    const $UIEl = document.createElement('div')

    $UIEl.setAttribute('id', 'ui')
    this._$UIEl = $UIEl
    document.body.appendChild($UIEl)

    const $mainEl = document.getElementById('app')

    if ($mainEl) {
      this._$mainEl = $mainEl
    } else {
      this._$mainEl = document.createElement('div')
      this._$mainEl.setAttribute('id', 'app')
      document.body.appendChild(this._$mainEl)
    }
  }

  hiddenUI () {
    this._$UIEl.classList.add('hidden')
  }

  showUI () {
    this._$UIEl.classList.remove('hidden')
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
  })
})

export {
  game,
}
