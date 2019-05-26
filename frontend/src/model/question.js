
import { EventEmitter } from "events";
import restClient from "../rest/RestClient";

class Question extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [],
            //object used to fill the values from the input
            newQuestion: {
                userId: "",
                title: "",
                text: "",
                tags: []               
            },
            search: "",
            filteredQuestions: []
        };
    }

    loadAllQuestions(){
        restClient.handleListAllQuestions().then(responseJson=>{
            debugger;
            this.state.questions = responseJson;
            this.emit("change", this.state);
        })
    }

    addQuestion(title, text, tags) {
        const content = {"title": title, "text": text, "tags": tags};
        restClient.handleCreateQuestion(content).then(response=>{

            this.state = {
                ...this.state,
                questions: this.state.questions.concat([response])
            };
            this.emit("change", this.state);
        });

    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }

        };

        this.emit("change", this.state);
    }

    changeSearch(newSearch) {
        this.state = {
            ...this.state,
            search: newSearch

        };

        this.emit("change", this.state);
    }

    filterByTitle(filterTitle) {
        const content = {"title": filterTitle};
        restClient.handleFilterQuestionsByTitle(content).then(response=>{
            this.state = {
                ...this.state,
                filteredQuestions: response
    
            };
            window.location.assign("#/filter-by-title/" + filterTitle);
            this.emit("change", this.state);
        });

    }

    filterByTag(tagName) {
        const content = {"tagName": tagName};
        restClient.handleFilterQuestionsByTag(content).then(response=>{
            this.state = {
                ...this.state,
                filteredQuestions: response
    
            }; 
            window.location.assign("#/filter-by-tag/" + tagName);
            this.emit("change", this.state);
        });
    }

    addQuestionVote(questionId, type) {
        const content = {"questionId": questionId, "type": type};
        restClient.handleCreateQuestion(content).then(response=>{

            this.state = {
                ...this.state,
                questionVotes: this.state.questionVotes.concat([response])
    
            };
            this.emit("change", this.state);
        });
        
    }
}

const question = new Question();

export default question;