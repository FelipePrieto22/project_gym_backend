CREATE DATABASE data_base
    WITH
    OWNER = root
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

\c data_base

CREATE TABLE IF NOT EXISTS Usuario (
    rut_usuario VARCHAR(255) NOT NULL,
    nombre_usuario VARCHAR(255),
    correo VARCHAR(255),
    contrasena VARCHAR(255),
    PRIMARY KEY (rut_usuario)

);

CREATE TABLE IF NOT EXISTS tiene (
    id_tiene INT NOT NULL,
    Asistencia BOOLEAN,
    rut_usuario VARCHAR(255) NOT NULL,
    id_horario INT NOT NULL,
    FOREIGN KEY (rut_usuario) REFERENCES Usuario(rut_usuario) ON DELETE CASCADE,
    FOREIGN KEY (id_horario) REFERENCES Horario(id_horario) ON DELETE CASCADE
    PRIMARY KEY (id_tiene)
);


CREATE TABLE IF NOT EXISTS Horario (
    id_horario INT NOT NULL,
    mes INT,
    dia INT,
    cupo INT,
    hora VARCHAR(255), 
    nombre_lugar VARCHAR(255) NOT NULL,
    FOREIGN KEY (nombre_lugar) REFERENCES Lugar(nombre_lugar) ON DELETE CASCADE
    PRIMARY KEY (id_horario)
);

       
CREATE TABLE IF NOT EXISTS usa ( 
    cupo  INT,
    nombre_lugar VARCHAR(255) NOT NULL,
    rut_usuario VARCHAR(255) NOT NULL,
    FOREIGN KEY (nombre_lugar) REFERENCES Lugar(nombre_lugar) ON DELETE CASCADE
    FOREIGN KEY (rut_usuario) REFERENCES Usuario(rut_usuario) ON DELETE CASCADE
);

       
CREATE TABLE IF NOT EXISTS Lugar ( 
    nombre_lugar  VARCHAR(255) PRIMARY KEY NOT NULL,
    ubicacion VARCHAR(255),
);


CREATE TABLE IF NOT EXISTS Profe (
    rut_profe VARCHAR(255) NOT NULL,
    nombre_usuario VARCHAR(255),
    correo VARCHAR(255),
    contrasena VARCHAR(255),
    PRIMARY KEY (rut_profe)
    
);

CREATE TABLE IF NOT EXISTS administra (
    rut_profe VARCHAR(255) NOT NULL,
    id_horario INT NOT NULL,
    FOREIGN KEY (rut_profe) REFERENCES Profe(rut_profe) ON DELETE CASCADE
    FOREIGN KEY (id_horario) REFERENCES Horario(id_horario) ON DELETE CASCADE
);