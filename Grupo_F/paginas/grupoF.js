const datosEquipos = {

    paisesbajos: {
        nombre: "PAÍSES BAJOS",

        historia: "La selección neerlandesa es una de las más exitosas de Europa. Ha sido subcampeona mundial en tres ocasiones (1974, 1978 y 2010) y es reconocida por su histórico estilo de juego conocido como 'Fútbol Total'.",

        curiosidades: [
            "Conocida como la 'Naranja Mecánica'.",
            "Nunca ha ganado un Mundial pese a disputar tres finales.",
            "Johan Cruyff es considerado su mayor leyenda.",
            "Popularizó el estilo de juego denominado 'Fútbol Total'."
        ],

        estadisticas: {
            participaciones: "12",
            mejorResultado: "Subcampeón (1974, 1978 y 2010)",
            titulos: "0",
            goleador: "Robin van Persie (50 goles)",
            masPartidos: "Wesley Sneijder (134 partidos)"
        },

        partidos: [
            {
                rival: "vs Japón",
                fecha: "14 de Junio de 2026",
                estadio: "MetLife Stadium"
            },
            {
                rival: "vs Suecia",
                fecha: "20 de Junio de 2026",
                estadio: "AT&T Stadium"
            },
            {
                rival: "vs Túnez",
                fecha: "26 de Junio de 2026",
                estadio: "SoFi Stadium"
            }
        ]
    },

    japon: {
        nombre: "JAPÓN",

        historia: "Japón es una de las selecciones más fuertes de Asia. Ha participado regularmente en los mundiales desde 1998 y destaca por su disciplina táctica, velocidad y excelente formación de jugadores.",

        curiosidades: [
            "Es conocida como los 'Samurai Blue'.",
            "Ha participado en todos los Mundiales desde 1998.",
            "Fue coanfitrión del Mundial 2002.",
            "Es una de las selecciones más exitosas de Asia."
        ],

        estadisticas: {
            participaciones: "8",
            mejorResultado: "Octavos de final",
            titulos: "0",
            goleador: "Kunishige Kamamoto (75 goles)",
            masPartidos: "Yasuhito Endo (152 partidos)"
        },

        partidos: [
            {
                rival: "vs Países Bajos",
                fecha: "14 de Junio de 2026",
                estadio: "MetLife Stadium"
            },
            {
                rival: "vs Túnez",
                fecha: "20 de Junio de 2026",
                estadio: "NRG Stadium"
            },
            {
                rival: "vs Suecia",
                fecha: "26 de Junio de 2026",
                estadio: "Lumen Field"
            }
        ]
    },

    suecia: {
        nombre: "SUECIA",

        historia: "Suecia es una selección histórica del fútbol europeo. Fue subcampeona mundial en 1958 y obtuvo el tercer lugar en 1994. Se caracteriza por su fortaleza física y orden defensivo.",

        curiosidades: [
            "Fue anfitriona del Mundial 1958.",
            "Zlatan Ibrahimović es su futbolista más famoso.",
            "Ha alcanzado una final mundialista.",
            "Es una selección tradicional de Europa."
        ],

        estadisticas: {
            participaciones: "12",
            mejorResultado: "Subcampeón (1958)",
            titulos: "0",
            goleador: "Zlatan Ibrahimović (62 goles)",
            masPartidos: "Anders Svensson (148 partidos)"
        },

        partidos: [
            {
                rival: "vs Túnez",
                fecha: "15 de Junio de 2026",
                estadio: "Mercedes-Benz Stadium"
            },
            {
                rival: "vs Países Bajos",
                fecha: "20 de Junio de 2026",
                estadio: "AT&T Stadium"
            },
            {
                rival: "vs Japón",
                fecha: "26 de Junio de 2026",
                estadio: "Lumen Field"
            }
        ]
    },

    tunez: {
        nombre: "TÚNEZ",

        historia: "Túnez es una de las selecciones africanas con mayor presencia en Copas del Mundo. Destaca por su organización táctica y por representar constantemente al fútbol del norte de África.",

        curiosidades: [
            "Es conocida como las 'Águilas de Cartago'.",
            "Fue la primera selección africana en ganar un partido mundialista.",
            "Representa regularmente a África en la Copa del Mundo.",
            "Tiene una gran rivalidad con Argelia y Marruecos."
        ],

        estadisticas: {
            participaciones: "7",
            mejorResultado: "Fase de grupos",
            titulos: "0",
            goleador: "Issam Jemâa (36 goles)",
            masPartidos: "Radhi Jaïdi (105 partidos)"
        },

        partidos: [
            {
                rival: "vs Suecia",
                fecha: "15 de Junio de 2026",
                estadio: "Mercedes-Benz Stadium"
            },
            {
                rival: "vs Japón",
                fecha: "20 de Junio de 2026",
                estadio: "NRG Stadium"
            },
            {
                rival: "vs Países Bajos",
                fecha: "26 de Junio de 2026",
                estadio: "SoFi Stadium"
            }
        ]
    }

};

function abrirModal(equipoId) {

    const modal = document.getElementById("modal-equipo");
    const titulo = document.getElementById("modal-titulo");
    const historia = document.getElementById("modal-historia");
    const listaPartidos = document.getElementById("modal-partidos");

    const listaCuriosidades = document.getElementById("modal-curiosidades");
    const estadisticas = document.getElementById("modal-estadisticas");

    const datos = datosEquipos[equipoId];

    titulo.textContent = datos.nombre;
    historia.textContent = datos.historia;

    // Curiosidades
    listaCuriosidades.innerHTML = "";

    datos.curiosidades.forEach(curiosidad => {
        const li = document.createElement("li");
        li.textContent = curiosidad;
        listaCuriosidades.appendChild(li);
    });

    // Estadísticas
    estadisticas.innerHTML = `
        <p><strong>Participaciones en Mundiales:</strong> ${datos.estadisticas.participaciones}</p>
        <p><strong>Mejor resultado:</strong> ${datos.estadisticas.mejorResultado}</p>
        <p><strong>Títulos Mundiales:</strong> ${datos.estadisticas.titulos}</p>
        <p><strong>Goleador histórico:</strong> ${datos.estadisticas.goleador}</p>
        <p><strong>Jugador con más partidos:</strong> ${datos.estadisticas.masPartidos}</p>
    `;

    // Partidos
    listaPartidos.innerHTML = "";

    datos.partidos.forEach(partido => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${partido.rival}</strong>
            <br>
            📅 Fecha: ${partido.fecha}
            <br>
            🏟️ Estadio: ${partido.estadio}
        `;

        listaPartidos.appendChild(li);

    });

    modal.classList.add("activo");
}

function cerrarModal() {
    document.getElementById("modal-equipo").classList.remove("activo");
}

window.onclick = function(event) {

    const modal = document.getElementById("modal-equipo");

    if (event.target === modal) {
        cerrarModal();
    }

};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Grupo F Mundial 2026 cargado correctamente");
});