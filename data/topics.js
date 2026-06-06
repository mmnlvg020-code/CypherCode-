const topics = [
  {
    "id": "io",
    "cat": "Fundamentos",
    "label": "Entrada y Salida (I/O)",
    "explain": "La interacción con el usuario en terminal se logra capturando texto (entrada) e imprimiéndolo procesado (salida). En Python moderno, se utilizan f-strings para formatear la salida limpiamente.",
    "analogy": "💡 La entrada (input) son las preguntas que le haces al usuario. La salida (print) son las respuestas que el programa devuelve a la pantalla.",
    "errors": [
      "Olvidar colocar la letra \"f\" antes de las comillas en un print formateado.",
      "No hacer casteo de datos: int(input()) cuando se esperan números."
    ],
    "code": {
      "java": "<span class=\"code-type\">Scanner</span> scanner = <span class=\"code-kw\">new</span> <span class=\"code-type\">Scanner</span>(<span class=\"code-type\">System</span>.in);\n<span class=\"code-type\">String</span> var = scanner.<span class=\"code-method\">nextLine</span>();\n<span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Salida: \"</span> + var);",
      "python": "<span class=\"code-comment\"># Casteo e f-strings</span>\nx = <span class=\"code-method\">int</span>(<span class=\"code-method\">input</span>(<span class=\"code-str\">\"Digite un valor: \"</span>))\n<span class=\"code-method\">print</span>(<span class=\"code-str\">f\"El valor doble es: {x*2}\"</span>)"
    }
  },
  {
    "id": "intro-progra",
    "cat": "Fundamentos",
    "label": "¿Qué es Programar?",
    "explain": "Programar es el proceso de diseñar, codificar, depurar y mantener el código fuente de programas computacionales. Consiste en darle instrucciones a la computadora para que resuelva problemas específicos de forma estructurada.",
    "analogy": "💡 Escribir código es como redactar una receta de cocina extremadamente detallada para un chef robot que no sabe deducir nada por sí mismo.",
    "errors": [
      "Asumir que la computadora entiende el contexto de lo que quieres hacer.",
      "Omitir pasos lógicos obvios, asumiendo que el sistema lo resolverá por sí solo."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// En Java todo código vive dentro de una clase</span>\n<span class=\"code-kw\">public class</span> <span class=\"code-type\">Main</span> {\n    <span class=\"code-kw\">public static void</span> <span class=\"code-method\">main</span>(<span class=\"code-type\">String</span>[] args) {\n        <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"¡Hola Mundo!\"</span>);\n    }\n}",
      "python": "<span class=\"code-comment\"># Python destaca por su sintaxis simple y directa</span>\n<span class=\"code-method\">print</span>(<span class=\"code-str\">\"¡Hola Mundo!\"</span>)"
    }
  },
  {
    "id": "variables",
    "cat": "Fundamentos",
    "label": "Variables y Tipos",
    "explain": "Una variable es un espacio de memoria reservado para almacenar datos que pueden cambiar durante la ejecución. En lenguajes de tipado fuerte (Java), debes declarar explícitamente el tipo de dato. En Python, el tipo se infiere de forma dinámica.",
    "analogy": "💡 Una variable es una caja etiquetada donde puedes guardar un valor (un número, una palabra). El tipo de dato define la forma de la caja (caja para zapatos, caja para libros).",
    "errors": [
      "Declarar variables con tipos incompatibles al asignar datos en Java.",
      "Intentar utilizar una variable local antes de haberla declarado o inicializado."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Tipado estático y explícito</span>\n<span class=\"code-kw\">int</span> <span class=\"code-kw\">edad</span> = <span class=\"code-num\">20</span>;\n<span class=\"code-type\">String</span> <span class=\"code-kw\">nombre</span> = <span class=\"code-str\">\"Estudiante\"</span>;\n<span class=\"code-kw\">double</span> <span class=\"code-kw\">pi</span> = <span class=\"code-num\">3.14159</span>;",
      "python": "<span class=\"code-comment\"># Tipado dinámico (sin tipo explícito)</span>\nedad = <span class=\"code-num\">20</span>\nnombre = <span class=\"code-str\">\"Estudiante\"</span>\npi = <span class=\"code-num\">3.14159</span>"
    }
  },
  {
    "id": "condicionales",
    "cat": "Control",
    "label": "Estructuras Condicionales (if/elif)",
    "explain": "Permiten bifurcar el flujo de ejecución del programa según se cumpla o no una condición. En Python, la estructura if/elif/else es ideal para encadenar múltiples decisiones (como clasificar edades) sin anidar código excesivamente.",
    "analogy": "💡 Es como clasificar un paquete: Si pesa más de 50kg, va en camión; sino si (elif) pesa más de 10kg, va en moto; de lo contrario (else), va en bicicleta.",
    "errors": [
      "Olvidar los dos puntos \":\" al final de la condición en Python.",
      "Mala indentación dentro del bloque if/elif/else."
    ],
    "code": {
      "java": "<span class=\"code-kw\">int</span> edad = <span class=\"code-num\">20</span>;\n<span class=\"code-kw\">if</span> (edad > <span class=\"code-num\">65</span>) { <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Adulto Mayor\"</span>); }\n<span class=\"code-kw\">else if</span> (edad > <span class=\"code-num\">18</span>) { <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Adulto\"</span>); }\n<span class=\"code-kw\">else</span> { <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Menor\"</span>); }",
      "python": "<span class=\"code-comment\"># Encadenamiento con elif en Python</span>\nedad = <span class=\"code-method\">int</span>(<span class=\"code-method\">input</span>(<span class=\"code-str\">\"Digite la edad: \"</span>))\n<span class=\"code-kw\">if</span> edad > <span class=\"code-num\">65</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Adulto Mayor\"</span>)\n<span class=\"code-kw\">elif</span> edad > <span class=\"code-num\">18</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Adulto\"</span>)\n<span class=\"code-kw\">else</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Menor\"</span>)"
    }
  },
  {
    "id": "switch",
    "cat": "Control",
    "label": "Selección Múltiple (Switch)",
    "explain": "La estructura switch evalúa una expresión y ejecuta el bloque de código correspondiente al caso (case) que coincida. Es ideal para crear menús interactivos.",
    "analogy": "💡 Es como un conmutador de vías de tren: dependiendo del destino (valor), el tren se desvía por un camino específico (case).",
    "errors": [
      "Olvidar colocar el comando break al final de cada caso, provocando que se ejecuten los casos siguientes (fall-through).",
      "Usar tipos de datos no compatibles en la evaluación del switch."
    ],
    "code": {
      "java": "<span class=\"code-kw\">int</span> opcion = <span class=\"code-num\">1</span>;\n<span class=\"code-kw\">switch</span>(opcion) {\n  <span class=\"code-kw\">case</span> <span class=\"code-num\">1</span>:\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Opción 1\"</span>);\n    <span class=\"code-kw\">break</span>;\n  <span class=\"code-kw\">default</span>:\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Inválido\"</span>);\n}",
      "python": "<span class=\"code-comment\"># Python 3.10+ usa match-case</span>\nopcion = <span class=\"code-num\">1</span>\n<span class=\"code-kw\">match</span> opcion:\n    <span class=\"code-kw\">case</span> <span class=\"code-num\">1</span>:\n        <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Opción 1\"</span>)\n    <span class=\"code-kw\">case</span> _:\n        <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Inválido\"</span>)"
    }
  },
  {
    "id": "bucles",
    "cat": "Control",
    "label": "Bucles y Rangos (for/while)",
    "explain": "Los bucles repiten un bloque de código. En Python, el bucle for suele iterar sobre la función range(start, max, step). El bucle while se repite mientras su condición sea verdadera.",
    "analogy": "💡 range(1, 10, 2) es como subir una escalera empezando en el escalón 1, hasta el escalón 9, saltando de 2 en 2.",
    "errors": [
      "Crear un bucle infinito en un while olvidando actualizar el contador (ej. divisor += 1).",
      "Asumir que range(1, 10) incluye el 10 (llega hasta max - 1)."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Iterar saltando de a 2</span>\n<span class=\"code-kw\">for</span> (<span class=\"code-kw\">int</span> i = <span class=\"code-num\">1</span>; i &lt; <span class=\"code-num\">10</span>; i += <span class=\"code-num\">2</span>) {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(i);\n}",
      "python": "<span class=\"code-comment\"># Inicia en 1, incrementa de 2 en 2, maximo 9</span>\n<span class=\"code-kw\">for</span> i <span class=\"code-kw\">in</span> <span class=\"code-method\">range</span>(<span class=\"code-num\">1</span>, <span class=\"code-num\">10</span>, <span class=\"code-num\">2</span>):\n    <span class=\"code-method\">print</span>(i)"
    }
  },
  {
    "id": "arreglos",
    "cat": "Arreglos",
    "label": "Arreglos (Vectores)",
    "explain": "Un arreglo (array o vector) es una estructura de datos indexada que almacena una colección secuencial de elementos del mismo tipo con un tamaño fijo en Java.",
    "analogy": "💡 Un hotel con habitaciones numeradas del 0 al N-1. En cada habitación solo puede hospedarse un tipo específico de persona (ej. solo matemáticos).",
    "errors": [
      "Intentar acceder al índice N en un arreglo de tamaño N, arrojando ArrayIndexOutOfBoundsException.",
      "Asumir que los arreglos en Java cambian de tamaño automáticamente."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Declaración de arreglo con tamaño definido</span>\n<span class=\"code-kw\">int</span>[] numeros = <span class=\"code-kw\">new int</span>[<span class=\"code-num\">3</span>];\nnumeros[<span class=\"code-num\">0</span>] = <span class=\"code-num\">10</span>;\nnumeros[<span class=\"code-num\">1</span>] = <span class=\"code-num\">20</span>;\nnumeros[<span class=\"code-num\">2</span>] = <span class=\"code-num\">30</span>;",
      "python": "<span class=\"code-comment\"># En Python se utilizan Listas (dinámicas por defecto)</span>\nnumeros = [<span class=\"code-num\">10</span>, <span class=\"code-num\">20</span>, <span class=\"code-num\">30</span>]\nnumeros.append(<span class=\"code-num\">40</span>) <span class=\"code-comment\"># Crece dinámicamente</span>"
    }
  },
  {
    "id": "matrices",
    "cat": "Arreglos",
    "label": "Matrices (Arreglos 2D)",
    "explain": "Una matriz es un arreglo bidimensional organizado en forma de tabla con filas y columnas, donde se requiere dos índices para acceder a un elemento.",
    "analogy": "💡 Una hoja de cálculo (Excel) con filas y columnas, o un tablero de ajedrez donde las coordenadas definen la casilla.",
    "errors": [
      "Confundir el orden de los índices: escribir matriz[columna][fila] en lugar de [fila][columna].",
      "Olvidar inicializar las dimensiones internas en arreglos escalonados (jagged arrays)."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Matriz de 2x3 (2 filas, 3 columnas)</span>\n<span class=\"code-kw\">int</span>[][] matriz = <span class=\"code-kw\">new int</span>[<span class=\"code-num\">2</span>][<span class=\"code-num\">3</span>];\nmatriz[<span class=\"code-num\">0</span>][<span class=\"code-num\">0</span>] = <span class=\"code-num\">5</span>;\nmatriz[<span class=\"code-num\">1</span>][<span class=\"code-num\">2</span>] = <span class=\"code-num\">15</span>;",
      "python": "<span class=\"code-comment\"># En Python se representan como listas anidadas</span>\nmatriz = [\n    [<span class=\"code-num\">1</span>, <span class=\"code-num\">2</span>, <span class=\"code-num\">3</span>],\n    [<span class=\"code-num\">4</span>, <span class=\"code-num\">5</span>, <span class=\"code-num\">6</span>]\n]\nvalor = matriz[<span class=\"code-num\">0</span>][<span class=\"code-num\">0</span>] <span class=\"code-comment\"># Acceso</span>"
    }
  },
  {
    "id": "listas",
    "cat": "Arreglos",
    "label": "Listas Dinámicas (ArrayList)",
    "explain": "A diferencia de los arreglos tradicionales, las colecciones dinámicas como ArrayList (Java) o List (C#) pueden crecer o encogerse automáticamente en tiempo de ejecución.",
    "analogy": "💡 Un arreglo es como un cartón de huevos (12 espacios fijos). Una Lista Dinámica es como un tren al que le puedes agregar vagones infinitamente mientras haya motor.",
    "errors": [
      "Confundir .length (para arreglos) con .size() o .Count (para listas dinámicas).",
      "Usar corchetes list[0] en Java en lugar del método list.get(0)."
    ],
    "code": {
      "java": "<span class=\"code-type\">ArrayList</span>&lt;<span class=\"code-type\">String</span>&gt; lista = <span class=\"code-kw\">new</span> <span class=\"code-type\">ArrayList</span>&lt;&gt;();\nlista.<span class=\"code-method\">add</span>(<span class=\"code-str\">\"Tigre\"</span>);\n<span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(lista.<span class=\"code-method\">get</span>(<span class=\"code-num\">0</span>));",
      "python": "<span class=\"code-comment\"># En Python las listas son dinámicas por defecto</span>\nlista = []\nlista.append(<span class=\"code-str\">\"Tigre\"</span>)\n<span class=\"code-method\">print</span>(lista[<span class=\"code-num\">0</span>])"
    }
  },
  {
    "id": "poo",
    "cat": "POO",
    "label": "Clases y Objetos",
    "explain": "La Programación Orientada a Objetos (POO) es un paradigma que utiliza \"Clases\" como plantillas estructurales y \"Objetos\" como instancias de dichas clases que agrupan atributos (datos) y métodos (comportamientos).",
    "analogy": "💡 La Clase es el plano arquitectónico de una casa. El Objeto es la casa física construida con base en ese plano.",
    "errors": [
      "Intentar acceder a atributos privados desde fuera de la clase sin utilizar métodos getters y setters.",
      "Confundir la clase con una instancia particular de la misma."
    ],
    "code": {
      "java": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Auto</span> {\n    <span class=\"code-kw\">private</span> <span class=\"code-type\">String</span> marca;\n    \n    <span class=\"code-kw\">public</span> <span class=\"code-method\">Auto</span>(<span class=\"code-type\">String</span> m) { <span class=\"code-kw\">this</span>.marca = m; }\n    <span class=\"code-kw\">public</span> <span class=\"code-type\">String</span> <span class=\"code-method\">getMarca</span>() { <span class=\"code-kw\">return this</span>.marca; }\n}",
      "python": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Auto</span>:\n    <span class=\"code-kw\">def</span> <span class=\"code-method\">__init__</span>(<span class=\"code-kw\">self</span>, marca):\n        <span class=\"code-kw\">self</span>.marca = marca <span class=\"code-comment\"># Atributo público por defecto</span>"
    }
  },
  {
    "id": "excepciones",
    "cat": "Avanzado",
    "label": "Manejo de Excepciones",
    "explain": "Las excepciones son anomalías que ocurren durante la ejecución de un programa que interrumpen el flujo normal. Mediante bloques try-catch-finally, podemos capturarlas para evitar la caída abrupta del software.",
    "analogy": "💡 Es el cinturón de seguridad en un automóvil. Esperas no necesitarlo, pero si hay un choque (un error), evita una catástrofe.",
    "errors": [
      "Capturar la clase Exception genérica en primer lugar en lugar de capturar excepciones específicas.",
      "Dejar el bloque catch completamente vacío, ocultando el error sin darle solución ni logearlo."
    ],
    "code": {
      "java": "<span class=\"code-kw\">try</span> {\n    <span class=\"code-kw\">int</span> res = <span class=\"code-num\">10</span> / <span class=\"code-num\">0</span>;\n} <span class=\"code-kw\">catch</span> (<span class=\"code-type\">ArithmeticException</span> e) {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Error: \"</span> + e.<span class=\"code-method\">getMessage</span>());\n} <span class=\"code-kw\">finally</span> {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Limpieza de recursos\"</span>);\n}",
      "python": "<span class=\"code-kw\">try</span>:\n    res = <span class=\"code-num\">10</span> / <span class=\"code-num\">0</span>\n<span class=\"code-kw\">except</span> <span class=\"code-type\">ZeroDivisionError</span> <span class=\"code-kw\">as</span> e:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">f\"Error: {e}\"</span>)\n<span class=\"code-kw\">finally</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Limpieza de recursos\"</span>)"
    }
  },
  {
    "id": "herencia",
    "cat": "POO",
    "label": "Herencia y Polimorfismo",
    "explain": "La herencia permite crear nuevas clases basadas en clases existentes, heredando sus atributos y métodos. El polimorfismo permite tratar a objetos de clases hijas como si fueran de la clase padre.",
    "analogy": "💡 Herencia: Un \"Perro\" hereda características de la clase \"Mamífero\". Polimorfismo: Puedes pedirle a cualquier \"Animal\" que haga sonido, y cada uno responderá a su manera (ladrar, maullar).",
    "errors": [
      "No invocar el constructor de la clase padre (super() o base()) cuando es requerido.",
      "Olvidar la etiqueta @Override al sobreescribir un método en Java."
    ],
    "code": {
      "java": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Animal</span> { <span class=\"code-kw\">void</span> <span class=\"code-method\">sonido</span>() {} }\n<span class=\"code-kw\">class</span> <span class=\"code-type\">Perro</span> <span class=\"code-kw\">extends</span> <span class=\"code-type\">Animal</span> {\n  @Override\n  <span class=\"code-kw\">void</span> <span class=\"code-method\">sonido</span>() { <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Guau\"</span>); }\n}",
      "python": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Animal</span>:\n  <span class=\"code-kw\">def</span> <span class=\"code-method\">sonido</span>(<span class=\"code-kw\">self</span>): <span class=\"code-kw\">pass</span>\n\n<span class=\"code-kw\">class</span> <span class=\"code-type\">Perro</span>(<span class=\"code-type\">Animal</span>):\n  <span class=\"code-kw\">def</span> <span class=\"code-method\">sonido</span>(<span class=\"code-kw\">self</span>): <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Guau\"</span>)"
    }
  },
  {
    "id": "archivos",
    "cat": "Avanzado",
    "label": "Manejo de Archivos",
    "explain": "El manejo de archivos permite que los datos de un programa persistan más allá de la ejecución del mismo, guardándolos en el almacenamiento secundario (disco duro) o leyéndolos de él.",
    "analogy": "💡 Es como tener un archivador de metal en tu oficina física: puedes sacar una carpeta con datos (leer) o escribir un nuevo reporte y guardarlo (escribir) para que no se pierda al apagar la luz de la oficina.",
    "errors": [
      "Intentar leer un archivo que no existe en la ruta especificada, arrojando un error de tipo FileNotFoundException.",
      "Olvidar cerrar el flujo del archivo (close()), lo que puede bloquear recursos del sistema operativo."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Lectura clásica con try-with-resources en Java</span>\n<span class=\"code-kw\">try</span> (<span class=\"code-type\">BufferedReader</span> br = <span class=\"code-kw\">new</span> <span class=\"code-type\">BufferedReader</span>(<span class=\"code-kw\">new</span> <span class=\"code-type\">FileReader</span>(<span class=\"code-str\">\"datos.txt\"</span>))) {\n    <span class=\"code-type\">String</span> linea;\n    <span class=\"code-kw\">while</span> ((linea = br.readLine()) != <span class=\"code-kw\">null</span>) {\n        <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(linea);\n    }\n} <span class=\"code-kw\">catch</span> (<span class=\"code-type\">IOException</span> e) {\n    e.<span class=\"code-method\">printStackTrace</span>();\n}",
      "python": "<span class=\"code-comment\"># Lectura limpia en Python con context manager (with)</span>\n<span class=\"code-kw\">try</span>:\n    <span class=\"code-kw\">with</span> <span class=\"code-method\">open</span>(<span class=\"code-str\">\"datos.txt\"</span>, <span class=\"code-str\">\"r\"</span>) <span class=\"code-kw\">as</span> file:\n        <span class=\"code-kw\">for</span> linea <span class=\"code-kw\">in</span> file:\n            <span class=\"code-method\">print</span>(linea.strip())\n<span class=\"code-kw\">except</span> <span class=\"code-type\">FileNotFoundError</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"El archivo no existe\"</span>)"
    }
  },
  {
    "id": "igu",
    "cat": "Avanzado",
    "label": "IGU Básica (Ventanas)",
    "explain": "Una Interfaz Gráfica de Usuario (IGU) permite a las personas interactuar con el software mediante componentes visuales interactivos como ventanas, botones, etiquetas y cajas de texto, en lugar de la consola de texto tradicional.",
    "analogy": "💡 Es como el panel de control de un elevador moderno: en lugar de tener que digitar comandos en una terminal oculta, presionas botones físicos y visualizas pantallas iluminadas.",
    "errors": [
      "Crear componentes gráficos pero olvidar agregarlos (.add()) a la ventana contenedora principal.",
      "Olvidar configurar el cierre predeterminado de la ventana, dejando el proceso del programa corriendo en segundo plano."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Ventana interactiva clásica en Swing (Java)</span>\n<span class=\"code-type\">JFrame</span> frame = <span class=\"code-kw\">new</span> <span class=\"code-type\">JFrame</span>(<span class=\"code-str\">\"Ventana Principal\"</span>);\n<span class=\"code-type\">JButton</span> boton = <span class=\"code-kw\">new</span> <span class=\"code-type\">JButton</span>(<span class=\"code-str\">\"Clic\"</span>);\nboton.<span class=\"code-method\">addActionListener</span>(e -> <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Presionado\"</span>));\nframe.<span class=\"code-method\">add</span>(boton);\nframe.<span class=\"code-method\">setSize</span>(<span class=\"code-num\">300</span>, <span class=\"code-num\">200</span>);\nframe.<span class=\"code-method\">setVisible</span>(<span class=\"code-kw\">true</span>);",
      "python": "<span class=\"code-comment\"># Ventana básica usando la librería nativa Tkinter (Python)</span>\n<span class=\"code-kw\">import</span> <span class=\"code-type\">tkinter</span> <span class=\"code-kw\">as</span> <span class=\"code-type\">tk</span>\nroot = tk.Tk()\nroot.title(<span class=\"code-str\">\"Ventana Principal\"</span>)\nboton = tk.Button(root, text=<span class=\"code-str\">\"Clic\"</span>, command=<span class=\"code-kw\">lambda</span>: <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Presionado\"</span>))\nboton.pack()\nroot.mainloop()"
    }
  },
  {
    "id": "operadores",
    "cat": "Fundamentos",
    "label": "Operadores Matemáticos Especiales",
    "explain": "Más allá de sumar (+) y restar (-), existen operadores críticos como la División Entera (//), el Módulo (residuo, %) y la Potencia (**).",
    "analogy": "💡 Si divides 5 entre 2, la división entera (//) es 2 (cuántas veces cabe completo), y el módulo (%) es 1 (lo que sobra).",
    "errors": [
      "Confundir la división normal (/) con la división entera (//).",
      "Creer que el módulo (%) devuelve un porcentaje, cuando devuelve el residuo."
    ],
    "code": {
      "java": "<span class=\"code-kw\">int</span> division = <span class=\"code-num\">5</span> / <span class=\"code-num\">2</span>; <span class=\"code-comment\">// Es 2 por tipado int</span>\n<span class=\"code-kw\">int</span> modulo = <span class=\"code-num\">5</span> % <span class=\"code-num\">2</span>;\n<span class=\"code-kw\">double</span> potencia = <span class=\"code-type\">Math</span>.<span class=\"code-method\">pow</span>(<span class=\"code-num\">2</span>, <span class=\"code-num\">3</span>);",
      "python": "division = <span class=\"code-num\">5</span> // <span class=\"code-num\">2</span> <span class=\"code-comment\"># División entera</span>\nmodulo = <span class=\"code-num\">5</span> % <span class=\"code-num\">2</span> <span class=\"code-comment\"># Residuo</span>\npotencia = <span class=\"code-num\">2</span> ** <span class=\"code-num\">3</span> <span class=\"code-comment\"># Exponente</span>"
    }
  },
  {
    "id": "funciones",
    "cat": "Avanzado",
    "label": "Funciones y Tuplas",
    "explain": "Las funciones encapsulan bloques de código para evitar repetirlo (DRY). En Python, pueden aceptar N cantidad de argumentos (*args) y retornar múltiples variables simultáneamente empaquetándolas en tuplas.",
    "analogy": "💡 Una función es como una máquina de dulces: le das unas monedas (argumentos), la máquina procesa la orden, y te devuelve uno o más dulces (return multiple).",
    "errors": [
      "No utilizar la palabra clave \"return\" para devolver el valor calculado al código que invocó la función.",
      "Desempaquetar un número incorrecto de valores de retorno."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// En Java solo se retorna 1 cosa a menos que uses un Objeto o Arreglo</span>\n<span class=\"code-kw\">public int[]</span> <span class=\"code-method\">calcular</span>(<span class=\"code-kw\">int</span> a) {\n    <span class=\"code-kw\">return new int</span>[]{ a+<span class=\"code-num\">1</span>, a*<span class=\"code-num\">2</span> };\n}",
      "python": "<span class=\"code-kw\">def</span> <span class=\"code-method\">sumaMulti</span>(x):\n    suma = x + x\n    multi = x * x\n    <span class=\"code-kw\">return</span> suma, multi <span class=\"code-comment\"># Devuelve una tupla</span>\n\ns, m = <span class=\"code-method\">sumaMulti</span>(<span class=\"code-num\">5</span>)"
    }
  }
];