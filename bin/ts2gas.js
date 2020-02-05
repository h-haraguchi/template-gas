const ts2gas = require('ts2gas');
const fs = require("fs");
const path = require("path");

fs.readdirSync('src').forEach(filename => {
	const parsedPath = path.parse(filename);
	if (parsedPath.ext === '.ts') {
		const content = fs.readFileSync(`src/${filename}`, 'utf8');
		const converted = ts2gas(content);
		fs.writeFileSync(`dist/${parsedPath.name}.js`, converted);
	}
});
