module.exports = function (sequelize, DataTypes) {
    var rooms = sequelize.define("rooms", {
        room_name: DataTypes.STRING,
        room_empty: DataTypes.BOOLEAN

    });


    return rooms;
};
