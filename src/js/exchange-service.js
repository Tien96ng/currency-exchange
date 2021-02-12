export default class ExchangeService {
    static async usdExchangeRate() {
        try {
            if(!response.ok) {
                throw Error(response);
            }
            return response.json();
        } catch(error) {
            return error
        }
    }
}