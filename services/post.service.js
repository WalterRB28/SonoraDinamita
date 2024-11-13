import * as postRepository from '../repositories/post.repository.js';

export const createNewPost = async (title, content, author) => {
  const newPost = await postRepository.createPost({ title, content, author });
  return newPost;
};

export const getAllPosts = async () => {
  return await postRepository.findAllPosts();
};

export const getPostsByUser = async (userId) => {
  return await postRepository.findPostsByUserId(userId);
};
export const findPostById = async (id) => {
  return await postRepository.findById(id);
};

export const updatePost = async (id, postData) => {
  return await postRepository.updateById(id, postData);
};

export const deletePost = async (id) => {
  return await postRepository.deleteById(id);
};
