/**
 * 地图快类别
 * 表明当前土块所处状态
 */
export enum TileType {
  /**
   * 处在战争迷雾中，未知状态
   */
  Unknow = 0,
  /**
   * 只有基本地形，未放置任何物体
   */
  Terrain,
  /**
   * 已放置某些物体
   */
  Item,
}
