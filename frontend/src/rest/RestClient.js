const BASE_URL = "http://localhost:8080";

class RestClient{
    constructor(){
        this.username = "";
        this.password = "";
        this.authorization="None";
    }

    authenticate(username, password){
        this.username = username;
        this.password = password;
        this.authorization = "Basic "+btoa(username + ":" + password);
    }

    logout(){
        this.username = "";
        this.password = "";
        this.authorization="None";
    }

    handleListAllQuestions(){
        return fetch(BASE_URL + "/questions", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleFilterQuestionsByTitle(content){
        return fetch(BASE_URL + "/questions/title/"+content.title, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleFilterQuestionsByTag(content){
        
        return fetch(BASE_URL + "/questions/tag/"+content.tagName, {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleCreateQuestion(content) {
        return fetch(BASE_URL + "/questions", {
            method: "POST",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": content.title,
                "text": content.text,
                "tags": content.tags
            })
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleListAnswersByQuestion(content){
        return fetch(BASE_URL + "/question/"+content.questionId+"/answers", {
            method: "GET",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleCreateAnswer(content){
        return fetch(BASE_URL + "/question/"+content.questionId+"/answers", {
            method: "POST",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "text": content.text
            })
        }).then(response => {
            if(response.status===200)
                return response.json();
            return response.text();
        });
    }

    handleUpdateAnswer(content){
        return fetch(BASE_URL + "/question/"+content.questionId+"/answers/"+content.answerId, {
            method:"PUT",
            headers: {
                "Authorization": this.authorization,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "text": content.text
            })
        }).then(response=>{
            if(response.status === 200)
                return response.json();
            return response.text(); 
        });
    }

    handleDeleteAnswer(content){
        debugger;
        return fetch(BASE_URL + "/question/"+content.questionId+"/answers/"+content.answerId, {
            method:"DELETE",
            headers: {
                "Authorization": this.authorization,
            }
        }).then(response=>{
            debugger;
            if(response.status === 200)
                return "OK";
            return "NO";
        });
    }

    handleCreateQuestionVote(content){
        return fetch(BASE_URL + "/questions/"+content.questionId+"/vote?isUpVote="+content.type, {
            method: "POST",
            headers: {
                "Authorization": this.authorization
            }
        }).then(response => {
            if(response.status===200)
                return; //mesaj de ok sau not ok
            return response.text();
        });
    }
}

const restClient = new RestClient();
restClient.authenticate("ana","000");
export default restClient;