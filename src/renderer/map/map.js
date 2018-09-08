
import { TileType, Tile } from '.';

export default class Map {
    constructor(name = "default map") {
        this.name = name;
        this._tiles = {};
    }
    getTile(x, y) {
        return this._tiles[x + '#' + y] || Tile.DefaultTile;
    }
    addTile(x, y, tile) {
        this._tiles[x + '#' + y] = tile;
    }
}