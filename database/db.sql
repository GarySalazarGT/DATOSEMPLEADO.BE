CREATE DATABASE IF NOT EXISTS TEST;

use TEST;

CREATE TABLE IF NOT EXISTS COLABORADOR(
    IDCOLABORADOR INT(11) not null AUTO_INCREMENT,
    NOMBRE varchar(45) not null,
    APELLIDO varchar(45) not null,
    DIRECCION varchar(45),
    EDAD varchar(45) not null,
    PROFESION varchar(45) not null,
    ESTADOCIVIL varchar(45) not null,
    PRIMARY KEY (IDCOLABORADOR)
)