/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
export function dashboardController(req, res) {
  try {
    const { section } = req.params;

    return res.render('dashboard', {
      pageStylesheet: 'dashboard',
      section
    })
  } catch(err) {
    return null;
  }
}