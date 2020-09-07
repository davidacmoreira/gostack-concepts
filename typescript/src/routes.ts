import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request:Request, response: Response) {
  const user = createUser({
    email: 'test@mail.com',
    password: '123',
    techs: [
      'Node.js',
      'React',
      { title: 'JavaScript', experience: 100 }
    ]
  });

  return response.json({ message: 'Hello World' });
}