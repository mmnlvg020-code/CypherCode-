const examplesData = [
    {
        "title": "Positivo, Negativo o Cero",
        "tags": [
            "if",
            "else",
            "anidados",
            "input",
            "math"
        ],
        "problema": "Clasificar un número ingresado por el usuario en tres categorías posibles: estrictamente positivo, estrictamente negativo o exactamente cero.",
        "analisis": "Utilizamos una estructura anidada. El primer `if` descarta todos los números mayores a cero. Si esa condición falla, entramos al `else`, donde usamos un segundo `if` interno para separar los números menores a cero del único caso restante (el cero). Esto demuestra cómo un árbol de decisiones va acorralando los datos descartando opciones paso a paso.",
        "code": {
            "python": "num = int(input(\"Digite un numero a evaluar: \"))\nif num > 0:\n    print(f\"{num} es Positivo\")\nelse: \n    if num < 0:\n        print(f\"{num} es Negativo\")\n    else: \n        print(\"El numero ingresado es 0\")",
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Digite un numero a evaluar: \");\n        int num = sc.nextInt();\n        \n        if (num > 0) {\n            System.out.println(num + \" es Positivo\");\n        } else {\n            if (num < 0) {\n                System.out.println(num + \" es Negativo\");\n            } else {\n                System.out.println(\"El numero ingresado es 0\");\n            }\n        }\n    }\n}"
        }
    },
    {
        "title": "Evaluación de Notas Académicas",
        "tags": [
            "if",
            "else",
            "anidados"
        ],
        "problema": "Determinar el estado de un estudiante (Aprobado, Aplazado o Reprobado) basado en su nota final, usando exclusión escalonada sin la palabra reservada 'else if / elif'.",
        "analisis": "La importancia aquí es el orden lógico: revisamos primero la nota más alta (`>= 70`). Solo si no llega a 70, el código salta al bloque `else`. Una vez ahí, el siguiente `if` evalúa si al menos llegó a 60 para aplazar. Si también falla, el último `else` asume la pérdida. Si evaluáramos `>= 60` primero, un estudiante con 80 entraría ahí por error, por eso el orden de mayor a menor es crítico.",
        "code": {
            "python": "# Múltiples condiciones anidadas (sin usar elif)\nnota = float(input(\"Digite la nota: \"))\nif nota >= 70:\n    print(\"¡Gana el curso!\")\nelse:\n    if nota >= 60:\n        print(\"Se aplaza\")\n    else:\n        print(\"Pierde el curso :c\")",
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        // Múltiples condiciones anidadas\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Digite la nota: \");\n        double nota = sc.nextDouble();\n        \n        if (nota >= 70) {\n            System.out.println(\"¡Gana el curso!\");\n        } else {\n            if (nota >= 60) {\n                System.out.println(\"Se aplaza\");\n            } else {\n                System.out.println(\"Pierde el curso :c\");\n            }\n        }\n    }\n}"
        }
    },
    {
        "title": "Medidor de Temperaturas (Elif / Else If)",
        "tags": [
            "if",
            "elif",
            "else",
            "else if"
        ],
        "problema": "Categorizar la sensación térmica de un clima en rangos específicos (Extremo, Caluroso, Cálido, Frío) usando condicionales en cadena.",
        "analisis": "A diferencia de las condicionales anidadas (donde el código se va metiendo en bloques dentro de bloques formando una pirámide horizontal), el `elif` (o `else if`) nos permite mantener el código plano y vertical. Funciona como un embudo: en el instante en que la temperatura cumple una condición, se imprime el mensaje, y el programa salta automáticamente al final, ignorando todas las demás verificaciones.",
        "code": {
            "python": "temp = float(input(\"Ingrese la temperatura en grados: \"))\n\nif temp >= 30:\n    print(\"Extremadamente caliente\")\nelif temp >= 20:\n    print(\"Caluroso\")\nelif temp >= 10:\n    print(\"Cálido\")\nelif temp >= 0:\n    print(\"El día está frío\")\nelif temp >= -10:\n    print(\"El día está muy frío\")\nelse:\n    print(\"El día está extremadamente frío\")",
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Ingrese la temperatura en grados: \");\n        double temp = sc.nextDouble();\n        \n        if (temp >= 30) {\n            System.out.println(\"Extremadamente caliente\");\n        } else if (temp >= 20) {\n            System.out.println(\"Caluroso\");\n        } else if (temp >= 10) {\n            System.out.println(\"Cálido\");\n        } else if (temp >= 0) {\n            System.out.println(\"El día está frío\");\n        } else if (temp >= -10) {\n            System.out.println(\"El día está muy frío\");\n        } else {\n            System.out.println(\"El día está extremadamente frío\");\n        }\n    }\n}"
        }
    },
    {
        "title": "Determinar Número Primo",
        "tags": [
            "while",
            "if",
            "math",
            "modulo"
        ],
        "problema": "Saber si un número matemático es Primo o no. Matemáticamente, un número es primo únicamente si se puede dividir de forma exacta por el 1 y por sí mismo.",
        "analisis": "Aquí combinamos un ciclo `while` y un `if`. El `while` genera todos los divisores posibles (desde 1 hasta el número ingresado). Dentro del ciclo, el `if` usa el operador módulo (`%`) para ver si la división sobra cero (es exacta). Si es exacta, sumamos +1 al contador. Al final del bucle, otro `if` externo evalúa la regla de oro: si la cantidad final de divisores encontrados es exactamente 2, el número es primo.",
        "code": {
            "python": "num = int(input(\"Digite el numero a revisar: \"))\ncontd = 0\ndivisor = 1\n\n# Bucle para contar los divisores exactos\nwhile divisor <= num:\n    if num % divisor == 0:\n        contd += 1\n    divisor += 1\n\n# Un número primo solo tiene 2 divisores: 1 y él mismo\nif contd == 2:\n    print(\"El numero es primo\")\nelse:\n    print(f\"{num} no es primo\")",
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Digite el numero a revisar: \");\n        int num = sc.nextInt();\n        int contd = 0;\n        int divisor = 1;\n        \n        // Bucle para contar los divisores exactos\n        while (divisor <= num) {\n            if (num % divisor == 0) {\n                contd++;\n            }\n            divisor++;\n        }\n        \n        // Un número primo solo tiene 2 divisores: 1 y él mismo\n        if (contd == 2) {\n            System.out.println(\"El numero es primo\");\n        } else {\n            System.out.println(num + \" no es primo\");\n        }\n    }\n}"
        }
    },
    {
        "title": "Calcular IVA y Descuento (Compras)",
        "tags": [
            "variables",
            "math",
            "if",
            "input"
        ],
        "problema": "Calcular la factura final de un producto aplicando un 5% de descuento promocional y luego agregando el 12.8% de IVA por ley, validando que la compra sea un monto real.",
        "analisis": "El `if` inicial actúa como barrera de seguridad: si el usuario digita un precio negativo o 0, el programa detiene los cálculos y salta al `else` para avisar del error. Si es válido, el orden matemático es crucial: primero se debe calcular y restar el descuento para obtener un subtotal (`totalS`). El IVA se calcula multiplicando ese subtotal, no el monto original; de lo contrario, estaríamos cobrando impuestos sobre dinero que ya se descontó.",
        "code": {
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double iva, desc, total, totalS, montoN;\n        double porcIVA = 0.1280;\n\n        System.out.print(\"Ingrese el valor de compra: \");\n        montoN = sc.nextDouble();\n             \n        if (montoN > 0) {\n            desc = montoN * 0.05; // 5% descuento\n            totalS = montoN - desc; \n            iva = totalS * porcIVA;\n            total = totalS + iva;\n            \n            System.out.println(\"El descuento aplicado es de: \" + desc);\n            System.out.println(\"IVA: \" + iva);\n            System.out.println(\"Total por pagar es de: \" + total + \" colones\");\n        } else {\n            System.out.println(\"El monto ingresado no es válido\");\n        }\n    }\n}",
            "python": "porcIVA = 0.1280\n\nmontoN = float(input(\"Ingrese el valor de compra: \"))\n\nif montoN > 0:\n    desc = montoN * 0.05 # 5% descuento\n    totalS = montoN - desc\n    iva = totalS * porcIVA\n    total = totalS + iva\n    \n    print(f\"El descuento aplicado es de: {desc}\")\n    print(f\"IVA: {iva}\")\n    print(f\"Total por pagar es de: {total} colones\")\nelse:\n    print(\"El monto ingresado no es válido\")"
        }
    },
    {
        "title": "Cuota de Socios según Edad",
        "tags": [
            "if",
            "else if",
            "elif",
            "else",
            "math"
        ],
        "problema": "Determinar el monto final que debe pagar un socio de un club, aplicando diferentes porcentajes de descuento a una cuota base dependiendo de su rango de edad (adulto mayor, menor de edad, o regular).",
        "analisis": "Este ejemplo resalta la asignación de variables condicional. Primero declaramos la cuota base global. Usamos `if / else if` para clasificar al socio y, en cada bloque, lo único que hacemos es calcular el monto `desc` (descuento). Observa que el cálculo final (`totalP = cuotaB - desc`) está FUERA de los condicionales. Esto evita tener que escribir esa resta y el `print` tres veces distintas dentro de cada bloque lógico.",
        "code": {
            "java": "import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int edad, cuotaB = 35000;\n        double desc = 0, totalP;\n\n        System.out.print(\"Ingrese la edad del socio: \");\n        edad = sc.nextInt();\n\n        if (edad > 65) {\n            // Mayores de 65 años (40% desc)\n            desc = cuotaB * 0.40;\n        } \n        else if (edad < 18) {\n            // Menores de 18 años (25% desc)\n            desc = cuotaB * 0.25;\n        } \n        else {\n            // Adultos entre 18 y 65 (Sin descuento)\n            desc = 0;\n        }\n\n        totalP = cuotaB - desc;\n        System.out.println(\"Total a abonar: \" + totalP + \" colones\");\n    }\n}",
            "python": "cuotaB = 35000\ndesc = 0\n\nedad = int(input(\"Ingrese la edad del socio: \"))\n\nif edad > 65:\n    # Mayores de 65 años (40% desc)\n    desc = cuotaB * 0.40\nelif edad < 18:\n    # Menores de 18 años (25% desc)\n    desc = cuotaB * 0.25\nelse:\n    # Adultos entre 18 y 65 (Sin descuento)\n    desc = 0\n\ntotalP = cuotaB - desc\nprint(f\"Total a abonar: {totalP} colones\")"
        }
    },
    {
        "title": "Problema de la Dulcería",
        "tags": [
            "math",
            "modulo",
            "if",
            "input"
        ],
        "problema": "Un cliente quiere comprar dulces con un billete de cierta denominación. Debemos calcular cuántos dulces enteros se puede llevar, el vuelto exacto y, si el vuelto es cero, indicarle que no le alcanza o no sobra dinero.",
        "analisis": "Utilizamos división entera // para calcular las unidades enteras y el operador módulo % para sacar el residuo, que representa el vuelto del cliente. El condicional final verifica si pudo o no llevar dulces.",
        "code": {
            "python": "monto_cliente = int(input(\"Ingrese el monto a gastar: \"))\nprecio_unidad = int(input(\"Ingrese precio del confite: \"))\n\ncant_confite = monto_cliente // precio_unidad\nvuelto = monto_cliente % precio_unidad\n\nif cant_confite == 0:\n    print(\"El monto ingresado no alcanza para comprar ningún dulce\")\nelse:\n    print(f\"Te llevas {cant_confite} dulces y sobran {vuelto} colones\")",
            "java": "import java.util.Scanner;\n\npublic class Dulceria {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Ingrese el monto a gastar: \");\n        int montoCliente = sc.nextInt();\n        System.out.print(\"Ingrese precio del confite: \");\n        int precioUnidad = sc.nextInt();\n        \n        int cantConfite = montoCliente / precioUnidad;\n        int vuelto = montoCliente % precioUnidad;\n        \n        if (cantConfite == 0) {\n            System.out.println(\"El monto ingresado no alcanza para comprar ningún dulce\");\n        } else {\n            System.out.println(\"Te llevas \" + cantConfite + \" dulces y sobran \" + vuelto + \" colones\");\n        }\n    }\n}"
        }
    },
    {
        "title": "Filtrar Números Pares e Impares en Vector",
        "tags": [
            "arrays",
            "for",
            "if",
            "math",
            "modulo"
        ],
        "problema": "Dado un arreglo numérico, determinar de forma automatizada cuáles de esos números son pares y cuáles son impares.",
        "analisis": "En lugar de revisar variables independientes, iteramos el vector entero con un bucle for. Aplicamos el operador módulo % 2 a cada elemento extraído temporalmente en la iteración. Si el residuo es cero, se clasifica como par, de lo contrario, impar.",
        "code": {
            "python": "num = [1, 4, 7, 3, 10]\n\nfor elemento in num:\n    if elemento % 2 == 0:\n        print(f\"{elemento} es par\")\n    else: \n        print(f\"{elemento} es impar\")",
            "java": "public class ParesVectores {\n    public static void main(String[] args) {\n        int[] num = {1, 4, 7, 3, 10};\n        \n        for (int i = 0; i < num.length; i++) {\n            int elemento = num[i];\n            if (elemento % 2 == 0) {\n                System.out.println(elemento + \" es par\");\n            } else {\n                System.out.println(elemento + \" es impar\");\n            }\n        }\n    }\n}"
        }
    },
    {
        "title": "Operaciones Dinámicas de Vectores (Listas)",
        "tags": [
            "arrays",
            "for",
            "input"
        ],
        "problema": "Cargar una lista vacía con datos del usuario mediante un bucle, y posteriormente eliminar datos específicos y recorrer los sobrantes.",
        "analisis": "La flexibilidad de las listas en Python (o ArrayList en Java) permite agregar (append / add) dinámicamente y eliminar por nombre o por posición (remove, pop). Usamos ciclos for secuenciales: el primero para insertar datos interactuando con el usuario, y el segundo para mostrar el resultado.",
        "code": {
            "python": "nombres = []\nprint(\"Leemos los nombres\")\nfor i in range(4):\n    nombre = input(\"Ingrese un nombre: \")\n    nombres.append(nombre)\n\nprint(\"Eliminamos\")\nnombres.remove(\"Ana\") # Error si no existe\nnombres.pop(2)        # Elimina indice 2\n\nprint(\"Imprimimos lo que quedo\")\nfor i in nombres:\n    print(i)",
            "java": "import java.util.ArrayList;\nimport java.util.Scanner;\n\npublic class OperacionesVector {\n    public static void main(String[] args) {\n        ArrayList<String> nombres = new ArrayList<>();\n        Scanner sc = new Scanner(System.in);\n        \n        System.out.println(\"Leemos los nombres\");\n        for (int i = 0; i < 4; i++) {\n            System.out.print(\"Ingrese un nombre: \");\n            nombres.add(sc.nextLine());\n        }\n        \n        System.out.println(\"Eliminamos\");\n        nombres.remove(\"Ana\");\n        if(nombres.size() > 2) nombres.remove(2);\n        \n        System.out.println(\"Imprimimos lo que quedo\");\n        for (String n : nombres) {\n            System.out.println(n);\n        }\n    }\n}"
        }
    },
    {
        "title": "Funciones con Múltiples Retornos",
        "tags": [
            "functions",
            "math",
            "variables"
        ],
        "problema": "Crear una lógica modular que pueda procesar una planilla, devolviendo al mismo tiempo dos piezas de información: un mensaje de bienvenida y el cálculo de la deducción de seguro.",
        "analisis": "Las funciones estructuradas permiten la reutilización. En lenguajes como Python, se pueden retornar múltiples valores como una 'Tupla', desempaquetándolos al llamar la función (msj, caja = planilla(...)). En Java esto no es posible directamente sin un objeto personalizado o un arreglo, lo que demuestra ventajas de sintaxis en distintos paradigmas.",
        "code": {
            "python": "def planilla(nombre, salario):\n    mensaje = f\"Hola {nombre} su salario es de: {salario}\"\n    ccss = salario * 0.102\n    return mensaje, ccss\n\nmsj, caja = planilla(\"Andres\", 10000)\nprint(msj)\nprint(f\"deduccion de ccss es: {caja}\")",
            "java": "public class Planilla {\n    static class Resultado {\n        String mensaje;\n        double ccss;\n        public Resultado(String m, double c) { mensaje = m; ccss = c; }\n    }\n    \n    public static Resultado calcularPlanilla(String nombre, double salario) {\n        String msj = \"Hola \" + nombre + \" su salario es de: \" + salario;\n        double ccss = salario * 0.102;\n        return new Resultado(msj, ccss);\n    }\n\n    public static void main(String[] args) {\n        Resultado res = calcularPlanilla(\"Andres\", 10000);\n        System.out.println(res.mensaje);\n        System.out.println(\"deduccion de ccss es: \" + res.ccss);\n    }\n}"
        }
    },
    {
        "title": "Procesar Diccionarios Iterables (**kwargs)",
        "tags": [
            "functions",
            "for",
            "arrays"
        ],
        "problema": "Crear una función que pueda recibir cualquier cantidad arbitraria de argumentos nombrados (diccionarios/pares) y poder buscar un valor específico dentro de ellos.",
        "analisis": "El iterador .items() separa en key y value la estructura asociativa. Dentro del for, un simple if va comparando cada valor con nuestro parámetro de búsqueda. Cuando lo encuentra, detiene o reporta la posición calculada dinámicamente. En Java, el equivalente es utilizar estructuras HashMap.",
        "code": {
            "python": "def procesarPares(**pares):\n    buscado = int(input(\"Digite el valor a encontrar: \"))\n    pos = 1\n    for key, value in pares.items():\n        print(f\"Indice > {key} y su valor {value}\")\n        if value == buscado:\n            print(f\"El valor {buscado} está en la iteración {pos}\")\n        pos += 1\n\nprocesarPares(a=10, b=15, c=22, d=55)",
            "java": "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.Scanner;\n\npublic class Diccionarios {\n    public static void procesarPares(Map<String, Integer> pares) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Digite el valor a encontrar: \");\n        int buscado = sc.nextInt();\n        \n        int pos = 1;\n        for (Map.Entry<String, Integer> entry : pares.entrySet()) {\n            System.out.println(\"Indice > \" + entry.getKey() + \" y su valor \" + entry.getValue());\n            if (entry.getValue() == buscado) {\n                System.out.println(\"El valor \" + buscado + \" está en la iteración \" + pos);\n            }\n            pos++;\n        }\n    }\n\n    public static void main(String[] args) {\n        Map<String, Integer> datos = new HashMap<>();\n        datos.put(\"a\", 10); datos.put(\"b\", 15);\n        datos.put(\"c\", 22); datos.put(\"d\", 55);\n        procesarPares(datos);\n    }\n}"
        }
    },
    {
        "title": "Gestión OOP: Clase Electrodoméstico",
        "tags": [
            "class",
            "variables"
        ],
        "problema": "Construir un molde de software (Clase) para modelar electrodomésticos en la vida real, asignando características iniciales como consumo, precio y peso.",
        "analisis": "Este es el núcleo de la Programación Orientada a Objetos. El constructor define el estado inicial del objeto en memoria. En Java se ve la separación clara entre la visibilidad (private/public), mientras que en Python se utiliza el __init__ para inicializar el estado del objeto encapsulado usando self.",
        "code": {
            "java": "public class Electrodomestico {\n    private double precioBase;\n    private String color;\n    private char consumoEnergetico;\n    private double peso;\n\n    // Constructor por defecto\n    public Electrodomestico() {\n        this.precioBase = 100000;\n        this.color = \"blanco\";\n        this.consumoEnergetico = 'F';\n        this.peso = 5;\n    }\n}",
            "python": "class Electrodomestico:\n    def __init__(self):\n        # Constructor por defecto\n        self._precio_base = 100000\n        self._color = \"blanco\"\n        self._consumo_energetico = 'F'\n        self._peso = 5"
        }
    },
    {
        "title": "Menú Interactivo Infinito (Ciclo Do-While)",
        "tags": [
            "while",
            "if",
            "input"
        ],
        "problema": "Mantener a un usuario dentro de un sistema (como un software de zoológico o tienda) mostrándole opciones repetitivamente hasta que explícitamente decida 'Salir'.",
        "analisis": "Usamos el patrón de bucle controlado por estado. El do-while o while True fuerza la primera iteración sin verificar la condición. Adentro, usamos estructuras condicionales (o switch) para reaccionar a la opción, procesarla, y volver al inicio. Solo la opción 'Salir' rompe el break o flag para escapar del bucle.",
        "code": {
            "java": "import java.util.Scanner;\n\npublic class MenuSistema {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int opcion;\n        do {\n            System.out.println(\"--- MENÚ DEL SISTEMA ---\");\n            System.out.println(\"1. Agregar Registro\");\n            System.out.println(\"2. Salir\");\n            System.out.print(\"Su opción: \");\n            opcion = sc.nextInt();\n            \n            if(opcion == 1) System.out.println(\"Agregando...\");\n        } while(opcion != 2);\n        System.out.println(\"¡Adiós!\");\n    }\n}",
            "python": "while True:\n    print(\"--- MENÚ DEL SISTEMA ---\")\n    print(\"1. Agregar Registro\")\n    print(\"2. Salir\")\n    opcion = int(input(\"Su opción: \"))\n    \n    if opcion == 1:\n        print(\"Agregando...\")\n    elif opcion == 2:\n        print(\"¡Adiós!\")\n        break"
        }
    },
    {
        "title": "Calculadora de Exponentes Simples",
        "tags": [
            "math",
            "for",
            "input"
        ],
        "problema": "Calcular la potencia de un número (base) elevado a otro número (exponente) sin utilizar funciones matemáticas integradas, empleando solo un bucle de multiplicación.",
        "analisis": "La potenciación es solo multiplicar la base tantas veces como el exponente. Declaramos un total iniciando en 1 (el elemento neutro de la multiplicación). Luego iteramos tantas veces como el exponente, y en cada iteración re-multiplicamos el total por la base. ¡Aritmética pura convertida en iteración!",
        "code": {
            "python": "base = int(input(\"Digite la base: \"))\nexponente = int(input(\"Digite el exponente: \"))\ntotal = 1\n\nfor i in range(exponente):\n    total = total * base\n\nprint(f\"El resultado es: {total}\")",
            "java": "import java.util.Scanner;\n\npublic class Exponente {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Digite la base: \");\n        int base = sc.nextInt();\n        System.out.print(\"Digite el exponente: \");\n        int exponente = sc.nextInt();\n        \n        int total = 1;\n        for (int i = 0; i < exponente; i++) {\n            total = total * base;\n        }\n        \n        System.out.println(\"El resultado es: \" + total);\n    }\n}"
        }
    },
    {
        "title": "Suma Dinámica de Array (9 Elementos)",
        "tags": [
            "arrays",
            "math",
            "for"
        ],
        "problema": "Dado un contenedor predefinido con nueve números o registros numéricos estáticos, sumar todos sus elementos y encontrar el total global.",
        "analisis": "Utilizamos el concepto matemático de sumatoria (Sigma). Creamos una variable acumuladora 'suma' inicializada en cero (elemento neutro de la suma). Con un bucle for, recorremos cada casilla del arreglo y sumamos su valor al acumulador. Es el principio base de las finanzas y de la manipulación de datos a gran escala.",
        "code": {
            "java": "public class SumaVectores {\n    public static void main(String[] args) {\n        int[] miVector = {5, 10, 15, 20, 25, 30, 35, 40, 45};\n        int suma = 0;\n        \n        for (int i = 0; i < miVector.length; i++) {\n            suma += miVector[i];\n        }\n        System.out.println(\"La suma del vector es: \" + suma);\n    }\n}",
            "python": "mi_vector = [5, 10, 15, 20, 25, 30, 35, 40, 45]\nsuma = 0\n\nfor numero in mi_vector:\n    suma += numero\n\nprint(f\"La suma del vector es: {suma}\")"
        }
    },
    {
        "title": "Impresión de Rango Numérico (1 al 40)",
        "tags": [
            "for",
            "while"
        ],
        "problema": "Imprimir de forma secuencial y automatizada una lista de números desde el 1 hasta un límite específico (como el 40) sin escribir cuarenta instrucciones diferentes.",
        "analisis": "Esto introduce el uso de rangos y generadores en programación. Un bucle `for` controla internamente un contador desde un límite inferior (1) hasta un superior. Esto muestra el inmenso poder de las computadoras: la capacidad de realizar tareas repetitivas a alta velocidad.",
        "code": {
            "java": "public class Numeros40 {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 40; i++) {\n            System.out.println(\"Numero: \" + i);\n        }\n    }\n}",
            "python": "for i in range(1, 41):\n    print(f\"Numero: {i}\")"
        }
    },
    {
        "title": "Hola Mundo Básico",
        "tags": [
            "input",
            "variables"
        ],
        "problema": "Crear el primer programa tradicional 'Hola Mundo' pero añadiendo interactividad para saludar al usuario por su nombre.",
        "analisis": "Es el punto de partida en cualquier lenguaje. Nos enseña cómo funciona la salida por consola (print/println) y cómo atrapar entrada del teclado (input/Scanner). En Java, requiere la creación de una Clase y el método 'main' por su diseño orientado a objetos, mientras que Python lo procesa como un simple script secuencial.",
        "code": {
            "python": "nombre = input(\"Ingrese su nombre: \")\nprint(f\"¡Hola mundo, bienvenido {nombre} a Progra 1!\")",
            "java": "import java.util.Scanner;\n\npublic class HolaMundo {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.print(\"Ingrese su nombre: \");\n        String nombre = sc.nextLine();\n        System.out.println(\"¡Hola mundo, bienvenido \" + nombre + \" a Progra 1!\");\n    }\n}"
        }
    },
    {
        "title": "Sistema OOP: Zoológico (Herencia y Polimorfismo)",
        "tags": [
            "class",
            "variables"
        ],
        "problema": "Crear una estructura jerárquica para un Zoológico, donde haya una clase general 'Animal' con atributos base que son heredados por otros animales más específicos (Mamíferos, Aves).",
        "analisis": "Esto introduce la Herencia (extends). Un animal tiene un nombre y edad. Un León es un Animal, por tanto, hereda nombre y edad, pero puede añadir características propias como el tamaño de la melena. Esto reduce drásticamente el código redundante.",
        "code": {
            "java": "public class Animal {\n    protected String nombre;\n    protected int edad;\n    \n    public Animal(String n, int e) {\n        this.nombre = n;\n        this.edad = e;\n    }\n    \n    public void hacerSonido() {\n        System.out.println(\"Sonido generico\");\n    }\n}\n\n// Herencia\nclass Leon extends Animal {\n    public Leon(String n, int e) {\n        super(n, e);\n    }\n    \n    @Override\n    public void hacerSonido() {\n        System.out.println(\"¡Roar!\");\n    }\n}",
            "python": "class Animal:\n    def __init__(self, nombre, edad):\n        self.nombre = nombre\n        self.edad = edad\n        \n    def hacer_sonido(self):\n        print(\"Sonido generico\")\n\n# Herencia\nclass Leon(Animal):\n    def __init__(self, nombre, edad):\n        super().__init__(nombre, edad)\n        \n    def hacer_sonido(self):\n        print(\"¡Roar!\")"
        }
    },
    {
        "title": "Retorno Múltiple: Suma y Multiplicación",
        "tags": [
            "functions",
            "math"
        ],
        "problema": "Diseñar un solo método matemático que reciba un número, lo procese y devuelva simultáneamente la suma de sí mismo y el cuadrado de sí mismo.",
        "analisis": "A veces necesitamos que un procedimiento haga múltiples cálculos relacionados sin tener que recorrer los mismos datos dos veces. Se resuelve devolviendo una colección o una estructura de datos. Esto es clave en eficiencia de CPU.",
        "code": {
            "python": "def sumaMulti(valor):\n    suma = valor + valor\n    multi = valor * valor\n    return suma, multi\n\ns, m = sumaMulti(10)\nprint(f\"Suma de 10+10={s}\")\nprint(f\"Mult de 10x10={m}\")",
            "java": "public class OperacionDoble {\n    public static int[] sumaMulti(int valor) {\n        int suma = valor + valor;\n        int multi = valor * valor;\n        return new int[]{suma, multi};\n    }\n\n    public static void main(String[] args) {\n        int[] resultados = sumaMulti(10);\n        System.out.println(\"Suma de 10+10=\" + resultados[0]);\n        System.out.println(\"Mult de 10x10=\" + resultados[1]);\n    }\n}"
        }
    },
    {
        "title": "Uso Extendido de Tuplas (args*)",
        "tags": [
            "functions",
            "arrays",
            "for"
        ],
        "problema": "Construir una función estadistica que reciba una cantidad indefinida y dinámica de argumentos (1, 5, o 100 números) para encontrar el mayor, el menor y el promedio de todos ellos.",
        "analisis": "Al usar el operador *args (o Varargs en Java como `int...`), le indicamos al lenguaje que empaquete todos los números pasados como un array interno. Dentro de la función, iniciamos los variables min/max al primer índice, iteramos y sobreescribimos si encontramos un número más extremo.",
        "code": {
            "python": "def devuelveTodo(*numeros):\n    # Inicializamos con el primer número\n    maxxis = numeros[0]\n    minnix = numeros[0]\n    total = 0\n    \n    for i in numeros:\n        if i > maxxis: maxxis = i\n        if i < minnix: minnix = i\n        total += i\n        \n    prom = total / len(numeros)\n    print(f\"Min: {minnix}, Max: {maxxis}, Prom: {prom}\")\n\ndevuelveTodo(15, 2, 88, 4, 10)",
            "java": "public class Estadisticas {\n    public static void devuelveTodo(int... numeros) {\n        if (numeros.length == 0) return;\n        int maxxis = numeros[0];\n        int minnix = numeros[0];\n        double total = 0;\n        \n        for (int i : numeros) {\n            if (i > maxxis) maxxis = i;\n            if (i < minnix) minnix = i;\n            total += i;\n        }\n        \n        double prom = total / numeros.length;\n        System.out.println(\"Min: \" + minnix + \", Max: \" + maxxis + \", Prom: \" + prom);\n    }\n\n    public static void main(String[] args) {\n        devuelveTodo(15, 2, 88, 4, 10);\n    }\n}"
        }
    },
    {
        "title": "Agencia Vehículos: Control de Estado",
        "tags": [
            "class",
            "variables"
        ],
        "problema": "Simular un sistema de Agencia de Vehículos donde un Auto tiene un estado (encendido/apagado) y no se permite 'apagar' un auto si ya estaba apagado o viceversa.",
        "analisis": "La clase vehiculo guarda internamente un flag booleano `encendido`. Los métodos `encender()` y `apagar()` verifican primero este flag con un `if`. Esto encapsula la validación en el objeto mismo. Si intentas encender algo que ya funciona, el objeto mismo rechaza la acción.",
        "code": {
            "java": "public class ClaseVehiculo {\n    private String marca;\n    private boolean encendido;\n\n    public ClaseVehiculo(String marca) {\n        this.marca = marca;\n        this.encendido = false;\n    }\n\n    public void encender() {\n        if (!encendido) {\n            this.encendido = true;\n            System.out.println(\"El vehículo arrancó\");\n        } else {\n            System.out.println(\"El vehículo ya estaba encendido\");\n        }\n    }\n    \n    public void apagar() {\n        if (encendido) {\n            this.encendido = false;\n            System.out.println(\"Vehículo apagado\");\n        } else {\n            System.out.println(\"Ya está apagado\");\n        }\n    }\n}",
            "python": "class ClaseVehiculo:\n    def __init__(self, marca):\n        self.marca = marca\n        self.encendido = False\n        \n    def encender(self):\n        if not self.encendido:\n            self.encendido = True\n            print(\"El vehículo arrancó\")\n        else:\n            print(\"El vehículo ya estaba encendido\")\n            \n    def apagar(self):\n        if self.encendido:\n            self.encendido = False\n            print(\"Vehículo apagado\")\n        else:\n            print(\"Ya está apagado\")"
        }
    }
];