// NOTE: We don't need to redeclare express or dbo as constants from the parent directory filter down to child directories now
const recordRoutes = express.Router();

const ObjectId = require("mongodb").ObjectId;

// List of all records
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb('astrographer');
    db_connect
        .collection("stars")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// Single record by id
recordRoutes.route('/record/:id').get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    db_connect
        .collection("stars")
        .findOne(myquery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// NOTE: No creating, updating, or deleting record functions since this app will only display stars. 