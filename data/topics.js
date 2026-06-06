const topics = [
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
    "id": "algoritmos",
    "cat": "Fundamentos",
    "label": "Algoritmos y Pseudocódigo",
    "explain": "Antes de escribir código real, se utilizan diagramas de flujo y pseudocódigo para trazar la lógica paso a paso. Un algoritmo es una secuencia finita de pasos bien definidos que resuelven un problema.",
    "analogy": "💡 Es el plano de una casa; no construyes sin antes dibujar dónde irán las paredes.",
    "errors": [
      "Empezar a programar sin entender completamente el problema lógico subyacente.",
      "Crear pasos ambiguos que la computadora no puede procesar matemáticamente."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// 1. Leer N\n// 2. Si N % 2 == 0 entonces es par\n// 3. Sino, es impar</span>",
      "python": "<span class=\"code-comment\"># 1. Leer N\n# 2. Si N % 2 == 0 entonces es par\n# 3. Sino, es impar</span>"
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
    "id": "casteo",
    "cat": "Fundamentos",
    "label": "Conversión de Tipos y Casteo",
    "explain": "Frecuentemente necesitamos convertir un tipo de dato a otro (por ejemplo, de texto a número entero). El casteo puede ser implícito (automático por el lenguaje) o explícito (forzado por el programador).",
    "analogy": "💡 Es como tener líquido en un vaso y pasarlo a una botella; la sustancia es la misma pero el contenedor cambia de forma.",
    "errors": [
      "Intentar hacer casteo de una letra (String) a un número (int), lo que provocará un error (NumberFormatException o ValueError).",
      "Perder precisión decimal al convertir un double/float a int."
    ],
    "code": {
      "java": "<span class=\"code-type\">String</span> texto = <span class=\"code-str\">\"25\"</span>;\n<span class=\"code-kw\">int</span> numero = <span class=\"code-type\">Integer</span>.<span class=\"code-method\">parseInt</span>(texto);\n<span class=\"code-kw\">int</span> truncado = (<span class=\"code-kw\">int</span>) <span class=\"code-num\">3.99</span>; <span class=\"code-comment\">// Se vuelve 3</span>",
      "python": "texto = <span class=\"code-str\">\"25\"</span>\nnumero = <span class=\"code-method\">int</span>(texto)\ntruncado = <span class=\"code-method\">int</span>(<span class=\"code-num\">3.99</span>) <span class=\"code-comment\"># Se vuelve 3</span>"
    }
  },
  {
    "id": "scope",
    "cat": "Fundamentos",
    "label": "Alcance de Variables (Scope)",
    "explain": "El alcance (scope) define desde qué partes de tu programa se puede acceder a una variable. Una variable declarada dentro de un bucle o condicional solo existe en ese bloque local.",
    "analogy": "💡 Una variable local es como un secreto contado dentro de una habitación cerrada (solo los que están ahí lo saben). Una variable global es un anuncio en el periódico.",
    "errors": [
      "Intentar usar una variable fuera del bucle for en la que fue declarada (en Java).",
      "Sobrescribir sin querer una variable global usando el mismo nombre de forma local."
    ],
    "code": {
      "java": "<span class=\"code-kw\">if</span> (<span class=\"code-kw\">true</span>) {\n    <span class=\"code-kw\">int</span> <span class=\"code-kw\">local</span> = <span class=\"code-num\">5</span>;\n}\n<span class=\"code-comment\">// System.out.println(local); // ERROR: no existe aquí</span>",
      "python": "<span class=\"code-kw\">def</span> <span class=\"code-method\">funcion</span>():\n    local_var = <span class=\"code-num\">5</span>\n<span class=\"code-comment\"># print(local_var) # ERROR: no existe globalmente</span>"
    }
  },
  {
    "id": "io",
    "cat": "Fundamentos",
    "label": "Entrada y Salida (I/O)",
    "explain": "La interacción con el usuario en terminal se logra capturando texto (entrada) e imprimiéndolo procesado (salida). En Python moderno, se utilizan f-strings para formatear la salida limpiamente.",
    "analogy": "💡 La entrada (input) son las preguntas que le haces al usuario. La salida (print) son las respuestas que el programa devuelve a la pantalla.",
    "errors": [
      "Olvidar colocar la letra \"f\" antes de las comillas en un print formateado en Python.",
      "No hacer casteo de datos: int(input()) cuando se esperan números."
    ],
    "code": {
      "java": "<span class=\"code-type\">Scanner</span> scanner = <span class=\"code-kw\">new</span> <span class=\"code-type\">Scanner</span>(<span class=\"code-type\">System</span>.in);\n<span class=\"code-type\">String</span> var = scanner.<span class=\"code-method\">nextLine</span>();\n<span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Salida: \"</span> + var);",
      "python": "<span class=\"code-comment\"># Casteo e f-strings</span>\nx = <span class=\"code-method\">int</span>(<span class=\"code-method\">input</span>(<span class=\"code-str\">\"Digite un valor: \"</span>))\n<span class=\"code-method\">print</span>(<span class=\"code-str\">f\"El valor doble es: {x*2}\"</span>)"
    }
  },
  {
    "id": "logica-relacional",
    "cat": "Fundamentos",
    "label": "Operadores Lógicos y Relacionales",
    "explain": "Se usan para comparar valores y combinar múltiples condiciones. Los relacionales son >, <, ==, !=, >=, <=. Los lógicos son AND, OR, NOT (en Java &&, ||, !; en Python and, or, not).",
    "analogy": "💡 AND es exigente (todo debe ser verdadero). OR es permisivo (con que uno sea verdadero, basta). NOT simplemente invierte el resultado.",
    "errors": [
      "Confundir el operador de asignación '=' con el de comparación '=='.",
      "No usar paréntesis al combinar AND y OR, creando resultados inesperados."
    ],
    "code": {
      "java": "<span class=\"code-kw\">int</span> edad = <span class=\"code-num\">20</span>;\n<span class=\"code-kw\">boolean</span> pase = <span class=\"code-kw\">true</span>;\n<span class=\"code-kw\">if</span> (edad >= <span class=\"code-num\">18</span> && pase == <span class=\"code-kw\">true</span>) {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Entra\"</span>);\n}",
      "python": "edad = <span class=\"code-num\">20</span>\npase = <span class=\"code-kw\">True</span>\n<span class=\"code-kw\">if</span> edad >= <span class=\"code-num\">18</span> <span class=\"code-kw\">and</span> pase:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Entra\"</span>)"
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
    "id": "condicionales",
    "cat": "Control",
    "label": "Estructuras Condicionales (if/elif)",
    "explain": "Permiten bifurcar el flujo de ejecución del programa según se cumpla o no una condición. En Python, la estructura if/elif/else es ideal para encadenar múltiples decisiones sin anidar código excesivamente.",
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
    "label": "Selección Múltiple (Switch / Menús)",
    "explain": "La estructura switch evalúa una expresión y ejecuta el bloque de código correspondiente al caso (case) que coincida. Muy utilizada para construir menús iterativos en consola.",
    "analogy": "💡 Es como un conmutador de vías de tren: dependiendo del destino (valor de la opción del menú), el tren se desvía por un camino específico.",
    "errors": [
      "Olvidar colocar el comando break al final de cada caso, provocando que se ejecuten los casos siguientes (fall-through).",
      "En Python anterior a 3.10, intentar usar switch en lugar de un bloque de elif anidados."
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
    "explain": "Los bucles repiten un bloque de código. El bucle for suele iterar sobre la función range() en Python o con contador en Java. El bucle while se repite infinitamente mientras su condición sea verdadera.",
    "analogy": "💡 range(1, 10, 2) es como subir una escalera empezando en el escalón 1, hasta el escalón 9, saltando de 2 en 2.",
    "errors": [
      "Crear un bucle infinito en un while olvidando actualizar el contador (ej. divisor += 1).",
      "Asumir que range(1, 10) incluye el 10 (solo llega hasta max - 1 en Python y arreglos base 0)."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Iterar saltando de a 2</span>\n<span class=\"code-kw\">for</span> (<span class=\"code-kw\">int</span> i = <span class=\"code-num\">1</span>; i &lt; <span class=\"code-num\">10</span>; i += <span class=\"code-num\">2</span>) {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(i);\n}",
      "python": "<span class=\"code-comment\"># Inicia en 1, incrementa de 2 en 2, maximo 9</span>\n<span class=\"code-kw\">for</span> i <span class=\"code-kw\">in</span> <span class=\"code-method\">range</span>(<span class=\"code-num\">1</span>, <span class=\"code-num\">10</span>, <span class=\"code-num\">2</span>):\n    <span class=\"code-method\">print</span>(i)"
    }
  },
  {
    "id": "logica-matematica",
    "cat": "Control",
    "label": "Lógica Matemática: Primos y Pares",
    "explain": "En Programación 1 y 2, los problemas matemáticos con ciclos y módulo son cruciales. Un número es par si n % 2 == 0. Es primo si solo es divisible exactamente por 1 y por sí mismo.",
    "analogy": "💡 Averiguar si un número es primo requiere un ciclo que intente dividirlo entre todos los números menores a él. Si alguno da residuo 0, ya no es primo.",
    "errors": [
      "Olvidar colocar la variable bandera (flag) fuera del ciclo para mantener su estado.",
      "Hacer ciclos ineficientes que revisen divisiones innecesarias."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Determinar número par</span>\n<span class=\"code-kw\">if</span> (n % <span class=\"code-num\">2</span> == <span class=\"code-num\">0</span>) { <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Par\"</span>); }",
      "python": "<span class=\"code-comment\"># Determinar número primo</span>\nes_primo = <span class=\"code-kw\">True</span>\n<span class=\"code-kw\">for</span> i <span class=\"code-kw\">in</span> <span class=\"code-method\">range</span>(<span class=\"code-num\">2</span>, n):\n    <span class=\"code-kw\">if</span> n % i == <span class=\"code-num\">0</span>:\n        es_primo = <span class=\"code-kw\">False</span>\n        <span class=\"code-kw\">break</span>"
    }
  },
  {
    "id": "arreglos",
    "cat": "Arreglos",
    "label": "Arreglos (Vectores)",
    "explain": "Un arreglo (vector) es una estructura indexada que almacena una colección secuencial de elementos del mismo tipo con un tamaño fijo en lenguajes fuertemente tipados. Son la base para los algoritmos de ordenamiento y sumatorias.",
    "analogy": "💡 Un hotel con habitaciones numeradas del 0 al N-1. En cada habitación solo puede hospedarse una persona.",
    "errors": [
      "Intentar acceder al índice N en un arreglo de tamaño N, provocando IndexError o OutOfBounds.",
      "Asumir que los arreglos nativos en Java cambian de tamaño automáticamente."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Declaración de arreglo estático</span>\n<span class=\"code-kw\">int</span>[] numeros = <span class=\"code-kw\">new int</span>[<span class=\"code-num\">3</span>];\nnumeros[<span class=\"code-num\">0</span>] = <span class=\"code-num\">10</span>;\nnumeros[<span class=\"code-num\">1</span>] = <span class=\"code-num\">20</span>;\nnumeros[<span class=\"code-num\">2</span>] = <span class=\"code-num\">30</span>;",
      "python": "<span class=\"code-comment\"># En Python se utilizan Listas (dinámicas por defecto)</span>\nnumeros = [<span class=\"code-num\">10</span>, <span class=\"code-num\">20</span>, <span class=\"code-num\">30</span>]\nnumeros.append(<span class=\"code-num\">40</span>) <span class=\"code-comment\"># Crece dinámicamente</span>"
    }
  },
  {
    "id": "matrices",
    "cat": "Arreglos",
    "label": "Matrices (Arreglos 2D)",
    "explain": "Una matriz es un arreglo bidimensional organizado en forma de tabla con filas y columnas, donde se requiere dos índices para acceder a un elemento. Comunes para graficar coordenadas o tableros.",
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
    "id": "registros",
    "cat": "POO",
    "label": "Registros (Structs)",
    "explain": "Antes de llegar a la Programación Orientada a Objetos completa, se usan los Registros. Son agrupaciones de datos bajo un mismo nombre sin incluir comportamientos (métodos).",
    "analogy": "💡 Un registro es una ficha médica de paciente; solo tiene información escrita (nombre, edad, sangre) pero la ficha no hace ninguna acción por sí sola.",
    "errors": [
      "Intentar asignarle funciones/métodos a un registro puramente estructural en lenguajes como C.",
      "Acceder a campos inexistentes en el diccionario o clase que simula el registro."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Java 14+ introduce 'records' puramente para datos</span>\n<span class=\"code-kw\">public record</span> <span class=\"code-type\">Estudiante</span>(<span class=\"code-type\">String</span> nombre, <span class=\"code-kw\">int</span> edad) {}",
      "python": "<span class=\"code-comment\"># En Python se suelen usar Diccionarios o DataClasses</span>\nestudiante = {\n    <span class=\"code-str\">\"nombre\"</span>: <span class=\"code-str\">\"Ana\"</span>,\n    <span class=\"code-str\">\"edad\"</span>: <span class=\"code-num\">20</span>\n}"
    }
  },
  {
    "id": "poo",
    "cat": "POO",
    "label": "Clases y Objetos",
    "explain": "La Programación Orientada a Objetos (POO) utiliza \"Clases\" como plantillas estructurales y \"Objetos\" como instancias de dichas clases que agrupan atributos (datos) y métodos (comportamientos).",
    "analogy": "💡 La Clase es el plano arquitectónico de una casa. El Objeto es la casa física construida con base en ese plano.",
    "errors": [
      "Intentar acceder a atributos privados desde fuera de la clase sin utilizar métodos getters y setters.",
      "Confundir la clase con una instancia particular de la misma."
    ],
    "code": {
      "java": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Auto</span> {\n    <span class=\"code-kw\">private</span> <span class=\"code-type\">String</span> marca;\n    \n    <span class=\"code-kw\">public</span> <span class=\"code-method\">Auto</span>(<span class=\"code-type\">String</span> m) { <span class=\"code-kw\">this</span>.marca = m; }\n    <span class=\"code-kw\">public</span> <span class=\"code-type\">String</span> <span class=\"code-method\">getMarca</span>() { <span class=\"code-kw\">return this</span>.marca; }\n}",
      "python": "<span class=\"code-kw\">class</span> <span class=\"code-type\">Auto</span>:\n    <span class=\"code-kw\">def</span> <span class=\"code-method\">__init__</span>(<span class=\"code-kw\">self</span>, marca):\n        <span class=\"code-kw\">self</span>.marca = marca <span class=\"code-comment\"># Atributo</span>"
    }
  },
  {
    "id": "archivos",
    "cat": "Avanzado",
    "label": "Manejo de Archivos",
    "explain": "El manejo de archivos permite que los datos de un programa persistan más allá de la ejecución del mismo, guardándolos en disco duro (ej. archivos de texto .txt o binarios).",
    "analogy": "💡 Es como tener un archivador de metal: puedes sacar una carpeta con datos (leer) o escribir un nuevo reporte (escribir) para que no se pierda al apagar el equipo.",
    "errors": [
      "Intentar leer un archivo que no existe en la ruta, arrojando FileNotFoundException.",
      "Olvidar cerrar el flujo del archivo (.close()), bloqueando el archivo."
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
    "explain": "Una Interfaz Gráfica de Usuario (IGU/GUI) permite a los usuarios interactuar mediante botones, ventanas y cajas de texto, en lugar de una consola en negro.",
    "analogy": "💡 Es como el panel de control de un elevador: en lugar de digitar comandos textuales, presionas botones físicos.",
    "errors": [
      "Crear componentes gráficos pero olvidar agregarlos (.add()) al contenedor principal.",
      "Olvidar configurar el cierre de ventana, dejando el programa en memoria RAM."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Ventana interactiva en Swing (Java)</span>\n<span class=\"code-type\">JFrame</span> frame = <span class=\"code-kw\">new</span> <span class=\"code-type\">JFrame</span>(<span class=\"code-str\">\"Ventana\"</span>);\n<span class=\"code-type\">JButton</span> boton = <span class=\"code-kw\">new</span> <span class=\"code-type\">JButton</span>(<span class=\"code-str\">\"Clic\"</span>);\nframe.<span class=\"code-method\">add</span>(boton);\nframe.<span class=\"code-method\">setSize</span>(<span class=\"code-num\">300</span>, <span class=\"code-num\">200</span>);\nframe.<span class=\"code-method\">setVisible</span>(<span class=\"code-kw\">true</span>);",
      "python": "<span class=\"code-comment\"># Ventana básica usando Tkinter</span>\n<span class=\"code-kw\">import</span> <span class=\"code-type\">tkinter</span> <span class=\"code-kw\">as</span> <span class=\"code-type\">tk</span>\nroot = tk.Tk()\nboton = tk.Button(root, text=<span class=\"code-str\">\"Clic\"</span>)\nboton.pack()\nroot.mainloop()"
    }
  },
  {
    "id": "funciones",
    "cat": "Avanzado",
    "label": "Funciones y Métodos",
    "explain": "Las funciones encapsulan bloques de código para evitar repetirlo (DRY). En Python, pueden aceptar argumentos dinámicos y retornar múltiples variables simultáneamente (empaquetándolas en tuplas).",
    "analogy": "💡 Una función es como una máquina expendedora: le pasas monedas (argumentos), hace su magia interna y te devuelve un producto (return).",
    "errors": [
      "No utilizar la palabra clave \"return\" y esperar que la variable se guarde sola.",
      "Definir variables locales y tratar de accederlas desde fuera de la función."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// Un método Java fuertemente tipado</span>\n<span class=\"code-kw\">public int</span> <span class=\"code-method\">sumar</span>(<span class=\"code-kw\">int</span> a, <span class=\"code-kw\">int</span> b) {\n    <span class=\"code-kw\">return</span> a + b;\n}",
      "python": "<span class=\"code-kw\">def</span> <span class=\"code-method\">sumaMulti</span>(x):\n    suma = x + x\n    multi = x * x\n    <span class=\"code-kw\">return</span> suma, multi <span class=\"code-comment\"># Devuelve una tupla</span>\n\ns, m = <span class=\"code-method\">sumaMulti</span>(<span class=\"code-num\">5</span>)"
    }
  },
  {
    "id": "transicion-python",
    "cat": "Avanzado",
    "label": "Transición Estructurada a Python",
    "explain": "Pasar de un lenguaje C-like (como Java/C#) a Python requiere acostumbrarse a la indentación forzosa (sin llaves {}) y al tipado dinámico, donde las variables pueden cambiar de tipo.",
    "analogy": "💡 Pasar de Java a Python es como pasar de manejar auto manual a uno automático; menos reglas mecánicas, pero si no prestas atención a las líneas (indentación), chocarás.",
    "errors": [
      "Mezclar tabs y espacios en la indentación, lo cual lanza el temido IndentationError.",
      "Tratar de usar ';' al final de cada línea innecesariamente."
    ],
    "code": {
      "java": "<span class=\"code-comment\">// JAVA: Lleno de reglas sintácticas</span>\n<span class=\"code-kw\">if</span> (x > <span class=\"code-num\">0</span>) {\n    <span class=\"code-type\">System</span>.out.<span class=\"code-method\">println</span>(<span class=\"code-str\">\"Positivo\"</span>);\n}",
      "python": "<span class=\"code-comment\"># PYTHON: Limpio, basado en espacios (tabs)</span>\n<span class=\"code-kw\">if</span> x > <span class=\"code-num\">0</span>:\n    <span class=\"code-method\">print</span>(<span class=\"code-str\">\"Positivo\"</span>)"
    }
  }
];