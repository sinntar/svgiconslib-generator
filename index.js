var SvgLookUp = require('./svglookup.js');
var SvgReader = require('./svgpathreader.js');
const inputPath = __dirname + '\\input\\';
const outputPath = __dirname + "\\output\\svgs\\"
var fs = require('fs');
var path = require('path');

let svgfinder = new SvgLookUp(inputPath, outputPath, '.svg');

let svgreader = new SvgReader();

//svgfinder.lookUpFolder(inputPath, outputPath, '.svg');

svgreader.ReadSVG(outputPath);

