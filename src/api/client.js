class ApiClient { 
  constructor() {
    this.baseURL = "/graphql/"
  }

  async request(query, variables = {}) {
    console.log('baseURL: ', this.baseURL)
    let res = {}
    try {
      const response = await fetch(this.baseURL, { 
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          query, variables
        })      
      })
      res = await response.json()
    } catch(error) {
      console.log('API client request error: ' , error)
    }

    return res.data
  }
  
  async getFriends() {
    const query = `query {
      friends {
        userName,
        userStatus,
      }
    }`
    return this.request(query)
  }
}

const client = new ApiClient()
export default client