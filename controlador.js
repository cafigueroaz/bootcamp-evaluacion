let contraseña1 = prompt("Ingrese contraseña 1");
let contraseña2 = prompt("Ingrese contraseña 2");

const contraseñasCoinciden = (contraseña1, contraseña2) => {
  if (contraseña1 === contraseña2) {
    console.log("Las contraseñas coinciden");
    return true;
  } else {
    console.log("Las contraseñas no coinciden");
    return false;
  }
};

const contraseñasValidas = (contraseña1, contraseña2) => {
  if (
    contraseña1.length < 8 ||
    contraseña2.length < 8 ||
    contraseña1 !== contraseña2
  ) {
    console.log(
      "Las contraseñas deben tener al menos 8 caracteres, deben tener al menos una letra mayúscula, una letra minúscula y un número"
    );
    return false;
  }
  return true;
};
