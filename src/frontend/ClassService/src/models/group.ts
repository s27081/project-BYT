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

export function findGroupByJoinCode(
  join_code: string
): Promise<{ id: number; join_code: string } | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const query = "SELECT * FROM groups WHERE join_code = $1;";

      const result = await pool.query(query, [join_code]);

      if (result.rows.length > 0) {
        resolve(result.rows[0]);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(new Error("Error: " + err));
    }
  });
}

export const isUserInGroup = async (
  group_id: string,
  user_id: number
): Promise<boolean> => {
  const query = `
    SELECT EXISTS (
        SELECT 1
        FROM GroupMembers
        WHERE group_id = $1 AND user_id = $2
    ) AS is_member;
  `;
  const values = [group_id, user_id];

  try {
    const result = await pool.query(query, values);
    return result.rows[0].is_member;
  } catch (error) {
    console.error("Error checking user in group:", error);
    throw new Error("Database query failed");
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
