import * as fs from 'node:fs/promises';

export class DashboardService {
  async getIncidents() {
    try {
      const data = await fs.readFile('mocks/incidents.json', 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  }
}