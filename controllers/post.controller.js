import * as postService from '../services/post.service.js';

export const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.id;

  try {
    const newPost = await postService.createNewPost(title, content, author);
    res
      .status(201)
      .json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating post', error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching posts', error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  const userId = req.user.id;

  try {
    const posts = await postService.getPostsByUser(userId);
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching user posts', error: error.message });
  }
};
export const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postService.findPostById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching post', error: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await postService.updatePost(id, { title, content });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating post', error: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await postService.deletePost(id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting post', error: error.message });
  }
};
