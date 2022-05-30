const { MongoClient } = require("mongodb");
const Db = process.env.MONGODB_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db: any;

async function run() {
    try {
        // Connect client to server
        await client.connect();
        
        // Establish and verify
        await client.db('admin').command({ping: 1});
        console.log("Connected successfully to server");
    } finally {
        // Ensure client closes when finished
        await client.close();
    }
}

run().catch(console.dir);

// TODO: Evaluate if this or the above method is preferred

/* module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify db object is a good boy
            if (db) {
                _db = db.db("admin").command({ping: 1});
                console.log("Sucessful connection");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
}; */