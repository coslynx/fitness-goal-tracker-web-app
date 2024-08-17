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
  const goalId = req.query.id as string;

  if (req.method === 'GET') {
    try {
      const goal = await prisma.goal.findUnique({
        where: {
          id: parseInt(goalId),
          userId,
        },
        include: {
          activities: true,
        },
      });

      if (!goal) {
        return res.status(404).json({ message: 'Goal not found' });
      }

      res.status(200).json(goal);
    } catch (error) {
      console.error('Error fetching goal:', error);
      res.status(500).json({ message: 'Failed to fetch goal' });
    }
  } else if (req.method === 'PUT') {
    const { name, target, deadline } = req.body;

    if (!name || !target || !deadline) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const updatedGoal = await prisma.goal.update({
        where: {
          id: parseInt(goalId),
          userId,
        },
        data: {
          name,
          target,
          deadline: new Date(deadline),
        },
        include: {
          activities: true,
        },
      });

      res.status(200).json(updatedGoal);
    } catch (error) {
      console.error('Error updating goal:', error);
      res.status(500).json({ message: 'Failed to update goal' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedGoal = await prisma.goal.delete({
        where: {
          id: parseInt(goalId),
          userId,
        },
      });

      res.status(200).json(deletedGoal);
    } catch (error) {
      console.error('Error deleting goal:', error);
      res.status(500).json({ message: 'Failed to delete goal' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}