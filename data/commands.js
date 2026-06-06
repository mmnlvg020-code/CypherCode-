const commandsData = [
  {
    "cat": "Strings",
    "name": ".substring() / slicing",
    "desc": "Extrae una subcadena de texto delimitando los índices de inicio y fin.",
    "bigO": "O(K) [K = longitud subcadena]",
    "syntax": "Java: str.substring(start, end) | Python: str[start:end]",
    "code": "# Ejemplo Python\ntexto = \"Progra_Core\"\nsub = texto[0:6]\nprint(sub) # Imprime: Progra"
  },
  {
    "cat": "Colecciones",
    "name": ".append() / .add()",
    "desc": "Inserta un nuevo elemento al final de una lista o colección dinámica.",
    "bigO": "O(1) amortizado",
    "syntax": "Java: list.add(x) | Python: list.append(x)",
    "code": "// Ejemplo Java ArrayList\nArrayList<String> lista = new ArrayList<>();\nlista.add(\"Elemento 1\");"
  },
  {
    "cat": "Conversión",
    "name": "Integer.parseInt() / int()",
    "desc": "Analiza un String numérico y lo convierte en su representación entera.",
    "bigO": "O(D) [D = número de dígitos]",
    "syntax": "Java: Integer.parseInt(s) | Python: int(s)",
    "code": "# Ejemplo Python\nnumero_str = \"123\"\nnumero = int(numero_str)\nprint(numero + 7) # Imprime: 130"
  },
  {
    "cat": "Algoritmos",
    "name": "Búsqueda Binaria",
    "desc": "Localiza un valor dentro de un arreglo previamente ordenado dividiendo el espacio de búsqueda a la mitad continuamente.",
    "bigO": "O(log N) tiempo | O(1) espacio",
    "syntax": "Algoritmo recursivo / iterativo",
    "code": "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1"
  },
  {
    "cat": "Archivos",
    "name": "Lectura de Archivos",
    "desc": "Apertura y procesamiento secuencial de líneas de un archivo de texto en disco.",
    "bigO": "O(N) [N = bytes o líneas del archivo]",
    "syntax": "Java: Scanner / BufferedReader | Python: open(file, \"r\")",
    "code": "# Ejemplo Python seguro\nwith open(\"datos.txt\", \"r\") as file:\n    for linea in file:\n        print(linea.strip())"
  },
  {
    "cat": "POO",
    "name": "Registros / Structs",
    "desc": "Agrupación de datos bajo una sola estructura sin incluir métodos (solo información).",
    "bigO": "O(1) acceso",
    "syntax": "Java: record / Python: dict o @dataclass",
    "code": "# Python DataClass\nfrom dataclasses import dataclass\n@dataclass\nclass Estudiante:\n    nombre: str\n    edad: int\n\n# Java\npublic record Est(String nombre) {}"
  },
  {
    "cat": "Lógica",
    "name": "Operadores Lógicos (AND/OR)",
    "desc": "Permiten encadenar múltiples condiciones. AND requiere que todo sea verdadero, OR requiere que al menos uno lo sea.",
    "bigO": "O(1)",
    "syntax": "Java: &&, ||, ! | Python: and, or, not",
    "code": "# Python\nif edad > 18 and carnet == True:\n    print(\"Acceso total\")\nelif edad > 15 or permiso == True:\n    print(\"Acceso restringido\")"
  }
];