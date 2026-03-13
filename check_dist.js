const fs = require('fs');
const path = 'dist';
if (fs.existsSync(path)) {
    console.log('Dist contents:', fs.readdirSync(path));
} else {
    console.log('Dist directory does not exist');
}
