import express from 'express'
import App from '@application/App'
import { EstimationRequestValidationError, RawRequest } from '@application/EstimationRequest'
const httpApp = express()

/**
 * Returns the raw estimates
 *
 * Query params:
 * start - Required, UTC start date in format YYYY-MM-DD
 * end - Required, UTC start date in format YYYY-MM-DD
 */
httpApp.get('/api/footprint', async (req: express.Request, res: express.Response) => {
  const estimationRequest: RawRequest = {
    startDate: req.query.start?.toString(),
    endDate: req.query.end?.toString(),
  }

  const footprintApp = new App()
  try {
    const estimates = await footprintApp.getCostAndEstimates(estimationRequest)
    res.json(estimates)
  } catch (e) {
    console.error(e)
    if (e instanceof EstimationRequestValidationError) {
      res.status(400).send(e.message)
    } else res.status(500).send('Internal Server Error')
  }
})

export default httpApp
