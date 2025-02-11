
// El siguiente proyecto tiene que servir para que los alumnos del curso de introduccion a la programación web 
// practiquen los conceptos de:
// - Peticiones HTTP con axios o con fetch
// - Hacer y practicar cada una de las llamadas GET POST PATCH Y DELETE
// - Manejo de promesas
// Y nosotros le daremos super masticado todo el resto, como por ejemplo la interfaz de usuario, el diseño, y los templates de html para inyectar los resultados en la pantalla
// así como las declaraciones de las funciones con comentarios para que vayan ellos haciendo paso a paso el ejercicio.

// En este caso, hemos creado una API que tiene estudiantes guardados con los atributos de nombre, email, curso y edad.
// El objetivo 1 del ejercicio es que los alumnos hagan una llamada a la API para obtener los estudiantes y mostrarlos en la pantalla. 
// El objetivo 2 del ejercicio es que los alumnos hagan una llamada a la API para enviar los valores del formulario de alta de estudiantes a la API
// y que la API nos devuelva el estudiante creado para poder mostrarlo en la pantalla.
// El objetivo 3 del ejercicio es que los alumnos hagan una llamada a la API para actualizar los valores de un estudiante y mostrar el resultado de la actualización en la pantalla.
// El objetivo 4 del ejercicio es que los alumnos hagan una llamada a la API para borrar un estudiante y mostrar el resultado de la eliminación en la pantalla.

const API_URL = 'https://retoolapi.dev/GTFjhg/students';

function parseStudentsToHtml(students) {
    return students.map(student => `
                <div class="estudiante">
                    <h3>Nombre: ${student.nombre}</h3>
                    <p>Email: ${student.email}</p>
                    <p>Curso: ${student.curso}</p>
                    <p>Edad: ${student.edad}</p>
                    <button type="button" onclick="deleteStudent(${student.id})">Borrar</button>
                </div>
            `).join('');
}

function loadAllStudents() {
    // 1. Hacer la llamada a la API para obtener todos los estudiantes
    // 2. Parsear los estudiantes a HTML
    // 3. Insertar el HTML en el div con id resultados
}

function createStudent() {
    // 1. Hacer la llamada a la API para crear un nuevo estudiante
    // 2. Parsear el estudiante a HTML
    // 3. Insertar el HTML en el div con id resultados
}

// Deja esta función para el final ya que es la que tiene más lógica y dificultad
function updateStudent() {
    // 1. Hacer la llamada a la API para actualizar un estudiante
    // 2. Parsear el estudiante a HTML
    // 3. Insertar el HTML en el div con id resultados
}

function deleteStudent(id) {
    // 1. Hacer la llamada a la API para borrar un estudiante
    // 2. Parsear el estudiante a HTML
    // 3. Insertar el HTML en el div con id resultados
}
