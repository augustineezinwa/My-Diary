import memories from "../Data/memories";

class MemoriesController {

    static fetchMemories(request, response)
    {
       return response.json(memories);
    }
}

export default MemoriesController;