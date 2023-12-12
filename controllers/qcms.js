const {qcms, addQcm} = require('../models/inmemory');

const displayQcms = (req, res) => {
    for (let qcm of qcms) {
        console.log(`${qcm.nbpoints}: ${typeof(qcm.nbpoints)}`);
    }
    res.render('qcms', {qcms: qcms});
};

const displayQcmJson = (req, res) => {
    res.json({qcms});
}

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {
    console.log(req.body);
    addQcm({
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints
    });
    res.redirect('/qcms');
};

module.exports = {displayQcms, displayFormQcm, createNewForm, displayQcmJson};