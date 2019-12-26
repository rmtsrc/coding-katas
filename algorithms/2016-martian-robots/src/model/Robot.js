'use strict'

module.exports = class Robot {
  /**
   * Creates a new Robot
   *
   * @param {Grid} grid - Grid model
   * @param {number} x
   * @param {number} y
   * @param {string} orientation
   */
  constructor(grid, x, y, orientation) {
    this.grid = grid
    this.x = Number(x)
    this.y = Number(y)
    this.orientation = orientation
    this.isLost = false
  }

  /**
   * Turns the robot in a direction
   *
   * @param {string} direction - L or R
   * @return {string} new direction
   */
  turn(direction) {
    let directionMap = {
      'L': {
        'N': 'W',
        'E': 'N',
        'S': 'E',
        'W': 'S'
      },
      'R': {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W': 'N'
      }
    }

    this.orientation = directionMap[direction][this.orientation]

    return this.orientation
  }

  /**
   * Moves the robot forward one space, based on current direction
   */
  forward() {
    let moveForward = {
      'N': {
        x: this.x,
        y: this.y + 1
      },
      'E': {
        x: this.x + 1,
        y: this.y
      },
      'S': {
        x: this.x,
        y: this.y - 1
      },
      'W': {
        x: this.x - 1,
        y: this.y
      }
    }

    let nextMove = {
      x: moveForward[this.orientation].x,
      y: moveForward[this.orientation].y
    }

    if (this.grid.isOffGrid(nextMove.x, nextMove.y)) {
      this.isLost = true
    } else {
      this.x = nextMove.x
      this.y = nextMove.y
    }
  }

  /**
   * Moves the robot based on the input commands
   *
   * @param {string} commands - a list of commands F, L or R
   */
  move(commands) {
    if (commands.length >= 100) {
      throw new RangeError('Max command length is 100')
    }

    commands.split('').map((command) => {
      if (!this.isLost) {
        if (command == 'F') {
          this.forward()
        } else {
          this.turn(command)
        }
      }
    })
  }

  /**
   * Returns the current robots location, orientation and if it's lost
   *
   * @return {string}
   */
  getLocation() {
    return `${this.x} ${this.y} ${this.orientation}` + ((this.isLost) ?
      ' LOST' : '')
  }
}
