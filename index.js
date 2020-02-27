const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
    const win = array.find(year => year.result === 'W')
    if (win) {
      return win.year
    } else {
      return win
    }
}