import { DashboardService } from '../services/dashboard.mjs';

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export async function dashboardController(req, res) {
  const DASHBOARD_MAIN_RENDER_PAGE = 'dashboard/index';
  try {
    const { section } = req.params;
    const dashboardService = new DashboardService();

    if(section === 'incidencias') {
      const { data, total } = await dashboardService.getIncidents();

      return res.render(DASHBOARD_MAIN_RENDER_PAGE, {
        pageStylesheet: 'dashboard',
        pageScript: 'dashboard', 
        section,
        incidentsData: data ?? [],
        totalIncidents: total ?? 0
      });
    } else {
      return res.render(DASHBOARD_MAIN_RENDER_PAGE, {
        section,
        pageStylesheet: 'dashboard'
      });
    }
  } catch(err) {
    return null;
  }
}