import React, { Fragment } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { getQuestions } from './service/GameService';
import Game from './components/Game';
import EndGame from './components/EndGame';

const initialState = {
      isPlaying: true,
      questions: [],
      currentQuestion: null,
      currentQuestionStatus: false,
      currentPrice: 0,
      surePrice: 0,
      count: 14,
      modalIsOpen: false,
      jokerModalIsOpen: false,
      message: '',
      jokers: {
        call: true,
        audience: true,
        half: true,
      },
    };

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }


  componentDidMount = () => {
    this.fetchQuestions();
  };

  startNewGame = () => {
    this.setState(
      initialState,
      () => {
        this.fetchQuestions();
      },
    );
  };

  fetchQuestions = () => {
    getQuestions()
      .then((response) => {
        const currentQuestion = response[this.state.count];
        this.setState({ questions: response, currentQuestion });
      })
      .catch(e => console.error(e));
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  toggleJokerModal = () => {
    this.setState({ jokerModalIsOpen: !this.state.jokerModalIsOpen });
  };

  changeQuestion = () => {
    let { count } = this.state;
    const currentQuestion = this.state.questions.slice()[--count];
    this.setState({ currentQuestion, count, modalIsOpen: false });
  };

  handleProceed = () => {
    this.changeQuestion();
  };

  handleCancel = () => {
    this.setState({ isPlaying: false });
  };

  isSurePrice = () => !(this.state.count % 5);

  handleCorrectAnswer = () => {
    const currentPrice = this.state.currentQuestion.getPrice();
    if (this.state.count === 0) {
      this.setState({ isPlaying: false, currentPrice });
      return;
    }

    const message = `Correct answer! You can stop now and win $${currentPrice} or proceed and win more.`;
    let { surePrice } = this.state;
    if (this.isSurePrice()) {
      surePrice = currentPrice;
    }
    this.setState({
      message,
      modalIsOpen: true,
      currentPrice,
      surePrice,
      currentQuestionStatus: true,
    });
  };

  handleWrongAnswer = () => {
    this.setState({ isPlaying: false, currentQuestionStatus: false });
  };

  handleQuestionAnswer = (answer) => {
    answer === this.state.currentQuestion.getCorrectAnswer()
      ? this.handleCorrectAnswer()
      : this.handleWrongAnswer();
  };

  handleJokerCall = () => {
    this.setState({
      jokers: { ...this.state.jokers, call: false },
      jokerModalIsOpen: true,
      message: `Yor friend's answer was: ${this.state.currentQuestion.getRandomAnswer()}.`,
    });
  };

  handleJokerHalf = () => {
    const currentQuestion = Object.assign({}, this.state.currentQuestion);
    currentQuestion.reduceIncorrectAnswers();
    this.setState({
      currentQuestion,
      jokers: { ...this.state.jokers, half: false },
    });
  };

  handleJokerAudience = () => {
    this.setState({
      jokers: { ...this.state.jokers, audience: false },
      jokerModalIsOpen: true,
      message: `The audience top answer was: ${this.state.currentQuestion.getAudienceAnswer()}.`,
    });
  };

  render() {
    const {
      questions,
      jokers,
      currentQuestion,
      modalIsOpen,
      message,
      isPlaying,
      currentPrice,
      surePrice,
      currentQuestionStatus,
      jokerModalIsOpen,
    } = this.state;

    if (!questions.length) {
      return <Spinner animation="border" />;
    }

    if (!isPlaying) {
      return currentQuestionStatus ? (
        <EndGame
          startNewGame={this.startNewGame}
          message={`You won $${currentPrice}`}
        />
      ) : (
        <EndGame
          startNewGame={this.startNewGame}
          message={`You lose and go home with $${surePrice}`}
        />
      );
    }
    return (
      <Fragment>
        <h1>
Sure Price:
          {surePrice}
        </h1>
        <Game
          questions={questions}
          jokers={jokers}
          currentQuestion={currentQuestion}
          modalIsOpen={modalIsOpen}
          jokerModalIsOpen={jokerModalIsOpen}
          message={message}
          handleJokerCall={this.handleJokerCall}
          handleJokerHalf={this.handleJokerHalf}
          handleJokerAudience={this.handleJokerAudience}
          handleQuestionAnswer={this.handleQuestionAnswer}
          toggleModal={this.toggleModal}
          toggleJokerModal={this.toggleJokerModal}
          handleProceed={this.handleProceed}
          handleCancel={this.handleCancel}
        />
      </Fragment>
    );
  }
}

GameContainer.propTypes = {};

export default GameContainer;
