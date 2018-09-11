
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
}
