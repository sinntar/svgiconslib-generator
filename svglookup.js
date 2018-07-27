var fs = require('fs');
var path = require('path');

class SvgLookUp{
    constructor(startPath,outputPath, filter) {
		this.startPath = startPath;
        this.outputPath = outputPath;
        this.filter = filter;
	}
    lookUpFolder(startPath, outputPath, filter){
        if (!fs.existsSync(startPath)){
            console.log("no dir ",startPath);
            return;
        }
        var files=fs.readdirSync(startPath);
        for(var i=0;i<files.length;i++){
            var filename= path.join(startPath,files[i]);
            var stat = fs.lstatSync(filename);
            if (stat.isDirectory()){
                //console.log(filename);
                this.lookUpFolder(filename,outputPath, filter); //recurse
            }
            else if (filename.indexOf(filter)>=0) {
                console.log('-- found: ',filename);
                this.cloneFile(outputPath, filename);
            };
        };
    };

    cloneFile(outputPath, file){
        //gets file name and adds it to dir2
        var f = path.basename(file);
        var source = fs.createReadStream(file);
        var dest = fs.createWriteStream(path.resolve(outputPath, f));
        source.pipe(dest);
      }
}


module.exports = SvgLookUp;

