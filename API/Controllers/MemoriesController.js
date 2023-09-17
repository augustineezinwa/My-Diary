import models from '../models';

const { Memory } = models;
class MemoriesController {
  static async fetchMemories(request, response) {
    const memories = await Memory.findAll({
      where: {
        userId: request.userWallet.id
      }
    }).catch((error) => response.status(500).json(error));
    return response.json(memories);
  }
}

export default MemoriesController;
