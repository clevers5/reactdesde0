import { getHeroeByIdAsync } from "../../base-pruebas/07-promesas";

describe("Test de 07-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe de obtener un error si heroe no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
