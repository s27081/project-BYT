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
