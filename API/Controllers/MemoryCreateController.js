import models from '../models';

const { Memory } = models;

class MemoryCreateController {
  static async createMemory(request, response) {
    const { id } = request.userWallet;

    try {
      const newMemory = await Memory.create({
        title: request.body.title,
        story: request.body.story,
        picture: request.body.picture,
        mood: request.body.mood,
        userId: id.toString(),
      });

      if (newMemory.dataValues) {
        return response.status(201).json({
          message: 'New memory created',
          memory: newMemory.dataValues
        });
      }
    } catch (e) {
      return response.status(500).json(e);
    }
  }
}

export default MemoryCreateController;
