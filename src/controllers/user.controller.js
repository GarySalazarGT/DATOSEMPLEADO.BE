import conn from "../database";
export const getUsers = async (req, res) => {
  try {
    const users = await conn.query("SELECT * FROM COLABORADOR");
    //console.log(users);

    return res.status(200).json({
      code: 200,
      status: "success",
      data: users,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Error al obtener los datos",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await conn.query(
      "SELECT * FROM COLABORADOR WHERE IDCOLABORADOR = ?",
      [id]
    );
    return res.status(200).json({
      code: 200,
      status: "success",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Error al obtener el ususario",
    });
  }
};

export const saveUser = async (req, res) => {
  const { name, lastname, address, age, profession, civilStatus } = req.body;
  //console.log(req);

  try {
    const newUser = {
      NOMBRE: name,
      APELLIDO: lastname,
      DIRECCION: address,
      EDAD: age,
      PROFESION: profession,
      ESTADOCIVIL: civilStatus,
    };

    await conn.query("INSERT INTO COLABORADOR set ?", [newUser]);
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Se creo el ususario correctamente",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Error al crear el ususario",
      error: `${err}`,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, address, age, profession, civilStatus } = req.body;
    const editUser = {
      NOMBRE: name,
      APELLIDO: lastname,
      DIRECCION: address,
      EDAD: age,
      PROFESION: profession,
      ESTADOCIVIL: civilStatus,
    };
    const user = await conn.query(
      "UPDATE COLABORADOR SET ? WHERE IDCOLABORADOR = ?",
      [editUser, id]
    );
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "actualizo el ususario correctamente",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "Error al actualizar el ususario",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    //console.log(req);
    
    await conn.query("DELETE FROM COLABORADOR WHERE IDCOLABORADOR = ?", [id]);
    return res.status(200).json({
      code: 200,
      status: "success",
      message: "Ususario eliminado correctamente",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      code: 500,
      status: "error",
      message: "No se elimino el ususario",
    });
  }
};
