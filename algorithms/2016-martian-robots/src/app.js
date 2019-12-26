'use strict'

let Grid = require('./model/Grid'),
    Robot = require('./model/Robot')

module.exports = {
  /**
   * Factory for creating a new Robot on a Grid
   *
   * @param {string} gridSize - in the format 'x y'
   * @param {string} robotLocation - in the format 'x y orientation'
   * @return {Robot}
   */
  createRobotOnGrid: (gridSize, robotLocation) => {
    gridSize = gridSize.split(' ')

    let grid = new Grid(
      gridSize[0],
      gridSize[1]
    )

    robotLocation = robotLocation.split(' ')
    return new Robot(
      grid,
      robotLocation[0],
      robotLocation[1],
      robotLocation[2]
    )
  }
}
