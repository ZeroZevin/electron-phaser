const path = require('path');

module.exports = {
  resolve: {
    alias: {
      "@main": path.resolve(__dirname, 'src/main'),
      "@renderer": path.resolve(__dirname, 'src/renderer'),
      "@common": path.resolve(__dirname, 'src/common'),
    }
  } 
};