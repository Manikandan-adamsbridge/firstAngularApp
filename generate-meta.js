const fs = require('fs');
const packageJson = require('./package.json');

const meta = {
    name: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
    dependencies: packageJson.dependencies,
    devDependencies: packageJson.devDependencies,
    author: packageJson.author,
    license: packageJson.license,
};

fs.writeFileSync('meta.json', JSON.stringify(meta, null, 2));
console.log('Meta file created: meta.json');
