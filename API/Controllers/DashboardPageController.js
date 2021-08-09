import path from 'path';

class DashboardPageController {
  static fetchDashboardPage(request, response) {
    return response.sendFile(
      path.join(`${__dirname}'../../../Client/dashboard/index.html`)
    );
  }
}

export default DashboardPageController;
