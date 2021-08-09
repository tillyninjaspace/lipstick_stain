const BASE_API = 'https://lipstickstain.herokuapp.com'


export async function updatingPost(id, name, description, location, link, active, productimage) {
    try {
        const response = await fetch(`${BASE_API}/user/post/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, description, location, link, active, productimage})
        })
        console.log("Starting to reach API in api folder")
        console.log("RESPONSE", response)
        const post = await response.json();
        console.log("Update Post Response JSON: ", post)
        return post;
    } catch (error) {
        throw error
    }
};