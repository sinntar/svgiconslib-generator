var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');

class SvgReader {
    ReadSvgs(folderPath){
        let svgs = [];
        if (!fs.existsSync(folderPath)){
            console.log("no dir ",folderPath);
            return;
        }
        var files=fs.readdirSync(folderPath);
        for(let i=0;i<files.length;i++){
          
            let pathname = folderPath + files[i];
            const $ = cheerio.load(fs.readFileSync(pathname, { 'encoding': 'utf8'}));
            let viewbox =  $('svg').attr('viewBox');
            let path = $('path').attr('d');
            let filename = files[i].slice(0, -4);

            let svg = {
                id : filename,
                viewbox : viewbox, 
                path : path
            }

            svgs.push(svg);
        };
        return svgs;
    };
}

module.exports = SvgReader;