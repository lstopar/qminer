
// removes the timestamp from html files generated by jsdoc
// example line: Generated by <a href="https://github.com/jsdoc3/jsdoc">JSDoc</a> 3.3.2 on September 16, 2015.

var htmlDir = process.argv[2];

var fs = require('fs');

fs.readdir(htmlDir, function (err, files) {
    files.filter(function (file) { return file.substr(-5) === '.html'; })
         .forEach(function (htmlfile) {
             var htmlstr = fs.readFileSync(require('path').join(htmlDir, htmlfile), 'ascii');
			debugger
             //remove line with: Generated by <a href="https://github.com/jsdoc3/jsdoc">JSDoc</a>
             var re = new RegExp(/((?:[\n\r]|.)*)(Generated by <a href.*)((?:[\n\r]|.)*)/);
             var arrMatches = htmlstr.match(re);
             if (arrMatches != null && arrMatches.length == 4) {
                 htmlstr = arrMatches[1] + arrMatches[3]
             }
             
             //remove JSDoc version:  <meta name="generator" content="JSDoc 3.3.0-beta2">
             // to <meta name="generator" content="JSDoc 3">
             
             var re = new RegExp(/((?:[\n\r]|.)*)(<meta name=\"generator\" content=\"JSDoc 3.*)((?:[\n\r]|.)*)/);
             var arrMatches = htmlstr.match(re);
             if (arrMatches != null && arrMatches.length == 4) {
                 htmlstr = arrMatches[1] + '<meta name=\"generator\" content=\"JSDoc 3\">' + arrMatches[3];
             }

             // write the new html
             var fout = fs.createWriteStream(require('path').join(htmlDir, htmlfile));
             fout.write(htmlstr);
             fout.end();
         
         });
});

