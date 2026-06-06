const flashcardsData = [
  {
    "cat": "Fundamentos",
    "front": "¿Qué significa JVM?",
    "back": "Java Virtual Machine (Máquina Virtual de Java). Es el motor que compila el bytecode y lo ejecuta en la máquina real.",
    "hint": "Traduce el código intermedio (.class) a lenguaje de máquina."
  },
  {
    "cat": "Fundamentos",
    "front": "¿Cuál es la diferencia básica entre int y double?",
    "back": "int almacena números enteros de 32 bits sin decimales. double almacena números de punto flotante de 64 bits con precisión decimal.",
    "hint": "Piensa en números con punto decimal vs números de conteo exacto."
  },
  {
    "cat": "Sintaxis",
    "front": "¿Qué ocurre si omites el comando \"break\" en un bloque switch?",
    "back": "Se produce una caída libre (fall-through). El programa continúa ejecutando las líneas del caso siguiente de forma secuencial.",
    "hint": "No se detiene al encontrar una coincidencia."
  },
  {
    "cat": "Sintaxis",
    "front": "¿Cuándo se prefiere un bucle \"while\" sobre un bucle \"for\"?",
    "back": "Se prefiere \"while\" cuando no conocemos de antemano el número exacto de iteraciones que requerirá el programa.",
    "hint": "Depende enteramente del cumplimiento de una condición cambiante."
  },
  {
    "cat": "POO",
    "front": "¿Qué es el Principio de Encapsulamiento?",
    "back": "Es la ocultación del estado interno de un objeto (atributos), restringiendo el acceso directo y exponiéndolo solo por métodos públicos (get/set).",
    "hint": "Mantiene las variables privadas."
  },
  {
    "cat": "Arrays",
    "front": "¿En qué índice inician los arreglos en Java y Python?",
    "back": "Comienzan siempre en el índice 0. Por ende, el último elemento accesible de un arreglo de tamaño N es N-1.",
    "hint": "Indexación de origen cero."
  },
  {
    "cat": "POO",
    "front": "¿Para qué sirve el método constructor en una clase?",
    "back": "Es un método especial que se invoca automáticamente al instanciar un objeto (usando \"new\") para inicializar sus atributos.",
    "hint": "Lleva el mismo nombre que la clase en Java."
  },
  {
    "cat": "Excepciones",
    "front": "¿Cuál es la diferencia entre \"throw\" y \"throws\" en Java?",
    "back": "throw se usa para lanzar explícitamente una excepción concreta. throws se coloca en la firma del método para listar las excepciones que este puede emitir.",
    "hint": "Lanzar un error vs declarar que un método podría lanzar un error."
  },
  {
    "cat": "Control",
    "front": "¿Para qué sirve la sentencia \"break\" en un bloque switch?",
    "back": "Para salir inmediatamente del bloque switch una vez que se ha ejecutado el caso correspondiente, evitando que se ejecuten los siguientes.",
    "hint": "Evita la caída libre o \"fall-through\"."
  },
  {
    "cat": "Arreglos",
    "front": "¿Cuál es la principal ventaja de un ArrayList sobre un arreglo estático?",
    "back": "Un ArrayList puede redimensionarse dinámicamente en tiempo de ejecución, mientras que un arreglo normal tiene un tamaño fijo desde su creación.",
    "hint": "Se ajusta a la cantidad de elementos que le agregues."
  },
  {
    "cat": "POO",
    "front": "¿Qué es el Polimorfismo?",
    "back": "Es la capacidad de los objetos de diferentes clases hijas de responder de manera distinta al mismo método definido en una clase padre.",
    "hint": "Múltiples formas para un mismo comportamiento."
  },
  {
    "cat": "Fundamentos",
    "front": "¿Cuál es la diferencia entre \"/\" y \"//\" en Python?",
    "back": "El operador \"/\" devuelve el resultado exacto con decimales (float), mientras que \"//\" es la división entera, es decir, trunca o elimina la parte decimal.",
    "hint": "Uno da fracciones, otro solo enteros."
  },
  {
    "cat": "Control",
    "front": "¿Qué significan los tres argumentos en un range(1, 10, 2)?",
    "back": "El primero es el inicio (1), el segundo es el límite no inclusivo (hasta 9), y el tercero es el salto o incremento de a cuánto (de a 2).",
    "hint": "Inicio, Fin-1, Incremento."
  },
  {
    "cat": "Avanzado",
    "front": "¿Qué significa el asterisco (*args) como parámetro de una función en Python?",
    "back": "Permite que la función reciba un número indefinido o arbitrario de argumentos, agrupándolos como una tupla.",
    "hint": "Cantidad variable de parámetros."
  }
];