class Photos{
    async getphotos(){
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
        const data = await response.json()
        return data
    }
}

export default Photos;