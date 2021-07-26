import memories  from '../Models/memories';

class MemoriesController {

    static fetchMemories(request, response)
    {
       return response.json(memories);
    }
}

export default MemoriesController;