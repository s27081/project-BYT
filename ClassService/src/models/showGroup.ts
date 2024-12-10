import { pool } from "../DB/database";

export const getUserGroups = async (user_id: number): Promise<any[]> => {
  const query = `
      SELECT 
          g.id AS group_id,
          g.name AS group_name,
          g.admin_id,
          g.join_code,
          gm.role
      FROM 
          Groups g
      JOIN 
          GroupMembers gm 
          ON g.id = gm.group_id
      WHERE 
          gm.user_id = $1;
      `;
  const values = [user_id];

  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("Error checking user in group:", error);
    throw new Error("Database query failed");
  }
};

export const getUsersInGroup = async (join_code: string): Promise<any[]> => {
  const query = `
      SELECT 
        gm.user_id,
        gm.role,
        gm.joined_at,
        g.name AS group_name,
        g.admin_id
      FROM 
        GroupMembers gm
      JOIN 
      Groups g 
        ON gm.group_id = g.id
      WHERE 
          g.join_code = $1;
      `;
  const values = [join_code];

  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error) {
    throw new Error("Database query failed");
  }
};
