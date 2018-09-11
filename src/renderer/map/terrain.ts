/**
 * 地形块
 * 此类定义最底层的地形块结构
 */
export default class Terrain {
  /**
   * 地形高度
   */
  height = 0
  /**
   * 地形上的物体组，比如基岩类别[岩石、泥巴、草皮等等]，此变量可由 mod 直接决定
   */
  slots: any[] = []
  constructor (height = 0) {
    this.height = height
  }
}
