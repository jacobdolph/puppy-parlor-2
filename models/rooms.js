module.exports = function (sequelize, DataTypes) {
    var rooms = sequelize.define("rooms", {
        room_name: DataTypes.STRING,
        room_empty: DataTypes.BOOLEAN

    });
    rooms.associate = function (models) {
        rooms.belongsTo(models.Dog, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return rooms;
};
