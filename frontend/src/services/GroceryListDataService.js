const baseURL = "http://localhost:9000/api/";

class GroceryListDataService {
  //Returns all grocery lists
  async getAll() {
    let url = new URL(baseURL + "/lists");
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();
    return data;
  }
}

export default new GroceryListDataService();
