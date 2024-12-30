const Salary=require('../models/salaries');

const getAllSalaries=async (req,res)=>{
    try {
        const salaries=await Salary.find();
        res.json(salaries);
        const jobTitle = req.query.job_title;
        if (jobTitle) {
            const filteredSalaries = salaries.filter(salary => salary.JobTitle === jobTitle);
            res.json(filteredSalaries);
        } else {
            res.json(salaries);
        }
    } catch (error) {
        res.status(500).send("Errror fetching Salaries");   
    }
};
module.exports={getAllSalaries};