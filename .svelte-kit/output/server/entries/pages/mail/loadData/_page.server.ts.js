import { g as getAllData } from "../../../../chunks/consultas.js";
async function load() {
  try {
    const datos = await getAllData();
    console.log("Datos cargados:", datos);
    if (!datos) {
      throw new Error("No se recibieron datos");
    }
    return { datos };
  } catch (error) {
    console.error("Error en load:", error);
    return {
      datos: []
      // Retorna array vacío para evitar undefined
    };
  }
}
export {
  load
};
