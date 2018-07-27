var SvgLookUp = require('./svglookup.js');
var SvgReader = require('./svgpathreader.js');
var Generator = require('./generator.js');
const inputPath = __dirname + '\\input\\';
const outputPath = __dirname + "\\output\\svgs\\"
var fs = require('fs');
var path = require('path');


let svgfinder = new SvgLookUp(inputPath, outputPath, '.svg');

let svgreader = new SvgReader();

let svgwriter = new Generator();

//svgfinder.FetchSvgs(inputPath, outputPath, '.svg');

let svgs = svgreader.ReadSvgs(outputPath);

svgwriter.writeSvgs( outputPath + 'iconlist.html' , svgs);

