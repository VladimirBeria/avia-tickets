async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(response)

    const data = await response.json()
    return data
}

getPost(1).then(r => console.log(r))