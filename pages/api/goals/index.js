import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = session.user.id;

  if (req.method === 'GET') {
    try {
      const goals = await prisma.goal.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
      res.status(200).json(goals);
    } catch (error) {
      console.error('Error fetching goals:', error);
      res.status(500).json({ message: 'Failed to fetch goals' });
    }
  } else if (req.method === 'POST') {
    const { name, target, deadline } = req.body;

    if (!name || !target || !deadline) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const goal = await prisma.goal.create({
        data: {
          name,
          target,
          deadline: new Date(deadline),
          userId,
        },
      });
      res.status(201).json(goal);
    } catch (error) {
      console.error('Error creating goal:', error);
      res.status(500).json({ message: 'Failed to create goal' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}