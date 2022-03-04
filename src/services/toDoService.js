import axios from 'axios'

export default class toDoService{

    getAllData(){
        return axios.get("https://jsonplaceholder.typicode.com/todos")
    }
    getDataById(id){
        return axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
    }
    addData(data){
        return axios.post("https://jsonplaceholder.typicode.com/posts/",data)
    }
    removeData(id){
        return axios.delete("https://jsonplaceholder.typicode.com/posts/"+id)
    }

    
}