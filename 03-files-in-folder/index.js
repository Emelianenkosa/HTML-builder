
const fs = require('fs');
const path = require('path');
//const { stdin, stdout } = process;


const option = {
  withFileTypes: true
}

fs.readdir(path.join(__dirname, 'secret-folder'), option, function(err, files) {
	for(let file of files) {
		if(file.isFile()) {
			fs.stat(path.join(__dirname, 'secret-folder', file.name), function(err, stats) {
				console.log(`${path.parse(file.name).name} - ${(path.extname(file.name)).slice(1)} - ${stats.size} kb`);
			});
		};
	};
});