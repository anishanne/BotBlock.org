const BaseJob = require('../Structure/BaseJob');
const updateIcon = require('../Util/updateIcon');

class IconUpdater extends BaseJob {
    constructor(client, db) {
        super('@daily');
        this.client = client;
        this.db = db;
    }

    execute() {
        this.db.run('SELECT * FROM lists WHERE display = ? AND defunct = ?', [1, 0]).then((lists) => {
            for (let i = 0; i < lists.length; i++) {
                updateIcon(this.client, this.db, lists[i]).then((m) => {
                    console.log(m)
                }).catch((e) => {
                    console.log(e)
                })
            }
        }).catch((e) => {
            console.log('[Database] Error while updating icons', e);
        })
    }
}

module.exports = IconUpdater;