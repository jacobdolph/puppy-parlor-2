// module.exports = function (sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         first_name: DataTypes.STRING,
//         last_name: DataTypes.STRING,
//         email: DataTypes.STRING,
//         password: DataTypes.STRING,
//     });
//     User.associate = function (models) {
//         User.hasMany(models.Dog, {
//             onDelet: "cascade"
//         });
//     };

//     return User;
// };

