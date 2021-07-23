module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        url_direction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    });
    return Image;
}