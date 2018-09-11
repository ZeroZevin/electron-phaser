import { BaseItem } from '../item/baseItem'
import { TileType } from './tiletype'
/**
 * 地图块
 * 此类定义人为放置在地图上的物体，包含最底层的 Terrain 块
 */
export class Tile {
  /**
   * 返回默认为空的图块
   */
  static get DefaultTile () {
    return new Tile()
  }
  /**
   * 地图快类别
   */
  type = TileType.Unknow
  /**
   * 获取默认的地图块
   */
  terrain = {}
  /**
   * 图块中的物体数组，此数组应该保持可见性从低到高的顺序，以方便调用绘制
   */
  private _items: BaseItem[] = []
  /**
   * 将物体插入图块中
   * @param item 带插入物体
   */
  addItem (item: BaseItem) {
    this._items.push(item)
    for (let i = 0; i < this._items.length - 1; i++) {
      if (item.order < this._items[i].order) {
        this._items.splice(this._items.length - 1, 1)
        this._items.splice(i - 1, 0, item)
        break
      }
    }
  }
  /**
   *
   * @param index 获取图块中的某个物体
   */
  getItem (index: number) {
    return this._items[index]
  }
}
