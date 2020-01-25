
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller.js');
const router = express.Router();

// @route GET single /item
// @desc Get All Items
// @access Public



router.post('/', async (req, res)=>{
  const {surgeryid, imageid} = req.body;
 
  try {
    const fullTarget = await controller.addTarget(surgeryid, imageid);
    response.success(req, res, fullTarget, 201 )
  }
  catch (err) {
    response.error(req, res, 'Internal Error', 400, err )
  }
});

router.get('/', async (req, res)=>{
  const filtertarget = req.query.surgeryid || null;
  try {
    const targetList = await controller.getTargets(filtertarget);
    response.success(req, res, targetList, 200)
  }
  catch(err) {
    response.error(req,res, 'Internal error', err)
  }
})









module.exports = router;

