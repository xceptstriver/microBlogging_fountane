

const urlGetPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlPostPosts = 'https://jsonplaceholder.typicode.com/posts';


function getPostsFromApi() {
    console.log("GETPOSTSAPI");
    let posts;
    return response =  fetch(urlGetPosts,{
        method: 'GET',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
    })
    .then(response => response.json())
    .then((responseJson) => {
       posts = responseJson
       return posts;
       
    });
 }

 
 function insertNewPostFromApi(newPost) {
    console.log("POSTFROMAPI")
    return response = fetch(urlPostPosts, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: newPost.title,
        }),
    }).then(response => response.json())
      .then((responseJson) => {
       console.log('response Obj = ',responseJson);
       
    });
    
} 
export const Api = {
    getPostsFromApi,
   insertNewPostFromApi 
}; 