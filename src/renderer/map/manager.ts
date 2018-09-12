import { EventEmitter } from 'events'
import { Noise2D, Perlin, QualityMode } from '@common/Noise2D'
import { FractalNoise, Options } from '@common/fractalNoise'
import { Map } from './map'
import { Tile } from './tile'
import { Tree } from '../item/tree'
/**
 * 地图管理类
 */
export class MapManager {
  processReporter = new EventEmitter()
  /**
   * 加载地图
   * @param path 地图文件路径
   */
  load (path: string) {
    let map = new Map()
    return map
  }
  /**
   * 创建地图
   * @param seed 随机种子
   */
  create (seed: number) {
    let size = 2 ** 1
    let map = new Map()
    map.width = 2 * 256
    map.height = 2 * 256
    seed = seed || Math.random() * 1000000 % 1000000 + 1
    let perlin = new Perlin(seed, QualityMode.Medium)
    let noise = new Noise2D(256, 256, perlin)
    let start = 1000
    for (let w = start - size / 2; w < start + size / 2; w++) {
      for (let h = start - size / 2; h < start + size / 2; h++) {
        noise.GeneratePlanar(w * 2, w * 2 + 2, h * 2, h * 2 + 2)
        for (let i = 0; i < 256; i++) {
          for (let j = 0; j < 256; j++) {
            let tile = new Tile(noise.get(i, j, false))
            map.addTile((w - start) * 256 + i, (h - start) * 256 + j, tile)
          }
        }
      }
    }
    let fractalNoise = new FractalNoise(seed)
    let blueNoise = fractalNoise.makeRectangle(map.width, map.height, { frequency: 2, amplitude: 4 })
    let R = 32
    let rate = [0, 0.99, 0.2, 0.1, 0.01]
    for (let yc = -256; yc < map.height / 2; yc++) {
      for (let xc = -256; xc < map.width / 2; xc++) {
        let max = 0
        for (let yn = Math.max(0, yc + map.height / 2 - R); yn < Math.min(map.height, yc + R); yn++) {
          for (let xn = Math.max(0, xc + map.width / 2 - R); xn < Math.min(map.width, xc + R); xn++) {
            let e = blueNoise[yn][xn]
            if (e > max) { max = e }
          }
        }
        let rand = Math.random()
        if (blueNoise[yc + map.height / 2][xc + map.width / 2] === max &&
          rand > 1 - rate[map.getTile(xc, yc).terrain.heightType]) {
          let tree = new Tree()
          tree.x = xc
          tree.y = yc
          map.getTile(xc, yc).addItem(tree)
          // console.log(xc, yc)
        }
      }
    }
    return map
  }
  /**
   * 保存地图
   * @param map 地图实例
   */
  save (map: string) {
    return true
  }
}
