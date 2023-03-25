const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Dog',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temperament: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { createdAt: false, updatedAt: false }
  );
};
