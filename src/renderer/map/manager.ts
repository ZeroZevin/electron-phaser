import { Noise2D, Perlin, QualityMode } from '@common/Noise2D'
import { Map } from './map'
/**
 * 地图管理类
 */
export default class MapManager {
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
    seed = seed || Math.random() * 1000000 % 1000000 + 1
    let perlin = new Perlin(seed, QualityMode.High)
    let noise = new Noise2D(256, 256, perlin)
    let map = new Map()
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
