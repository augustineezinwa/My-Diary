import path from 'path';

class MemoryUpdatePageController {
  static fetchMemoryUpdatePage(request, response) {
    return response.sendFile(
      path.join(`${__dirname}'../../../Client/memorychange/index.html`)
    );
  }
}

export default MemoryUpdatePageController;
