import models from '../models';

const { Memory } = models;

class MemoryDeleteController {
  static async deleteMemory(request, response) {
    try {
      await Memory.destroy({
        where: {
          id: request.params.id,
          userId: request.userWallet.id
        }
      });

      return response.json({ message: 'memory deleted' });
    } catch (error) {
      return response.json({ message: error.toString() });
    }
  }
}

export default MemoryDeleteController;
