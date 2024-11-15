import { Client, Pool } from 'pg';
import dotenv from "dotenv";
import { DatabaseConnectionError } from '../errors/database-connection-error';
dotenv.config();

const {
    DBHOST,
    DBPORT,
    DBUSER,
    DBPASSWORD,
    DBDATABASE,
} = process.env;

if (!DBHOST || !DBPORT || !DBUSER || !DBPASSWORD || !DBDATABASE) {
    throw new DatabaseConnectionError();
}

export const pool = new Pool({
    host: process.env.DBHOST,
    port: Number(process.env.DBPORT),      
    user: process.env.DBUSER, 
    password: process.env.DBPASSWORD, 
    database: process.env.DBDATABASE, 
});


export const query = async (text: string, params?: any[]) => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result;
    } finally {
        client.release();
    }
};

export const testDatabaseConnection = async () => {
    try {
        const res = await query('SELECT NOW()');
        console.log('Database connected:', res.rows[0]);
    } catch (err) {
        console.error('Database connection failed:', err);
        throw new DatabaseConnectionError();
    }
};