const debugChallenges = [
  {
    "lang": "python",
    "desc": "Error de sintaxis común en sentencias condicionales en Python.",
    "lines": [
      "def es_mayor(edad):",
      "    if edad >= 18",
      "        print(\"Acceso concedido\")",
      "    else:",
      "        print(\"Acceso denegado\")"
    ],
    "bugLine": 1,
    "opts": [
      "Debería ser: if (edad >= 18)",
      "Faltan dos puntos \":\" al final de la condición",
      "La indentación de \"print\" está incorrecta",
      "Debería usarse \"elif\""
    ],
    "ans": 1,
    "exp": "En Python, las sentencias condicionales (if, elif, else) y bucles requieren terminar con dos puntos (\":\") obligatoriamente."
  },
  {
    "lang": "java",
    "desc": "Asignación inválida de tipos de datos estáticos.",
    "lines": [
      "public class Compilador {",
      "    public static void main(String[] args) {",
      "        int limite = 100;",
      "        String descripcion = 25.5;",
      "        System.out.println(descripcion);",
      "    }",
      "}"
    ],
    "bugLine": 3,
    "opts": [
      "Falta punto y coma \";\"",
      "No se puede asignar un valor decimal float/double a un String",
      "La variable \"limite\" no se está usando",
      "El método println está mal escrito"
    ],
    "ans": 1,
    "exp": "Java es un lenguaje estáticamente tipado; no puedes asignar un literal decimal directo (double/float) a una referencia del tipo String."
  }
];