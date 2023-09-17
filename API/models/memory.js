import sequelize from 'sequelize';

const {
  Model
} = sequelize;
module.exports = (sequelize, DataTypes) => {
  class Memory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { User } = models;

      Memory.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    }
  }

  Memory.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Memory',
  });
  return Memory;
};