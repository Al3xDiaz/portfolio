import type { NextApiRequest, NextApiResponse } from 'next'
import { ICourse } from '@/models/course'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICourse[]>
) {
  const {user} = req.query
    res.status(200).json([{
        id: 1,
        name: 'Curso de React-js',
        image: 'https://picsum.photos/200/300'
    },
    {
        id: 2,
        name: 'Curso de Vue',
        image: 'https://picsum.photos/200/300'
    },
    {
        id: 3,
        name: 'Curso de Angular',
        image: 'https://picsum.photos/200/300'
    },
    {
        id: 4,
        name: 'Curso de Node',
        image: 'https://picsum.photos/200/300'
    }
  ])
}
