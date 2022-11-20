import axios from 'axios';

const AUTORIZACION_API_URL = "http://localhost:8082/book";

class AutorizacionService {
    createAutorizacion(autorizacion){
        return axios.post(BOOK_API_URL, autorizacion);
    }
}

export default new AutorizacionService()