import memories  from '../Data/memories';
class MemoryDeleteController {

    static deleteMemory(request, response)
    {
      const remainingMemories = memories.filter(x => x.a != '2');

       memories.splice(0, memories.length);
       memories.push(...remainingMemories);

       return response.json({ 'message' : 'memory deleted'});
    }
}

export default MemoryDeleteController;