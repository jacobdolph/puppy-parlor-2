module.exports = function (sequelize, DataTypes) {
    var dogActivities = sequelize.define("dogActivities", {
        trailDistance: DataTypes.INTEGER,
        feedFrequency: DataTypes.STRING,
        feedAmount: DataTypes.BOOLEAN,
    });
    dogActivities.associate = function (models) {
        dogActivities.belongsTo(models.Dog, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return dogActivities;
};
