const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;


fs.writeFile(
    path.join(__dirname, 'text.txt'),
    '',
    (err) => {
        if (err) throw err;
    }
);

stdout.write('Пожелание на новый год\n');

stdin.on('data', data => {
  let itemInput = data.toString();
	if(itemInput.trim() === 'exit') {
		process.exit();
	};
  fs.appendFile(
    path.join(__dirname, 'text.txt'),
    itemInput,
    err => {
        if (err) throw err;
				stdout.write('Напишите еще пожелание или введите exit для выхода\n');
    }
	);
});


process.on('SIGINT', () => {
	process.exit();
});

process.on('exit', () => stdout.write('Спасибо за пожелания! Пока!'));
