import { pool } from "../DB/database";

interface Group {
  name: string;
  admin_id: number;
}

export const addGroup = async (
  Group: Group
): Promise<{ name: string; join_code: string }> => {
  const join_code = generateRandomKey();
  const { name, admin_id } = Group;
  try {
    const query = `
          INSERT INTO groups (name, admin_id, join_code)
          VALUES ($1, $2, $3)
          RETURNING name, join_code;
        `;
    const values = [name, admin_id, join_code];

    const result = await pool.query(query, values);

    return await result.rows[0];
  } catch (err) {
    console.error("Error adding Group:", err);
    throw new Error("Bad Request");
  }
};

function generateRandomKey() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const keyLength = 9;
  let randomKey = "";

  for (let i = 0; i < keyLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomKey += characters[randomIndex];
  }

  return randomKey;
}
