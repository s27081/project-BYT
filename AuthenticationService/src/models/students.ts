import { pool } from "../DB/database";
interface Student {
  name: string;
  surname: string;
  class: string;
  user_id: number;
}
export const addStudent = async (
  student: Student
): Promise<{ id: number; name: string; surname: string; class: string }> => {
  const { name, surname, class: studentClass, user_id } = student;

  try {
    const query = `
        INSERT INTO Students (name, surname, class, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, surname, class, user_id;
      `;
    const values = [name, surname, studentClass, user_id];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error adding Student:", err);
    throw new Error("Failed to add student");
  }
};
