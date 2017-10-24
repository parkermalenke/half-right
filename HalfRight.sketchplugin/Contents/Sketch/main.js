function onRun(context) {
  var sketch = context.api()
  var document = sketch.selectedDocument
  var layers = document.selectedLayers
  var makeHalf = function(num) {
    return parseInt(num) + 0.5
  }

  layers.iterate(function(layer) {
    var newX = makeHalf(layer.frame.x)
    var newY = makeHalf(layer.frame.y)
    var newWidth = parseInt(layer.frame.width)
    var newHeight = parseInt(layer.frame.height)
    var newFrame = new sketch.Rectangle(newX, newY, newWidth, newHeight)
    layer.frame = newFrame
  })
}
