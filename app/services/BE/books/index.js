import { httpRequest } from '../../request';

const booksApi = {

    getList(payload) {
        return httpRequest('https://api.myjson.com/bins/r4vk2', payload, false);
    }

};

export default booksApi;
