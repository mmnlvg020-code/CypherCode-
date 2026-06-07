/**
 * ==============================================================================
 * ARCHIVO PRINCIPAL DE LÓGICA (APP.JS)
 * ==============================================================================
 * Este archivo contiene toda la lógica interactiva de la Guía de Inglés.
 * Funciona como el "cerebro" de la página web (Single Page Application - SPA).
 * 
 * Responsabilidades de este archivo:
 * 1. Controlar la navegación (cambios de pantalla sin recargar la página).
 * 2. Cargar y mostrar los datos (Gramática, Vocabulario, Quiz) guardados en data/.
 * 3. Manejar la lógica de los juegos y la evaluación (puntajes, tiempos, vidas).
 * 4. Gestionar funcionalidades especiales como el Modo Oscuro y la voz sintética (TTS).
 * ==============================================================================
 */

// ============================================================
// 1. ICONOS SVG Y FUNCIONES DE AYUDA (HELPERS)
// ============================================================
// Diccionario que almacena el código fuente de todos los iconos visuales.
// Usar SVG directamente en el código ahorra descargas de imágenes externas.
const SVG_ICONS = {
  // Navigation Icons
  home: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  grammar: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h10"/></svg>`,
  flashcards: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="3" width="14" height="14" rx="2" ry="2"/><path d="M21 7h-2v10H9v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>`,
  quiz: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  verbs: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,

  // Topic specific
  user: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  book: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  numbers: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="10" x1="21" y1="6" y2="6"/><line x1="10" x1="21" y1="12" y2="12"/><line x1="10" x1="21" y1="18" y2="18"/><path d="M4 6h1v4M4 10h2M4 16h2v.5A1.5 1.5 0 0 1 4.5 18v0A1.5 1.5 0 0 1 6 19.5H4"/></svg>`,
  "arrow-right": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m12 5 7 7-7 7M5 12h14"/></svg>`,
  "message-square": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  timer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="12" x1="12" y1="2" y2="6"/><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>`,
  "bar-chart": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="18" x1="18" y1="20" y2="10"/><line x1="12" x1="12" y1="20" y2="4"/><line x1="6" x1="6" y1="20" y2="14"/></svg>`,
  "help-circle": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x1="12" y1="17" y2="17"/></svg>`,
  repeat: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
  history: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/><line x1="12" x1="12" y1="7" y2="12"/><line x1="12" x1="16" y1="12" y2="12"/></svg>`,
  "trending-up": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polygon points="17 6 23 6 23 12"/></svg>`,
  sparkles: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>`,
  "map-pin": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  settings: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,

  // Analogy specific
  soccer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="10"/><path d="m12 2-2 3v3.5l3 1.5 3-1.5V5l-2-3zM5.5 6.5l3.5 1.5M15 8l3.5-1.5M3 14h3.5l1.5 3M16 17l1.5-3H21M9.5 15.5l2.5 3.5 2.5-3.5"/></svg>`,
  handshake: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M16 3h5v5M8 3H3v5M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 14v6M3 21h18"/></svg>`,
  plane: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M17.8 20.19 14 12h-4.5l-2.25 4.5H5l2-6-2-6h2.25L9.5 9H14L17.8 3.81c.5-.67 1.2-.19 1 .69l-1.5 5.5H21a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3.7l-1.5 5.5c-.2.88-.9 1.36-1.5.69z"/></svg>`,
  thermometer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
  search: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><circle cx="11" cy="11" r="8"/><line x1="21" x1="16.65" y1="21" y2="16.65"/></svg>`,
  tv: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  camera: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  calendar: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  store: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="2" y="10" width="20" height="12" rx="2"/><path d="m12 2-10 8h20Z"/><path d="M6 22v-6h4v6M14 22v-6h4v6"/></svg>`,

  // Interface / status utilities
  shuffle: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  lightbulb: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  "alert-circle": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" x1="12" y1="8" y2="12"/><line x1="12" x1="12" y1="16" y2="16"/></svg>`,
  tag: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>`,
  trophy: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3.5a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6Z"/></svg>`,
  check: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" stroke-width="3"><line x1="18" x1="6" y1="6" y2="18"/><line x1="6" x1="18" y1="6" y2="18"/></svg>`,
  moon: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  "chevron-down": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polyline points="6 9 12 15 18 9"/></svg>`,
  "chevron-up": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polyline points="18 15 12 9 6 15"/></svg>`,
  volume: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
};

/**
 * getIcon(name, size, strokeWidth)
 * Busca un icono por su nombre en el diccionario SVG_ICONS.
 * Si recibe parámetros de tamaño (size) o grosor (strokeWidth), usa "expresiones regulares" 
 * para modificar el código SVG antes de devolverlo y así adaptarlo visualmente.
 */
function getIcon(name, size = null, strokeWidth = null) {
  let markup = SVG_ICONS[name] || '';
  if (!markup) return '';
  if (size) {
    markup = markup.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
  }
  if (strokeWidth) {
    markup = markup.replace(/stroke-width="\d+(\.\d+)?"/, `stroke-width="${strokeWidth}"`);
  }
  return markup;
}

// ============================================================
// DATA & HELPERS
// ============================================================

/**
 * Fisher-Yates Shuffle: Algoritmo para aleatoriedad real.
 * Reemplaza el defectuoso .sort(() => Math.random() - 0.5)
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// ============================================================
// 2. LÓGICA DE LA SECCIÓN DE GRAMÁTICA
// ============================================================

// Guarda el índice (número) del tema de gramática que el usuario está leyendo actualmente.
// Empieza en -1 indicando que no hay ningún tema abierto todavía.
let activeTopicIndex = -1;

/**
 * getCourseBadgeClass(course)
 * Revisa a qué nivel/curso pertenece un tema (Inglés 1, Inglés 2, etc.)
 * y devuelve el nombre de la clase CSS que le da su color característico a la etiqueta.
 */
function getCourseBadgeClass(course) {
  if (course.includes('Técnico')) return 'badge-tech';
  if (course.includes('1 & 2') || (course.includes('1') && course.includes('2'))) return 'badge-shared';
  if (course.includes('1')) return 'badge-1';
  if (course.includes('2')) return 'badge-2';
  return 'badge-1';
}

/**
 * renderTopics()
 * Dibuja la lista lateral de temas de gramática en la pantalla.
 * Toma los datos del archivo 'data/topics.js' y los inyecta dinámicamente
 * como elementos HTML <li> en el contenedor de la izquierda.
 */
function renderTopics() {
  // Buscamos el elemento HTML (ul) donde se van a inyectar los temas de la lista lateral
  const listContainer = document.getElementById('grammarTopicList');
  if (!listContainer) return; // Si no existe (estamos en otra página), salimos de la función

  // Recorremos el array 'topics' (que viene de data/topics.js)
  // map() convierte cada objeto de tema (t) en un bloque de código HTML (un <li>)
  listContainer.innerHTML = topics.map((t, i) => `
    <li class="grammar-list-item ${activeTopicIndex === i ? 'active' : ''}" onclick="selectTopic(${i})">
      <!-- Icono del tema: le damos un color de fondo translúcido (22 en Hex) basado en su color principal -->
      <div class="topic-icon-small" style="background:${t.color}22; color:${t.color}">${getIcon(t.icon)}</div>
      
      <!-- Contenedor del título y la etiqueta (badge) -->
      <div class="topic-list-info">
        <span class="topic-list-title">${t.title}</span>
        <!-- Aquí llamamos a getCourseBadgeClass para saber de qué color pintar la etiqueta (Inglés 1, Inglés 2, etc.) -->
        <span class="topic-badge ${getCourseBadgeClass(t.course)}">${t.course}</span>
      </div>
    </li>
  `).join(''); // .join('') une todo el array de HTMLs en un solo gran texto para inyectarlo
}

/**
 * selectTopic(index)
 * Se ejecuta cuando el usuario hace clic en un tema de la lista lateral.
 * Abre el panel principal derecho (Master-Detail) mostrando la teoría, tablas y analogías de ese tema.
 * @param {number} index - La posición del tema dentro de la lista de datos (topics).
 */
function selectTopic(index) {
  // Actualizamos el índice global para saber qué tema está abierto
  activeTopicIndex = index;
  
  // Volvemos a dibujar la lista lateral para que el tema clickeado se marque como "activo" (resaltado)
  renderTopics();

  // Buscamos el contenedor principal derecho donde va la teoría
  const contentArea = document.getElementById('grammarContentArea');
  
  // Extraemos los datos del tema seleccionado
  const t = topics[index];

  // Inyectamos todo el HTML dinámico de la teoría
  contentArea.innerHTML = `
    <!-- Botón visible solo en móviles para volver a la lista lateral -->
    <button class="grammar-back-btn" onclick="closeTopicDetail()">← Volver a la lista</button>
    
    <!-- Contenedor principal con animación (fade-in) -->
    <div class="topic-detail fade-in">
      
      <!-- Cabecera: Icono grande, Título y Etiqueta -->
      <div class="topic-detail-header">
        <div class="topic-icon-large" style="background:${t.color}22; color:${t.color}">${getIcon(t.icon)}</div>
        <div>
          <h2>${t.title}</h2>
          <span class="topic-badge ${getCourseBadgeClass(t.course)}">${t.course}</span>
        </div>
      </div>
      
      <!-- Cuerpo del tema: Descripción y Fórmula -->
      <div class="topic-detail-body">
        <p class="topic-desc">${t.desc}</p>
        <div class="formula">${t.formula}</div>
        
        <!-- Bloque de Ejemplos -->
        <h4 class="detail-subtitle">Ejemplos</h4>
        <div class="examples">
          <!-- Recorremos los ejemplos y ponemos +, -, o ? dependiendo del tipo -->
          ${t.examples.map(e => `
            <div class="ex-row">
              <span class="ex-label ${e.type}">${e.type === 'pos' ? '+' : e.type === 'neg' ? '−' : e.type === 'q' ? '?' : '🔑'}</span>
              <span class="ex-text">${e.text}</span>
            </div>
          `).join('')}
        </div>
        
        <!-- Si el tema tiene una tabla (t.table existe), la dibujamos -->
        ${t.table ? `
          <h4 class="detail-subtitle">Tabla de Referencia</h4>
          <table class="ref-table">
            <thead><tr>${t.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${t.table.rows.map(r => `<tr>${r.map(c => {
    // Caso especial: Si una celda es "How often", inyectamos un Tooltip interactivo
    if (c === 'How often') {
      return `<td>
                  <span class="tooltip-wrapper">
                    <span class="tooltip-trigger" title="Conexión: Ver Adverbios de Frecuencia">
                      ${getIcon('lightbulb', 14)}
                      <span class="custom-tooltip tooltip-right">
                        <span class="tooltip-title">${getIcon('lightbulb', 14)} Adverbios de Frecuencia</span>
                        <span class="tooltip-row"><span class="tooltip-pct">100%</span> <strong>Always</strong> (siempre)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">90%</span> <strong>Usually</strong> (usualmente)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">70%</span> <strong>Often</strong> (a menudo)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">50%</span> <strong>Sometimes</strong> (a veces)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">10%</span> <strong>Rarely</strong> (casi nunca)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">0%</span> <strong>Never</strong> (nunca)</span>
                        <span class="tooltip-footer">Ver tema completo en la barra lateral</span>
                      </span>
                    </span>
                    How often
                  </span>
                </td>`;
    }
    return `<td>${c}</td>`;
  }).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}

        <!-- Si el tema tiene una analogía (t.analogy existe), dibujamos su recuadro -->
        ${t.analogy ? `
          <div class="analogy-block">
            <div class="analogy-emoji">${getIcon(t.analogy.emoji)}</div>
            <div class="analogy-body">
              <div class="analogy-label">${getIcon('lightbulb', 14)} Analogía para recordarlo</div>
              <p class="analogy-text">${t.analogy.text}</p>
            </div>
          </div>` : ''}
      </div>
    </div>
  `;

  // Le agregamos la clase 'detail-open' al contenedor principal.
  // En pantallas chicas, esto oculta la lista y muestra el panel derecho.
  const layout = document.querySelector('.grammar-book-layout');
  if (layout) layout.classList.add('detail-open');
}

/**
 * closeTopicDetail()
 * Cierra la vista de detalle del tema de gramática y vuelve a mostrar el estado vacío
 * (el mensaje de "Elegí un tema del menú lateral") en el panel principal.
 */
function closeTopicDetail() {
  const layout = document.querySelector('.grammar-book-layout');
  if (layout) layout.classList.remove('detail-open');
  activeTopicIndex = -1;
  renderTopics();

  const contentArea = document.getElementById('grammarContentArea');
  contentArea.innerHTML = `
    <div class="grammar-empty-state">
      <span class="empty-icon">${getIcon('book')}</span>
      <p>Elegí un tema del menú lateral para empezar a repasar.</p>
      
      <div style="margin-top: 2rem; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: 12px; border: 1px solid var(--border); max-width: 400px; margin-inline: auto; text-align: left;">
        <h4 style="margin: 0 0 1rem 0; font-size: 0.9rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">${getIcon('info', 16)} Leyenda de Cursos</h4>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-1">Inglés 1</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Temas base y fundamentos.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-2">Inglés 2</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Tiempos avanzados y pasado.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-shared">Inglés 1 & 2</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Temas compartidos entre ambos.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-tech">Inglés Técnico</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Contenido exclusivo de tu carrera.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// 3. LÓGICA DE LAS FLASHCARDS (TARJETAS DE MEMORIA)
// ============================================================

// Variables de estado para las flashcards:
// 'activeCategory' guarda el filtro actual (ej. "Vocabulario IT").
let activeCategory = 'all';
// 'categories' extrae dinámicamente los temas disponibles sin repetir (usando Set).
const categories = ['all', ...new Set(flashcardsData.map(f => f.cat))];
// 'isShuffled' indica si las cartas están en orden aleatorio o no.
let isShuffled = false;
let currentShuffledCards = [];

/**
 * renderFlashcardControls()
 * Dibuja los botones de la parte superior de las flashcards:
 * El menú desplegable (select) para filtrar por categoría y el botón de "Barajar".
 */
function renderFlashcardControls() {
  const ctrl = document.getElementById('fcControls');
  ctrl.innerHTML = `
    <div style="display:flex; gap:0.8rem; align-items:center; justify-content:center; margin-bottom:1.5rem; flex-wrap:nowrap;">
      <select class="verbs-search" style="margin-bottom:0; width:100%; max-width:240px; display:inline-block;" onchange="filterCards(this.value)">
        ${categories.map(c => `
          <option value="${c}" ${c === activeCategory ? 'selected' : ''}>
            ${c === 'all' ? 'Todos los Temas' : c}
          </option>
        `).join('')}
      </select>
      <button class="quiz-restart-btn" style="padding:0.7rem 1.2rem; font-size:0.9rem; height:42px; display:inline-flex; align-items:center; gap:0.5rem; white-space:nowrap; margin-bottom:0;" onclick="shuffleFlashcards()">
        ${getIcon('shuffle')} Barajar
      </button>
    </div>
  `;
}

/**
 * shuffleFlashcards()
 * Toma la lista actual de cartas (filtradas o completas), las desordena 
 * aleatoriamente usando Math.random(), y vuelve a dibujarlas en pantalla.
 */
function shuffleFlashcards() {
  const filtered = activeCategory === 'all' ? flashcardsData : flashcardsData.filter(f => f.cat === activeCategory);
  currentShuffledCards = shuffleArray([...filtered]);
  isShuffled = true;
  renderFlashcards();
}

/**
 * filterCards(cat)
 * Se ejecuta al cambiar la opción en el menú desplegable.
 * Cambia la categoría activa, quita el modo "barajado" y vuelve a renderizar.
 */
function filterCards(cat) {
  activeCategory = cat;
  isShuffled = false;
  renderFlashcardControls();
  renderFlashcards();
}

/**
 * renderFlashcards()
 * Se encarga de dibujar físicamente (inyectar HTML) cada tarjeta en la pantalla.
 * Aplica filtros, modo barajado, y detecta si el texto está en español o inglés 
 * para decidir si debe mostrar o no el botón de pronunciación (altavoz).
 */
function renderFlashcards() {
  const grid = document.getElementById('flashcardsGrid');
  let filtered = activeCategory === 'all' ? flashcardsData : flashcardsData.filter(f => f.cat === activeCategory);

  if (isShuffled) {
    filtered = currentShuffledCards;
  }

  grid.innerHTML = filtered.map((f, i) => {
    const globalIdx = flashcardsData.indexOf(f);
    // Detectar si la respuesta está en español o es una explicación
    const isSpanish = /[áéíóúñÁÉÍÓÚÑ¿¡]/.test(f.a) || /\b(de|en|el|la|los|un|una|para|con|por|se|al|como|que|es|del|verbo|persona|significa|consonante|vocal|tiempo|después|antes|cerca|lejos|sonar|estudiar|pasar|hacer|ejercicio|rato|día|nunca|auxiliares)\b/i.test(f.a);

    return `
      <div class="flashcard fade-in" style="animation-delay:${i * 0.04}s" onclick="this.classList.toggle('flipped')">
        <div class="fc-inner">
          <div class="fc-front">
            <div class="fc-category">${f.cat.toUpperCase()}</div>
            <div class="fc-question">${f.q}</div>
            <div class="fc-tap">↩ Tocá para ver respuesta</div>
          </div>
          <div class="fc-back">
            <div class="fc-category">${f.cat.toUpperCase()}</div>
            <div class="fc-answer" style="display:flex; align-items:center; gap:0.5rem; justify-content:center;">
              ${f.a}
              ${!isSpanish ? `
              <button class="fc-speak-btn" onclick="speakFlashcard(${globalIdx}, event)" title="Escuchar pronunciación en inglés">
                ${getIcon('volume', 16)}
              </button>
              ` : ''}
            </div>
            <div class="fc-hint">${f.hint}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================================
// 4. LÓGICA DEL QUIZ (EVALUACIÓN)
// ============================================================

// Variables de estado del Quiz:
let quizActiveCategory = 'all'; // Categoría seleccionada
const quizCategories = ['all', ...new Set(quizData.map(q => q.cat))];
let currentQ = 0; // Pregunta actual (índice numérico)
let score = 0; // Puntaje actual del usuario
let answered = false; // Indica si la pregunta actual ya fue respondida (evita doble clic)
let currentQuizData = []; // Array temporal con las preguntas a evaluar
let quizUserHistory = []; // Guarda qué contestó el usuario para mostrar el resumen de errores

/**
 * renderQuizControls()
 * Muestra el selector de categoría del Quiz en la pantalla.
 */
function renderQuizControls() {
  const ctrl = document.getElementById('quizControls');
  if (ctrl) {
    ctrl.innerHTML = `
      <select class="verbs-search" style="margin-bottom:1rem; width:100%; max-width:300px; display:block;" onchange="filterQuiz(this.value)">
        ${quizCategories.map(c => `
          <option value="${c}" ${c === quizActiveCategory ? 'selected' : ''}>
            ${c === 'all' ? 'Todos los Temas (Random)' : c}
          </option>
        `).join('')}
      </select>
    `;
  }
}

/**
 * filterQuiz(cat)
 * Disparado al elegir una categoría nueva. Lanza un Quiz desde cero con ese tema.
 */
function filterQuiz(cat) {
  quizActiveCategory = cat;
  initQuiz();
}

/**
 * initQuiz()
 * Inicializa o resetea todo el Quiz.
 * Se encarga de cargar las preguntas, mezclarlas (shuffle), limitarlas a un máximo de 20
 * y poner todos los contadores en 0.
 */
function initQuiz() {
  // Reiniciamos todos los contadores al comenzar un nuevo quiz.
  renderQuizControls();

  // Filtramos por categoría activa (o usamos todas si está en 'all'),
  // mezclamos aleatoriamente y limitamos a un máximo de 20 preguntas.
  const filtered = quizActiveCategory === 'all'
    ? quizData
    : quizData.filter(q => q.cat === quizActiveCategory);
  currentQuizData = shuffleArray([...filtered]).slice(0, 20);

  // Reseteamos el estado global del quiz.
  currentQ = 0;
  score = 0;
  answered = false;
  quizUserHistory = [];

  // Caso borde: si no hay preguntas para ese tema, mostramos un aviso.
  if (currentQuizData.length === 0) {
    document.getElementById('quizContainer').innerHTML =
      `<p style="text-align:center; padding: 2rem;">No hay preguntas para este tema aún.</p>`;
    document.getElementById('quizCount').textContent = `0 / 0`;
    return;
  }

  renderQuiz();
}

// ─────────────────────────────────────────────────────
// advanceQuiz()
// Se llama ÚNICAMENTE cuando el usuario hace clic en
// el botón "Siguiente →". No hay auto-avance por timer.
// ─────────────────────────────────────────────────────
function advanceQuiz() {
  // Buscamos la tarjeta actual en el DOM para animarla antes de destruirla.
  const card = document.querySelector('.quiz-card');

  if (card) {
    // Añadimos la clase CSS que dispara la animación de salida (slide hacia la izquierda).
    card.classList.add('quiz-slide-out');

    // Esperamos 260ms (duración de la animación CSS) antes de cambiar el contenido.
    // Así el usuario ve la tarjeta salir suavemente antes de que aparezca la siguiente.
    setTimeout(() => {
      currentQ++;        // Avanzamos al número de la siguiente pregunta.
      answered = false;  // Reseteamos la bandera: la nueva pregunta aún no fue respondida.
      renderQuiz();      // Pintamos la nueva pregunta en el DOM.
    }, 260);

  } else {
    // Si por algún motivo la tarjeta no existe en el DOM (caso borde), avanzamos directo.
    currentQ++;
    answered = false;
    renderQuiz();
  }
}

// ─────────────────────────────────────────────────────
// renderQuiz()
// Dibuja la pregunta actual (o la pantalla final si el
// quiz terminó). Siempre parte desde el estado global
// currentQ y currentQuizData.
// ─────────────────────────────────────────────────────
function renderQuiz() {
  // Referencia al contenedor principal del quiz donde se inyecta todo el HTML.
  const container = document.getElementById('quizContainer');

  // ── PANTALLA FINAL ──────────────────────────────────
  // Si currentQ llegó o superó el total de preguntas, el quiz terminó.
  if (currentQ >= currentQuizData.length) {
    // Calculamos el porcentaje de aciertos (redondeado al entero más cercano).
    const pct = Math.round((score / currentQuizData.length) * 100);

    // Guardar y comprobar el récord histórico
    const previousRecordRaw = localStorage.getItem('guia_ingles_quiz_record');
    let previousRecord = -1;
    if (previousRecordRaw) {
      try {
        previousRecord = JSON.parse(previousRecordRaw).pct;
      } catch (e) {
        previousRecord = Number(previousRecordRaw) || -1;
      }
    }

    let newRecordSet = false;
    if (pct > previousRecord) {
      localStorage.setItem('guia_ingles_quiz_record', JSON.stringify({
        pct: pct,
        correct: score,
        incorrect: currentQuizData.length - score,
        total: currentQuizData.length
      }));
      newRecordSet = true;
      initStats(); // Actualizar estadísticas en la pantalla principal
    }

    // Disparar confeti si el porcentaje de aciertos es del 50% o más
    if (pct >= 50) {
      triggerConfetti();
    }

    // Elegimos el icono SVG según el rango de porcentaje.
    const emoji = pct >= 80 ? getIcon('trophy', 64) : pct >= 50 ? getIcon('check', 64) : getIcon('alert-circle', 64);

    // Mensaje motivacional adaptado al resultado.
    let msg = pct >= 80 ? '¡Excelente dominio!' : pct >= 50 ? '¡Buen trabajo!' : '¡Seguí practicando!';
    if (newRecordSet) {
      msg = `🎉 ¡Estableciste un nuevo récord personal de ${pct}% de aciertos!`;
    }

    // Filtrar errores del historial
    const errors = quizUserHistory.filter(h => !h.isCorrect);

    // Pintamos la pantalla de resultados con el score, el porcentaje y el botón de reinicio.
    container.innerHTML = `
      <div class="quiz-result fade-in" style="max-width:600px; margin:0 auto;">
        ${newRecordSet ? `<div style="display:inline-block; background:rgba(0, 255, 136, 0.15); border:1px solid var(--accent); border-radius:20px; padding:0.4rem 1rem; color:var(--accent); font-family:var(--mono); font-size:0.75rem; font-weight:bold; margin-bottom:1rem; text-transform:uppercase; letter-spacing:1px; animation: pulse 1.5s infinite;">${getIcon('trophy')} ¡Nuevo Récord Personal!</div>` : ''}
        <div class="quiz-result-emoji">${emoji}</div>
        <h2>¡Quiz Terminado!</h2>
        <div class="quiz-result-score">${score}<span>/${currentQuizData.length}</span></div>
        <div class="quiz-result-pct">${pct}% correcto</div>
        <p class="quiz-result-msg">${msg}</p>
        
        ${errors.length > 0 ? `
          <div class="quiz-errors-summary" style="margin-top:2rem; text-align:left; border-top:1px dashed var(--border); padding-top:1.5rem;">
            <h3 style="font-family:var(--display); font-size:1.2rem; margin-bottom:1rem; color:var(--accent3); display:flex; align-items:center; gap:0.5rem;">
              ${getIcon('alert-circle')} Repaso de Errores (${errors.length})
            </h3>
            <div style="display:flex; flex-direction:column; gap:1rem; max-height:350px; overflow-y:auto; padding-right:0.5rem; scroll-behavior:smooth;">
              ${errors.map((e, idx) => `
                <div style="background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:1rem; font-size:0.9rem;">
                  <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--mono); margin-bottom:0.4rem; text-transform:uppercase;">
                    Tema: ${e.category}
                  </div>
                  <div style="font-weight:bold; color:var(--text); margin-bottom:0.6rem; line-height:1.4;">
                    ${idx + 1}. ${e.question}
                  </div>
                  <div style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom:0.6rem;">
                    <div style="color:var(--accent3); display:flex; align-items:center; gap:0.4rem;">
                      <span style="font-weight:bold;">Tú elegiste:</span> <span>${e.userAnswer}</span>
                    </div>
                    <div style="color:var(--accent); display:flex; align-items:center; gap:0.4rem;">
                      <span style="font-weight:bold;">Correcto:</span> <span>${e.correctAnswer}</span>
                    </div>
                  </div>
                  <div style="font-size:0.8rem; color:var(--text-muted); border-left:2px solid var(--accent); padding-left:0.6rem; line-height:1.5; font-style:italic;">
                    ${getIcon('lightbulb', 14)} ${e.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : `
          <div style="margin-top:2rem; padding:1.2rem; background:rgba(0, 255, 136, 0.05); border:1px dashed var(--accent); border-radius:8px; color:var(--accent); font-weight:bold; font-size:0.95rem; display:flex; align-items:center; justify-content:center; gap:0.5rem;">
            ${getIcon('trophy')} ¡Increíble! Respondiste todas las preguntas perfectamente.
          </div>
        `}
        
        <button class="quiz-restart-btn" style="margin-top:2rem; display:inline-flex; align-items:center; gap:0.5rem;" onclick="initQuiz()">${getIcon('repeat')} Volver a Jugar</button>
      </div>
    `;
    return; // Salimos: no hay nada más que renderizar.
  }

  // ── PREGUNTA ACTIVA ─────────────────────────────────
  // Obtenemos el objeto de la pregunta actual del array mezclado.
  const q = currentQuizData[currentQ];

  // Calculamos qué porcentaje del quiz se completó (para la barra de progreso superior).
  // Usamos currentQ (sin +1) para que la barra refleje las preguntas YA respondidas.
  const progress = (currentQ / currentQuizData.length) * 100;

  // Actualizamos la barra de progreso horizontal en el header del quiz.
  document.getElementById('quizProgress').style.width = progress + '%';

  // Actualizamos el contador textual "2 / 10" en el header.
  document.getElementById('quizCount').textContent = `${currentQ + 1} / ${currentQuizData.length}`;

  // Actualizamos el badge de puntaje (✓ 3) en el header.
  document.getElementById('quizScore').innerHTML = `${getIcon('check')} ${score}`;

  // Reseteamos la bandera: esta pregunta todavía no fue contestada.
  answered = false;

  // Array de letras para los botones de opción (A, B, C, D).
  const letters = ['A', 'B', 'C', 'D'];

  // Generamos el HTML completo de la tarjeta: categoría, pregunta, opciones y zona de feedback.
  // El botón "Siguiente" NO está aquí; se inyecta en selectOption() DESPUÉS de responder.
  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-category">${q.cat.toUpperCase()}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" id="qopt-${i}" onclick="selectOption(${i})">
            <span class="opt-letter">${letters[i]}</span> ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  `;

  // Disparamos la animación de entrada DESPUÉS de que el navegador pintó el DOM.
  // requestAnimationFrame garantiza que la clase se agrega en el siguiente frame,
  // lo que permite que la animación CSS quizSlideIn se ejecute correctamente.
  requestAnimationFrame(() => {
    const card = document.querySelector('.quiz-card');
    if (card) card.classList.add('quiz-slide-in'); // La tarjeta entra deslizándose desde la derecha.
  });
}

// ─────────────────────────────────────────────────────
// selectOption(idx)
// Se llama cuando el usuario hace clic en una opción.
// idx → índice (0-3) del botón que eligió.
// ─────────────────────────────────────────────────────
function selectOption(idx) {
  // Si ya respondió esta pregunta, ignoramos el clic (evita doble respuesta).
  if (answered) return;

  // Marcamos que esta pregunta ya fue contestada.
  answered = true;

  // Obtenemos el objeto de la pregunta actual con sus datos (correcta, explicación, etc.).
  const q = currentQuizData[currentQ];

  // Seleccionamos todos los botones de opción para poder manipularlos.
  const opts = document.querySelectorAll('.quiz-option');

  // Referencia al div de feedback donde mostraremos el resultado (correcto/incorrecto).
  const feedback = document.getElementById('quizFeedback');

  // Deshabilitamos TODOS los botones para que el usuario no pueda cambiar su respuesta.
  opts.forEach(o => o.disabled = true);

  // Comparamos el índice elegido con el índice correcto (guardado en q.correct).
  const isCorrect = idx === q.correct;

  // Registrar en el historial de esta sesión
  quizUserHistory.push({
    question: q.q,
    category: q.cat,
    userAnswer: q.opts[idx],
    correctAnswer: q.opts[q.correct],
    isCorrect: isCorrect,
    explanation: q.exp
  });

  if (isCorrect) {
    score++;                                // Sumamos 1 punto al puntaje global.
    opts[idx].classList.add('correct');     // Pintamos el botón elegido en verde.
    // Mostramos el ícono ✓ + el texto explicativo de por qué es correcto.
    feedback.innerHTML = `<span class="fb-icon">${getIcon('check')}</span> Correcto! ` + q.exp;
    feedback.className = 'quiz-feedback show correct'; // Hacemos visible el feedback en verde.
  } else {
    opts[idx].classList.add('wrong');           // Pintamos la opción elegida en rojo.
    opts[q.correct].classList.add('correct');   // Revelamos cuál era la respuesta correcta (verde).
    // Mostramos el ícono ✗ + la explicación de la respuesta correcta.
    feedback.innerHTML = `<span class="fb-icon">${getIcon('x')}</span> Incorrecto. ` + q.exp;
    feedback.className = 'quiz-feedback show wrong'; // Feedback visible en rojo.
  }

  // Actualizamos el badge de score en el header INMEDIATAMENTE al responder.
  document.getElementById('quizScore').innerHTML = `${getIcon('check')} ${score}`;

  // ── BOTÓN "SIGUIENTE" ──────────────────────────────
  // Creamos el botón dinámicamente y lo añadimos debajo de la tarjeta.
  // El usuario lo verá DESPUÉS de responder y avanzará CUANDO QUIERA.
  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next-btn show fade-in'; // 'show' lo hace visible, 'fade-in' lo anima.

  // Etiqueta del botón: en la última pregunta dice "Ver Resultado" en lugar de "Siguiente".
  const isLastQuestion = currentQ === currentQuizData.length - 1;
  nextBtn.innerHTML = isLastQuestion
    ? `Ver Resultado <span class="next-arrow">→</span>`
    : `Siguiente <span class="next-arrow">→</span>`;

  // Al hacer clic se llama advanceQuiz(), que anima la salida y renderiza la pregunta siguiente.
  nextBtn.onclick = advanceQuiz;

  // Insertamos el botón dentro del quizContainer (debajo de la tarjeta).
  document.getElementById('quizContainer').appendChild(nextBtn);
}

// ============================================================
// 5. LÓGICA DE VOCABULARIO (VERBOS)
// ============================================================

let expandedVerbIndex = -1; // Índice del verbo cuyo acordeón está abierto (-1 = ninguno)
let selectedVerbCategory = null; // Categoría temática elegida (ej. "Ciencia", "Deportes")

/**
 * selectVerbCategory(cat)
 * Abre una categoría de verbos específica, oculta el buscador y muestra la lista filtrada.
 */
function selectVerbCategory(cat) {
  selectedVerbCategory = cat;
  expandedVerbIndex = -1;
  document.getElementById('verbSearch').value = '';
  renderVerbs();
}

/**
 * handleVerbSearch()
 * Se ejecuta cada vez que el usuario escribe en el buscador de verbos.
 * Muestra/oculta el botón "X" y vuelve a renderizar la lista buscando coincidencias.
 */
function handleVerbSearch() {
  selectedVerbCategory = null;
  expandedVerbIndex = -1;
  const searchInput = document.getElementById('verbSearch');
  const clearBtn = document.getElementById('clearVerbSearchBtn');
  if (searchInput && clearBtn) {
    clearBtn.style.display = searchInput.value.length > 0 ? 'block' : 'none';
  }
  renderVerbs();
}

/**
 * clearVerbSearch()
 * Limpia el texto del buscador y devuelve al usuario a la vista de categorías.
 */
function clearVerbSearch() {
  const searchInput = document.getElementById('verbSearch');
  if (searchInput) {
    searchInput.value = '';
    handleVerbSearch();
    searchInput.focus(); // Mantiene el teclado abierto en móviles
  }
}

function renderVerbControls() {
  // Ya no se usa dinámicamente, el HTML del buscador es estático ahora.
}

/**
 * renderVerbs()
 * Dibuja la pantalla de verbos en base a tres modos posibles:
 * 1. Modo Búsqueda (escribiendo texto)
 * 2. Modo Cuadrícula de Categorías (por defecto)
 * 3. Modo Lista (una categoría elegida)
 */
function renderVerbs() {
  const searchVal = document.getElementById('verbSearch').value.toLowerCase();
  const body = document.getElementById('verbsBody');

  // 1. Search Mode
  if (searchVal) {
    const backBar = document.getElementById('verbBackBar');
    if (backBar) backBar.style.display = 'none';
    document.getElementById('verbs')?.classList.remove('has-back-bar');
    const filtered = irregularVerbs.map((v, i) => ({ v, i })).filter(item => {
      return item.v[0].includes(searchVal) || item.v[1].includes(searchVal) || (item.v[5] && item.v[5].toLowerCase().includes(searchVal));
    });
    body.innerHTML = buildVerbsAccordion(filtered);
    return;
  }

  // 2. Category Grid Mode
  if (!selectedVerbCategory) {
    const backBar = document.getElementById('verbBackBar');
    if (backBar) backBar.style.display = 'none';
    document.getElementById('verbs')?.classList.remove('has-back-bar');
    const cats = [...new Set(irregularVerbs.map(v => v[4]))].sort();

    body.innerHTML = `
      <div class="verb-cat-grid fade-in">
        ${cats.map(c => {
      const count = irregularVerbs.filter(v => v[4] === c).length;
      return `
            <div class="verb-cat-card" onclick="selectVerbCategory('${c}')">
              <div class="verb-cat-title">${c}</div>
              <div class="verb-cat-count">${count} términos</div>
            </div>
          `;
    }).join('')}
      </div>
    `;
    return;
  }

  // 3. Verb List Mode (Selected Category)
  const filtered = irregularVerbs.map((v, i) => ({ v, i })).filter(item => item.v[4] === selectedVerbCategory);

  const backBar = document.getElementById('verbBackBar');
  if (backBar) {
    backBar.style.display = 'block';
    backBar.querySelector('span.verb-cat-label').textContent = selectedVerbCategory;
  }
  document.getElementById('verbs')?.classList.add('has-back-bar');

  body.innerHTML = `
    <div class="fade-in">
      ${buildVerbsAccordion(filtered)}
    </div>
  `;
}

/**
 * buildVerbsAccordion(filtered)
 * Genera el código HTML interactivo de cada verbo (el acordeón que se despliega).
 * Inserta los botones de Text-to-Speech (audio) y el ejemplo.
 */
function buildVerbsAccordion(filtered) {
  if (filtered.length === 0) {
    return `<div class="verb-empty">No se encontró ningún término</div>`;
  }
  return filtered.map(item => `
    <div class="verb-accordion-item ${expandedVerbIndex === item.i ? 'expanded' : ''}">
      <div class="verb-acc-header" onclick="toggleVerb(${item.i})">
        <div class="verb-acc-title">
          <span class="v-present">${item.v[0]} <small style="color:var(--text-light); font-weight:normal; margin-left:8px;">(${item.v[5] || ''})</small></span>
          <span class="v-arrow">${getIcon('arrow-right', 14)}</span>
          <span class="v-past">${item.v[1]}</span>
        </div>
        <div class="v-chevron">${expandedVerbIndex === item.i ? getIcon('chevron-up') : getIcon('chevron-down')}</div>
      </div>
      <div class="verb-acc-content">
        <div class="verb-acc-inner">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.4rem;">
            <div class="verb-phonetic" onclick="speak('${item.v[0]}', event)" title="Escuchar presente (Infinitivo)" style="cursor:pointer;">
              ${getIcon('volume', 14)} Presente: <strong>${item.v[0]}</strong> <span style="font-size:0.75rem; opacity:0.8; font-family:var(--mono);">${item.v[2]}</span>
            </div>
            <div class="verb-phonetic" onclick="speak('${item.v[1]}', event)" title="Escuchar pasado" style="cursor:pointer; background:rgba(0, 255, 136, 0.1); color:var(--accent);">
              ${getIcon('volume', 14)} Pasado: <strong>${item.v[1]}</strong>
            </div>
          </div>
          <div class="verb-example" onclick="speak('${item.v[3].replace(/'/g, "\\'")}', event)" title="Escuchar oración de ejemplo" style="cursor:pointer;">
            ${getIcon('lightbulb', 14)} "${item.v[3]}"
          </div>
          <div class="topic-badge badge-1" style="align-self:flex-start; font-size:0.7rem;">${getIcon('tag', 12)} ${item.v[6]}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleVerb(index) {
  expandedVerbIndex = (expandedVerbIndex === index) ? -1 : index;
  renderVerbs();
}

function filterVerbs() {
  handleVerbSearch();
}

// ---- AUDIO TEXT-TO-SPEECH (TTS) ----
// Buscador y valorador de voces para priorizar las voces "Neurales / Naturales"
function getVoiceScore(name) {
  let score = 0;
  const n = name.toLowerCase();
  if (n.includes('natural')) score += 100;
  if (n.includes('neural')) score += 90;
  if (n.includes('google')) score += 80;
  if (n.includes('online')) score += 70;
  if (n.includes('aria') || n.includes('guy') || n.includes('jenny')) score += 50;
  if (n.includes('samantha') || n.includes('alex') || n.includes('daniel')) score += 40;
  if (n.includes('zira')) score += 10;
  if (n.includes('david')) score += 5;
  return score;
}

function getBestEnglishVoice() {
  if (!window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();

  // Filtrar voces en inglés (en-US, en-GB, etc.)
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (enVoices.length === 0) return null;

  // Ordenar voces dando prioridad a las más naturales y humanas
  return enVoices.sort((a, b) => {
    return getVoiceScore(b.name) - getVoiceScore(a.name);
  })[0];
}

// Precalentar la lista de voces en segundo plano al cargar
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices(); // Dispara la carga inicial en el navegador
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices(); // Asegura el listado una vez cargado
  };
}

function speak(text, event) {
  if (event) event.stopPropagation(); // Evita abrir/cerrar acordeones o voltear flashcards

  if (!window.speechSynthesis) {
    console.warn("La síntesis de voz no es compatible con este navegador.");
    return;
  }

  // Cancelar audio previo para evitar superposiciones
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; // Pronunciación estándar en inglés americano

  // Buscar la mejor voz humana disponible
  const bestVoice = getBestEnglishVoice();
  if (bestVoice) {
    utterance.voice = bestVoice;

    // Si es una voz premium (natural/neural/online), la dejamos a velocidad humana normal (1.0).
    // Si es una voz más antigua/robótica, la ralentizamos un poco (0.92) para que sea clara.
    const isPremium = getVoiceScore(bestVoice.name) >= 50;
    utterance.rate = isPremium ? 0.98 : 0.92;
  } else {
    utterance.rate = 0.95;
  }

  window.speechSynthesis.speak(utterance);
}

// Lógica de audio para las flashcards en inglés
function speakFlashcard(index, event) {
  if (event) event.stopPropagation();
  const f = flashcardsData[index];
  speak(f.a);
}

// ============================================================
// RÁFAGA DE VERBOS (VERB BLAST) GAME LOGIC
// ============================================================
let vbCurrentVerb = null;
let vbStreak = 0;
let vbTimer = null;
let vbTimeAttackTimer = null;
let vbTimeLeft = 0;
let vbTotalTimeLeft = 0;
let vbMaxTime = 10; // default 10 seconds for Sudden Death individual timer
let vbUsedVerbs = [];

// Advanced Setup Parameters
let vbGameMode = 'sudden-death'; // 'sudden-death' or 'time-attack'
let vbFormat = 'mixed';          // 'mixed', 'typing', 'options'
let vbCurrentGrammar = null;

// Question-specific active states
let vbActiveQuestionFormat = 'typing';  // 'typing' or 'options'
let vbActiveQuestionType = 'past';      // 'past', 'present', 'translation'

const VB_INTERVAL = 100; // tick interval in ms for smooth 60fps animations

function initVerbBlast() {
  // Load dual records from localStorage
  const sdRecord = Number(localStorage.getItem('guia_ingles_vb_record') || 0);
  const taRecord = Number(localStorage.getItem('guia_ingles_vb_timeattack_record') || 0);

  const sdValEl = document.getElementById('vb-record-value');
  if (sdValEl) sdValEl.textContent = sdRecord;

  const taValEl = document.getElementById('vb-record-value-ta');
  if (taValEl) taValEl.textContent = taRecord;

  // Reset setup configuration visually to reflect global parameters
  syncSetupUI();

  // Reset screen visibility
  document.getElementById('vb-start-screen').style.display = 'block';
  document.getElementById('vb-start-screen').classList.add('active');
  document.getElementById('vb-game-screen').style.display = 'none';
  document.getElementById('vb-game-screen').classList.remove('active');
  document.getElementById('vb-over-screen').style.display = 'none';
  document.getElementById('vb-over-screen').classList.remove('active');

  // Clear any active timers
  clearVbTimers();
}

function syncSetupUI() {
  // 1. Game Mode Buttons
  document.querySelectorAll('#btn-mode-sd, #btn-mode-ta').forEach(b => b.classList.remove('active'));
  const modeBtn = vbGameMode === 'sudden-death' ? document.getElementById('btn-mode-sd') : document.getElementById('btn-mode-ta');
  if (modeBtn) modeBtn.classList.add('active');

  // Toggle individual difficulty row
  const diffRow = document.getElementById('vb-difficulty-row');
  if (diffRow) {
    diffRow.style.display = vbGameMode === 'sudden-death' ? 'flex' : 'none';
  }

  // 2. Answer Format Buttons
  document.querySelectorAll('#btn-format-mixed, #btn-format-typing, #btn-format-options').forEach(b => b.classList.remove('active'));
  let formatBtnId = 'btn-format-mixed';
  if (vbFormat === 'typing') formatBtnId = 'btn-format-typing';
  if (vbFormat === 'options') formatBtnId = 'btn-format-options';
  const formatBtn = document.getElementById(formatBtnId);
  if (formatBtn) formatBtn.classList.add('active');
}

function setVbGameMode(mode, btn) {
  vbGameMode = mode;
  syncSetupUI();
}

function setVbFormat(format, btn) {
  vbFormat = format;
  syncSetupUI();
}



function setVbDifficulty(seconds, btn) {
  vbMaxTime = seconds;
  document.querySelectorAll('.vb-diff-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function clearVbTimers() {
  if (vbTimer) {
    clearInterval(vbTimer);
    vbTimer = null;
  }
  if (vbTimeAttackTimer) {
    clearInterval(vbTimeAttackTimer);
    vbTimeAttackTimer = null;
  }
}

function startVerbBlast() {
  vbStreak = 0;
  vbUsedVerbs = [];
  clearVbTimers();

  const timerIcon = document.getElementById('vb-timer-icon');
  if (timerIcon) timerIcon.style.display = 'none';

  document.getElementById('vb-streak-val').textContent = '0';
  document.getElementById('vb-start-screen').style.display = 'none';
  document.getElementById('vb-start-screen').classList.remove('active');
  document.getElementById('vb-over-screen').style.display = 'none';
  document.getElementById('vb-over-screen').classList.remove('active');

  document.getElementById('vb-game-screen').style.display = 'block';
  document.getElementById('vb-game-screen').classList.add('active');

  // Configure UI headers depending on Mode
  const streakIcon = document.getElementById('vb-streak-icon-lbl');
  const streakText = document.getElementById('vb-streak-text-lbl');
  const numericTimer = document.getElementById('vb-timer-numeric');

  if (vbGameMode === 'time-attack') {
    if (streakIcon) streakIcon.textContent = '🎯';
    if (streakText) streakText.textContent = 'Aciertos';
    if (numericTimer) {
      numericTimer.style.display = 'block';
      document.getElementById('vb-timer-numeric-val').textContent = '60';
    }

    // Start Global Time Attack Timer
    vbTotalTimeLeft = 60000; // 60 seconds global
    startTimeAttackGlobalTimer();
  } else {
    // Sudden Death
    if (streakIcon) streakIcon.textContent = '🔥';
    if (streakText) streakText.textContent = 'Racha';
    if (numericTimer) numericTimer.style.display = 'none';
  }

  nextVerbBlast();
}

function startTimeAttackGlobalTimer() {
  const timerBar = document.getElementById('vb-timer-bar');
  const numericTimerVal = document.getElementById('vb-timer-numeric-val');

  if (vbTimeAttackTimer) {
    clearInterval(vbTimeAttackTimer);
  }

  vbTimeAttackTimer = setInterval(() => {
    vbTotalTimeLeft -= VB_INTERVAL;

    if (vbTotalTimeLeft <= 0) {
      clearVbTimers();
      if (timerBar) timerBar.style.width = '0%';
      if (numericTimerVal) numericTimerVal.textContent = '0';
      endVerbBlast(true); // Game Over by time-out
      return;
    }

    // Update Global Numeric and Progress Bar
    const secondsLeft = Math.ceil(vbTotalTimeLeft / 1000);
    if (numericTimerVal) numericTimerVal.textContent = secondsLeft;

    const pct = (vbTotalTimeLeft / 60000) * 100;
    if (timerBar) {
      timerBar.style.width = pct + '%';

      // Color coding
      if (pct > 50) {
        timerBar.style.backgroundColor = 'var(--accent)';
        timerBar.style.boxShadow = '0 0 10px var(--accent)';
      } else if (pct > 25) {
        timerBar.style.backgroundColor = 'var(--accent4)';
        timerBar.style.boxShadow = '0 0 10px var(--accent4)';
      } else {
        timerBar.style.backgroundColor = 'var(--accent3)';
        timerBar.style.boxShadow = '0 0 10px var(--accent3)';
      }
    }
  }, VB_INTERVAL);
}

function nextVerbBlast() {
  // 1. Determine Dynamic Question Format
  // 1. Determine if this is a Grammar Question or a Verb Question
  const isGrammar = Math.random() > 0.5;

  if (isGrammar) {
    vbCurrentGrammar = quizData[Math.floor(Math.random() * quizData.length)];
    vbActiveQuestionFormat = 'options'; // Grammar is always options
    vbActiveQuestionType = 'grammar';
  } else {
    vbCurrentGrammar = null;

    // Determine Dynamic Question Format
    if (vbFormat === 'mixed') {
      vbActiveQuestionFormat = Math.random() > 0.5 ? 'typing' : 'options';
    } else {
      vbActiveQuestionFormat = vbFormat;
    }

    // Question type is always mixed for verbs now
    const r = Math.random();
    if (r < 0.34) {
      vbActiveQuestionType = 'past';
    } else if (r < 0.67) {
      vbActiveQuestionType = 'present';
    } else {
      vbActiveQuestionType = 'translation';
    }

    // Pick random verb without consecutive repeats
    let availableVerbs = irregularVerbs;
    if (vbUsedVerbs.length >= irregularVerbs.length) {
      vbUsedVerbs = [];
    }
    if (vbUsedVerbs.length > 0) {
      availableVerbs = irregularVerbs.filter(v => !vbUsedVerbs.includes(v[0]));
    }
    const randomIndex = Math.floor(Math.random() * availableVerbs.length);
    vbCurrentVerb = availableVerbs[randomIndex];
    vbUsedVerbs.push(vbCurrentVerb[0]);
  }

  // 4. Render Prompt Instruction and Question Text
  const promptEl = document.getElementById('vb-question-prompt');
  const verbPresEl = document.getElementById('vb-verb-present');
  const verbTransEl = document.getElementById('vb-verb-translation');

  if (vbCurrentGrammar) {
    if (promptEl) promptEl.textContent = 'GRAMÁTICA: ' + vbCurrentGrammar.cat;
    if (verbPresEl) {
      verbPresEl.textContent = vbCurrentGrammar.q;
      verbPresEl.classList.add('vb-grammar-sentence');
    }
    if (verbTransEl) verbTransEl.textContent = '';
  } else {
    if (verbPresEl) verbPresEl.classList.remove('vb-grammar-sentence');

    if (vbActiveQuestionType === 'past') {
      if (promptEl) promptEl.textContent = '¿Cuál es el PASADO SIMPLE de...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[0];
      if (verbTransEl) verbTransEl.textContent = vbCurrentVerb[5] || '';
    } else if (vbActiveQuestionType === 'present') {
      if (promptEl) promptEl.textContent = '¿Cuál es el PRESENTE (Infinitivo) de...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[1];
      if (verbTransEl) verbTransEl.textContent = vbCurrentVerb[5] || '';
    } else {
      if (promptEl) promptEl.textContent = '¿Cómo se traduce al INGLÉS...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[5] || '';
      if (verbTransEl) verbTransEl.textContent = '';
    }
  }

  // 5. Render Response Format UI
  const typingWrap = document.getElementById('vb-input-wrapper');
  const optionsGrid = document.getElementById('vb-options-container');

  if (vbActiveQuestionFormat === 'typing') {
    if (optionsGrid) optionsGrid.style.display = 'none';
    if (typingWrap) typingWrap.style.display = 'block';

    const inputEl = document.getElementById('vb-input');
    if (inputEl) {
      inputEl.value = '';
      let placeholderText = 'Escribí aquí...';
      if (vbActiveQuestionType === 'past') placeholderText = 'Escribí el pasado simple...';
      if (vbActiveQuestionType === 'present') placeholderText = 'Escribí el infinitivo...';
      if (vbActiveQuestionType === 'translation') placeholderText = 'Escribí el verbo en inglés...';
      inputEl.placeholder = placeholderText;

      // Auto-focus input
      setTimeout(() => inputEl.focus(), 50);
    }
  } else {
    // Options Format
    if (typingWrap) typingWrap.style.display = 'none';
    if (optionsGrid) {
      optionsGrid.style.display = 'grid';
      optionsGrid.innerHTML = ''; // Clear previous buttons

      // Get correct value based on question type
      let correctVal = getCorrectAnswerForActiveType();

      let allOpts = [];
      if (vbCurrentGrammar) {
        // Grammar options are already defined in the dataset
        allOpts = [...vbCurrentGrammar.opts];
        // Don't shuffle grammar opts as some might have "All of the above" etc, or we can shuffle if we want.
        // Actually, let's shuffle them just in case, but keep it simple:
        shuffleArray(allOpts);
      } else {
        // Generate distractors for verbs
        const distractors = generateVbDistractors(correctVal, vbActiveQuestionType);
        // Combine and shuffle
        allOpts = shuffleArray([correctVal, ...distractors]);
      }

      // Render option buttons
      allOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'vb-option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkVbOptionAnswer(opt);
        optionsGrid.appendChild(btn);
      });
    }
  }

  // 6. Setup Individual Timer (only in Sudden Death)
  if (vbGameMode === 'sudden-death') {
    vbTimeLeft = vbMaxTime * 1000;
    const timerBar = document.getElementById('vb-timer-bar');
    if (timerBar) {
      timerBar.style.width = '100%';
      timerBar.style.backgroundColor = 'var(--accent)';
      timerBar.style.boxShadow = '0 0 10px var(--accent)';
    }
    startSuddenDeathIndividualTimer();
  }
}

function getCorrectAnswerForActiveType() {
  if (vbCurrentGrammar) {
    return vbCurrentGrammar.opts[vbCurrentGrammar.correct];
  }
  if (vbActiveQuestionType === 'past') {
    return vbCurrentVerb[1]; // Simple past conjugation
  } else if (vbActiveQuestionType === 'present') {
    return vbCurrentVerb[0]; // Infinitive present form
  } else if (vbActiveQuestionType === 'translation') {
    return vbCurrentVerb[5]; // Translation
  }
  return vbCurrentVerb[0];
}

function generateVbDistractors(correctVal, type) {
  const distractors = [];
  const fieldIndex = type === 'past' ? 1 : 0; // Past simple is field 1, Infinitive is field 0

  // Pick unique candidate forms
  const candidates = irregularVerbs
    .map(v => v[fieldIndex])
    .filter(val => val && val.toLowerCase() !== correctVal.toLowerCase());

  const uniqueCandidates = [...new Set(candidates)];
  while (distractors.length < 3 && uniqueCandidates.length > 0) {
    const idx = Math.floor(Math.random() * uniqueCandidates.length);
    const chosen = uniqueCandidates.splice(idx, 1)[0];
    distractors.push(chosen);
  }

  return distractors;
}

function startSuddenDeathIndividualTimer() {
  if (vbTimer) {
    clearInterval(vbTimer);
  }

  const timerBar = document.getElementById('vb-timer-bar');

  vbTimer = setInterval(() => {
    vbTimeLeft -= VB_INTERVAL;

    if (vbTimeLeft <= 0) {
      clearInterval(vbTimer);
      vbTimer = null;
      if (timerBar) timerBar.style.width = '0%';
      endVerbBlast(true); // Sudden death over by individual timeout
      return;
    }

    const pct = (vbTimeLeft / (vbMaxTime * 1000)) * 100;
    if (timerBar) {
      timerBar.style.width = pct + '%';

      // Color coding shifts
      if (pct > 50) {
        timerBar.style.backgroundColor = 'var(--accent)';
        timerBar.style.boxShadow = '0 0 10px var(--accent)';
      } else if (pct > 20) {
        timerBar.style.backgroundColor = 'var(--accent4)';
        timerBar.style.boxShadow = '0 0 10px var(--accent4)';
      } else {
        timerBar.style.backgroundColor = 'var(--accent3)';
        timerBar.style.boxShadow = '0 0 10px var(--accent3)';
      }
    }
  }, VB_INTERVAL);
}

function handleVbInputKey(e) {
  if (e.key === 'Enter') {
    const inputEl = document.getElementById('vb-input');
    const val = inputEl ? inputEl.value : '';
    processVbSubmission(val);
  }
}

function checkVbOptionAnswer(selectedOpt) {
  processVbSubmission(selectedOpt);
}

function processVbSubmission(userInputVal) {
  // Stop individual timer if Sudden Death
  if (vbGameMode === 'sudden-death' && vbTimer) {
    clearInterval(vbTimer);
    vbTimer = null;
  }

  const cleanInput = userInputVal.trim().toLowerCase();
  let correctVal = getCorrectAnswerForActiveType();

  // Smart split for slash answers (e.g. was/were matches if user writes either one)
  const possibleAnswers = correctVal.toLowerCase().split('/').map(a => a.trim());
  const isCorrect = possibleAnswers.includes(cleanInput);

  const overlay = document.getElementById('vb-flash-overlay');

  if (isCorrect) {
    // Correct Answer Visual Flash
    if (overlay) {
      overlay.className = 'vb-flash-overlay correct-flash-active';
      setTimeout(() => { overlay.className = 'vb-flash-overlay'; }, 200);
    }

    // Increment points
    vbStreak++;
    document.getElementById('vb-streak-val').textContent = vbStreak;

    // Load next verb immediately after transition
    setTimeout(nextVerbBlast, 200);
  } else {
    // Incorrect Answer Visual Flash
    if (overlay) {
      overlay.className = 'vb-flash-overlay wrong-flash-active';
      setTimeout(() => { overlay.className = 'vb-flash-overlay'; }, 200);
    }

    if (vbGameMode === 'sudden-death') {
      // Sudden Death: Mistake ends the game immediately
      setTimeout(() => {
        endVerbBlast(false, userInputVal);
      }, 200);
    } else {
      // Time Attack: Mistake subtracts 2 seconds and skips
      const penaltyEl = document.getElementById('vb-penalty-float');
      if (penaltyEl) {
        penaltyEl.style.display = 'block';
        void penaltyEl.offsetWidth; // force layout reflow to trigger animation
        setTimeout(() => { penaltyEl.style.display = 'none'; }, 800);
      }

      vbTotalTimeLeft = Math.max(0, vbTotalTimeLeft - 1000); // subtract 1 second

      // Skip to next question immediately
      setTimeout(nextVerbBlast, 200);
    }
  }
}

function endVerbBlast(isTimeout, wrongAnswer = '') {
  clearVbTimers();

  const timerIcon = document.getElementById('vb-timer-icon');
  if (timerIcon) {
    timerIcon.style.display = 'flex';
    const timerBar = document.getElementById('vb-timer-bar');
    if (timerBar && timerBar.style.width) {
      timerIcon.style.left = timerBar.style.width;
    } else {
      timerIcon.style.left = '0%';
    }

    if (vbGameMode === 'time-attack') {
      timerIcon.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="2" fill="#e0e0e0"/><rect x="3" y="4" width="10" height="7" fill="#e0e0e0"/><rect x="4" y="11" width="8" height="2" fill="#e0e0e0"/><rect x="6" y="13" width="4" height="1" fill="#e0e0e0"/><rect x="4" y="5" width="2" height="2" fill="#111111"/><rect x="10" y="5" width="2" height="2" fill="#111111"/><rect x="7" y="3" width="2" height="2" fill="#cc0000"/><rect x="4" y="8" width="2" height="1" fill="#cc0000"/><rect x="10" y="8" width="2" height="1" fill="#cc0000"/><rect x="7" y="11" width="2" height="1" fill="#111111"/><rect x="5" y="10" width="1" height="1" fill="#111111"/><rect x="10" y="10" width="1" height="1" fill="#111111"/></svg>`;
    } else {
      timerIcon.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect x="7" y="1" width="2" height="2" fill="#ff9900"/><rect x="3" y="3" width="2" height="2" fill="#ff4400"/><rect x="11" y="3" width="2" height="2" fill="#ff4400"/><rect x="6" y="5" width="4" height="4" fill="#ffff00"/><rect x="2" y="7" width="2" height="2" fill="#ff9900"/><rect x="12" y="7" width="2" height="2" fill="#ff9900"/><rect x="4" y="10" width="2" height="2" fill="#ff0000"/><rect x="10" y="10" width="2" height="2" fill="#ff0000"/><rect x="7" y="12" width="2" height="2" fill="#ff9900"/><rect x="7" y="6" width="2" height="2" fill="#ffffff"/></svg>`;
    }
  }

  // Select key and scores according to mode
  const recordKey = vbGameMode === 'sudden-death' ? 'guia_ingles_vb_record' : 'guia_ingles_vb_timeattack_record';
  const record = Number(localStorage.getItem(recordKey) || 0);
  let isNewRecord = false;

  if (vbStreak > record) {
    localStorage.setItem(recordKey, vbStreak);
    isNewRecord = true;
    triggerConfetti();
  }

  // Update Game Over score labels
  const scoreLbl = document.getElementById('vb-over-score-lbl');
  if (scoreLbl) {
    scoreLbl.textContent = vbGameMode === 'sudden-death' ? 'Racha Alcanzada' : 'Aciertos Logrados';
  }

  document.getElementById('vb-over-streak').textContent = vbStreak;
  document.getElementById('vb-over-record').textContent = isNewRecord ? vbStreak : record;

  const newRecordBanner = document.getElementById('vb-over-new-record');
  if (newRecordBanner) {
    newRecordBanner.style.display = isNewRecord ? 'inline-block' : 'none';
  }

  // Update icons and titles for Time Attack Game Over
  const overIcon = document.getElementById('vb-over-icon');
  const overTitle = document.getElementById('vb-over-title');
  if (vbGameMode === 'time-attack') {
    if (overIcon) overIcon.textContent = '⏱️';
    if (overTitle) overTitle.textContent = '¡TIEMPO AGOTADO!';
  } else {
    if (overIcon) overIcon.textContent = '💥';
    if (overTitle) overTitle.textContent = 'FIN DE LA RÁFAGA';
  }

  // Render error/failure details
  const errorDetailsEl = document.getElementById('vb-error-details');
  if (errorDetailsEl && (vbCurrentVerb || vbCurrentGrammar)) {
    if (vbGameMode === 'sudden-death') {
      let failureMsg = isTimeout
        ? '¡Se acabó el tiempo! ⏰ Te demoraste demasiado.'
        : '¡Respuesta incorrecta! ❌';

      let correctVal = getCorrectAnswerForActiveType();

      let promptTitle = 'Pregunta:';
      let promptVal = '';
      if (vbCurrentGrammar) {
        promptVal = `<span class="vb-error-val" style="color:var(--text); font-size:0.9rem;">[${vbCurrentGrammar.cat}] ${vbCurrentGrammar.q}</span>`;
      } else {
        promptTitle = vbActiveQuestionType === 'translation' ? 'Verbo en inglés:' : 'Significado:';
        promptVal = `<span class="vb-error-val" style="color:var(--text);">${vbActiveQuestionType === 'past' ? `Pasado de "${vbCurrentVerb[0]}"` : vbActiveQuestionType === 'present' ? `Presente de "${vbCurrentVerb[1]}"` : `Traducción de "${vbCurrentVerb[5]}"`}</span>`;
      }

      let extraInfo = '';
      if (vbCurrentGrammar) {
        extraInfo = `
        <div class="vb-error-row" style="margin-top: 0.8rem; border-top: 1px dashed var(--border); padding-top: 0.6rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Explicación:</span>
          <span style="font-family:var(--body); color:var(--text); font-size:0.9rem;">${vbCurrentGrammar.exp || ''}</span>
        </div>`;
      } else {
        extraInfo = `
        <div class="vb-error-row" style="margin-top: 0.8rem; border-top: 1px dashed var(--border); padding-top: 0.6rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Pronunciación del infinitivo:</span>
          <span style="font-family:var(--mono); color:var(--accent2); font-size:0.85rem;">${vbCurrentVerb[2] || ''}</span>
        </div>
        <div class="vb-error-row" style="margin-top: 0.4rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Ejemplo:</span>
          <span style="font-style:italic; color:var(--text-muted); font-size:0.85rem;">"${vbCurrentVerb[3] || ''}"</span>
        </div>`;
      }

      errorDetailsEl.innerHTML = `
        <div class="vb-error-title">
          ${getIcon('alert-circle', 18)} ${failureMsg}
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">${promptTitle}</span>
          ${promptVal}
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">Tu respuesta:</span>
          <span class="vb-error-val" style="color:var(--accent3);">${isTimeout ? 'Ninguna (Sin tiempo)' : (wrongAnswer || 'Vacío')}</span>
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">Correcto:</span>
          <span class="vb-error-val" style="color:var(--accent); font-size: 1.1rem; text-decoration: underline;">${correctVal}</span>
        </div>
        ${extraInfo}
      `;
    } else {
      // Time Attack results details
      let lastQuestionInfo = '';
      if (vbCurrentGrammar) {
        lastQuestionInfo = `
          <span style="font-weight:bold; color:var(--text); display:block; margin-bottom: 4px;">Última pregunta en pantalla:</span>
          • Tema: <strong>${vbCurrentGrammar.cat}</strong><br>
          • Pregunta: ${vbCurrentGrammar.q}<br>
          • Respuesta: <strong>${getCorrectAnswerForActiveType()}</strong>
        `;
      } else {
        lastQuestionInfo = `
          <span style="font-weight:bold; color:var(--text); display:block; margin-bottom: 4px;">Último verbo en pantalla:</span>
          • Infinitivo: <strong>${vbCurrentVerb[0]}</strong> (${vbCurrentVerb[5] || ''})<br>
          • Pasado: <strong>${vbCurrentVerb[1]}</strong><br>
          • Pronunciación: <span style="font-family:var(--mono);">${vbCurrentVerb[2] || ''}</span>
        `;
      }

      errorDetailsEl.innerHTML = `
        <div class="vb-error-title" style="color:var(--accent2);">
          ${getIcon('trophy', 18)} ¡Sesión Finalizada!
        </div>
        <p style="margin-bottom: 0.8rem; line-height: 1.5;">Lograste un total de <strong>${vbStreak}</strong> aciertos en 60 segundos.</p>
        <div style="border-top:1px dashed var(--border); padding-top:0.8rem; font-size:0.85rem; color:var(--text-muted);">
          ${lastQuestionInfo}
        </div>
      `;
    }
  }

  document.getElementById('vb-game-screen').style.display = 'none';
  document.getElementById('vb-game-screen').classList.remove('active');

  document.getElementById('vb-over-screen').style.display = 'block';
  document.getElementById('vb-over-screen').classList.add('active');
}

function exitVerbBlast() {
  clearVbTimers();
  initVerbBlast();
}

// ============================================================
// 6. NAVEGACIÓN Y ENRUTAMIENTO (NAV)
// ============================================================

/**
 * showSection(id, updateHash)
 * Oculta todas las secciones de la página y muestra solo la que tiene el 'id' indicado.
 * También gestiona la inicialización de los juegos al entrar a sus pantallas.
 */
function showSection(id, updateHash = true) {
  const targetSec = document.getElementById(id);
  if (!targetSec) return;

  // Initialize Ráfaga de Verbos if entering that section
  if (id === 'blast') {
    initVerbBlast();
  } else if (id === 'referent-ex') {
    initReferentEx();
  } else if (id === 'synonym-ex') {
    initSynonymEx();
  } else {
    // If leaving blast, clear all timers just in case
    clearVbTimers();
  }

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-btn').forEach(b => b.classList.remove('active'));

  targetSec.classList.add('active');

  document.querySelectorAll(`.nav-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
  document.querySelectorAll(`.mob-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });

  if (updateHash) {
    window.location.hash = id;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Escuchar cambios de hash para navegación histórica

// ============================================================
// 7. LÓGICA DEL EJERCICIO "BUSCAR EL REFERENTE"
// ============================================================

let refCurrentQ = 0; // Pregunta actual del ejercicio de referentes
let refScore = 0; // Puntaje actual
let refCurrentData = []; // Preguntas aleatorias para la sesión

/**
 * initReferentEx()
 * Prepara e inicia el juego de Referentes. Elige 10 preguntas al azar.
 */
function initReferentEx() {
  refCurrentData = shuffleArray([...referentData]).slice(0, 10);
  refCurrentQ = 0;
  refScore = 0;
  renderReferent();
}

function renderReferent() {
  const container = document.getElementById('referentContainer');
  if (refCurrentQ >= refCurrentData.length) {
    const pct = Math.round((refScore / refCurrentData.length) * 100);
    const emoji = pct >= 80 ? getIcon('trophy', 64) : getIcon('check', 64);

    if (pct >= 50) triggerConfetti();

    container.innerHTML = `
      <div class="quiz-result fade-in" style="max-width:600px; margin:0 auto;">
        <div class="quiz-result-emoji">${emoji}</div>
        <h2>¡Práctica Terminada!</h2>
        <div class="quiz-result-score">${refScore}<span>/${refCurrentData.length}</span></div>
        <div class="quiz-result-pct">${pct}% correcto</div>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
          <button class="grammar-back-btn" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0;" onclick="showSection('home')">
            ${getIcon('home')} Inicio
          </button>
          <button class="grammar-back-btn" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0; background:var(--accent); color:#000;" onclick="initReferentEx()">
            Repetir
          </button>
        </div>
      </div>`;
    return;
  }

  const q = refCurrentData[refCurrentQ];
  document.getElementById('refCount').textContent = `${refCurrentQ + 1} / ${refCurrentData.length}`;
  document.getElementById('refProgress').style.width = `${((refCurrentQ + 1) / refCurrentData.length) * 100}%`;
  document.getElementById('refScore').textContent = `✓ ${refScore}`;

  const opts = shuffleArray([...q.options]);

  container.innerHTML = `
    <div class="quiz-card fade-in">
      <div class="quiz-category" style="color:var(--accent2); margin-bottom:1rem; font-weight:bold;">ENCUENTRA EL REFERENTE</div>
      <div class="quiz-question" style="font-size:1.3rem; margin-bottom:2rem;">${q.q}</div>
      <div class="quiz-options">
        ${opts.map((opt, i) => `
          <button class="quiz-option" id="refOpt${i}" onclick="checkReferent('${opt.replace(/'/g, "\\'")}', ${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="refFeedback" class="quiz-feedback" style="display:none; margin-top:1.5rem; text-align:left;"></div>
      <button id="refNextBtn" class="grammar-back-btn" style="display:none; width:100%; justify-content:center; margin-top:1.5rem; padding:1rem; font-weight:bold; background:var(--accent); color:#000;" onclick="advanceReferent()">Siguiente →</button>
    </div>
  `;
}

function checkReferent(selectedOpt, btnIdx) {
  const q = refCurrentData[refCurrentQ];
  const buttons = document.querySelectorAll('#referentContainer .quiz-option');
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.answer) {
      b.classList.add('correct');
    } else if (b.textContent === selectedOpt) {
      b.classList.add('incorrect');
    }
  });

  const fb = document.getElementById('refFeedback');
  fb.style.display = 'block';

  if (selectedOpt === q.answer) {
    refScore++;
    document.getElementById('refScore').textContent = `✓ ${refScore}`;
    fb.innerHTML = `<div style="color:var(--accent); font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">${getIcon('check')} ¡Correcto!</div><div style="font-size:0.9rem; color:var(--text);">${q.exp}</div>`;
  } else {
    fb.innerHTML = `<div style="color:var(--accent3); font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">${getIcon('x')} Incorrecto</div><div style="font-size:0.9rem; color:var(--text);">${q.exp}</div>`;
  }

  document.getElementById('refNextBtn').style.display = 'flex';
}

function advanceReferent() {
  const card = document.querySelector('#referentContainer .quiz-card');
  if (card) {
    card.classList.add('quiz-slide-out');
    setTimeout(() => {
      refCurrentQ++;
      renderReferent();
    }, 260);
  } else {
    refCurrentQ++;
    renderReferent();
  }
}

// ============================================================
// 8. LÓGICA DEL EJERCICIO "SINÓNIMOS Y ANTÓNIMOS"
// ============================================================

let synCurrentQ = 0; // Pregunta actual del ejercicio de sinónimos
let synScore = 0; // Puntaje actual
let synCurrentData = []; // Preguntas aleatorias para la sesión

/**
 * initSynonymEx()
 * Prepara e inicia el juego de Sinónimos/Antónimos. Elige 10 preguntas al azar.
 */
function initSynonymEx() {
  synCurrentData = shuffleArray([...synonymData]).slice(0, 10);
  synCurrentQ = 0;
  synScore = 0;
  renderSynonym();
}

function renderSynonym() {
  const container = document.getElementById('synonymContainer');
  if (synCurrentQ >= synCurrentData.length) {
    const pct = Math.round((synScore / synCurrentData.length) * 100);
    const emoji = pct >= 80 ? getIcon('trophy', 64) : getIcon('check', 64);

    if (pct >= 50) triggerConfetti();

    container.innerHTML = `
      <div class="quiz-result fade-in" style="max-width:600px; margin:0 auto;">
        <div class="quiz-result-emoji">${emoji}</div>
        <h2>¡Práctica Terminada!</h2>
        <div class="quiz-result-score">${synScore}<span>/${synCurrentData.length}</span></div>
        <div class="quiz-result-pct">${pct}% correcto</div>
        <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
          <button class="grammar-back-btn" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0;" onclick="showSection('home')">
            ${getIcon('home')} Inicio
          </button>
          <button class="grammar-back-btn" style="display:inline-flex; align-items:center; gap:0.5rem; margin-bottom:0; background:var(--accent); color:#000;" onclick="initSynonymEx()">
            Repetir
          </button>
        </div>
      </div>`;
    return;
  }

  const q = synCurrentData[synCurrentQ];
  document.getElementById('synCount').textContent = `${synCurrentQ + 1} / ${synCurrentData.length}`;
  document.getElementById('synProgress').style.width = `${((synCurrentQ + 1) / synCurrentData.length) * 100}%`;
  document.getElementById('synScore').textContent = `✓ ${synScore}`;

  const opts = shuffleArray([...q.options]);
  const typeText = q.type === 'synonym' ? 'SINÓNIMO (Synonym)' : 'ANTÓNIMO (Antonym)';
  const typeColor = q.type === 'synonym' ? 'var(--accent)' : 'var(--accent3)';

  container.innerHTML = `
    <div class="quiz-card fade-in">
      <div class="quiz-category" style="color:${typeColor}; margin-bottom:1rem; font-weight:bold;">BUSCAR ${typeText}</div>
      <div class="quiz-question" style="font-size:2rem; text-align:center; margin-bottom:0.5rem; font-family:var(--display);">${q.word}</div>
      <div style="text-align:center; margin-bottom:2rem; color:var(--text-muted); font-size:0.95rem;">
        ¿Cuál es el ${q.type === 'synonym' ? 'sinónimo' : 'antónimo'} de esta palabra?
      </div>
      <div class="quiz-options">
        ${opts.map((opt, i) => `
          <button class="quiz-option" id="synOpt${i}" onclick="checkSynonym('${opt.replace(/'/g, "\\'")}', ${i})">${opt}</button>
        `).join('')}
      </div>
      <div id="synFeedback" class="quiz-feedback" style="display:none; margin-top:1.5rem; text-align:left;"></div>
      <button id="synNextBtn" class="grammar-back-btn" style="display:none; width:100%; justify-content:center; margin-top:1.5rem; padding:1rem; font-weight:bold; background:var(--accent); color:#000;" onclick="advanceSynonym()">Siguiente →</button>
    </div>
  `;
}

function checkSynonym(selectedOpt, btnIdx) {
  const q = synCurrentData[synCurrentQ];
  const buttons = document.querySelectorAll('#synonymContainer .quiz-option');
  buttons.forEach(b => {
    b.disabled = true;
    if (b.textContent === q.answer) {
      b.classList.add('correct');
    } else if (b.textContent === selectedOpt) {
      b.classList.add('incorrect');
    }
  });

  const fb = document.getElementById('synFeedback');
  fb.style.display = 'block';

  if (selectedOpt === q.answer) {
    synScore++;
    document.getElementById('synScore').textContent = `✓ ${synScore}`;
    fb.innerHTML = `<div style="color:var(--accent); font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">${getIcon('check')} ¡Correcto!</div><div style="font-size:0.9rem; color:var(--text);">${q.exp}</div>`;
  } else {
    fb.innerHTML = `<div style="color:var(--accent3); font-weight:bold; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">${getIcon('x')} Incorrecto</div><div style="font-size:0.9rem; color:var(--text);">${q.exp}</div>`;
  }

  document.getElementById('synNextBtn').style.display = 'flex';
}

function advanceSynonym() {
  const card = document.querySelector('#synonymContainer .quiz-card');
  if (card) {
    card.classList.add('quiz-slide-out');
    setTimeout(() => {
      synCurrentQ++;
      renderSynonym();
    }, 260);
  } else {
    synCurrentQ++;
    renderSynonym();
  }
}

// Escuchar cambios de hash para navegación histórica
window.addEventListener('hashchange', () => {
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash) {
    showSection(currentHash, false);
  } else {
    showSection('home', false);
  }
});

function toggleMode() {
  document.body.classList.toggle('light-mode');
  const btn = document.querySelector('.toggle-mode');
  btn.innerHTML = document.body.classList.contains('light-mode') ? getIcon('moon') : getIcon('sun');
}

function triggerConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  // Harmonious theme-aligned colors (accent, accent2, accent3, accent4, etc.)
  const colors = ['#00ff88', '#00bfff', '#ff6b6b', '#ffd93d', '#a78bfa', '#ff00ff'];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    const left = Math.random() * 100;
    const delay = Math.random() * 2.2; // Staggered start times
    const duration = 2.2 + Math.random() * 1.8; // Falling speed variations
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 8; // Size range 6px to 14px
    const isRound = Math.random() > 0.4; // Circular and rectangular pieces

    piece.style.left = `${left}%`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.backgroundColor = color;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    if (isRound) {
      piece.style.borderRadius = '50%';
    }

    container.appendChild(piece);
  }

  // Cleanup after all animations have ended
  setTimeout(() => {
    container.remove();
  }, 4500);
}


// ---- INIT ----
renderTopics();
renderFlashcardControls();
renderFlashcards();
renderVerbControls();
renderVerbs();
initQuiz();

// Sincronizar sección inicial según hash al cargar
const initialHash = window.location.hash.replace('#', '');
if (initialHash) {
  setTimeout(() => {
    showSection(initialHash, false);
  }, 100);
}

function initStats() {
  const statTopics = document.getElementById('stat-topics');
  if (statTopics) statTopics.textContent = topics.length;

  const statFc = document.getElementById('stat-flashcards');
  if (statFc) statFc.textContent = flashcardsData.length;

  const statQuiz = document.getElementById('stat-quiz');
  if (statQuiz) statQuiz.textContent = quizData.length;

  const statVerbs = document.getElementById('stat-verbs');
  if (statVerbs) statVerbs.textContent = irregularVerbs.length;

  // Cargar y mostrar el record histórico
  const recordRaw = localStorage.getItem('guia_ingles_quiz_record');
  const recordCard = document.getElementById('record-card');
  const recordTitle = document.getElementById('record-title');
  const recordCorrect = document.getElementById('record-correct');
  const recordIncorrect = document.getElementById('record-incorrect');

  if (recordRaw && recordCard) {
    try {
      const data = JSON.parse(recordRaw);
      if (recordTitle) recordTitle.textContent = `${data.pct}%`;
      if (recordCorrect) recordCorrect.textContent = data.correct;
      if (recordIncorrect) recordIncorrect.textContent = data.incorrect;
      recordCard.style.display = 'flex';
    } catch (e) {
      // Formato viejo (solo un número)
      if (recordTitle) recordTitle.textContent = `${recordRaw}%`;
      if (recordCorrect) recordCorrect.textContent = '-';
      if (recordIncorrect) recordIncorrect.textContent = '-';
      recordCard.style.display = 'flex';
    }
  } else if (recordCard) {
    if (recordTitle) recordTitle.textContent = `0%`;
    if (recordCorrect) recordCorrect.textContent = '0';
    if (recordIncorrect) recordIncorrect.textContent = '0';
    recordCard.style.display = 'flex';
  }
}

function initDailyVerb() {
  const title = document.getElementById('daily-verb-title');
  const desc = document.getElementById('daily-verb-desc');
  if (!title || !desc || typeof irregularVerbs === 'undefined' || irregularVerbs.length === 0) return;

  // Use today's date to pick a consistent random verb for the day
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const index = seed % irregularVerbs.length;
  const verb = irregularVerbs[index];

  title.textContent = verb[0].charAt(0).toUpperCase() + verb[0].slice(1);
  desc.innerHTML = `Past: ${verb[1]} &bull; ${verb[5]}`;
}

initStats();
initDailyVerb();