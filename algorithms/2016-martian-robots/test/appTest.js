'use strict'

let assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,

    app = require('../src/app'),

    gridSize = '5 3'

describe('app', () => {
  it('will return a robot placed on the grid', () => {
    let robot = app.createRobotOnGrid(gridSize, '1 1 E')
    assert.equal(robot.getLocation(), '1 1 E')
  })
})

describe('Grid', () => {
  it('will throw an error if the grid is too big', () => {
    expect(function() {
      app.createRobotOnGrid('200 200', '0 0 N')
    }).to.throw(RangeError)
  })
})

describe('Robot', () => {
  it('will throw an error if the command is too long', () => {
    expect(function() {
      let robot = app.createRobotOnGrid(gridSize, '0 0 N')
      robot.move(
        'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF'
      )
    }).to.throw(RangeError)
  })

  it('will move forward and turn right', () => {
    let robot = app.createRobotOnGrid(gridSize, '0 0 N')
    robot.move('FR')
    assert.equal(robot.getLocation(), '0 1 E')
  })

  it('will move back to were it started', () => {
    let robot = app.createRobotOnGrid(gridSize, '1 1 E')
    robot.move('RFRFRFRF')
    assert.equal(robot.getLocation(), '1 1 E')
  })

  it('will move off the grid', () => {
    let robot = app.createRobotOnGrid(gridSize, '3 2 N')
    robot.move('FRRFLLFFRRFLL')
    assert.equal(robot.getLocation(), '3 3 N LOST')
  })

  it('will move around the grid', () => {
    let robot = app.createRobotOnGrid(gridSize, '0 3 W')
    robot.move('LLFFFLFLFL')
    assert.notEqual(robot.getLocation(), '2 3 S')
  })

  it('will move around the grid correctly', () => {
    let robot = app.createRobotOnGrid('5 4', '0 3 W')
    robot.move('LLFFFLFLFL')
    assert.equal(robot.getLocation(), '2 4 S')
  })
})
