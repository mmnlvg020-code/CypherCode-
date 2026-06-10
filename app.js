// ============================================================================
// CYPHERCODE CYBERPUNK APPLICATION LOGIC
// Core engine for Matrix rain, SPA navigation, databases, and gamified tools.
// ============================================================================

// Símbolos del lenguaje de programación que caerán como lluvia de Matrix
const SYMBOLS = ['int', 'void', 'class', 'new', 'for', 'if', 'else', 'return', 'public', 'private', 'static', 'String', 'boolean', 'double', 'true', 'false', 'null', 'this', '[]', '{}', '()', '==', '!=', '&&', '||', '++', '--', '0', '1', 'import', 'while', 'switch', 'break', 'length', 'println', 'System', 'def', 'print', 'range', 'self', 'var', 'using', 'bool', 'Console'];

// Referencias al canvas de Matrix rain
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Variables de estado de la lluvia
let drops = [];
let cols = 0;
let fontSize = 14;
let animId;
const MAX_COLS = 180;

// Ajusta el canvas al tamaño de la ventana y recalcula columnas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const rawCols = Math.floor(canvas.width / fontSize);
  cols = Math.min(rawCols, MAX_COLS);

  if (!drops.length || drops.length !== cols) {
    drops = Array(cols).fill(0).map(() => -Math.floor(Math.random() * 50));
  }
}

// Control del renderizado y velocidad de la lluvia (RAF + timestamp)
let lastRainTime = 0;
let rainSpeed = 40; // ms por frame
let rainPaused = false;
let rainHidden = false;
let matrixColor = '#00ff41'; // Color verde por defecto

function drawMatrix() {
  ctx.fillStyle = 'rgba(2, 5, 2, 0.16)'; // Fondo negro translúcido para el efecto estela
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px 'Courier New', monospace`;

  for (let i = 0; i < cols; i++) {
    const sym = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    const ch = sym.charAt(0);
    const y = drops[i] * fontSize;

    if (y > 0) {
      // Punta de la gota: Máxima opacidad y color primario del tema
      ctx.fillStyle = matrixColor;
      ctx.globalAlpha = 1.0;
      ctx.fillText(ch, i * fontSize, y);

      // Cola de la gota: Caracteres restantes atenuados
      for (let k = 1; k < Math.min(sym.length, 5); k++) {
        ctx.globalAlpha = Math.max(0.08, 0.55 - k * 0.12);
        ctx.fillStyle = k < 2 ? matrixColor : 'rgba(0,80,0,0.7)';
        if (y - k * fontSize > 0) {
          ctx.fillText(sym.charAt(k), i * fontSize, y - k * fontSize);
        }
      }
      ctx.globalAlpha = 1.0;
    }

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

function rainLoop(timestamp) {
  animId = requestAnimationFrame(rainLoop);
  if (rainPaused) return;
  if (timestamp - lastRainTime < rainSpeed) return;
  lastRainTime = timestamp;
  drawMatrix();
}

resizeCanvas();
rainLoop(0);
window.addEventListener('resize', resizeCanvas);


// ============================================================================
// BASE DE DATOS: CONCEPTOS MULTILENGUAJE (Java, C#, Python)
// ============================================================================
var topics_old = [
  {
    id: 'intro-progra',
    cat: 'Fundamentos',
    label: '¿Qué es Programar?',
    explain: 'Programar es el proceso de diseñar, codificar, depurar y mantener el código fuente de programas computacionales. Consiste en darle instrucciones a la computadora para que resuelva problemas específicos de forma estructurada.',
    analogy: '💡 Escribir código es como redactar una receta de cocina extremadamente detallada para un chef robot que no sabe deducir nada por sí mismo.',
    errors: [
      'Asumir que la computadora entiende el contexto de lo que quieres hacer.',
      'Omitir pasos lógicos obvios, asumiendo que el sistema lo resolverá por sí solo.'
    ],
    code: {
      java: `<span class="code-comment">// En Java todo código vive dentro de una clase</span>
<span class="code-kw">public class</span> <span class="code-type">Main</span> {
    <span class="code-kw">public static void</span> <span class="code-method">main</span>(<span class="code-type">String</span>[] args) {
        <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"¡Hola Mundo!"</span>);
    }
}`,
      csharp: `<span class="code-comment">// En C# moderno se puede usar Top-Level Statements o clases</span>
<span class="code-kw">using</span> <span class="code-type">System</span>;

<span class="code-kw">class</span> <span class="code-type">Program</span> {
    <span class="code-kw">static void</span> <span class="code-method">Main</span>() {
        <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(<span class="code-str">"¡Hola Mundo!"</span>);
    }
}`,
      python: `<span class="code-comment"># Python destaca por su sintaxis simple y directa</span>
<span class="code-method">print</span>(<span class="code-str">"¡Hola Mundo!"</span>)`
    }
  },
  {
    id: 'variables',
    cat: 'Fundamentos',
    label: 'Variables y Tipos',
    explain: 'Una variable es un espacio de memoria reservado para almacenar datos que pueden cambiar durante la ejecución. En lenguajes de tipado fuerte (Java, C#), debes declarar explícitamente el tipo de dato. En Python, el tipo se infiere de forma dinámica.',
    analogy: '💡 Una variable es una caja etiquetada donde puedes guardar un valor (un número, una palabra). El tipo de dato define la forma de la caja (caja para zapatos, caja para libros).',
    errors: [
      'Declarar variables con tipos incompatibles al asignar datos en Java/C#.',
      'Intentar utilizar una variable local antes de haberla declarado o inicializado.'
    ],
    code: {
      java: `<span class="code-comment">// Tipado estático y explícito</span>
<span class="code-kw">int</span> <span class="code-kw">edad</span> = <span class="code-num">20</span>;
<span class="code-type">String</span> <span class="code-kw">nombre</span> = <span class="code-str">"Estudiante"</span>;
<span class="code-kw">double</span> <span class="code-kw">pi</span> = <span class="code-num">3.14159</span>;`,
      csharp: `<span class="code-comment">// Permite tipado explícito o inferido con 'var'</span>
<span class="code-kw">int</span> <span class="code-kw">edad</span> = <span class="code-num">20</span>;
<span class="code-kw">var</span> <span class="code-kw">nombre</span> = <span class="code-str">"Estudiante"</span>;
<span class="code-kw">double</span> <span class="code-kw">pi</span> = <span class="code-num">3.14159</span>;`,
      python: `<span class="code-comment"># Tipado dinámico (sin tipo explícito)</span>
edad = <span class="code-num">20</span>
nombre = <span class="code-str">"Estudiante"</span>
pi = <span class="code-num">3.14159</span>`
    }
  },
  {
    id: 'condicionales',
    cat: 'Control',
    label: 'Estructuras Condicionales',
    explain: 'Permiten bifurcar el flujo de ejecución del programa según se cumpla o no una condición booleana (verdadero o falso).',
    analogy: '💡 Es el equivalente a tomar decisiones: "Si está lloviendo, llevo paraguas; de lo contrario, llevo lentes de sol".',
    errors: [
      'Usar un solo signo "=" en lugar de doble "==" para comparar valores en la condición.',
      'Olvidar los paréntesis obligatorios en la expresión de Java o C#.'
    ],
    code: {
      java: `<span class="code-kw">int</span> n = <span class="code-num">10</span>;
<span class="code-kw">if</span> (n &gt; <span class="code-num">0</span>) {
    <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Positivo"</span>);
} <span class="code-kw">else</span> {
    <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Cero o Negativo"</span>);
}`,
      csharp: `<span class="code-kw">int</span> n = <span class="code-num">10</span>;
<span class="code-kw">if</span> (n &gt; <span class="code-num">0</span>) {
    <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(<span class="code-str">"Positivo"</span>);
} <span class="code-kw">else</span> {
    <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(<span class="code-str">"Cero o Negativo"</span>);
}`,
      python: `<span class="code-kw">n</span> = <span class="code-num">10</span>
<span class="code-kw">if</span> n &gt; <span class="code-num">0</span>:
    <span class="code-method">print</span>(<span class="code-str">"Positivo"</span>)
<span class="code-kw">else</span>:
    <span class="code-method">print</span>(<span class="code-str">"Cero o Negativo"</span>)`
    }
  },
  {
    id: 'bucles',
    cat: 'Control',
    label: 'Bucles (for / while)',
    explain: 'Los bucles permiten repetir un bloque de código un número determinado de veces (for) o mientras se cumpla una condición determinada (while).',
    analogy: '💡 Es como correr vueltas alrededor de una pista de atletismo: corres "for 10 vueltas" o "while no estés cansado".',
    errors: [
      'Crear un bucle infinito al no actualizar la variable de control en un bucle while.',
      'Fuera de rango (off-by-one error) al usar "<=" en lugar de "<" al recorrer un arreglo.'
    ],
    code: {
      java: `<span class="code-comment">// Bucle for clásico en Java</span>
<span class="code-kw">for</span> (<span class="code-kw">int</span> i = <span class="code-num">0</span>; i &lt; <span class="code-num">5</span>; i++) {
    <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Iteración: "</span> + i);
}`,
      csharp: `<span class="code-comment">// Bucle for clásico en C#</span>
<span class="code-kw">for</span> (<span class="code-kw">int</span> i = <span class="code-num">0</span>; i &lt; <span class="code-num">5</span>; i++) {
    <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(<span class="code-str">"Iteración: "</span> + i);
}`,
      python: `<span class="code-comment"># Bucle usando rangos en Python</span>
<span class="code-kw">for</span> i <span class="code-kw">in</span> <span class="code-method">range</span>(<span class="code-num">5</span>):
    <span class="code-method">print</span>(<span class="code-str">f"Iteración: {i}"</span>)`
    }
  },
  {
    id: 'arreglos',
    cat: 'Arreglos',
    label: 'Arreglos (Vectores)',
    explain: 'Un arreglo (array o vector) es una estructura de datos indexada que almacena una colección secuencial de elementos del mismo tipo con un tamaño fijo en Java/C#.',
    analogy: '💡 Un hotel con habitaciones numeradas del 0 al N-1. En cada habitación solo puede hospedarse un tipo específico de persona (ej. solo matemáticos).',
    errors: [
      'Intentar acceder al índice N en un arreglo de tamaño N, arrojando ArrayIndexOutOfBoundsException.',
      'Asumir que los arreglos en Java cambian de tamaño automáticamente.'
    ],
    code: {
      java: `<span class="code-comment">// Declaración de arreglo con tamaño definido</span>
<span class="code-kw">int</span>[] numeros = <span class="code-kw">new int</span>[<span class="code-num">3</span>];
numeros[<span class="code-num">0</span>] = <span class="code-num">10</span>;
numeros[<span class="code-num">1</span>] = <span class="code-num">20</span>;
numeros[<span class="code-num">2</span>] = <span class="code-num">30</span>;`,
      csharp: `<span class="code-comment">// Declaración similar en C#</span>
<span class="code-kw">int</span>[] numeros = <span class="code-kw">new int</span>[<span class="code-num">3</span>] { <span class="code-num">10</span>, <span class="code-num">20</span>, <span class="code-num">30</span> };`,
      python: `<span class="code-comment"># En Python se utilizan Listas (dinámicas por defecto)</span>
numeros = [<span class="code-num">10</span>, <span class="code-num">20</span>, <span class="code-num">30</span>]
numeros.append(<span class="code-num">40</span>) <span class="code-comment"># Crece dinámicamente</span>`
    }
  },
  {
    id: 'matrices',
    cat: 'Arreglos',
    label: 'Matrices (Arreglos 2D)',
    explain: 'Una matriz es un arreglo bidimensional organizado en forma de tabla con filas y columnas, donde se requiere dos índices para acceder a un elemento.',
    analogy: '💡 Una hoja de cálculo (Excel) con filas y columnas, o un tablero de ajedrez donde las coordenadas definen la casilla.',
    errors: [
      'Confundir el orden de los índices: escribir matriz[columna][fila] en lugar de [fila][columna].',
      'Olvidar inicializar las dimensiones internas en arreglos escalonados (jagged arrays).'
    ],
    code: {
      java: `<span class="code-comment">// Matriz de 2x3 (2 filas, 3 columnas)</span>
<span class="code-kw">int</span>[][] matriz = <span class="code-kw">new int</span>[<span class="code-num">2</span>][<span class="code-num">3</span>];
matriz[<span class="code-num">0</span>][<span class="code-num">0</span>] = <span class="code-num">5</span>;
matriz[<span class="code-num">1</span>][<span class="code-num">2</span>] = <span class="code-num">15</span>;`,
      csharp: `<span class="code-comment">// Matriz multidimensional rectangular en C#</span>
<span class="code-kw">int</span>[,] matriz = <span class="code-kw">new int</span>[<span class="code-num">2</span>, <span class="code-num">3</span>];
matriz[<span class="code-num">0</span>, <span class="code-num">0</span>] = <span class="code-num">5</span>;
matriz[<span class="code-num">1</span>, <span class="code-num">2</span>] = <span class="code-num">15</span>;`,
      python: `<span class="code-comment"># En Python se representan como listas anidadas</span>
matriz = [
    [<span class="code-num">1</span>, <span class="code-num">2</span>, <span class="code-num">3</span>],
    [<span class="code-num">4</span>, <span class="code-num">5</span>, <span class="code-num">6</span>]
]
valor = matriz[<span class="code-num">0</span>][<span class="code-num">0</span>] <span class="code-comment"># Acceso</span>`
    }
  },
  {
    id: 'poo',
    cat: 'POO',
    label: 'Clases y Objetos',
    explain: 'La Programación Orientada a Objetos (POO) es un paradigma que utiliza "Clases" como plantillas estructurales y "Objetos" como instancias de dichas clases que agrupan atributos (datos) y métodos (comportamientos).',
    analogy: '💡 La Clase es el plano arquitectónico de una casa. El Objeto es la casa física construida con base en ese plano.',
    errors: [
      'Intentar acceder a atributos privados desde fuera de la clase sin utilizar métodos getters y setters.',
      'Confundir la clase con una instancia particular de la misma.'
    ],
    code: {
      java: `<span class="code-kw">class</span> <span class="code-type">Auto</span> {
    <span class="code-kw">private</span> <span class="code-type">String</span> marca;
    
    <span class="code-kw">public</span> <span class="code-method">Auto</span>(<span class="code-type">String</span> m) { <span class="code-kw">this</span>.marca = m; }
    <span class="code-kw">public</span> <span class="code-type">String</span> <span class="code-method">getMarca</span>() { <span class="code-kw">return this</span>.marca; }
}`,
      csharp: `<span class="code-kw">class</span> <span class="code-type">Auto</span> {
    <span class="code-kw">public</span> <span class="code-type">string</span> Marca { <span class="code-kw">get</span>; <span class="code-kw">set</span>; } <span class="code-comment">// Propiedad automática</span>
    <span class="code-kw">public</span> <span class="code-method">Auto</span>(<span class="code-type">string</span> m) { Marca = m; }
}`,
      python: `<span class="code-kw">class</span> <span class="code-type">Auto</span>:
    <span class="code-kw">def</span> <span class="code-method">__init__</span>(<span class="code-kw">self</span>, marca):
        <span class="code-kw">self</span>.marca = marca <span class="code-comment"># Atributo público por defecto</span>`
    }
  },
  {
    id: 'excepciones',
    cat: 'Avanzado',
    label: 'Manejo de Excepciones',
    explain: 'Las excepciones son anomalías que ocurren durante la ejecución de un programa que interrumpen el flujo normal. Mediante bloques try-catch-finally, podemos capturarlas para evitar la caída abrupta del software.',
    analogy: '💡 Es el cinturón de seguridad en un automóvil. Esperas no necesitarlo, pero si hay un choque (un error), evita una catástrofe.',
    errors: [
      'Capturar la clase Exception genérica en primer lugar en lugar de capturar excepciones específicas.',
      'Dejar el bloque catch completamente vacío, ocultando el error sin darle solución ni logearlo.'
    ],
    code: {
      java: `<span class="code-kw">try</span> {
    <span class="code-kw">int</span> res = <span class="code-num">10</span> / <span class="code-num">0</span>;
} <span class="code-kw">catch</span> (<span class="code-type">ArithmeticException</span> e) {
    <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Error: "</span> + e.<span class="code-method">getMessage</span>());
} <span class="code-kw">finally</span> {
    <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Limpieza de recursos"</span>);
}`,
      csharp: `<span class="code-kw">try</span> {
    <span class="code-kw">int</span> res = <span class="code-num">10</span> / <span class="code-num">0</span>;
} <span class="code-kw">catch</span> (<span class="code-type">DivideByZeroException</span> e) {
    <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(e.Message);
}`,
      python: `<span class="code-kw">try</span>:
    res = <span class="code-num">10</span> / <span class="code-num">0</span>
<span class="code-kw">except</span> <span class="code-type">ZeroDivisionError</span> <span class="code-kw">as</span> e:
    <span class="code-method">print</span>(<span class="code-str">f"Error: {e}"</span>)
<span class="code-kw">finally</span>:
    <span class="code-method">print</span>(<span class="code-str">"Limpieza de recursos"</span>)`
    }
  },
  {
    id: 'archivos',
    cat: 'Avanzado',
    label: 'Manejo de Archivos',
    explain: 'El manejo de archivos permite que los datos de un programa persistan más allá de la ejecución del mismo, guardándolos en el almacenamiento secundario (disco duro) o leyéndolos de él.',
    analogy: '💡 Es como tener un archivador de metal en tu oficina física: puedes sacar una carpeta con datos (leer) o escribir un nuevo reporte y guardarlo (escribir) para que no se pierda al apagar la luz de la oficina.',
    errors: [
      'Intentar leer un archivo que no existe en la ruta especificada, arrojando un error de tipo FileNotFoundException.',
      'Olvidar cerrar el flujo del archivo (close()), lo que puede bloquear recursos del sistema operativo.'
    ],
    code: {
      java: `<span class="code-comment">// Lectura clásica con try-with-resources en Java</span>
<span class="code-kw">try</span> (<span class="code-type">BufferedReader</span> br = <span class="code-kw">new</span> <span class="code-type">BufferedReader</span>(<span class="code-kw">new</span> <span class="code-type">FileReader</span>(<span class="code-str">"datos.txt"</span>))) {
    <span class="code-type">String</span> linea;
    <span class="code-kw">while</span> ((linea = br.readLine()) != <span class="code-kw">null</span>) {
        <span class="code-type">System</span>.out.<span class="code-method">println</span>(linea);
    }
} <span class="code-kw">catch</span> (<span class="code-type">IOException</span> e) {
    e.<span class="code-method">printStackTrace</span>();
}`,
      csharp: `<span class="code-comment">// Lectura rápida en C# usando la clase File</span>
<span class="code-kw">try</span> {
    <span class="code-type">string</span>[] lineas = <span class="code-type">File</span>.<span class="code-method">ReadAllLines</span>(<span class="code-str">"datos.txt"</span>);
    <span class="code-kw">foreach</span> (<span class="code-type">string</span> l <span class="code-kw">in</span> lineas) {
        <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(l);
    }
} <span class="code-kw">catch</span> (<span class="code-type">IOException</span> e) {
    <span class="code-type">Console</span>.<span class="code-method">WriteLine</span>(e.Message);
}`,
      python: `<span class="code-comment"># Lectura limpia en Python con context manager (with)</span>
<span class="code-kw">try</span>:
    <span class="code-kw">with</span> <span class="code-method">open</span>(<span class="code-str">"datos.txt"</span>, <span class="code-str">"r"</span>) <span class="code-kw">as</span> file:
        <span class="code-kw">for</span> linea <span class="code-kw">in</span> file:
            <span class="code-method">print</span>(linea.strip())
<span class="code-kw">except</span> <span class="code-type">FileNotFoundError</span>:
    <span class="code-method">print</span>(<span class="code-str">"El archivo no existe"</span>)`
    }
  },
  {
    id: 'igu',
    cat: 'Avanzado',
    label: 'IGU Básica (Ventanas)',
    explain: 'Una Interfaz Gráfica de Usuario (IGU) permite a las personas interactuar con el software mediante componentes visuales interactivos como ventanas, botones, etiquetas y cajas de texto, en lugar de la consola de texto tradicional.',
    analogy: '💡 Es como el panel de control de un elevador moderno: en lugar de tener que digitar comandos en una terminal oculta, presionas botones físicos y visualizas pantallas iluminadas.',
    errors: [
      'Crear componentes gráficos pero olvidar agregarlos (.add()) a la ventana contenedora principal.',
      'Olvidar configurar el cierre predeterminado de la ventana, dejando el proceso del programa corriendo en segundo plano.'
    ],
    code: {
      java: `<span class="code-comment">// Ventana interactiva clásica en Swing (Java)</span>
<span class="code-type">JFrame</span> frame = <span class="code-kw">new</span> <span class="code-type">JFrame</span>(<span class="code-str">"Ventana Principal"</span>);
<span class="code-type">JButton</span> boton = <span class="code-kw">new</span> <span class="code-type">JButton</span>(<span class="code-str">"Clic"</span>);
boton.<span class="code-method">addActionListener</span>(e -> <span class="code-type">System</span>.out.<span class="code-method">println</span>(<span class="code-str">"Presionado"</span>));
frame.<span class="code-method">add</span>(boton);
frame.<span class="code-method">setSize</span>(<span class="code-num">300</span>, <span class="code-num">200</span>);
frame.<span class="code-method">setVisible</span>(<span class="code-kw">true</span>);`,
      csharp: `<span class="code-comment">// Formulario básico en Windows Forms (C#)</span>
<span class="code-type">Form</span> formulario = <span class="code-kw">new</span> <span class="code-type">Form</span>();
<span class="code-type">Button</span> boton = <span class="code-kw">new</span> <span class="code-type">Button</span>() { Text = <span class="code-str">"Clic"</span> };
boton.Click += (sender, e) => {
    <span class="code-type">MessageBox</span>.<span class="code-method">Show</span>(<span class="code-str">"Presionado"</span>);
};
formulario.Controls.<span class="code-method">Add</span>(boton);
<span class="code-type">Application</span>.<span class="code-method">Run</span>(formulario);`,
      python: `<span class="code-comment"># Ventana básica usando la librería nativa Tkinter (Python)</span>
<span class="code-kw">import</span> <span class="code-type">tkinter</span> <span class="code-kw">as</span> <span class="code-type">tk</span>
root = tk.Tk()
root.title(<span class="code-str">"Ventana Principal"</span>)
boton = tk.Button(root, text=<span class="code-str">"Clic"</span>, command=<span class="code-kw">lambda</span>: <span class="code-method">print</span>(<span class="code-str">"Presionado"</span>))
boton.pack()
root.mainloop()`
    }
  }
];


// ============================================================================
// BASE DE DATOS: FLASHCARDS MNEMOTÉCNICAS
// ============================================================================
var flashcardsData_old = [
  {
    cat: 'Fundamentos',
    front: '¿Qué significa JVM?',
    back: 'Java Virtual Machine (Máquina Virtual de Java). Es el motor que compila el bytecode y lo ejecuta en la máquina real.',
    hint: 'Traduce el código intermedio (.class) a lenguaje de máquina.'
  },
  {
    cat: 'Fundamentos',
    front: '¿Cuál es la diferencia básica entre int y double?',
    back: 'int almacena números enteros de 32 bits sin decimales. double almacena números de punto flotante de 64 bits con precisión decimal.',
    hint: 'Piensa en números con punto decimal vs números de conteo exacto.'
  },
  {
    cat: 'Sintaxis',
    front: '¿Qué ocurre si omites el comando "break" en un bloque switch?',
    back: 'Se produce una caída libre (fall-through). El programa continúa ejecutando las líneas del caso siguiente de forma secuencial.',
    hint: 'No se detiene al encontrar una coincidencia.'
  },
  {
    cat: 'Sintaxis',
    front: '¿Cuándo se prefiere un bucle "while" sobre un bucle "for"?',
    back: 'Se prefiere "while" cuando no conocemos de antemano el número exacto de iteraciones que requerirá el programa.',
    hint: 'Depende enteramente del cumplimiento de una condición cambiante.'
  },
  {
    cat: 'POO',
    front: '¿Qué es el Principio de Encapsulamiento?',
    back: 'Es la ocultación del estado interno de un objeto (atributos), restringiendo el acceso directo y exponiéndolo solo por métodos públicos (get/set).',
    hint: 'Mantiene las variables privadas.'
  },
  {
    cat: 'Arrays',
    front: '¿En qué índice inician los arreglos en Java, C# y Python?',
    back: 'Comienzan siempre en el índice 0. Por ende, el último elemento accesible de un arreglo de tamaño N es N-1.',
    hint: 'Indexación de origen cero.'
  },
  {
    cat: 'POO',
    front: '¿Para qué sirve el método constructor en una clase?',
    back: 'Es un método especial que se invoca automáticamente al instanciar un objeto (usando "new") para inicializar sus atributos.',
    hint: 'Lleva el mismo nombre que la clase en Java/C#.'
  },
  {
    cat: 'Excepciones',
    front: '¿Cuál es la diferencia entre "throw" y "throws" en Java?',
    back: 'throw se usa para lanzar explícitamente una excepción concreta. throws se coloca en la firma del método para listar las excepciones que este puede emitir.',
    hint: 'Lanzar un error vs declarar que un método podría lanzar un error.'
  }
];


// ============================================================================
// BASE DE DATOS: QUIZ INTERACTIVO (6+ preguntas por categoría)
// ============================================================================
var quizData_old = [
  {
    cat: 'Fundamentos',
    lang: 'java',
    q: '¿Cuál es la salida del siguiente código?<br><pre class="code-block"><code>System.out.println(5 / 2);</code></pre>',
    opts: ['2.5', '2', '2.0', 'Lanza ArithmeticException'],
    ans: 1,
    exp: 'En Java y C#, dividir dos números enteros (int) descarta la parte decimal y retorna un resultado entero truncado.'
  },
  {
    cat: 'Fundamentos',
    lang: 'python',
    q: '¿Qué tipo de dato se le asigna a x en Python al hacer:<br><pre class="code-block"><code>x = 5.0</code></pre>',
    opts: ['int', 'float', 'double', 'Decimal'],
    ans: 1,
    exp: 'Python representa los valores con parte decimal mediante la clase "float", equivalente en precisión a double en otros lenguajes.'
  },
  {
    cat: 'Sintaxis',
    lang: 'java',
    q: '¿Cuál de las siguientes declaraciones de arreglo es incorrecta en Java?',
    opts: ['int[] arr = new int[5];', 'int arr[] = new int[5];', 'int[] arr = {1, 2, 3};', 'int arr[5] = new int[];'],
    ans: 3,
    exp: 'En Java, no debes especificar la dimensión dentro de los corchetes de la declaración izquierda (ej. arr[5] es incorrecto).'
  },
  {
    cat: 'Sintaxis',
    lang: 'python',
    q: '¿Cuál es el operador aritmético utilizado para calcular el residuo de una división?',
    opts: ['/', '//', '%', '^'],
    ans: 2,
    exp: 'El operador módulo (%) calcula el residuo entero de una división. '//' se usa para división entera en Python.'
  },
  {
    cat: 'POO',
    lang: 'java',
    q: '¿Qué palabra reservada se utiliza en Java para heredar de otra clase?',
    opts: ['implements', 'inherits', 'extends', 'super'],
    ans: 2,
    exp: 'La palabra clave "extends" declara herencia de clases. "implements" se utiliza para interfaces.'
  },
  {
    cat: 'POO',
    lang: 'csharp',
    q: '¿Qué método constructor se ejecuta por defecto si no definimos ninguno en una clase C#?',
    opts: ['El constructor vacío generado automáticamente', 'Ninguno, compila con error', 'El constructor base de System.Object', 'El constructor estático'],
    ans: 0,
    exp: 'El compilador de C# (y Java) provee un constructor público vacío predeterminado sin argumentos si no hay ningún constructor explícito.'
  },
  {
    cat: 'Arrays',
    lang: 'java',
    q: '¿Qué propiedad o método de un arreglo unidimensional en Java devuelve su número de celdas?',
    opts: ['length()', 'size()', 'length', 'getSize()'],
    ans: 2,
    exp: 'En Java, los arreglos nativos exponen una propiedad constante llamada "length". Los strings usan "length()" y las colecciones usan "size()".'
  },
  {
    cat: 'Excepciones',
    lang: 'python',
    q: '¿Cómo se define el bloque que maneja el error en una estructura try-except en Python?',
    opts: ['catch', 'except', 'rescue', 'handle'],
    ans: 1,
    exp: 'Python utiliza la palabra clave "except" para capturar anomalías, a diferencia de Java, C# y JavaScript que usan "catch".'
  }
];


// ============================================================================
// BASE DE DATOS: COMMANDS DATA (Biblioteca de Códigos)
// ============================================================================
var commandsData_old = [
  {
    cat: 'Strings',
    name: '.substring() / slicing',
    desc: 'Extrae una subcadena de texto delimitando los índices de inicio y fin.',
    bigO: 'O(K) [K = longitud subcadena]',
    syntax: 'Java: str.substring(start, end) | Python: str[start:end]',
    code: `# Ejemplo Python
texto = "Progra_Core"
sub = texto[0:6]
print(sub) # Imprime: Progra`
  },
  {
    cat: 'Colecciones',
    name: '.append() / .add()',
    desc: 'Inserta un nuevo elemento al final de una lista o colección dinámica.',
    bigO: 'O(1) amortizado',
    syntax: 'Java: list.add(x) | Python: list.append(x) | C#: list.Add(x)',
    code: `// Ejemplo Java ArrayList
ArrayList<String> lista = new ArrayList<>();
lista.add("Elemento 1");`
  },
  {
    cat: 'Conversión',
    name: 'Integer.parseInt() / int()',
    desc: 'Analiza un String numérico y lo convierte en su representación entera.',
    bigO: 'O(D) [D = número de dígitos]',
    syntax: 'Java: Integer.parseInt(s) | Python: int(s) | C#: int.Parse(s)',
    code: `# Ejemplo Python
numero_str = "123"
numero = int(numero_str)
print(numero + 7) # Imprime: 130`
  },
  {
    cat: 'Algoritmos',
    name: 'Búsqueda Binaria',
    desc: 'Localiza un valor dentro de un arreglo previamente ordenado dividiendo el espacio de búsqueda a la mitad continuamente.',
    bigO: 'O(log N) tiempo | O(1) espacio',
    syntax: 'Algoritmo recursivo / iterativo',
    code: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1`
  },
  {
    cat: 'Archivos',
    name: 'Lectura de Archivos',
    desc: 'Apertura y procesamiento secuencial de líneas de un archivo de texto en disco.',
    bigO: 'O(N) [N = bytes o líneas del archivo]',
    syntax: 'Java: Scanner / BufferedReader | Python: open(file, "r")',
    code: `# Ejemplo Python seguro
with open("datos.txt", "r") as file:
    for linea in file:
        print(linea.strip())`
  }
];


// ============================================================================
// BASE DE DATOS: DESAFÍOS DE DEPURACIÓN (Debug Protocol)
// ============================================================================
var debugChallenges_old = [
  {
    lang: 'python',
    desc: 'Error de sintaxis común en sentencias condicionales en Python.',
    lines: [
      'def es_mayor(edad):',
      '    if edad >= 18',
      '        print("Acceso concedido")',
      '    else:',
      '        print("Acceso denegado")'
    ],
    bugLine: 1, // '    if edad >= 18' (Falta los ':')
    opts: [
      'Debería ser: if (edad >= 18)',
      'Faltan dos puntos ":" al final de la condición',
      'La indentación de "print" está incorrecta',
      'Debería usarse "elif"'
    ],
    ans: 1,
    exp: 'En Python, las sentencias condicionales (if, elif, else) y bucles requieren terminar con dos puntos (":") obligatoriamente.'
  },
  {
    lang: 'java',
    desc: 'Asignación inválida de tipos de datos estáticos.',
    lines: [
      'public class Compilador {',
      '    public static void main(String[] args) {',
      '        int limite = 100;',
      '        String descripcion = 25.5;',
      '        System.out.println(descripcion);',
      '    }',
      '}'
    ],
    bugLine: 3, // '        String descripcion = 25.5;' (Debe ser String o float/double)
    opts: [
      'Falta punto y coma ";"',
      'No se puede asignar un valor decimal float/double a un String',
      'La variable "limite" no se está usando',
      'El método println está mal escrito'
    ],
    ans: 1,
    exp: 'Java es un lenguaje estáticamente tipado; no puedes asignar un literal decimal directo (double/float) a una referencia del tipo String.'
  }
];


// ============================================================================
// 🏆 SISTEMA DE GAMIFICACIÓN (XP Y NIVELES)
// ============================================================================
let xp = Number(localStorage.getItem('cyphercode_xp') || 0);
let level = Number(localStorage.getItem('cyphercode_lvl') || 1);

// Obtiene el rango del hacker basado en su nivel
function getRank(lvl) {
  if (lvl >= 10) return '⚡ Neo / Architect';
  if (lvl >= 7) return '🔑 Root / Hacker';
  if (lvl >= 4) return '⚙️ Administrator / SysAdmin';
  if (lvl >= 2) return '💻 User / Programador';
  return '👤 Guest / Novato';
}

function updateXPHUD() {
  const xpNeeded = level * 100;
  // Actualizar HUD superior
  const hLevel = document.getElementById('hud-level');
  const hXP = document.getElementById('hud-xp');
  if (hLevel) hLevel.textContent = `LVL ${level}`;
  if (hXP) hXP.textContent = `XP ${xp}/${xpNeeded}`;

  // Actualizar estadísticas del inicio si está en pantalla
  const statsGrid = document.getElementById('stats-grid');
  if (statsGrid && document.getElementById('s-inicio').classList.contains('active')) {
    renderStats();
  }
}

function addXP(amount) {
  xp += amount;
  const xpNeeded = level * 100;

  if (xp >= xpNeeded) {
    xp -= xpNeeded;
    level++;
    localStorage.setItem('cyphercode_lvl', level);
    showAchievement(`🎉 ¡Subiste de Nivel! Ahora eres LVL ${level}`, 20); // Bonus XP
  }

  localStorage.setItem('cyphercode_xp', xp);
  updateXPHUD();
}

function showAchievement(title, xpAwarded) {
  const toast = document.getElementById('toast-achievement');
  const tTitle = document.getElementById('toast-achievement-title');
  if (toast && tTitle) {
    tTitle.textContent = `${title} (+${xpAwarded} XP)`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}


// ============================================================================
// NAVEGACIÓN SPA E INTERFAZ
// ============================================================================
let navHistory = [];

function goBack() {
  if (navHistory.length > 0) {
    const prevId = navHistory.pop();
    showSection(prevId, null, true);
  } else {
    showSection('inicio', null, true);
  }
}

function showSection(id, btn, isBack = false) {
  const currentActive = document.querySelector('.section.active');
  const currentId = currentActive ? currentActive.id.replace('s-', '') : 'inicio';

  if (!isBack && currentId !== id) {
    navHistory.push(currentId);
  }

  if (id === 'inicio' && !isBack) {
    navHistory = []; // Reset history when returning to home directly
  }

  // Oculta todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  // Desactiva todos los botones
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-btn').forEach(b => b.classList.remove('active'));

  // Muestra la sección requerida
  const activeSec = document.getElementById('s-' + id);
  if (activeSec) activeSec.classList.add('active');

  // Lógica del Botón Global de "Volver"
  const globalBackBtn = document.getElementById('global-back-btn');
  if (globalBackBtn) {
    globalBackBtn.style.display = (id === 'inicio') ? 'none' : 'flex';
  }

  // Activa el botón correspondiente
  if (btn) {
    btn.classList.add('active');
  } else {
    // Sincronizar botones si la navegación vino por otro lado
    const deskBtns = document.getElementById('desktop-nav').querySelectorAll('.nav-btn');
    deskBtns.forEach(b => {
      if (b.textContent.toLowerCase().includes(id.substring(0, 4))) b.classList.add('active');
    });
  }

  // Animación estética de barra de carga
  const lb = document.getElementById('loadbar');
  if (lb) {
    lb.style.width = '80%';
    setTimeout(() => lb.style.width = '0%', 400);
  }

  // Acciones bajo entrada de sección
  if (id === 'inicio') renderStats();
  if (id === 'conceptos') {
    if (!document.getElementById('topic-list').children.length) buildTopicList();
  }
  if (id === 'flashcards') renderFlashcards();
  if (id === 'quiz') startQuizScreen();
  if (id === 'biblioteca') renderLibrary();
  if (id === 'terminal') {
    renderDebugChallenge();
    focusTerminal();
  }
  if (id === 'visualizador') {
    updateAnalyzer();
    resetTrace();
  }
  if (id === 'referencia') showRef('tipos', document.querySelector('.ref-tab'));
  if (id === 'ejemplos') {
    renderExamplesFilters();
    renderActiveExample();
  }
}

// Cuenta e inyecta las estadísticas del sistema en Inicio
function renderStats() {
  const grid = document.getElementById('stats-grid');
  if (!grid) return;

  const data = [
    { n: `0${level}`, l: 'Nivel del Núcleo' },
    { n: getRank(level).split(' ')[1] || 'Guest', l: 'Rango Actual' },
    { n: `${topics.length}`, l: 'Conceptos Clave' },
    { n: `${commandsData.length}`, l: 'Comandos en Biblioteca' },
    { n: '100%', l: 'Estado del Sistema' }
  ];

  grid.innerHTML = data.map(d => `
    <div class="glass stat-card">
      <h3 class="mono">${d.n}</h3>
      <p style="font-size:0.85rem; opacity:0.8; margin-top:0.3rem;">${d.l}</p>
    </div>
  `).join('');
}


// ============================================================================
// LÓGICA DE CONCEPTOS MULTILENGUAJE
// ============================================================================
function buildTopicList() {
  const cats = [...new Set(topics.map(t => t.cat))];
  const list = document.getElementById('topic-list');
  if (!list) return;

  list.innerHTML = cats.map(c => `
    <div style="font-size:10px; color:var(--primary); opacity:0.7; padding:10px 8px 4px 2px; letter-spacing:1px; font-family:'JetBrains Mono', monospace;">
      // ${c.toUpperCase()}
    </div>
    ` + topics.filter(t => t.cat === c).map(t => `
      <li>
        <a href="#" class="mono" id="ti-${t.id}" onclick="showTopic('${t.id}'); event.preventDefault();">&gt; ${t.label}</a>
      </li>
    `).join('')
  ).join('');

  // Auto-cargar primer tema
  if (topics.length > 0) {
    showTopic(topics[0].id);
  }
}

function showTopic(id) {
  const t = topics.find(x => x.id === id);
  if (!t) return;

  document.querySelectorAll('#topic-list a').forEach(a => a.classList.remove('active'));
  const activeLink = document.getElementById('ti-' + id);
  if (activeLink) activeLink.classList.add('active');

  const detail = document.getElementById('topic-detail');
  if (!detail) return;

  detail.innerHTML = `
    <h2 class="mono" style="color:var(--primary); margin-bottom:1rem;">&gt; ${t.label}</h2>
    <p style="line-height:1.6; font-size:0.95rem; margin-bottom:1.5rem;">${t.explain}</p>
    
    ${t.analogy ? `<div class="analogy-panel mono">${t.analogy}</div>` : ''}
    
    <div style="font-size:11px; color:var(--primary); opacity:0.8; margin:1.5rem 0 0.5rem; font-family:'JetBrains Mono', monospace;">
      // ERRORES COMUNES:
    </div>
    <div style="background:rgba(255, 51, 51, 0.05); border:1px dashed rgba(255, 51, 51, 0.3); border-radius:8px; padding:1rem; display:flex; flex-direction:column; gap:0.5rem; font-size:0.9rem; color:#ff8888;">
      ${t.errors.map(e => `<div>🚨 ${e}</div>`).join('')}
    </div>

    <div style="font-size:11px; color:var(--primary); opacity:0.8; margin:1.8rem 0 0.5rem; font-family:'JetBrains Mono', monospace;">
      // CÓDIGO COMPORTAMIENTO COMPARADO:
    </div>
    <div class="lang-selector-group" style="margin-bottom:1rem; max-width:fit-content;">
      <button class="lang-btn active" id="tab-java-${t.id}" onclick="switchLang('${t.id}', 'java')">☕ Java</button>
      <button class="lang-btn" id="tab-csharp-${t.id}" onclick="switchLang('${t.id}', 'csharp')">⧫ C#</button>
      <button class="lang-btn" id="tab-python-${t.id}" onclick="switchLang('${t.id}', 'python')">🐍 Python</button>
    </div>
    
    <div class="code-block" id="code-java-${t.id}">${t.code.java}</div>
    <div class="code-block" id="code-csharp-${t.id}" style="display:none;">${t.code.csharp}</div>
    <div class="code-block" id="code-python-${t.id}" style="display:none;">${t.code.python}</div>
  `;

  addXP(2); // Ganar 2 XP por abrir un concepto
}

function switchLang(topicId, lang) {
  const container = document.getElementById(`tab-java-${topicId}`).parentElement;
  container.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`tab-${lang}-${topicId}`).classList.add('active');

  const blocks = ['java', 'csharp', 'python'];
  blocks.forEach(l => {
    const el = document.getElementById(`code-${l}-${topicId}`);
    if (el) el.style.display = (l === lang) ? 'block' : 'none';
  });
}


// ============================================================================
// LÓGICA DE FLASHCARDS (MEMORY SWAP)
// ============================================================================
let fcData = [...flashcardsData];

function renderFlashcards() {
  const dropdown = document.getElementById('fc-cat');
  if (!dropdown) return;

  // Llenar categorías dinámicamente una sola vez
  if (dropdown.children.length === 1) {
    const cats = [...new Set(flashcardsData.map(f => f.cat))];
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c.toUpperCase();
      dropdown.appendChild(opt);
    });
  }

  const selectedCat = dropdown.value;
  const filtered = selectedCat === 'all' ? fcData : fcData.filter(f => f.cat === selectedCat);

  document.getElementById('fc-count').textContent = `[${filtered.length} tarjetas]`;

  const grid = document.getElementById('fc-grid');
  if (!grid) return;

  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(280px, 1fr))';
  grid.style.gap = '1.5rem';
  grid.style.marginTop = '1.5rem';

  grid.innerHTML = filtered.map(f => `
    <div class="flashcard-container" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
      <div class="glass flashcard">
        <div class="glass face front">
          <div style="font-size:0.65rem; color:var(--primary); position:absolute; top:12px; left:16px; font-family:'JetBrains Mono', monospace; border: 1px solid var(--border-glass); border-radius:4px; padding:2px 6px;">
            ${f.cat.toUpperCase()}
          </div>
          <p style="font-size:1.05rem; font-weight:600; line-height:1.5;">${f.front}</p>
          <span style="font-size:0.7rem; opacity:0.4; font-family:'JetBrains Mono', monospace; position:absolute; bottom:12px;">
            [CLIC PARA VOLTEAR]
          </span>
        </div>
        <div class="glass face back">
          <p style="font-size:0.95rem; line-height:1.5; color:var(--primary); font-weight:500;">${f.back}</p>
          ${f.hint ? `<div class="card-hint mono">💡 Hint: ${f.hint}</div>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function shuffleFC() {
  fcData.sort(() => Math.random() - 0.5);
  renderFlashcards();
  addXP(3); // 3 XP por barajar y repasar
}


// ============================================================================
// LÓGICA DEL MOTOR DE EVALUACIÓN (QUIZ)
// ============================================================================
let quizQueue = [];
let quizIndex = 0;
let quizScore = 0;
let quizErrors = [];

function startQuizScreen() {
  document.getElementById('quiz-start-screen').style.display = 'block';
  document.getElementById('quiz-play').style.display = 'none';
  document.getElementById('quiz-summary-screen').style.display = 'none';

  const dropdown = document.getElementById('quiz-cat');
  if (dropdown && dropdown.children.length === 1) {
    const cats = [...new Set(quizData.map(q => q.cat))];
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c.toUpperCase();
      dropdown.appendChild(opt);
    });
  }
}

function startQuiz() {
  const selectedCat = document.getElementById('quiz-cat').value;
  quizQueue = (selectedCat === 'all' ? [...quizData] : quizData.filter(q => q.cat === selectedCat));
  quizQueue.sort(() => Math.random() - 0.5);

  quizIndex = 0;
  quizScore = 0;
  quizErrors = [];

  document.getElementById('quiz-start-screen').style.display = 'none';
  document.getElementById('quiz-play').style.display = 'block';

  renderQuestion();
}

function renderQuestion() {
  if (quizIndex >= quizQueue.length) {
    showQuizSummary();
    return;
  }

  const q = quizQueue[quizIndex];
  const pct = Math.round((quizIndex / quizQueue.length) * 100);
  const langLabel = q.lang.toUpperCase();

  const playArea = document.getElementById('quiz-play');
  if (!playArea) return;

  playArea.innerHTML = `
    <div class="quiz-header">
      <span class="mono">PREGUNTA ${quizIndex + 1}/${quizQueue.length}</span>
      <span class="mono" style="color:var(--primary);">Puntaje: ${quizScore}</span>
    </div>
    <div class="quiz-progress-container">
      <div class="quiz-progress-bar" style="width: ${pct}%;"></div>
    </div>
    <span class="complexity-badge" style="margin-bottom:1rem; border-color:var(--info); color:var(--info); font-size:0.7rem;">
      LANG: ${langLabel} | CATEGORÍA: ${q.cat}
    </span>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">
      ${q.opts.map((o, idx) => `
        <button class="glass-btn quiz-btn" onclick="submitQuizAnswer(${idx})">
          <span class="mono" style="font-weight:bold; color:var(--primary);">${String.fromCharCode(65 + idx)})</span> ${o}
        </button>
      `).join('')}
    </div>
    <div class="quiz-feedback" id="quiz-feedback">
      <h4 class="mono" id="feedback-title" style="margin-bottom:0.5rem;">Validación</h4>
      <p id="feedback-desc"></p>
      <button class="glass-btn quiz-next-btn" id="btn-next-q" onclick="nextQuestion()">
        [ Siguiente Pregunta ]
      </button>
    </div>
  `;
}

function submitQuizAnswer(selectedIdx) {
  const q = quizQueue[quizIndex];
  const btns = document.querySelectorAll('.quiz-btn');
  btns.forEach(b => b.disabled = true); // Bloquear clics

  const feedback = document.getElementById('quiz-feedback');
  const fbTitle = document.getElementById('feedback-title');
  const fbDesc = document.getElementById('feedback-desc');

  if (selectedIdx === q.ans) {
    btns[selectedIdx].classList.add('correct');
    quizScore++;
    fbTitle.textContent = "✓ COMPILACIÓN EXITOSA";
    fbTitle.style.color = "var(--primary)";
    feedback.classList.add('show', 'correct');
    addXP(10); // 10 XP por respuesta correcta
  } else {
    btns[selectedIdx].classList.add('incorrect');
    btns[q.ans].classList.add('correct'); // Mostrar la correcta
    quizErrors.push({ q: q.q, user: q.opts[selectedIdx], correct: q.opts[q.ans] });
    fbTitle.textContent = "✗ FATAL ERROR DE SINTAXIS";
    fbTitle.style.color = "var(--danger)";
    feedback.classList.add('show', 'wrong');
  }

  fbDesc.textContent = q.exp;
}

function nextQuestion() {
  quizIndex++;
  renderQuestion();
}

function showQuizSummary() {
  document.getElementById('quiz-play').style.display = 'none';
  const summary = document.getElementById('quiz-summary-screen');
  summary.style.display = 'block';

  const pct = Math.round((quizScore / quizQueue.length) * 100);
  const color = pct >= 70 ? 'var(--primary)' : 'var(--danger)';

  summary.innerHTML = `
    <h2 class="mono" style="color:var(--primary); margin-bottom:1.5rem; text-align:center;">&gt; Protocolo Terminado</h2>
    <div style="text-align:center; margin-bottom:2rem;">
      <div style="font-size:3rem; font-weight:bold; color:${color}; font-family:'JetBrains Mono', monospace;">
        ${quizScore}/${quizQueue.length}
      </div>
      <p class="mono" style="margin-top:0.5rem; font-size:1.1rem; color:${color};">
        ${pct >= 70 ? '[ESTADO: ACEPTADO]' : '[ESTADO: RECHAZADO / INSUFICIENTE]'}
      </p>
      <p style="opacity:0.8; margin-top:0.5rem;">Porcentaje de asimilación: ${pct}%</p>
    </div>

    ${quizErrors.length > 0 ? `
      <div style="border-top:1px dashed var(--border-glass); padding-top:1.5rem; margin-bottom:2rem;">
        <h4 class="mono" style="color:var(--danger); margin-bottom:1rem;">// BITÁCORA DE ERRORES REGISTRADOS:</h4>
        <div style="display:flex; flex-direction:column; gap:1rem; max-height:220px; overflow-y:auto; padding-right:5px;">
          ${quizErrors.map(e => `
            <div style="background:rgba(255, 51, 51, 0.03); border:1px solid rgba(255, 51, 51, 0.2); border-radius:6px; padding:0.8rem; font-size:0.85rem;">
              <div style="color:var(--primary); font-weight:bold; margin-bottom:0.3rem;">${e.q}</div>
              <div style="color:#ff8888;">Tu respuesta: ${e.user}</div>
              <div style="color:var(--primary);">Correcta: ${e.correct}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '<p style="text-align:center; color:var(--primary); font-weight:bold; margin-bottom:2rem;">¡Excelente! Limpieza de errores al 100%.</p>'}

    <div style="display:flex; gap:1rem; justify-content:center;">
      <button class="glass-btn" onclick="startQuiz()">⟳ REINTENTAR</button>
      <button class="glass-btn" onclick="startQuizScreen()">← VOLVER AL MENÚ</button>
    </div>
  `;

  if (pct >= 70) {
    addXP(30); // 30 XP extra por aprobar
    showAchievement("¡Módulo Evaluativo Aprobado con Éxito!", 30);
  }
}


// ============================================================================
// 📚 CODE FORGE LIBRARY (GLOSARIO Y BUSCADOR)
// ============================================================================
function renderLibrary() {
  const query = document.getElementById('lib-search').value.toLowerCase().trim();
  const grid = document.getElementById('lib-grid');
  if (!grid) return;

  if (query === "") {
    // Si no hay búsqueda activa, mostrar la cuadrícula de categorías de forma limpia
    const cats = [...new Set(commandsData.map(c => c.cat))];
    grid.innerHTML = cats.map(c => {
      const cnt = commandsData.filter(x => x.cat === c).length;
      return `
        <div class="verb-cat-card" onclick="openLibraryCategory('${c}')">
          <div class="verb-cat-title">&gt; ${c.toUpperCase()}</div>
          <div class="verb-cat-count mono">${cnt} estructuras</div>
        </div>
      `;
    }).join('');
  } else {
    // Si hay búsqueda, mostrar directamente la lista de acordeones que coincidan
    const filtered = commandsData.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query) ||
      c.cat.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1; text-align:center; opacity:0.6; padding:2rem;">
          <p class="mono">&gt; search_cmd: sin coincidencias para "${query}"</p>
        </div>
      `;
    } else {
      grid.innerHTML = `
        <div style="grid-column:1/-1; width:100%; display:flex; flex-direction:column; gap:0.8rem;">
          <button class="glass-btn" onclick="document.getElementById('lib-search').value=''; renderLibrary();" style="align-self:flex-start; margin-bottom:0.5rem;">
            ← RESTABLECER GRID
          </button>
          ${filtered.map((item, idx) => buildLibraryAccordion(item, idx)).join('')}
        </div>
      `;
    }
  }
}

function openLibraryCategory(cat) {
  const grid = document.getElementById('lib-grid');
  if (!grid) return;

  const items = commandsData.filter(x => x.cat === cat);
  grid.innerHTML = `
    <div style="grid-column:1/-1; width:100%; display:flex; flex-direction:column; gap:0.8rem;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
        <button class="glass-btn" onclick="renderLibrary()">
          ← VOLVER AL GRID
        </button>
        <span class="mono" style="color:var(--primary); font-weight:bold;">// CATEGORÍA: ${cat.toUpperCase()}</span>
      </div>
      ${items.map((item, idx) => buildLibraryAccordion(item, idx)).join('')}
    </div>
  `;
}

function buildLibraryAccordion(item, index) {
  return `
    <div class="verb-accordion-item" id="lib-acc-${index}">
      <div class="verb-acc-header" onclick="toggleLibraryAccordion(${index})">
        <div class="verb-acc-title">
          <span class="v-present">${item.name}</span>
          <span class="v-past mono">${item.cat}</span>
        </div>
        <span class="v-chevron mono" id="chevron-${index}">[+]</span>
      </div>
      <div class="verb-acc-content" id="content-${index}">
        <div class="verb-acc-inner">
          <p style="font-size:0.95rem; line-height:1.5;">${item.desc}</p>
          <div class="mono" style="font-size:0.8rem; margin:0.3rem 0; color:var(--primary); opacity:0.85;">
            Sintaxis: ${item.syntax}
          </div>
          <span class="complexity-badge">Complejidad Big-O: ${item.bigO}</span>
          
          <pre class="code-block" style="margin-top:0.8rem;"><code class="mono">${item.code}</code></pre>
        </div>
      </div>
    </div>
  `;
}

function toggleLibraryAccordion(index) {
  const item = document.getElementById(`lib-acc-${index}`);
  const content = document.getElementById(`content-${index}`);
  const chevron = document.getElementById(`chevron-${index}`);
  if (!item || !content) return;

  const isExpanded = item.classList.contains('expanded');

  // Cerrar todos
  document.querySelectorAll('.verb-accordion-item').forEach(el => el.classList.remove('expanded'));
  document.querySelectorAll('.verb-acc-content').forEach(el => el.style.maxHeight = '0px');
  document.querySelectorAll('.v-chevron').forEach(el => el.textContent = '[+]');

  if (!isExpanded) {
    item.classList.add('expanded');
    content.style.maxHeight = content.scrollHeight + 'px';
    chevron.textContent = '[-]';
    addXP(1); // 1 XP por consultar
  }
}


// ============================================================================
// 🪲 PROTOCOLO DE DEPURACIÓN (DEBUG PROTOCOL)
// ============================================================================
let currentDebugIndex = 0;
let debugAnswered = false;

function renderDebugChallenge() {
  const challenge = debugChallenges[currentDebugIndex];
  const container = document.getElementById('debug-container');
  const consolePanel = document.getElementById('debug-console');
  if (!container || !consolePanel) return;

  debugAnswered = false;
  consolePanel.style.display = 'none';

  container.innerHTML = challenge.lines.map((line, idx) => `
    <div class="debug-line" id="dl-${idx}" onclick="selectDebugLine(${idx})">
      <span class="mono" style="opacity:0.4; margin-right:15px; user-select:none;">${String(idx + 1).padStart(2, '0')}</span>
      <code>${line.replace(/ /g, '&nbsp;')}</code>
    </div>
  `).join('');
}

function selectDebugLine(lineIdx) {
  if (debugAnswered) return;

  const challenge = debugChallenges[currentDebugIndex];
  document.querySelectorAll('.debug-line').forEach(el => el.classList.remove('selected-bug'));

  const selectedEl = document.getElementById(`dl-${lineIdx}`);
  if (selectedEl) selectedEl.classList.add('selected-bug');

  const consolePanel = document.getElementById('debug-console');
  const errDesc = document.getElementById('debug-err-desc');
  const optionsDiv = document.getElementById('debug-options');

  if (lineIdx === challenge.bugLine) {
    // Si atinó al bug, abre consola para parchar
    consolePanel.style.display = 'block';
    consolePanel.style.borderColor = 'var(--primary)';
    consolePanel.querySelector('.debug-console-title').textContent = '⚠️ BUG LOCALIZADO - MEMORIA SECUENCIAL:';
    consolePanel.querySelector('.debug-console-title').style.color = 'var(--primary)';
    errDesc.textContent = `Se detectó una falla semántica en la línea ${lineIdx + 1}. Selecciona el parche de compilación adecuado:`;

    optionsDiv.innerHTML = challenge.opts.map((opt, idx) => `
      <button class="glass-btn" onclick="submitDebugPatch(${idx})">
        Parche ${String.fromCharCode(65 + idx)}: ${opt}
      </button>
    `).join('');
  } else {
    // Línea sana
    consolePanel.style.display = 'block';
    consolePanel.style.borderColor = 'var(--danger)';
    consolePanel.querySelector('.debug-console-title').textContent = '❌ ERROR: LÍNEA FUNCIONAL SANA';
    consolePanel.querySelector('.debug-console-title').style.color = 'var(--danger)';
    errDesc.textContent = `La línea ${lineIdx + 1} no presenta anomalías. El sector sigue inestable. Sigue escaneando.`;
    optionsDiv.innerHTML = '';
  }
}

function submitDebugPatch(patchIdx) {
  const challenge = debugChallenges[currentDebugIndex];
  debugAnswered = true;

  const options = document.getElementById('debug-options').querySelectorAll('button');
  options.forEach(btn => btn.disabled = true);

  const consolePanel = document.getElementById('debug-console');
  const errDesc = document.getElementById('debug-err-desc');

  if (patchIdx === challenge.ans) {
    options[patchIdx].style.background = 'var(--primary-glow)';
    options[patchIdx].style.color = '#000';
    errDesc.innerHTML = `<span style="color:var(--primary); font-weight:bold;">[ÉXITO]</span> Parche integrado. Sector saneado con éxito.<br>${challenge.exp}`;
    addXP(40);
    showAchievement("Sector Saneado - Debug Exitoso", 40);

    setTimeout(() => {
      currentDebugIndex = (currentDebugIndex + 1) % debugChallenges.length;
      renderDebugChallenge();
    }, 4500);
  } else {
    options[patchIdx].style.background = 'var(--danger-glow)';
    errDesc.innerHTML = `<span style="color:var(--danger); font-weight:bold;">[FALLO]</span> El parche no logró compilar. El mainframe rechazó la inyección.`;
    setTimeout(() => {
      debugAnswered = false;
      selectDebugLine(challenge.bugLine);
    }, 2000);
  }
}


// ============================================================================
// 💻 CODE FORGE SANDBOX (TERMINAL SIMULADA)
// ============================================================================
function focusTerminal() {
  const input = document.getElementById('term-input');
  if (input) input.focus();
}

function handleTerminalCommand(event) {
  if (event.key !== 'Enter') return;

  const inputEl = document.getElementById('term-input');
  const cmd = inputEl.value.trim();
  inputEl.value = '';

  if (cmd === '') return;

  const outputEl = document.getElementById('term-output');
  outputEl.textContent += `\nroot@cyphercode:~$ ${cmd}`;

  // Intérprete de comandos simulado
  const tokens = cmd.toLowerCase().split(' ');
  const primaryCmd = tokens[0];
  let res = "";

  switch (primaryCmd) {
    case 'help':
      res = `Comandos disponibles:
  help               - Muestra este menú de ayuda.
  clear              - Limpia la terminal de comandos.
  whoami             - Información del programador logeado.
  cat [id_concepto]  - Imprime un concepto. Ej. 'cat variables'.
  matrix             - Pausa/reanuda la animación Matrix de fondo.
  xp                 - Muestra tu nivel y XP actual.
  matrix_color [col] - Cambia el color de la lluvia (green, amber, cyan, white, red, purple).`;
      break;

    case 'clear':
      outputEl.textContent = `CypherCode Core v1.0.0 (Matrix Shell)`;
      scrollTerminal();
      return;

    case 'whoami':
      res = `USUARIO ACTUAL: Emmanuel / IT Student
RANGO DE HACKER: ${getRank(level)}
SECTOR CLAVE: CypherCode-Mainframe`;
      break;

    case 'xp':
      res = `Nivel: ${level} | Experiencia: ${xp}/${level * 100} XP`;
      break;

    case 'cat':
      const cid = tokens[1];
      if (!cid) {
        res = `Uso: cat [id_concepto]. Conceptos válidos: intro-progra, variables, condicionales, bucles, arreglos, matrices, poo, excepciones.`;
      } else {
        const t = topics.find(x => x.id === cid);
        if (t) {
          res = `----------------------------------------
> CONCEPTO: ${t.label}
----------------------------------------
${t.explain}

* ANALOGÍA: ${t.analogy || 'N/A'}`;
          addXP(5);
        } else {
          res = `cat: no se encontró el archivo/concepto "${cid}". Escribe 'help' o revisa la sección Conceptos.`;
        }
      }
      break;

    case 'matrix':
      toggleRain();
      res = rainPaused ? "Lluvia de Matrix: PAUSADA" : "Lluvia de Matrix: REANUDADA";
      break;

    case 'matrix_color':
      const col = tokens[1];
      if (col && themeColors[col]) {
        applyTheme(col);
        res = `Lluvia Matrix reconfigurada a color: ${col.toUpperCase()}`;
      } else {
        res = `Uso: matrix_color [green/amber/cyan/white/red/purple]`;
      }
      break;

    default:
      // Simulación básica de cálculo aritmético
      try {
        if (/^[0-9+\-*/().\s]+$/.test(cmd)) {
          const evalRes = Function(`"use strict"; return (${cmd})`)();
          res = `>>> ${evalRes}`;
          addXP(2);
        } else {
          res = `shell_err: comando no reconocido "${primaryCmd}". Escribe 'help' para ver los comandos válidos.`;
        }
      } catch (e) {
        res = `shell_err: sintaxis inválida u operación prohibida.`;
      }
  }

  outputEl.textContent += `\n${res}\n`;
  scrollTerminal();
}

function scrollTerminal() {
  const body = document.getElementById('term-body');
  if (body) {
    setTimeout(() => {
      body.scrollTop = body.scrollHeight;
    }, 10);
  }
}


// ============================================================================
// 📊 BIG-O ANALYZER (SIMULADOR DE COMPLEJIDAD)
// ============================================================================
function updateAnalyzer() {
  const slider = document.getElementById('analyzer-slider');
  const nValEl = document.getElementById('analyzer-n-val');
  const algoSelect = document.getElementById('analyzer-algo');
  const descEl = document.getElementById('analyzer-desc');

  if (!slider || !algoSelect || !descEl) return;

  const N = Number(slider.value);
  nValEl.textContent = N;

  const algo = algoSelect.value;
  let cpuPct = 0;
  let memPct = 0;
  let cpuText = "Óptimo";
  let memText = "Óptimo";
  let techDesc = "";

  switch (algo) {
    case 'o1':
      cpuPct = 5;
      memPct = 5;
      cpuText = "O(1) - Instantáneo";
      memText = "O(1) - Constante";
      techDesc = "<strong>Búsqueda en Tabla Hash o Indexada Directa:</strong> El tiempo de ejecución se mantiene perfectamente plano sin importar si procesamos 10 o 1,000,000 elementos. Es el estándar de oro en eficiencia.";
      break;

    case 'ologn':
      cpuPct = Math.round((Math.log2(N) / 10) * 100); // log2(1000) ~ 10
      memPct = 5;
      cpuText = `O(log N) - ${Math.ceil(Math.log2(N))} operaciones`;
      memText = "O(1) - Constante";
      techDesc = "<strong>Búsqueda Binaria:</strong> Cada paso divide el problema a la mitad de forma sucesiva. Diseñado para arreglos ordenados. Para N=1000, se localiza el elemento en un máximo teórico de solo 10 comparaciones.";
      break;

    case 'on':
      cpuPct = Math.round((N / 1000) * 100);
      memPct = 15;
      cpuText = `O(N) - ${N} operaciones`;
      memText = "O(N) - Escala lineal";
      techDesc = "<strong>Búsqueda Lineal / Bucles Simples:</strong> El tiempo crece de forma directamente proporcional al volumen de datos. Si N se duplica, el esfuerzo requerido por la CPU se duplica también de forma simétrica.";
      break;

    case 'onlogn':
      const ops = N * Math.log2(N);
      cpuPct = Math.min(100, Math.round((ops / 10000) * 100)); // N=1000, NlogN ~ 9900
      memPct = Math.min(50, Math.round((N / 1000) * 50));
      cpuText = `O(N log N) - ${Math.round(ops)} operaciones`;
      memText = "O(N) - Moderado";
      techDesc = "<strong>Ordenamiento Inteligente (Merge / QuickSort):</strong> El límite óptimo alcanzable para ordenar colecciones basadas en comparación. Muy eficiente y estable para volúmenes masivos.";
      break;

    case 'on2':
      cpuPct = Math.min(100, Math.round(((N * N) / 1000000) * 100)); // N=1000 => 1M ops
      memPct = Math.min(100, Math.round((N / 1000) * 100));
      cpuText = `O(N²) - ${N * N} operaciones`;
      memText = "O(N²) - Crítico";
      techDesc = "<strong>Bubble Sort / Bucles Anidados:</strong> El tiempo de CPU crece exponencialmente. Para N=1000 elementos, requiere 1,000,000 de operaciones. Parpadea en alerta ya que el sistema colapsaría con grandes conjuntos de datos.";
      break;
  }

  // Actualizar gauges visuales
  const cpuBar = document.getElementById('gauge-cpu');
  const memBar = document.getElementById('gauge-mem');
  const cpuTextEl = document.getElementById('gauge-cpu-val');
  const memTextEl = document.getElementById('gauge-mem-val');

  if (cpuBar && memBar) {
    cpuBar.style.width = cpuPct + '%';
    memBar.style.width = memPct + '%';

    // Clases de color según criticidad
    cpuBar.className = "gauge-bar-inner " + (cpuPct > 70 ? 'danger' : cpuPct > 35 ? 'warn' : 'optimal');
    memBar.className = "gauge-bar-inner " + (memPct > 70 ? 'danger' : memPct > 35 ? 'warn' : 'optimal');
  }

  if (cpuTextEl) cpuTextEl.textContent = cpuText;
  if (memTextEl) memTextEl.textContent = memText;

  descEl.innerHTML = techDesc;
}


// ============================================================================
//🔍 TRACE MODE (VISUALIZADOR BINARY SEARCH)
// ============================================================================
// Datos estáticos para ilustrar la búsqueda binaria del número 37 en un array de 10 elementos ordenados.
const traceArray = [12, 16, 22, 27, 30, 33, 37, 44, 49, 55];
const traceSteps = [
  { L: 0, R: 9, M: 4, valM: 30, exp: "Inicialización: L=0 (12), R=9 (55). Calculamos el elemento central M = (0+9)//2 = 4 (valor: 30). Como 30 < 37, descartamos la mitad izquierda (valores del 12 al 30) y movemos el puntero L a M + 1 = 5." },
  { L: 5, R: 9, M: 7, valM: 44, exp: "Paso 2: L=5 (33), R=9 (55). Calculamos nuevo centro M = (5+9)//2 = 7 (valor: 44). Como 44 > 37, descartamos la mitad derecha (valores del 44 al 55) y contraemos el puntero R a M - 1 = 6." },
  { L: 5, R: 6, M: 5, valM: 33, exp: "Paso 3: L=5 (33), R=6 (37). M = (5+6)//2 = 5 (valor: 33). Como 33 < 37, descartamos el 33 y movemos L a M + 1 = 6." },
  { L: 6, R: 6, M: 6, valM: 37, exp: "Paso Final: L=6, R=6. M = (6+6)//2 = 6 (valor: 37). El valor de la celda central coincide exactamente con el objetivo (37 == 37). ¡Valor localizado con éxito en solo 4 pasos!" }
];
let currentTraceStepIdx = -1;

function renderTrace() {
  const vis = document.getElementById('trace-visualizer');
  const expBox = document.getElementById('trace-explain');
  if (!vis || !expBox) return;

  if (currentTraceStepIdx === -1) {
    // Estado inicial limpio
    vis.innerHTML = traceArray.map((val, idx) => `
      <div class="trace-cell" id="tc-${idx}">
        <div style="font-size:0.6rem; opacity:0.5; position:absolute; top:2px; font-family:'JetBrains Mono';">${idx}</div>
        ${val}
      </div>
    `).join('');
    expBox.textContent = "Haz clic en 'Paso Siguiente' para dar arranque al protocolo de Búsqueda Binaria.";
    return;
  }

  const step = traceSteps[currentTraceStepIdx];

  vis.innerHTML = traceArray.map((val, idx) => {
    let classes = "trace-cell";
    let indicators = "";

    // Evaluar estados de descarte y punteros
    if (idx < step.L || idx > step.R) {
      classes += " discarded";
    } else if (idx === step.M) {
      if (currentTraceStepIdx === traceSteps.length - 1) {
        classes += " matched"; // Éxito
      } else {
        classes += " active-compare"; // Comparando central
      }
    }

    // Punteros encima de las celdas
    let pointerL = (idx === step.L) ? `<span style="color:var(--primary); font-weight:bold;">L</span>` : "";
    let pointerR = (idx === step.R) ? `<span style="color:var(--danger); font-weight:bold;">R</span>` : "";
    let pointerM = (idx === step.M) ? `<span style="color:var(--info); font-weight:bold;">M</span>` : "";

    let combined = [pointerL, pointerR, pointerM].filter(p => p !== "").join("/");

    return `
      <div class="${classes}" id="tc-${idx}" style="position:relative;">
        <div style="font-size:0.55rem; opacity:0.4; position:absolute; top:2px; font-family:'JetBrains Mono';">${idx}</div>
        ${val}
        ${combined ? `<div style="position:absolute; bottom:-18px; font-size:0.7rem; font-family:'JetBrains Mono', monospace; font-weight:bold; white-space:nowrap;">${combined}</div>` : ""}
      </div>
    `;
  }).join('');

  expBox.innerHTML = step.exp;
}

function nextTraceStep() {
  if (currentTraceStepIdx < traceSteps.length - 1) {
    currentTraceStepIdx++;
    renderTrace();
    addXP(4);
  }
}

function prevTraceStep() {
  if (currentTraceStepIdx > 0) {
    currentTraceStepIdx--;
    renderTrace();
  }
}

function resetTrace() {
  currentTraceStepIdx = -1;
  renderTrace();
}


// ============================================================================
// REFERENCIAS SINTÁCTICAS (TABLAS HTML ESTÁTICAS DE ALTA DENSIDAD)
// ============================================================================
var refData_old = {
  tipos: `
    <table class="ref-table">
      <thead>
        <tr>
          <th>Tipo (Java/C#)</th>
          <th>Equivalente Python</th>
          <th>Bits / Rango</th>
          <th>Uso Común</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="mono">int</td>
          <td class="mono">float (inf)</td>
          <td>32 bits / -2.1B a 2.1B</td>
          <td>Contadores, índices, IDs enteros.</td>
        </tr>
        <tr>
          <td class="mono">double</td>
          <td class="mono">float</td>
          <td>64 bits / Precisión decimal alta</td>
          <td>Cálculos científicos, coordenadas.</td>
        </tr>
        <tr>
          <td class="mono">boolean</td>
          <td class="mono">bool</td>
          <td>1 bit / true o false</td>
          <td>Condiciones lógicas, flags de control.</td>
        </tr>
        <tr>
          <td class="mono">char</td>
          <td class="mono">str (len 1)</td>
          <td>16 bits / Unicode carácter único</td>
          <td>Símbolos de texto sencillos.</td>
        </tr>
        <tr>
          <td class="mono">String</td>
          <td class="mono">str</td>
          <td>Variable / Texto extendido</td>
          <td>Cadenas de caracteres alfanuméricas.</td>
        </tr>
      </tbody>
    </table>
  `,
  operadores: `
    <table class="ref-table">
      <thead>
        <tr>
          <th>Operador</th>
          <th>Nombre</th>
          <th>Ejemplo Código</th>
          <th>Comentario / Evaluación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="mono">==</td>
          <td>Igualdad lógica</td>
          <td class="mono">x == 5</td>
          <td>Retorna true si x almacena el valor 5.</td>
        </tr>
        <tr>
          <td class="mono">!=</td>
          <td>Diferencia lógica</td>
          <td class="mono">x != 5</td>
          <td>Retorna true si x es un valor distinto a 5.</td>
        </tr>
        <tr>
          <td class="mono">&amp;&amp; / and</td>
          <td>Y Lógico (AND)</td>
          <td class="mono">A &amp;&amp; B</td>
          <td>Ambos deben ser verdaderos para dar true.</td>
        </tr>
        <tr>
          <td class="mono">|| / or</td>
          <td>O Lógico (OR)</td>
          <td class="mono">A || B</td>
          <td>Da true si al menos uno es verdadero.</td>
        </tr>
        <tr>
          <td class="mono">! / not</td>
          <td>Negación (NOT)</td>
          <td class="mono">!A</td>
          <td>Invierte el valor de verdad.</td>
        </tr>
      </tbody>
    </table>
  `,
  control: `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; font-size:0.9rem;">
      <div class="glass" style="padding:1.5rem;">
        <h4 class="mono" style="color:var(--primary); margin-bottom:0.8rem;">// Condicionales</h4>
        <pre class="code-block" style="margin:0;"><code class="mono">if (x > 0) {
    // Rama verdadera
} else if (x == 0) {
    // Rama intermedia
} else {
    // Rama falsa
}</code></pre>
      </div>
      <div class="glass" style="padding:1.5rem;">
        <h4 class="mono" style="color:var(--primary); margin-bottom:0.8rem;">// Switch Case</h4>
        <pre class="code-block" style="margin:0;"><code class="mono">switch(opcion) {
    case 1:
        // Código
        break;
    default:
        // Caso fallback
}</code></pre>
      </div>
    </div>
  `,
  arrays: `
    <table class="ref-table">
      <thead>
        <tr>
          <th>Sintaxis Java / C#</th>
          <th>Sintaxis Python</th>
          <th>Operación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="mono">int[] arr = new int[10];</td>
          <td class="mono">arr = [0]*10</td>
          <td>Crear arreglo vacío de tamaño 10.</td>
        </tr>
        <tr>
          <td class="mono">arr[0] = 50;</td>
          <td class="mono">arr[0] = 50</td>
          <td>Asignar el valor 50 al primer índice.</td>
        </tr>
        <tr>
          <td class="mono">int len = arr.length;</td>
          <td class="mono">length = len(arr)</td>
          <td>Obtener el total de elementos.</td>
        </tr>
        <tr>
          <td class="mono">List&lt;int&gt; l = new ArrayList&lt;&gt;();</td>
          <td class="mono">l = []</td>
          <td>Crear lista dinámica.</td>
        </tr>
      </tbody>
    </table>
  `
};

function showRef(tab, btn) {
  document.querySelectorAll('.ref-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const content = document.getElementById('ref-content');
  if (content) {
    content.innerHTML = refData[tab] || '';
  }
}


// ============================================================================
// PANEL DE PERSONALIZACIÓN Y CONFIGURACIÓN DE MATRIX
// ============================================================================
function toggleCustomPanel() {
  const panel = document.getElementById('customize-panel');
  if (panel) panel.classList.toggle('open');
}

// Cierra panel si el usuario da clic fuera
document.addEventListener('click', (e) => {
  const panel = document.getElementById('customize-panel');
  const btn = document.getElementById('btn-open-custom');
  if (panel && panel.classList.contains('open')) {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.classList.remove('open');
    }
  }
});

function setRainSpeed(val) {
  rainSpeed = Number(val);
  const valEl = document.getElementById('speed-val');
  if (valEl) valEl.textContent = val + 'ms';
}

function setRainDensity(val) {
  fontSize = Number(val);
  const valEl = document.getElementById('density-val');
  if (valEl) valEl.textContent = val + 'px';
  resizeCanvas();
}

function toggleRain() {
  rainPaused = !rainPaused;
  const btn = document.getElementById('btn-pause-rain');
  if (btn) btn.textContent = rainPaused ? '▶ Reanudar Lluvia' : '⏸ Pausar Lluvia';
}

function toggleRainVisible() {
  rainHidden = !rainHidden;
  canvas.style.display = rainHidden ? 'none' : 'block';
  const btn = document.getElementById('btn-hide-rain');
  if (btn) btn.textContent = rainHidden ? '👁 Mostrar Lluvia' : '👁 Ocultar Lluvia';
}


// ============================================================================
// MAPA DE TEMAS (SISTEMA DE DISEÑO)
// ============================================================================
const themeColors = {
  green: '#00ff41',
  amber: '#ffb400',
  white: '#e0e0e0',
  cyan: '#00ffff',
  red: '#ff4444',
  purple: '#b388ff'
};

function applyTheme(theme) {
  const root = document.documentElement;

  // Quita clases del tema antiguo
  Object.keys(themeColors).forEach(t => root.classList.remove('theme-' + t));

  // Aplica el nuevo tema en el root y setea data-theme
  root.classList.add('theme-' + theme);
  root.setAttribute('data-theme', theme);

  // Sincroniza caracteres de la lluvia Matrix
  matrixColor = themeColors[theme] || themeColors.green;

  // Actualiza los botones de tema en el panel
  document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active-theme'));
  const activeBtn = document.querySelector(`.theme-btn[data-theme="${theme}"]`);
  if (activeBtn) activeBtn.classList.add('active-theme');

  // Guardar en LocalStorage
  localStorage.setItem('guiaTheme', theme);
}

// Conectar botones de temas en panel
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});


// ============================================================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================================================
// Cargar tema guardado
applyTheme(localStorage.getItem('guiaTheme') || 'green');
// Sincronizar gamificación inicial
updateXPHUD();
// Render primario
renderStats();
// ============================================================================
// SECCIÓN DE EJEMPLOS (GALERÍA)
// ============================================================================
let activeExampleTag = 'all';
let filteredExamples = typeof examplesData !== 'undefined' ? examplesData : [];
let activeExampleIndex = 0;
let currentExampleLang = 'java';

function renderExamplesFilters() {
  const filterContainer = document.getElementById('examples-filters');
  if (!filterContainer) return;

  const tags = new Set();
  (typeof examplesData !== 'undefined' ? examplesData : []).forEach(ex => {
    if (ex.tags) ex.tags.forEach(t => tags.add(t));
  });
  const tagsArray = ['all', ...Array.from(tags).sort()];

  filterContainer.innerHTML = tagsArray.map(t => `
    <button class="glass-btn ${t === activeExampleTag ? 'active' : ''}" 
            onclick="setExampleTag('${t}')" 
            style="margin:0 5px 5px 0; font-size:0.85rem; padding: 6px 12px; text-align:left;">
      ${t === 'all' ? 'TODOS' : '[' + t + ']'}
    </button>
  `).join('');
}

function setExampleTag(tag) {
  activeExampleTag = tag;
  activeExampleIndex = 0;

  if (activeExampleTag === 'all') {
    filteredExamples = typeof examplesData !== 'undefined' ? examplesData : [];
  } else {
    filteredExamples = (typeof examplesData !== 'undefined' ? examplesData : []).filter(ex => ex.tags && ex.tags.includes(activeExampleTag));
  }

  renderExamplesFilters();
  renderActiveExample();
}

function prevExample() {
  if (activeExampleIndex > 0) {
    activeExampleIndex--;
    renderActiveExample();
  }
}

function nextExample() {
  if (activeExampleIndex < filteredExamples.length - 1) {
    activeExampleIndex++;
    renderActiveExample();
  }
}

function switchExampleLang(lang) {
  currentExampleLang = lang;
  renderActiveExample();
}

function renderActiveExample() {
  const viewer = document.getElementById('example-viewer');
  if (!viewer) return;

  if (filteredExamples.length === 0) {
    viewer.innerHTML = '<div class="glass" style="padding: 2rem; text-align:center; color: var(--primary);">No hay ejemplos para esta etiqueta.</div>';
    return;
  }

  const ex = filteredExamples[activeExampleIndex];

  if (!ex.code[currentExampleLang]) {
    currentExampleLang = ex.code.java ? 'java' : 'python';
  }
  const codeContent = ex.code[currentExampleLang] || "";

  const tagsHtml = (ex.tags || []).map(t => '[' + t + ']').join(' ');

  viewer.style.position = 'relative';

  viewer.innerHTML = `
    <div class="glass" style="padding: 2rem; border-radius: 8px; position:relative;">
      
      <!-- Navegación y Título -->
      <div style="margin-bottom:1.5rem; border-bottom: 1px dashed var(--border-glass); padding-bottom: 1rem;">
        <h3 class="mono" style="margin:0; color:var(--primary); font-size: 1.4rem;">${ex.title || 'Ejemplo'}</h3>
      </div>
      
      <!-- Tags -->
      <div style="font-size:0.85rem; opacity:0.6; margin-bottom:1.5rem;" class="mono">${tagsHtml}</div>
      
      <!-- Problema y Análisis -->
      <div style="margin-bottom: 1.5rem; background: rgba(10, 15, 10, 0.4); padding: 1rem; border-radius: 5px; border-left: 2px solid var(--text-main);">
        <p style="margin:0 0 10px 0;"><strong>🎯 El Problema:</strong> ${ex.problema || "Analizar el comportamiento y la lógica algorítmica."}</p>
        <p style="margin:0; font-size: 0.95rem; opacity: 0.9;"><strong>⚙️ Lógica Aplicada:</strong> ${ex.analisis || "Demuestra cómo las estructuras de control dirigen el flujo de datos."}</p>
      </div>
      
      <!-- Código con lenguajes flotando -->
      <div class="code-block" style="position:relative; font-size:1rem; padding:0; overflow-x:auto; background: rgba(0,0,0,0.4); border-left: 3px solid var(--primary); min-height: 250px;">
        <pre style="margin: 0;"><code class="language-${currentExampleLang}" style="background: transparent; padding: 1.5rem;">${codeContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
        
        <!-- Botones Flotantes de Lenguaje (Abajo a la Derecha) -->
        <div style="position:absolute; bottom:15px; right:15px; display:flex; gap:0.5rem; z-index:10; align-items: center;">
          ${ex.code.java ? `<button class="glass-btn ${currentExampleLang === 'java' ? 'active' : ''}" onclick="switchExampleLang('java')" style="padding:4px 10px; font-size:0.8rem;">[Java]</button>` : ''}
          ${ex.code.python ? `<button class="glass-btn ${currentExampleLang === 'python' ? 'active' : ''}" onclick="switchExampleLang('python')" style="padding:4px 10px; font-size:0.8rem;">[Python]</button>` : ''}
          <div style="width: 1px; height: 15px; background: var(--border-glass); margin: 0 4px;"></div>
          <button class="glass-btn" onclick="alert('La función de ejecución estará disponible próximamente.')" style="padding:4px 10px; font-size:0.8rem; color: var(--primary); border-color: var(--primary); display: flex; align-items: center; gap: 4px;">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Run
          </button>
        </div>
      </div>
      
    </div>

    <!-- Carrusel Flotante: Anterior -->
    <button class="glass-btn carousel-btn-prev" onclick="prevExample()" 
            style="opacity: ${activeExampleIndex > 0 ? '1' : '0.2'}; pointer-events: ${activeExampleIndex > 0 ? 'auto' : 'none'};">&#8592;</button>

    <!-- Carrusel Flotante: Siguiente -->
    <button class="glass-btn carousel-btn-next" onclick="nextExample()" 
            style="opacity: ${activeExampleIndex < filteredExamples.length - 1 ? '1' : '0.2'}; pointer-events: ${activeExampleIndex < filteredExamples.length - 1 ? 'auto' : 'none'};">&#8594;</button>
  `;

  if (window.hljs) {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }
}

// Renderizado de ejemplos manejado directamente en showSection
