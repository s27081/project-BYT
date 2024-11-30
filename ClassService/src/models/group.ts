import { pool } from "../DB/database";

interface Group {
  name: string;
  user_id: number;
}

interface JoinGroup {
  group_id: string;
  user_id: number;
  role: string;
}

export const addGroup = async (
  Group: Group
): Promise<{ id: number; name: string; join_code: string }> => {
  const join_code = generateRandomKey();
  const { name, user_id } = Group;
  try {
    const query = `
          INSERT INTO groups (name, admin_id, join_code)
          VALUES ($1, $2, $3)
          RETURNING id, name, join_code;
        `;
    const values = [name, user_id, join_code];

    const result = await pool.query(query, values);

    return await result.rows[0];
  } catch (err) {
    console.error("Error adding Group:", err);
    throw new Error("Bad Request");
  }
};

export const addUserToGroup = async (
  Group: JoinGroup
): Promise<{ group_id: number; user_id: number }> => {
  const { group_id, user_id, role } = Group;
  try {
    const query = `
          INSERT INTO GroupMembers (group_id, user_id, role)
          VALUES ($1, $2, $3)
          RETURNING group_id, user_id;
        `;
    const values = [group_id, user_id, role];

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
