// ==========================================
// 1. BASE DE DATOS DEL GRUPO K (MUNDIAL 2026)
// ==========================================
const datosEquipos = {
    portugal: {
        nombre: "PORTUGAL",
        historia: "La selección lusitana llega al Mundial 2026 buscando su primera Copa del Mundo. Su mejor participación histórica fue el tercer lugar alcanzado en Inglaterra 1966. Con una generación brillante y Cristiano Ronaldo al mando, son los grandes favoritos del Grupo K.",
        partidos: [
            { rival: "vs RD Congo", fecha: "15 de Junio, 2026", estadio: "MetLife Stadium (NY/NJ, USA)" },
            { rival: "vs Uzbekistán", fecha: "20 de Junio, 2026", estadio: "Gillette Stadium (Boston, USA)" },
            { rival: "vs Colombia", fecha: "25 de Junio, 2026", estadio: "Hard Rock Stadium (Miami, USA)" }
        ]
    },
    congo: {
        nombre: "RD CONGO",
        historia: "¡Los Leopardos regresan a la gran cita! Esta es su primera participación desde 1974 (cuando el país competía bajo el nombre de Zaire). Son un equipo veloz y físico que buscará sorprender y hacer historia en Norteamérica.",
        partidos: [
            { rival: "vs Portugal", fecha: "15 de Junio, 2026", estadio: "MetLife Stadium (NY/NJ, USA)" },
            { rival: "vs Colombia", fecha: "19 de Junio, 2026", estadio: "BMO Field (Toronto, CAN)" },
            { rival: "vs Uzbekistán", fecha: "24 de Junio, 2026", estadio: "Mercedes-Benz Stadium (Atlanta, USA)" }
        ]
    },
    uzbekistan: {
        nombre: "UZBEKISTÁN",
        historia: "¡Debutantes absolutos! Los Lobos Blancos han hecho historia al clasificar por primera vez a una Copa Mundial de la FIFA, demostrando el increíble desarrollo deportivo del fútbol asiático. Cada minuto en la cancha será histórico para ellos.",
        partidos: [
            { rival: "vs Colombia", fecha: "14 de Junio, 2026", estadio: "Levi's Stadium (San Francisco, USA)" },
            { rival: "vs Portugal", fecha: "20 de Junio, 2026", estadio: "Gillette Stadium (Boston, USA)" },
            { rival: "vs RD Congo", fecha: "24 de Junio, 2026", estadio: "Mercedes-Benz Stadium (Atlanta, USA)" }
        ]
    },
    colombia: {
        nombre: "COLOMBIA",
        historia: "La escuadra Tricolor vuelve al Mundial con la ilusión de superar su histórica participación de Brasil 2014 (Cuartos de final). Con un estilo de juego alegre, fuerte y muy ofensivo, buscarán dominar la fase de grupos acompañados por miles de hinchas.",
        partidos: [
            { rival: "vs Uzbekistán", fecha: "14 de Junio, 2026", estadio: "Levi's Stadium (San Francisco, USA)" },
            { rival: "vs RD Congo", fecha: "19 de Junio, 2026", estadio: "BMO Field (Toronto, CAN)" },
            { rival: "vs Portugal", fecha: "25 de Junio, 2026", estadio: "Hard Rock Stadium (Miami, USA)" }
        ]
    }
};

// ==========================================
// 2. FUNCIONES DEL MODAL
// ==========================================

function abrirModal(equipoId) {
    // Capturamos los elementos del HTML
    const modal = document.getElementById('modal-equipo');
    const titulo = document.getElementById('modal-titulo');
    const historia = document.getElementById('modal-historia');
    const listaPartidos = document.getElementById('modal-partidos');

    // Obtenemos los datos correspondientes desde nuestro objeto
    const datos = datosEquipos[equipoId];

    // Inyectamos textos básicos
    titulo.textContent = datos.nombre;
    historia.textContent = datos.historia;

    // Limpiamos la lista de partidos anterior
    listaPartidos.innerHTML = '';

    // Creamos y agregamos cada partido dinámicamente al HTML
    datos.partidos.forEach(partido => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${partido.rival}</strong>
            <span>📅 Fecha: ${partido.fecha}</span>
            <span>🏟️ Sede: ${partido.estadio}</span>
        `;
        listaPartidos.appendChild(li);
    });

    // Añadimos la clase que hace visible el modal y ejecuta la animación
    modal.classList.add('activo');
}

function cerrarModal() {
    const modal = document.getElementById('modal-equipo');
    modal.classList.remove('activo');
}

// Extra de diseño: Cerrar el modal si el usuario hace clic en el fondo oscuro
window.onclick = function (event) {
    const modal = document.getElementById('modal-equipo');
    if (event.target === modal) {
        cerrarModal();
    }
}