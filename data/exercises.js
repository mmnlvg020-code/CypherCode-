const referentData = [
  { 
    q: "Modern web browsers use a complex mechanism to render web pages quickly. To achieve this, developers often employ caching strategies to store static assets locally on the user's device. When a user revisits the site, <u>they</u> are retrieved immediately without needing a network request, significantly reducing load times.", 
    options: ["Web browsers", "Caching strategies", "Static assets", "Users"], 
    answer: "Static assets", 
    exp: "'they' es un pronombre plural que en este contexto se refiere a 'Static assets' (recursos estáticos), los cuales son recuperados inmediatamente de la memoria caché." 
  },
  { 
    q: "Cloud computing has revolutionized how businesses handle their IT infrastructure by offering scalable resources on demand. Instead of maintaining physical servers, organizations can rent virtual machines from providers like AWS or Azure. <u>This</u> eliminates the need for large upfront hardware investments and lowers maintenance costs.", 
    options: ["Renting virtual machines", "Cloud computing", "Maintaining physical servers", "AWS or Azure"], 
    answer: "Renting virtual machines", 
    exp: "'This' es un pronombre demostrativo que resume toda la idea o acción anterior: el hecho de alquilar máquinas virtuales en lugar de mantener servidores físicos." 
  },
  { 
    q: "During the cybersecurity audit, the analysts discovered a severe vulnerability in the legacy authentication protocol. Although the firewall blocked most external threats, the internal system remained exposed. Because of the critical nature of the flaw, the team decided to patch <u>it</u> before publishing the final security report.", 
    options: ["The security report", "The severe vulnerability", "The internal system", "The firewall"], 
    answer: "The severe vulnerability", 
    exp: "'it' es un pronombre singular que reemplaza a 'severe vulnerability' (o 'flaw'), que es lo que el equipo decidió parchear." 
  },
  { 
    q: "Object-oriented programming (OOP) relies heavily on the concept of classes and objects. A class serves as a blueprint, defining the properties and behaviors that its instances will possess. When developers instantiate a class, <u>these</u> are allocated memory and can interact with one another throughout the application's lifecycle.", 
    options: ["The properties and behaviors", "The instances (objects)", "The developers", "The classes"], 
    answer: "The instances (objects)", 
    exp: "'these' se refiere a los elementos plurales que acaban de ser instanciados y a los que se les asigna memoria: 'The instances' (las instancias u objetos)." 
  },
  { 
    q: "Artificial Intelligence models, particularly Large Language Models, require massive datasets for their training phase. Engineers clean and tokenize the raw text to ensure the neural network can process the information efficiently. Once the training is complete, <u>it</u> can generate human-like responses to a wide variety of complex prompts.", 
    options: ["The raw text", "The training phase", "The neural network", "The massive dataset"], 
    answer: "The neural network", 
    exp: "'it' actúa como sujeto de la última oración y se refiere a 'the neural network' (la red neuronal o modelo de IA) que ahora es capaz de generar respuestas." 
  },
  { 
    q: "A database index functions much like the index at the end of a book, allowing the query engine to find rows quickly without scanning the entire table. However, while indexes drastically speed up read operations, <u>they</u> can slow down write operations because the index must be updated every time data is modified.", 
    options: ["Read operations", "Database indexes", "Write operations", "Query engines"], 
    answer: "Database indexes", 
    exp: "'they' es un pronombre plural que retoma el sujeto principal de la cláusula anterior: 'indexes' (los índices), los cuales ralentizan la escritura." 
  },
  { 
    q: "In agile software development, teams often work in short iterations called sprints, which typically last two weeks. At the end of each sprint, the team holds a retrospective meeting to discuss what went well and what could be improved. The primary goal of <u>this</u> is to continuously enhance the team's efficiency in future iterations.", 
    options: ["The retrospective meeting", "Agile software development", "The two-week sprint", "The team's efficiency"], 
    answer: "The retrospective meeting", 
    exp: "'this' apunta al evento más cercano mencionado cuyo propósito es mejorar la eficiencia: 'The retrospective meeting' (la reunión retrospectiva)." 
  },
  { 
    q: "Version control systems like Git allow multiple developers to collaborate on the same codebase simultaneously without overwriting each other's work. When a developer finishes a feature, they create a pull request to merge their changes into the main branch. Reviewers must approve <u>it</u> before the code can be deployed to production.", 
    options: ["The main branch", "The pull request", "The feature", "The codebase"], 
    answer: "The pull request", 
    exp: "'it' es un pronombre singular que se refiere a 'The pull request', que es el objeto que los revisores deben aprobar antes del despliegue." 
  },
  { 
    q: "Microservices architecture breaks down a large monolithic application into smaller, independent services that communicate over a network. Each service is responsible for a specific business function and can be deployed independently. Because of <u>their</u> isolated nature, a failure in one service rarely brings down the entire system.", 
    options: ["The independent services", "Business functions", "Monolithic applications", "Network protocols"], 
    answer: "The independent services", 
    exp: "'their' es un adjetivo posesivo plural que se refiere a 'The independent services', ya que son estos servicios los que tienen una naturaleza aislada." 
  },
  { 
    q: "When writing automated tests, developers must ensure that the test environment closely mirrors the production environment. If the database schema differs, the test might pass locally but fail in production. To avoid <u>this</u>, many teams use containerization tools like Docker to replicate environments accurately.", 
    options: ["Using containerization tools", "Passing locally but failing in production", "The database schema", "Automated tests"], 
    answer: "Passing locally but failing in production", 
    exp: "'this' funciona aquí para encapsular todo el escenario problemático mencionado justo antes: que el test pase localmente pero falle en producción." 
  }
];

const synonymData = [
  { word: "Reliable", type: "synonym", options: ["Dependable", "Slow", "Dangerous", "Temporary"], answer: "Dependable", exp: "Reliable (confiable) es sinónimo de Dependable." },
  { word: "Secure", type: "antonym", options: ["Vulnerable", "Safe", "Encrypted", "Fast"], answer: "Vulnerable", exp: "Secure (seguro) es lo opuesto a Vulnerable." },
  { word: "Mandatory", type: "synonym", options: ["Required", "Optional", "Suggested", "Useless"], answer: "Required", exp: "Mandatory (obligatorio) es sinónimo de Required." },
  { word: "Increase", type: "antonym", options: ["Decrease", "Expand", "Raise", "Grow"], answer: "Decrease", exp: "Increase (aumentar) es lo opuesto a Decrease (disminuir)." },
  { word: "Obsolete", type: "synonym", options: ["Outdated", "Modern", "Efficient", "New"], answer: "Outdated", exp: "Obsolete (obsoleto) es sinónimo de Outdated." },
  { word: "Complex", type: "antonym", options: ["Simple", "Complicated", "Difficult", "Advanced"], answer: "Simple", exp: "Complex (complejo) es lo opuesto a Simple." },
  { word: "Verify", type: "synonym", options: ["Confirm", "Ignore", "Delete", "Guess"], answer: "Confirm", exp: "Verify (verificar) es sinónimo de Confirm." },
  { word: "Allow", type: "antonym", options: ["Deny", "Permit", "Enable", "Grant"], answer: "Deny", exp: "Allow (permitir) es lo opuesto a Deny (denegar)." },
  { word: "Significant", type: "synonym", options: ["Important", "Tiny", "Hidden", "False"], answer: "Important", exp: "Significant (significativo) es sinónimo de Important." },
  { word: "Attach", type: "antonym", options: ["Detach", "Connect", "Link", "Bind"], answer: "Detach", exp: "Attach (adjuntar/conectar) es lo opuesto a Detach (separar)." }
];