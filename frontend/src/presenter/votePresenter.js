import vote from "../model/vote";
import question from "../model/question";

class VotePresenter {

    onQuestionVoteUp = (questionIndex) => {
        question.addQuestionVote(questionIndex, true);
    }

    onQuestionVoteDown = (questionIndex) => {
        question.addQuestionVote(questionIndex, false);
    }

    onAnswerVoteUp = (answerId) => {
        vote.addAnswerVote(answerId, true);
    }

    onAnswerVoteDown = (answerId) => {
        vote.addAnswerVote(answerId, false);
    }

}

const votePresenter = new VotePresenter();

export default votePresenter;