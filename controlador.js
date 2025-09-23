function ingresarContraseñas(prompt) {
  for (;;) {
    const contraseña = prompt("Ingrese contraseña: ");

    if (contraseña.length < 8) {
      console.log("Debes ingresar una contraseña de al menos 8 caracteres.");
      continue;
    }

    if (contraseña === contraseña.toLowerCase()) {
      console.log(
        "Debes ingresar una contraseña que contenga al menos una letra mayúscula."
      );
      continue;
    }

    if (!/\d/.test(contraseña)) {
      console.log(
        "Debes ingresar una contraseña que contenga al menos un número."
      );
      continue;
    }

    console.log("Contraseña guardada.");
    return contraseña;
  }
}

export function iniciar(prompt) {
  const contraseña1 = ingresarContraseñas(prompt);
  const contraseña2 = ingresarContraseñas(prompt);

  if (contraseña1 === contraseña2) {
    console.log("Las contraseñas coinciden.");
  } else {
    console.log("Las contraseñas no coinciden.");
  }
}
