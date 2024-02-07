const User = require("../Model/userModel");

class UserRepository {
  async createUser(data) {
    const user = new User(data);
    return await user.save();
  }

  async updateUser(params, data) {
    return await User.updateOne(params, { $set: data });
  }

  async deleteUser(params) {
    return await User.deleteOne(params);
  }

  async listUsers() {
    return await User.find();
  }
}

module.exports = new UserRepository();
