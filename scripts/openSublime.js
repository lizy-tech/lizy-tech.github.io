/*var exec = require('child_process').exec;
hexo.on('new', function(path){
    exec('start  "G:/program Files/Sublime Text 3/sublime_text.exe" ' + path);

});*/

var exec = require('child_process').exec; 
hexo.on('new', function(data){ 
	//二种方式都OK
 	//exec('"D:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path); 
 	exec('start "" "G:\\Program Files\\Sublime Text 3\\sublime_text.exe" ' + data.path);
});
