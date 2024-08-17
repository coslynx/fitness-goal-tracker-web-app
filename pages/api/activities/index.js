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
      const activities = await prisma.activity.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        include: { goal: true },
      });
      res.status(200).json(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      res.status(500).json({ message: 'Failed to fetch activities' });
    }
  } else if (req.method === 'POST') {
    const { type, duration, calories, date, goalId } = req.body;

    if (!type || !duration || !calories || !date) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      const activity = await prisma.activity.create({
        data: {
          type,
          duration,
          calories,
          date: new Date(date),
          userId,
          goalId: goalId ? parseInt(goalId) : null,
        },
      });
      res.status(201).json(activity);
    } catch (error) {
      console.error('Error creating activity:', error);
      res.status(500).json({ message: 'Failed to create activity' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}