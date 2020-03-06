module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        name: DataTypes.STRING,
        size: DataTypes.STRING,
        breed: DataTypes.STRING,
        vaccinated: DataTypes.BOOLEAN,
    });
    Dog.associate = function (models) {
        Dog.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        }),
            Dog.belongsTo(models.dogActivities, {
                foreignKey: {
                    allowNull: false
                }
            });
    };

    return Dog;
};

