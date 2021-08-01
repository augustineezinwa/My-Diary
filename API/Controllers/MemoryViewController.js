class MemoryViewController {
  static viewMemory(request, response) {
    return response.json(request.resourceBag);
  }
}

export default MemoryViewController;
