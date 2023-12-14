class Question {

    #id;
    #difficulty;
    #points;

    constructor(QuestionToCreate) {
        this.#id = QuestionToCreate.id;
        this.#difficulty = QuestionToCreate.difficulty;
        this.#points = QuestionToCreate.points;
    }

}

module.exports = Qcm;