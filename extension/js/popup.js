function decimalToHex(d) {
  let hex = Number(parseInt(Math.ceil(d), 10)).toString(16).toUpperCase();
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

chrome.storage.sync.get('color', function (data) {
  let color = "#FFFF00";
  if (data.color !== undefined) {
    color = data.color;
  }

  const pickr = new Pickr({
    el: '#color-picker',
    default: color,
    showAlways: true,
    comparison: false,
    components: {
      preview: true,
      opacity: false,
      hue: true,
      interaction: {
        hex: true,
        rgba: false,
        hsva: false,
        input: true,
        clear: false,
        save: false
      }
    },

    onChange(hsva, instance) {
      let color = hsva.toRGBA();
      let colorStr = '#' + decimalToHex(color[0]) + decimalToHex(color[1]) + decimalToHex(color[2]);
      chrome.storage.sync.set({
        color: colorStr
      }, function () {
        console.log('Selected color is ' + colorStr);
      });
    },
  });
});