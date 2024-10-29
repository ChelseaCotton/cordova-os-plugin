// innerprinter.js

exec = require("cordova/exec");

const OSPlugin = {
  printerInit: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printerInit", []);
    });
  },
  printerSelfChecking: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printerSelfChecking", []);
    });
  },
  getPrinterSerialNo: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "getPrinterSerialNo", []);
    });
  },
  getPrinterVersion: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "getPrinterVersion", []);
    });
  },
  hasPrinter: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "hasPrinter", []);
    });
  },
  getPrintedLength: function () {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "getPrintedLength", []);
    });
  },
  lineWrap: function (count) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "lineWrap", [count]);
    });
  },
  sendRAWData: function (base64Data) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "sendRAWData", [base64Data]);
    });
  },
  setAlignment: function (alignment) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "setAlignment", [alignment]);
    });
  },
  setFontName: function (typeface) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "setFontName", [typeface]);
    });
  },
  setFontSize: function (fontSize) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "setFontSize", [fontSize]);
    });
  },
  printTextWithFont: function (text, typeface, fontSize) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printTextWithFont", [
        text,
        typeface,
        fontSize,
      ]);
    });
  },
  printColumnsText: function (colsTextArr, colsWidthArr, colsAlign) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printColumnsText", [
        colsTextArr,
        colsWidthArr,
        colsAlign,
      ]);
    });
  },
  printBitmap: function (base64Data, width, height) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printBitmap", [
        base64Data,
        width,
        height,
      ]);
    });
  },
  printBarCode: function (barCodeData, symbology, width, height, textPosition) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printBarCode", [
        barCodeData,
        symbology,
        width,
        height,
        textPosition,
      ]);
    });
  },
  printQRCode: function (qrCodeData, moduleSize, errorLevel) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printQRCode", [
        qrCodeData,
        moduleSize,
        errorLevel,
      ]);
    });
  },
  printOriginalText: function (text) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printOriginalText", [text]);
    });
  },
  printString: function (text) {
    return new Promise(function (resolve, reject) {
      exec(resolve, reject, "OSPlugin", "printString", [text]);
    });
  },
  printerStatusStartListener: function (onSuccess, onError) {
    exec(onSuccess, onError, "OSPlugin", "printerStatusStartListener", []);
  },
  printerStatusStopListener: function () {
    exec(
      function () {},
      function () {},
      "OSPlugin",
      "printerStatusStopListener",
      []
    );
  },
};

// Attach the Printer object to the global window object
window.OSPlugin = OSPlugin;
