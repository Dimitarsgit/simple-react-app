import axios from 'axios';
import {
  QUESTIONS_EASY_URL,
  QUESTIONS_HARD_URL,
  QUESTIONS_MEDIUM_URL,
  price,
} from '../constants';
import { mapToRecords } from '../records/QuestionRecord';

export async function getQuestions() {
  try {
    const requests = await Promise.all([
      axios.get(QUESTIONS_EASY_URL),
      axios.get(QUESTIONS_MEDIUM_URL),
      axios.get(QUESTIONS_HARD_URL),
    ]);
    const response = requests.map((request) => {
      const results = request.data.results.map((question, index) => {
        question.price = price[question.difficulty][index];
        return question;
      });
      return mapToRecords(results);
    });
    return [].concat(...response).reverse();
  } catch (e) {
    console.error(e);
    return [];
  }
}
