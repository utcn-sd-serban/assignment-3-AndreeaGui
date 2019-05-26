import React from "react"
import DumbAnswersList from "./DumbAnswersList";
import question from "../model/question";

const QuestionDetails = ({ userId, title, text, tags, questionIndex, answerUpdateText,
    answers, onDelete, onUpdate, onAddAnswer,
    onAnswerVoteUp, onAnswerVoteDown, onQuestionVoteUp, onQuestionVoteDown }) => (
        <div className="container has-background-primary">
            <h2 className="title is-centerd">Question {questionIndex}</h2>
            <label class="subtitle">User: </label>
            <span>{userId}</span>
            <br />
            <label >Title: </label>
            <span>{title}</span>
            <br />
            <label>Text: </label>
            <span>{text}</span>
            <br />
            <div className="container">
                <ol class="ol" type="a" >{
                    tags.map((tag, index) => (
                        <li key={index}>
                            {tag}
                        </li>
                    ))}
                </ol>
            </div>
            <br />
            <div>
                <button class="button is-success is-inverted is-outlined"
                    onClick={() => onQuestionVoteUp(questionIndex)}>
                    Vote UP
                </button>
                <button class="button is-danger is-inverted is-outlined"
                    onClick={() => onQuestionVoteDown(questionIndex)}>
                    Vote DOWN
                </button>
            </div>
            <br />
            <button class="button is-outlined">List answers by score</button>
            <br />
            <br />
            <button class="button is-outlined"
                onClick={onAddAnswer}>Add answer</button>
            <br />
            <DumbAnswersList
                answers={answers}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onAnswerVoteUp={onAnswerVoteUp}
                onAnswerVoteDown={onAnswerVoteDown}

            />
            <br />
            <label>Update Answer Text: </label>
            <input class="input" type="text" placeholder="Update text for answer"
                value={answerUpdateText} onChange={e => onUpdate("answerUpdateText", e.target.value)} />
            <br />
        </div>

    );

export default QuestionDetails;