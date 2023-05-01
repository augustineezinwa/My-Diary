import express from 'express';

// instantiate router from express
const TestRouter = express.Router();

TestRouter.get('/fish', (req, res) => {
   let { page, limit } = req; 
   console.log(page, limit);
  return res.json({
    fish: 2
  })
});

export default TestRouter;
