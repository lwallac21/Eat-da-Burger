const orm = require("../config/orm.js")

let burger = {
        selectAll: function(cb) {
            orm.selectAll("burgers", function(res) {
              cb(res);
            });
          },

    insertOne: function (cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, callback, function(res) {
            callback(res)
        })
    },
    updateOne: function (objColsVals, condition, callback) {
        orm.updateOne("burgers", objColsVals, condition, function(res){
            callback(res)
        })
    }
};

module.exports = burger;
