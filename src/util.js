export function readNextPosts(page, posts, nrOfPosts) {
    console.log(page)
    page++
    console.log(page)
    console.log(nrOfPosts)
    let first = page * nrOfPosts
    console.log(first)
    if(posts.length > first ) {
        return {posts: posts.slice(0, first), page}
    } else {
        return {posts:posts.slice(posts.length-1),page, last:true}
    }
}