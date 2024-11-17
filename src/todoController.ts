import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Получение всех туду
router.get('/', async (req: Request, res: Response) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
});

// Добавление нового туду
router.post('/', async (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: 'Text is required 111123' });
    return;
  }
  const todo = await prisma.todo.create({ data: { text } });
  res.json(todo);
});

export default router;
