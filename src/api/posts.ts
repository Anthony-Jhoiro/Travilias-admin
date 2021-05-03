// import { store } from "../stores";
import { store } from "../stores";
import { ControlType, Posts } from "../types";
import { HTTPMethods, makeRequest } from "./request";

/**
 * Fetch the API to get posts and populate the store
 * @param limit number of posts to retrieve
 * @param page number of limit to skip
 * @param start date of the first search (for pagination)
 */
export async function getPosts(limit: number, page: number, start: Date) {
  let url = "/post?";
  if (limit) url += "limit=" + limit + "&";
  if (page) url += "page=" + page + "&";
  if (start) url += "start=" + start.toISOString();

  const _posts = await makeRequest<Posts[]>(HTTPMethods.GET, url);

  if (_posts) {
  
    const posts = _posts.map(p => ({
      ...p,
      createdAt: new Date(p.createdAt),
      controlledAt: new Date(p.controlledAt),
    }))
    store.commit('addPosts', posts);
  }
}

/**
 * Control a post and update the store
 * @param postId id of the post to control
 * @param control type of control to apply to the post
 * @returns 
 */
export async function controlPost(postId: string, control: ControlType) {
  if (!postId || !control) return;
  let url = `/post/${postId}`;
  
  const {post} = await makeRequest<{post: Posts}>(HTTPMethods.PUT, url, {controlType: control});

  if (post) {
    store.commit('updatePost', {
      ...post,
      createdAt: new Date(post.createdAt),
      controlledAt: new Date(post.controlledAt),
    });
  }

}