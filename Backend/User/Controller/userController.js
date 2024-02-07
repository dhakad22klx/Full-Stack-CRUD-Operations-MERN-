const userService = require("../Service/userService");

class UserController {
  async createUser(req,res) {
    try {
      const result = await userService.createUser(req.body);
    res.send(result);
    } catch (error) {
    res.status(500).send(error.message);
    }
  }

  async updateUser(req,res) {
    try {
      const data = await userService.updateUser(req.params, req.body);
    res.send(data);
      console.log(data);
    } catch (error) {
    res.status(500).send(error.message);
    }
  }

  async deleteUser(req,res) {
    try {
      const data = await userService.deleteUser(req.params);
    res.send(data);
    } catch (error) {
    res.status(500).send(error.message);
    }
  }

  async listUsers(req,res) {
    try {
      const data = await userService.listUsers();
    res.send(data);
    } catch (error) {
    res.status(500).send(error.message);
    }
  }
}

module.exports = new UserController();
