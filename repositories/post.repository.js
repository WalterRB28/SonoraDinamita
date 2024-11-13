import Post from '../models/post.model.js';

export const createPost = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};

export const findAllPosts = async () => {
  return await Post.find().populate('author', 'username email');
};

export const findPostsByUserId = async (userId) => {
  return await Post.find({ author: userId });
};

export const findById = async (id) => {
  return await Post.findById(id).populate('author', 'username email');
};

export const updateById = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteById = async (id) => {
  return await Post.findByIdAndDelete(id);
};
