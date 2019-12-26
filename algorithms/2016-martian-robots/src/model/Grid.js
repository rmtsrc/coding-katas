'use strict'

module.exports = class Grid {
  /**
   * Creates a new grid with the given size
   *
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = Number(x)
    this.y = Number(y)

    if (this.x > 50 || this.y > 50) {
      throw new RangeError('Max grid size is 50')
    }
  }

  /**
   * Checks to see if the input is off the current grid
   *
   * @param {number} x
   * @param {number} y
   * @return {boolean}
   */
  isOffGrid(x, y) {
    return (x < 0 || y < 0 || x > this.x || y > this.y)
  }
}
