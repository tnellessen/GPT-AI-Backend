const { getGPTResponse } = require('../services/gptService');
const Intake = require('../models/Intake');
const axios = require('axios');

exports.processIntakeForm = async (req, res) => {
  try {
    const formData = req.body;

    const gptResponse = await getGPTResponse(formData); 

    const intake = await Intake.create({
      fullname: formData.fullname,
      email: formData.email,
      phonenumber: formData.phonenumber,
      companyname: formData.companyname,
      companywebsite: formData.companywebsite,
      industry: formData.industry,
      working: formData.working,
      duration: formData.duration,
      monthlyrevenue: formData.monthlyrevenue,
      targetrevenue : formData.targetrevenue,
      promoting: formData.promoting,
      coreoffer: formData.coreoffer,
      idealcustomer: formData.idealcustomer,
      differentiate: formData.differentiate,
      shortterm: formData.shortterm,
      success: formData.success,
      runads: formData.runads,
      access: formData.access,
      adspent: formData.adspent,
      experienceagency: formData.experienceagency,
      marketingteam: formData.marketingteam,
      ecommerceplatform: formData.ecommerceplatform,
      emailmarketing: formData.emailmarketing,
      access: formData.access,
      capmpaingslaunch:formData.capmpaingslaunch,
      budgetplanning : formData.budgetplanning,
      lookingfor: formData.lookingfor,
      howhear: formData.howhear,
      shareus: formData.shareus,
      gptResponse,
    });

// Send to Zapier
await axios.post('https://hooks.zapier.com/hooks/catch/23892744/uuqjk21/', {
      
  
  
  
  
  fullname: formData.fullname,
      email: formData.email,
      phonenumber: formData.phonenumber,
      companyname: formData.companyname,
      companywebsite: formData.companywebsite,
      industry: formData.industry,
      working: formData.working,
      duration: formData.duration,
      monthlyrevenue: formData.monthlyrevenue,
      targetrevenue : formData.targetrevenue,
      promoting: formData.promoting,
      coreoffer: formData.coreoffer,
      idealcustomer: formData.idealcustomer,
      differentiate: formData.differentiate,
      shortterm: formData.shortterm,
      success: formData.success,
      runads: formData.runads,
      access: formData.access,
      adspent: formData.adspent,
      experienceagency: formData.experienceagency,
      marketingteam: formData.marketingteam,
      ecommerceplatform: formData.ecommerceplatform,
      emailmarketing: formData.emailmarketing,
      access: formData.access,
      capmpaingslaunch:formData.capmpaingslaunch,
      budgetplanning : formData.budgetplanning,
      lookingfor: formData.lookingfor,
      howhear: formData.howhear,
      shareus: formData.shareus,
      gptResponse,
});

// Final response to frontend
res.status(200).json({ gptresponse: gptResponse });

} catch (error) {
  console.error('❌ Error:', error.message);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};
