module.exports = function (sequelize, DataTypes) {
    var room = sequelize.define("room", {
        room_size: sequelize.STRING
    });
    room.associate = function (models) {
        room.hasOne(models.Dog, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return room;
};
