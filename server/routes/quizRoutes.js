const express = require("express");
const router = express.Router();

const { quizCreate, updateQuiz, deleteQuiz, createQuestion, deleteQuestion , updateQuestion, searchQuiz} = require("../controllers/quizController");


router.route('/create-quiz')
    .post(quizCreate);

// Update Quiz Route
router.route('/updateQuiz/:quizId').put(updateQuiz);

router.route('/quizzes/:quizId')
    .delete(deleteQuiz);

router.route('/quizzes/:quizId/questions/:questionId')
    .delete(deleteQuestion);
router.route('/quizzes/:quizId/updateQuestion/:questionId')
    .put(updateQuestion);

router.route('/quizzes/:quizId/questions').post(createQuestion);

router.route('/quizzes/search').post(searchQuiz);

module.exports = router;


