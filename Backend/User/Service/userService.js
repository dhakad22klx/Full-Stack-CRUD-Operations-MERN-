const userRepository = require("../Repository/userRepository");

class UserService {
  async createUser(data) {
    try {
      return await userRepository.createUser(data);
    } catch (error) {
      throw error;
    }
  }

  async updateUser(params, data) {
    try {
      return await userRepository.updateUser(params, data);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(params) {
    try {
      return await userRepository.deleteUser(params);
    } catch (error) {
      throw error;
    }
  }

  async listUsers() {
    try {
      return await userRepository.listUsers();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
