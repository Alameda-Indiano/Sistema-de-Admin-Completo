import { Sequelize, Model } from "sequelize";

class User extends Model {
  
  static init(sequelize) {
    super.init({
      initials: {
        type: Sequelize.VIRTUAL,
        get() {
          const math = this.name.split(' ');
          
          if (math.length > 1) {
            let initialsName = '';
            
            for (let i = 0; i < math.length; i++) {
              initialsName = initialsName + `${math[i][0]}`
            };
            
            return initialsName;
          } 
          else {
            return `${math[0][0]}`;
          };
        }
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL, 
      password_hash: Sequelize.STRING,
      role: Sequelize.ENUM('admin', 'manager', 'developer'),
      status: Sequelize.ENUM('active', 'archived')
    }, {
      sequelize,
      name: {
        singular: 'user',
        plural: 'users'
      }
    });
  };

  static associate(models) {
    
    this.hasMany(models.Project)
    this.hasMany(models.Task)
    
  }

};

export default User;