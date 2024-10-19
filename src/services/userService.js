import responses from "../constants/responses";
const { User, Transaction } = require("../models");

class UserService {
  getUser = async () => {
    try {
      let user = await User.findOne({});

      if (!user) {
        return responses[101]("User Not found");
      }
      return { ...responses[0](), data: { user } };
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserService;
