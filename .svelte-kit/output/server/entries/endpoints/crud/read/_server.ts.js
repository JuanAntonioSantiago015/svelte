import { p as pool } from "../../../../chunks/maria.js";
import "../../../../chunks/index.js";
async function GET({ request }) {
  try {
    const [rows] = await pool.query("SELECT * FROM tb_municipio LIMIT 5");
    if (Array.isArray(rows)) {
      const resultWithStringBigInt = rows.map((row) => {
        return Object.fromEntries(
          Object.entries(row).map(
            ([key, value]) => typeof value === "bigint" ? [key, value.toString()] : [key, value]
          )
        );
      });
      console.log(resultWithStringBigInt);
      return new Response(JSON.stringify(resultWithStringBigInt), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    } else {
      const resultWithStringBigInt = Object.fromEntries(
        Object.entries(rows).map(
          ([key, value]) => typeof value === "bigint" ? [key, value.toString()] : [key, value]
        )
      );
      return new Response(JSON.stringify([resultWithStringBigInt]), {
        headers: { "Content-Type": "application/json" },
        status: 200
      });
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
export {
  GET
};
