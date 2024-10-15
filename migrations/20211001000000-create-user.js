'use strict';

module.exports = {
      async up(queryInterface, Sequelize) {
            /**
             * Add altering commands here.
             *
             * Example:
             * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
             */

            // Create Users table
            await queryInterface.createTable('users', {
                  id: {
                        type: Sequelize.INTEGER,
                        autoIncrement: true,
                        primaryKey: true,
                  },
                  username: {
                        type: Sequelize.STRING,
                        allowNull: false,
                        unique: true,
                  },
                  password: {
                        type: Sequelize.STRING,
                        allowNull: false,
                  },
                  createdAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.fn('NOW'),
                  },
                  updatedAt: {
                        allowNull: false,
                        type: Sequelize.DATE,
                        defaultValue: Sequelize.fn('NOW'),
                  },
            });

      },

      async down(queryInterface, Sequelize) {
            /**
                * Add reverting commands here.
                *
                * Example:
                * await queryInterface.dropTable('users');
            */
            await queryInterface.dropTable('users');
      }
};
