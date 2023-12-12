// importer la classe Qcm
const Qcm = require('./qcm');

// remplacer les simples chaines de caracteres par des instances de la classe Qcm
const qcms = [
    new Qcm({id: 0, name: 'Introduction Vanilla JS', nbpoints: 20, subject: 'Javascript'}),
    new Qcm({id: 1, name: 'Framework Frontend', nbpoints: 20, subject: 'Angular'}),
    new Qcm({id: 2, name: 'Framework Backend', nbpoints: 10, subject: 'Express'}),
        ];

        //FIXME: fonction qui ajoute un element a la liste et incremente l'id

module.exports = qcms;