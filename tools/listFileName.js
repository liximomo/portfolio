fs = require('fs-extra');
path = require('path');

var items = []; // files, directories, symlinks, etc 
fs.walk('./')
  .on('readable', function () {
    var item;
    while ((item = this.read())) {
      if (item.stats.isFile()) {
        items.push(item.path.split(path.sep).slice(-1)[0]);
      };
    }
  })
  .on('end', function () {
    console.dir(items); // => [ ... array of files] 
  })