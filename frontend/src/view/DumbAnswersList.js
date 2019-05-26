
import React from "react";


const DumbAnswersList = ({ answers, onDelete, onUpdate, onAnswerVoteUp, onAnswerVoteDown }) => (

    <div >
        <h2>Answers</h2>
        <table border="1" className="table is-bordered is-hoverable is-stripped is-narrow is-fullwidth 
        has-background-white-ter has-text-dark">
            <thead>
                <tr>
                    <th>Answer ID</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Text</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    answers.map((answer, index) => (
                        <tr key={index}>
                            <td>{answer.answerId}</td>
                            <td>{answer.userId}</td>
                            <td>{answer.questionId}</td>
                            <td>{answer.text}</td>
                            <td>
                                <div class = "buttons is-right">
                                <span class="button is-primary"
                                    onClick={() => onDelete(answer.answerId)}>
                                    Delete
                                </span>
                                <span class="button is-primary"
                                    onClick={() => onUpdate(answer.answerId)}>
                                    Update
                                </span>
                                <span class="button is-primary is-success is-outlined"
                                onClick={() => onAnswerVoteUp(answer.answerId)}>
                                    Vote Up
                                </span>
                                <span class="button is-primary is-danger is-outlined"
                                onClick={() => onAnswerVoteDown(answer.answerId)}>
                                    Vote Down
                                </span>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>


    </div>
);

export default DumbAnswersList;