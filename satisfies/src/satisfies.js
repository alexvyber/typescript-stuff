var palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
};
// We want to be able to use array methods on 'red'...
var redComponent = palette.red.at(0);
// const blueComponent = palette.blue.at(0)
// or string methods on 'green'...
var greenNormalized = palette.green.toUpperCase();
