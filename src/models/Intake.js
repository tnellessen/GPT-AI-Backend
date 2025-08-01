const mongoose =require('mongoose');

const intakeSchema = new mongoose.Schema({
    fullname:{type: String, required:true},
    email:{type: String, required:true},
    industry:{type: String, required:true},
    working:{type: String, required:true},
    duration:{type: String, required:true},
      monthlyrevenue: {type: String, required:true},
      targetrevenue : {type: String, required:true},
      promoting: {type: String, required:true},
      coreoffer: {type: String, required:true},
      idealcustomer: {type: String, required:true},
      differentiate: {type: String, required:true},
      shortterm: {type: String, required:true},
      success:{type: String, required:true},
      runads: {type: String, required:true},
      access: {type: [String], required:true},
      adspent: {type: String, required:true},
      experienceagency: {type: String, required:true},
      marketingteam: {type: String, required:true},
      ecommerceplatform: {type: String, required:true},
      emailmarketing: {type: String, required:true},
      access: {type: [String], required:true},
      capmpaingslaunch:{type: String, required:true},
      budgetplanning : {type: String, required:true},
      lookingfor: {type: String, required:true},
      howhear: {type: String, required:true},
      shareus: {type: String, required:true},
      gptResponse:{type: String, required:true},
    
}, {timestamps: true});

module.exports =mongoose.model('Intake', intakeSchema)