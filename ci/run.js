const path = require('path');
const fs = require('fs');
const test = require('../deploy/src/test');

const main = async () => {
    // Run tests
    let out, err;
    out = await test().catch(e => {
        err = e;
    });

    // Remove CI config
    const configLocation = path.join(__dirname, '..', 'config.js');
    fs.unlinkSync(configLocation);

    // Detect if there is an original config
    const configBackupLocation = path.join(__dirname, '..', 'config.backup.js');
    if (fs.existsSync(configBackupLocation)) {
        fs.renameSync(configBackupLocation, configLocation);
    }

    // Throw/return tests result
    if (err) throw err;
    return out;
};

main().then(result => {
    console.log(result.stdout);
    process.exit();
}).catch(err => {
    console.log(err.stdout);
    process.exit(1);
});
