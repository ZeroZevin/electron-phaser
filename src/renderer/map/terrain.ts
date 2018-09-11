/**
 * 图块高度分级
 */
export enum HeightMap {
  Sea = 0, // -1.5
  Forest, // 0.1,
  Plain, // 0.4,
  Mountain, // 0.8,
  HighMountain, // 100,
}

/**
 * 地形块
 * 此类定义最底层的地形块结构
 */
export class Terrain {
  /**
   * 地形高度
   */
  height = 0
  /**
   * 地形上的物体组，比如基岩类别[岩石、泥巴、草皮等等]，此变量可由 mod 直接决定
   */
  slots: any[] = []
  /**
   * 图块高度类别
   */
  heightType = HeightMap.Plain
  constructor (height = 0) {
    this.height = height
    this.heightType = HeightMap.Sea
    if (height > -0.4) {
      this.heightType = HeightMap.Forest
    }
    if (height > -0.1) {
      this.heightType = HeightMap.Plain
    }
    if (height > 0.6) {
      this.heightType = HeightMap.Mountain
    }
    if (height > 1.1) {
      this.heightType = HeightMap.HighMountain
    }
  }
}
