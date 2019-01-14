document.onkeyup = function (e) {
  if (e.ctrlKey && e.shiftKey && e.which == 72) {
    chrome.storage.sync.get('color', function (data) {
      let color = "#FFFF00";
      if (data.color !== undefined) {
        color = data.color;
      }

      document.querySelector("iframe").contentDocument.execCommand("hiliteColor", false, color)
    });
  }
};