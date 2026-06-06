const quizData = [
  {
    "cat": "Fundamentos",
    "lang": "java",
    "q": "¿Cuál es la salida del siguiente código?<br><pre class=\"code-block\"><code>System.out.println(5 / 2);</code></pre>",
    "opts": [
      "2.5",
      "2",
      "2.0",
      "Lanza ArithmeticException"
    ],
    "ans": 1,
    "exp": "En Java y C#, dividir dos números enteros (int) descarta la parte decimal y retorna un resultado entero truncado."
  },
  {
    "cat": "Fundamentos",
    "lang": "python",
    "q": "¿Qué tipo de dato se le asigna a x en Python al hacer:<br><pre class=\"code-block\"><code>x = 5.0</code></pre>",
    "opts": [
      "int",
      "float",
      "double",
      "Decimal"
    ],
    "ans": 1,
    "exp": "Python representa los valores con parte decimal mediante la clase \"float\", equivalente en precisión a double en otros lenguajes."
  },
  {
    "cat": "Sintaxis",
    "lang": "java",
    "q": "¿Cuál de las siguientes declaraciones de arreglo es incorrecta en Java?",
    "opts": [
      "int[] arr = new int[5];",
      "int arr[] = new int[5];",
      "int[] arr = {1, 2, 3};",
      "int arr[5] = new int[];"
    ],
    "ans": 3,
    "exp": "En Java, no debes especificar la dimensión dentro de los corchetes de la declaración izquierda (ej. arr[5] es incorrecto)."
  },
  {
    "cat": "Sintaxis",
    "lang": "python",
    "q": "¿Cuál es el operador aritmético utilizado para calcular el residuo de una división?",
    "opts": [
      "/",
      "//",
      "%",
      "^"
    ],
    "ans": 2,
    "exp": "El operador módulo (%) calcula el residuo entero de una división. "
  },
  {
    "cat": "POO",
    "lang": "java",
    "q": "¿Qué palabra reservada se utiliza en Java para heredar de otra clase?",
    "opts": [
      "implements",
      "inherits",
      "extends",
      "super"
    ],
    "ans": 2,
    "exp": "La palabra clave \"extends\" declara herencia de clases. \"implements\" se utiliza para interfaces."
  },
  {
    "cat": "Arrays",
    "lang": "java",
    "q": "¿Qué propiedad o método de un arreglo unidimensional en Java devuelve su número de celdas?",
    "opts": [
      "length()",
      "size()",
      "length",
      "getSize()"
    ],
    "ans": 2,
    "exp": "En Java, los arreglos nativos exponen una propiedad constante llamada \"length\". Los strings usan \"length()\" y las colecciones usan \"size()\"."
  },
  {
    "cat": "Excepciones",
    "lang": "python",
    "q": "¿Cómo se define el bloque que maneja el error en una estructura try-except en Python?",
    "opts": [
      "catch",
      "except",
      "rescue",
      "handle"
    ],
    "ans": 1,
    "exp": "Python utiliza la palabra clave \"except\" para capturar anomalías, a diferencia de Java y JavaScript que usan \"catch\"."
  },
  {
    "cat": "Control",
    "lang": "java",
    "q": "¿Qué estructura es ideal para hacer menús con múltiples opciones fijas?",
    "opts": [
      "if-else",
      "switch",
      "for",
      "while"
    ],
    "ans": 1,
    "exp": "El switch permite evaluar una variable de control frente a múltiples casos definidos, haciendo el código de menús muy limpio."
  },
  {
    "cat": "Arreglos",
    "lang": "java",
    "q": "¿Con qué método se añade un nuevo elemento a un ArrayList en Java?",
    "opts": [
      "insert()",
      "push()",
      "add()",
      "append()"
    ],
    "ans": 2,
    "exp": "En Java, las listas implementan la interfaz List que utiliza el método add() para agregar elementos."
  },
  {
    "cat": "Fundamentos",
    "lang": "python",
    "q": "¿Qué se debe agregar antes de las comillas para poder inyectar variables usando llaves {} en un print de Python?",
    "opts": [
      "v",
      "x",
      "f",
      "str"
    ],
    "ans": 2,
    "exp": "Python introdujo los f-strings para formatear cadenas limpiamente. Poner la letra f permite inyectar cualquier variable adentro de llaves."
  },
  {
    "cat": "Avanzado",
    "lang": "python",
    "q": "¿Cómo devolverías dos valores simultáneamente de una función en Python?",
    "opts": [
      "Usando dos comandos return consecutivos.",
      "return valor1, valor2",
      "Es imposible, solo se puede retornar uno.",
      "Se requiere usar una clase Foránea."
    ],
    "ans": 1,
    "exp": "Python empaqueta automáticamente los valores separados por comas en una Tupla, permitiendo el retorno y desempaquetado múltiple."
  },
  {
    "cat": "Fundamentos",
    "lang": "java",
    "q": "¿Qué sucederá si intentas acceder a una variable declarada dentro de un bucle `for` desde fuera de dicho bucle?",
    "opts": [
      "El programa compilará pero imprimirá nulo.",
      "Se producirá un error de compilación porque la variable está fuera de alcance (scope).",
      "La variable se vuelve global automáticamente.",
      "Funcionará normalmente."
    ],
    "ans": 1,
    "exp": "En lenguajes como Java, las variables declaradas dentro de un bloque tienen un alcance local a ese bloque. No existen fuera de él."
  },
  {
    "cat": "Fundamentos",
    "lang": "python",
    "q": "Si tenemos `if edad > 18 and pase == True:`, ¿qué debe suceder para que la condición se cumpla?",
    "opts": [
      "Ambas condiciones deben ser verdaderas al mismo tiempo.",
      "Solo una de las dos condiciones debe ser verdadera.",
      "Ninguna de las dos necesita ser verdadera.",
      "Se generará un error de sintaxis."
    ],
    "ans": 0,
    "exp": "El operador lógico AND exige que todas las partes de la condición se evalúen como verdaderas simultáneamente."
  },
  {
    "cat": "Fundamentos",
    "lang": "java",
    "q": "¿Qué método usarías en Java para convertir un String \"100\" en un valor numérico entero?",
    "opts": [
      "String.toInt()",
      "Integer.parseString()",
      "Integer.parseInt()",
      "Convert.ToInt32()"
    ],
    "ans": 2,
    "exp": "El casteo o parseo explícito en Java desde cadenas a enteros se realiza frecuentemente usando el método Integer.parseInt()."
  },
  {
    "cat": "POO",
    "lang": "python",
    "q": "¿Cuál es la forma más común en Python moderno de crear un Registro (Struct) puramente de datos sin métodos de comportamiento?",
    "opts": [
      "Usar un Diccionario o DataClass.",
      "Crear una Función vacía.",
      "Usar un bucle While.",
      "Es imposible en Python."
    ],
    "ans": 0,
    "exp": "Los Diccionarios o el decorador @dataclass son ideales para emular registros puros de datos sin necesidad de escribir toda la lógica de una clase clásica."
  }
];