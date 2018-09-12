
import { Tile } from './tile'

/**
 * 地图类
 */
export class Map {
  /**
   * 地图名称
   */
  name = ''
  /**
   * 图块集合
   */
  private _tiles: {[key: string]: Tile} = {}
  /**
   * 地图高度
   */
  width = 2
  /**
   * 地图宽度
   */
  height = 2
  horizen = 0.05
  constructor (name = 'default map') {
    this.name = name
  }
  /**
   * 获取特定位置的图块
   * @param x x 坐标
   * @param y y 坐标
   */
  getTile (x: number, y: number) {
    return this._tiles[x + '#' + y] || Tile.DefaultTile
  }
  /**
   * 添加图块到当前地图
   * @param x x 坐标
   * @param y y 坐标
   * @param tile 待添加图块
   */
  addTile (x: number, y: number, tile: Tile) {
    this._tiles[x + '#' + y] = tile
  }
  /**
   * 判断是否高于地平线
   * @param x x坐标
   * @param y y坐标
   */
  heiType (x: number, y: number) {
    if (this._tiles[x + '#' + y]) {
      return this._tiles[x + '#' + y].terrain.heightType
    }
    return 2
  }
}
