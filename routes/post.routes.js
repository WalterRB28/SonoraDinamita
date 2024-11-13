import express from 'express';
import {
  createPost,
  getAllPosts,
  getUserPosts,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/post.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { postValidationRules } from '../validators/post.validator.js';
import validate from '../middlewares/validation.middleware.js';

const router = express.Router();

// Rutas de posts con validación de datos y autenticación
router.post('/', authMiddleware, postValidationRules, validate, createPost); // Crear un nuevo post
router.get('/', getAllPosts); // Obtener todos los posts
router.get('/user', authMiddleware, getUserPosts); // Obtener posts de un usuario autenticado
router.get('/:id', getPostById); // Obtener un post específico por ID
router.put('/:id', authMiddleware, postValidationRules, validate, updatePost); // Actualizar un post por ID
router.delete('/:id', authMiddleware, deletePost); // Eliminar un post por ID

export default router;
