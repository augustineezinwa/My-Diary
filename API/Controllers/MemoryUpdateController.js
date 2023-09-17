import models from '../models';

const { Memory } = models;

class MemoryUpdateController {
  static async updateMemory(request, response) {
    try {
      await Memory.update({
        story: request.body.story,
        title: request.body.title,
        picture: request.body.picture,
        mood: request.body.mood
      }, {
        where: {
          userId: request.userWallet.id,
          id: request.params.id
        }
      });

      return response.json({ message: 'memory updated' });
    } catch (e) {
      return response.status(500).json({ error: e.toString() });
    }
  }
}

export default MemoryUpdateController;
