module.exports = function (sequelize, DataTypes) {
    var dogActivities = sequelize.define("dogActivities", {
        trailDistance: DataTypes.INTEGER,
        feedFrequency: DataTypes.STRING,
        feedAmount: DataTypes.STRING,
    });
    dogActivities.associate = function (models) {
        dogActivities.hasOne(models.Dog, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return dogActivities;
};
