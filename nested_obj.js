//way to access info of objects in nested structure
//function takes in the nested object and a path array where the last item in the array is what you want. 
//it uses reduce to extract the desired information and check to see if the key exists in the object so that it doens't check undefined

const getNestedObjectLoop = (nestedObj, pathArr, notFound = null) => {
    return pathArr.reduce((obj, key) => {
        // console.log('obj', obj);
        // console.log('key', obj[key]);
        return (obj && obj[key]) ? obj[key] : notFound
    }
        , nestedObj);
}

//recursive 
const getNestedObject = (nestedObj, pathArr, notFound = null) => {
    if(pathArr.length === 0) return nestedObj;
    const current = pathArr[0];
    if(nestedObj[current]){
        nestedObj = nestedObj[current];
        return getNestedObject(nestedObj, pathArr.slice(1), notFound);
    }else{
        return notFound;
    }
}

//Ex: input nestedObj
const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

//Ex: input pathArr to get the city info
const path = ['personalInfo', 'address', 'city'];

// pass in your object structure as array elements
// const name = getNestedObject(user, ['personalInfo', 'name']);
// to access nested array, just pass in array index as an element the path array.
// const city = getNestedObject(user, ['personalInfo', 'address', 'city']);
// this will return the city from the first address item.

// console.log(name);
// console.log(city);

//----------- A More Practical Example -------------
//Data is normalized in the redux store and you want to get the list of posts from user1
const normalizedData = {
    posts: {
        byId: {
            "post1": {
                id: "post1",
                author: "user1",
                body: "......",
                comments: ["comment1", "comment2"]
            },
            "post2": {
                id: "post2",
                author: "user2",
                body: "......",
                comments: ["comment3", "comment4", "comment5"]
            },
            "post3": {
                id: "post3",
                author: "user1",
                body: "......",
                comments: ["comment6"]
            }
        },
        allIds: ["post1", "post2", "post3"]
    },
    comments: {
        byId: {
            "comment1": {
                id: "comment1",
                author: "user2",
                comment: ".....",
            },
            "comment2": {
                id: "comment2",
                author: "user3",
                comment: ".....",
            },
            "comment3": {
                id: "comment3",
                author: "user3",
                comment: ".....",
            },
            "comment4": {
                id: "comment4",
                author: "user1",
                comment: ".....",
            },
            "comment5": {
                id: "comment5",
                author: "user3",
                comment: ".....",
            },
            "comment6": {
                id: "comment6",
                author: "user3",
                comment: ".....",
            },
        },
        allIds: ["comment1", "comment2", "comment3", "commment4", "comment5", "comment6"]
    },
    users: {
        byId: {
            "user1": {
                username: "user1",
                name: "User 1",
            },
            "user2": {
                username: "user2",
                name: "User 2",
            },
            "user3": {
                username: "user3",
                name: "User 3",
            }
        },
        allIds: ["user1", "user2", "user3"]
    }
};

//get all posts
const posts = Object.values(getNestedObject(normalizedData, ['posts',  'byId']));
// console.log(posts);
//loop through posts for user1
const user1Posts = posts.reduce((posts, p) => {
    if(p.author === 'user1'){
        posts[p.id] = p
    }
    return posts
}, {});

console.log(user1Posts);

//get nonexistent item
// console.log(getNestedObject(user, ['personalInfo', 'address', 'zip']))
