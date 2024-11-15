import {pool} from '../DB/database'
import { Password } from '../authorization/password';
interface User {
    email: {
        type: string;
        required: true;
    }
    
    password: string;
}

export const addUser = async(user: User): Promise<void> => {
    const {email, password} = user;
    const hashedPassword = await Password.hashPassword(password);
    try{
        const query = `
        INSERT INTO users (email, password)
        VALUES ($1, $2);
      `;
    const values = [email, hashedPassword];

    const result = await pool.query(query, values);

  } catch (err) {
    console.error('Error adding user:', err);
    throw err;
  }
};

  