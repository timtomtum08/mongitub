const qcms = require('../models/inmemory');

const displayQcms = (req, res) => {
 
    res.render('qcms', {qcms: qcms});
};

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {
    console.log(req.body);
    qcms.push(req.body.title);
    res.redirect('/qcms');
};

module.exports = {displayQcms, displayFormQcm, createNewForm};