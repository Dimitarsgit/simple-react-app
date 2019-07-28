import shortId from 'shortid';
import decodeEntities from '../../../util/decodeEntities';
import shuffleArray from '../../../util/arrayShuffle';
import getRandomElement from '../../../util/randomArrayElement/getRandomElement';

export default function QuestionRecord(question) {
  const questionRecord = Object.assign({}, question);
  questionRecord.id = shortId.generate();
  const query = {
    getCategory: () => questionRecord.category,
    getQuestion: () => decodeEntities(questionRecord.question),
    getCorrectAnswer: () => questionRecord.correct_answer,
    getIncorrectAnswers: () => questionRecord.incorrect_answers,
    getAnswers: () => shuffleArray(
      questionRecord.incorrect_answers.concat(questionRecord.correct_answer),
    ),
    getId: () => questionRecord.id,
    getPrice: () => questionRecord.price,
    reduceIncorrectAnswers: () => {
      questionRecord.incorrect_answers = [
        getRandomElement(questionRecord.incorrect_answers),
      ];
    },
    getRandomAnswer: () => getRandomElement(
      questionRecord.incorrect_answers.concat(questionRecord.correct_answer),
    ),
    getAudienceAnswer: () => {
      if (Math.random() < 0.7) {
        return questionRecord.correct_answer;
      }
      return getRandomElement(questionRecord.incorrect_answers);
    },
  };
  return Object.assign({}, questionRecord, query);
}

export const mapToRecords = questions => questions.map(question => QuestionRecord(question));
