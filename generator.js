var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');

class Generator{

    writeSvgs(file, svgs){
        const $ = cheerio.load(fs.readFileSync(file, { 'encoding': 'utf8'}));
        let rootElement =  $('svg');
        console.log('id - -----  ---- ' + rootElement.attr('id'));
        svgs.map( svg => {
            let innerhtml = '<symbol><path fill="currentColor"/></symbol>';
            
            let element = cheerio.load(innerhtml);
            element('symbol').attr('id', svg.id);
            element('symbol').attr('viewBox', svg.viewbox);
            element('path').attr('d', svg.path);
            rootElement.append(element('symbol'));
        })
        fs.writeFileSync(file ,rootElement.html() );
    }
}

module.exports = Generator;

