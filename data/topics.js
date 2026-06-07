const topics = [
  {
    icon: 'user', color: '#a78bfa', course: 'Inglés 1',
    title: 'Verb "To Be" (Ser / Estar)',
    desc: 'El verbo principal del inglés. Se usa para descripciones, edades, ubicaciones y estados. Ojo: ¡En inglés la edad se ES (I am 20), no se TIENE!',
    formula: 'I am | He/She/It is | We/You/They are',
    analogy: { emoji: 'user', text: 'Piensa en el verbo To Be como un "Espejo" o un "GPS". Refleja QUIÉN eres (I am John), CÓMO estás (I am tired) o DÓNDE estás (I am in the office). No es una acción de movimiento, es una foto de tu estado actual.' },
    examples: [
      { type: 'pos', text: 'I am a programmer. (Profesión)' },
      { type: 'pos', text: 'She is 25 years old. (Edad - Siempre con To Be)' },
      { type: 'neg', text: 'We are not (aren\'t) ready.' },
      { type: 'q', text: 'Are you from Argentina? - Yes, I am.' },
    ],
    table: {
      headers: ['Sujeto', 'Afirmativo', 'Negativo (Corto)'],
      rows: [
        ['I', 'am (\'m)', 'am not'],
        ['He / She / It', 'is (\'s)', 'isn\'t'],
        ['We / You / They', 'are (\'re)', 'aren\'t'],
      ]
    }
  },
  {
    icon: 'tag', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Possessive Adjectives & Pronouns',
    desc: 'Palabras para indicar de quién es algo. Los adjetivos posesivos van ANTES del objeto. Los pronombres posesivos reemplazan al objeto.',
    formula: 'Possessive Adjective + Noun | Possessive Pronoun (solo)',
    analogy: { emoji: 'key', text: 'Adjetivo = Etiqueta con tu nombre pegada al objeto ("This is MY laptop"). Pronombre = Título de propiedad que guardas cuando el objeto ya es obvio ("This laptop is MINE").' },
    examples: [
      { type: 'pos', text: 'This is my computer. (Adjetivo)' },
      { type: 'pos', text: 'This computer is mine. (Pronombre)' },
      { type: 'neg', text: 'That is not his jacket. It is hers.' },
      { type: 'q', text: 'Whose phone is this? (¿De quién es?)' },
    ],
    table: {
      headers: ['Sujeto', 'Adjetivo (mi, tu...)', 'Pronombre (mío, tuyo...)'],
      rows: [
        ['I', 'my (my book)', 'mine (it is mine)'],
        ['You', 'your (your car)', 'yours (it is yours)'],
        ['He', 'his (his house)', 'his (it is his)'],
        ['She', 'her (her phone)', 'hers (it is hers)'],
        ['We', 'our (our team)', 'ours (it is ours)'],
        ['They', 'their (their data)', 'theirs (it is theirs)'],
      ]
    }
  },
  {
    icon: 'book', color: '#00ff88', course: 'Inglés 1',
    title: 'Countable vs Uncountable & Quantifiers',
    desc: 'Los sustantivos contables se pueden contar con números (1 manzana). Los incontables son líquidos, polvos o conceptos abstractos y no tienen plural.',
    formula: 'How many + contables | How much + incontables',
    analogy: { emoji: 'coffee', text: 'Imagina que se te cae al piso. Si puedes recogerlo contando las piezas rápido (manzanas, lápices) = Countable. Si tienes que barrerlo o trapearlo (agua, arroz, azúcar, dinero) = Uncountable.' },
    examples: [
      { type: 'pos', text: 'I have THREE computers. (Contable)' },
      { type: 'pos', text: 'I need SOME water. (Incontable)' },
      { type: 'q', text: 'HOW MANY apples do you want?' },
      { type: 'q', text: 'HOW MUCH money do you have?' },
    ],
    table: {
      headers: ['Cuantificador', 'Uso principal', 'Ejemplo'],
      rows: [
        ['Some', 'Afirmativas (Ambos)', 'I have some books / some water.'],
        ['Any', 'Preguntas/Negativas (Ambos)', 'Do you have any money? / I don\'t have any.'],
        ['Many', 'Contables (Muchos)', 'There are many cars.'],
        ['Much', 'Incontables (Mucho)', 'There isn\'t much time.'],
        ['A lot of', 'Ambos (Mucho/s)', 'A lot of friends / coffee.'],
      ]
    }
  },
  {
    icon: 'book', color: '#ffd93d', course: 'Inglés 1',
    title: 'Artículos: A / AN / THE',
    desc: 'A/AN = indefinido (cualquiera). THE = específico o único.',
    formula: 'A + consonant | AN + vowel | THE + specific/unique',
    analogy: { emoji: 'handshake', text: 'Imaginate que presentás a alguien: "I met <em>a</em> guy at the party" (primera mención, es desconocido). Al día siguiente: "<em>The</em> guy called me back" — ya lo conocemos, es específico. <em>A/AN</em> = primera vez que lo mencionás. <em>THE</em> = ya sabemos de quién o qué hablamos.' },
    examples: [
      { type: 'pos', text: 'She is reading a book.' },
      { type: 'pos', text: 'He found an umbrella.' },
      { type: 'kw', text: 'THE sun / THE moon → únicos en el mundo' },
      { type: 'neg', text: 'NO artículo: Books are expensive. / I love music.' },
    ],
    table: {
      headers: ['Artículo', 'Uso', 'Ejemplo'],
      rows: [
        ['A', 'Antes de consonante', 'a book, a car'],
        ['AN', 'Antes de vocal', 'an apple, an old car'],
        ['THE', 'Específico/único', 'the sun, the book I told you'],
        ['∅ (ninguno)', 'Plural general / abstracto', 'Books are fun. / I love music.'],
      ]
    }
  },
  {
    icon: 'numbers', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Plurales',
    desc: 'Reglas para convertir sustantivos al plural.',
    formula: 'noun + s / es / ies (según la terminación)',
    examples: [
      { type: 'pos', text: 'book → books / bus → buses' },
      { type: 'pos', text: 'city → cities / leaf → leaves' },
      { type: 'kw', text: 'Irregulares: man→men, child→children, foot→feet' },
    ],
    table: {
      headers: ['Terminación', 'Regla', 'Ejemplo'],
      rows: [
        ['General', '+ s', 'book→books'],
        ['s,x,z,sh,ch', '+ es', 'bus→buses, watch→watches'],
        ['Consonante + y', 'y→ies', 'city→cities'],
        ['f/fe', 'f→ves', 'leaf→leaves'],
        ['Irregulares', 'Cambian', 'man→men, child→children'],
      ]
    }
  },
  {
    icon: 'user', color: '#00bfff', course: 'Inglés 1',
    title: 'Pronombres: Sujeto vs Objeto',
    desc: 'Los pronombres sujeto hacen la acción. Los de objeto la reciben.',
    formula: 'Subject + verb + Object pronoun',
    analogy: { emoji: 'soccer', text: 'Pensá en un partido de fútbol: el <strong>sujeto</strong> patea (hace la acción), el <strong>objeto</strong> recibe el balón. "She kicked him" = ella le pegó a él. El que patea usa pronombre sujeto (she), el que recibe usa pronombre objeto (him).' },
    examples: [
      { type: 'pos', text: 'She called him yesterday.' },
      { type: 'neg', text: 'He never listens to us.' },
      { type: 'q', text: 'What time can I call you?' },
      { type: 'kw', text: 'I/me · he/him · she/her · we/us · they/them' },
    ],
    table: {
      headers: ['Sujeto', 'Objeto', 'Ejemplo'],
      rows: [
        ['I', 'me', 'Call me!'], ['he', 'him', 'She loves him.'], ['she', 'her', 'He called her.'],
        ['we', 'us', 'They need us.'], ['they', 'them', 'I told them.'], ['you', 'you', 'I see you.'],
      ]
    }
  },
  {
    icon: 'arrow-right', color: '#a78bfa', course: 'Inglés 1',
    title: 'Demonstratives',
    desc: 'Demostrativos: señalan personas u objetos según cercanía (this/that) y número (these/those).',
    formula: 'This/These = cerca | That/Those = lejos | Singular/Plural',
    analogy: { emoji: 'arrow-right', text: 'Imaginate que señalás con el dedo: <em>this</em> = algo dentro de tu brazo, muy cerquita. <em>that</em> = algo al otro lado del cuarto, lejos. <em>these/those</em> = lo mismo pero con varias cosas a la vez. La distancia no cambia, solo la cantidad.' },
    examples: [
      { type: 'pos', text: 'This is my phone. (cerca, singular)' },
      { type: 'pos', text: 'These are my books. (cerca, plural)' },
      { type: 'neg', text: 'That is not her bag. (lejos, singular)' },
      { type: 'q', text: 'Are those your keys? (lejos, plural)' },
      { type: 'kw', text: 'Truco: this/that = singular | these/those = plural (igual que this book → these books)' },
    ],
    table: {
      headers: ['Demostrativo', 'Distancia', 'Número', 'Ejemplo'],
      rows: [
        ['this', 'cerca', 'singular', 'This is great!'],
        ['that', 'lejos', 'singular', 'That car is fast.'],
        ['these', 'cerca', 'plural', 'These shoes are new.'],
        ['those', 'lejos', 'plural', 'Those people are friendly.'],
      ]
    }
  },
  {
    icon: 'message-square', color: '#ffd93d', course: 'Inglés 1',
    title: 'Imperatives',
    desc: 'Se usan para dar órdenes, instrucciones, advertencias o consejos. No llevan sujeto explícito, ya que siempre se dirigen a "you" (tú/ustedes).',
    formula: 'Verb (base) | Don\'t + verb | Let\'s + verb',
    examples: [
      { type: 'pos', text: 'Open your book. / Turn off the lights. (Instrucción)' },
      { type: 'neg', text: "Don't talk during the exam. / Don't be late. (Prohibición)" },
      { type: 'kw', text: "Let's go to the park! (Sugerencia para 'nosotros')" },
      { type: 'pos', text: 'Have a good trip! / Take care. (Deseos o consejos)' },
    ],
    table: {
      headers: ['Tipo', 'Estructura', 'Ejemplo', 'Uso'],
      rows: [
        ['Afirmativo', 'Verbo base', 'Please, sit down.', 'Dar una orden o instrucción directa.'],
        ['Negativo', 'Do not (Don\'t) + verbo base', "Don't touch that!", 'Prohibiciones o advertencias.'],
        ['Sugerencia', "Let's + verbo base", "Let's take a break.", 'Sugerencia que incluye al hablante ("Hagamos algo").'],
      ]
    }
  },
  {
    icon: 'settings', color: '#ff00ff', course: 'Inglés 1 & 2',
    title: 'Tipos de Verbos (Roles)',
    desc: 'Los verbos no solo son acciones. Cumplen diferentes roles en la oración, desde describir un estado hasta ayudar a otros verbos.',
    formula: 'Action = Físico | Stative = Mental | Aux = Ayudante | Modal = Condición',
    analogy: { emoji: 'store', text: 'Pensá en los <strong>roles de una empresa</strong>: los <em>Action Verbs</em> son los empleados que hacen el trabajo físico. Los <em>Stative Verbs</em> son las cámaras de seguridad (observan, sienten, saben). Los <em>Auxiliary</em> son los gerentes (ayudan a que otros trabajen: do, be, have). Los <em>Modal</em> son el reglamento interno (<em>can</em> = está permitido, <em>must</em> = es obligatorio).' },
    examples: [
      { type: 'pos', text: 'Action (Acciones físicas o procesos): Run, jump, eat, build. "He runs every morning."' },
      { type: 'neg', text: 'Stative (Estados mentales, sentidos, posesión): Know, want, love, own. "I know the answer." (NO se usan en continuo "-ing")' },
      { type: 'kw', text: 'Auxiliary (Ayudantes para tiempos verbales o preguntas): Be, do, have. "Do you like coffee?" "She is working."' },
      { type: 'q', text: 'Modal (Añaden condición, habilidad, permiso o deber): Can, should, must. "You should sleep." (NO llevan "to" ni "s")' }
    ],
    table: {
      headers: ['Tipo', 'Función', 'Ejemplo', 'Regla de Oro'],
      rows: [
        ['Action Verbs', 'Acción o movimiento', 'run, eat, build', 'Pueden usarse en tiempos continuos (-ing).'],
        ['Stative Verbs', 'Estado, mente o sentido', 'know, like, seem', '¡NUNCA se usan en continuo (I am knowing)!'],
        ['Auxiliary', 'Ayudan a formar tiempos', 'do, be, have', 'Se usan para negar (don\'t) o preguntar (do you?).'],
        ['Modal Verbs', 'Condición, poder o deber', 'can, must, should', 'Van directos con otro verbo sin "to" (can go).'],
      ]
    }
  },
  {
    icon: 'timer', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'Simple Present',
    desc: 'Hábitos, rutinas y hechos generales. Con he/she/it el verbo lleva -s.',
    formula: 'S + verb(s/es) | S + do/does + not + verb | Do/Does + S + verb?',
    analogy: { emoji: 'plane', text: 'Pensá en el <strong>tablero de salidas de un aeropuerto</strong>: "Flight 202 <em>departs</em> at 9:00 AM". No dice está saliendo ahora sino que es un hecho fijo y repetible. El Simple Present describe verdades que siempre son así, como ese horario que nunca cambia.' },
    examples: [
      { type: 'pos', text: 'She eats breakfast every day.' },
      { type: 'neg', text: "She doesn't eat breakfast." },
      { type: 'q', text: 'Does she eat breakfast?' },
      { type: 'kw', text: 'always, usually, sometimes, never, every day, once a week' },
    ],
    table: {
      headers: ['Tipo', 'Estructura', 'Ejemplo'],
      rows: [
        ['Afirmativo', 'S + verb(s/es)', 'She studies at night.'],
        ['Negativo', 'S + don\'t/doesn\'t + verb', 'He doesn\'t like coffee.'],
        ['Yes/No Q', 'Do/Does + S + verb?', 'Does she work here?'],
        ['WH-Q', 'WH + do/does + S + verb?', 'Where does she live?'],
      ]
    }
  },
  {
    icon: 'bar-chart', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Adverbs of Frequency',
    desc: 'Van ANTES del verbo principal, pero DESPUÉS del verbo to be. <strong>Responden a la pregunta: "How often...?"</strong>',
    formula: 'S + adverb + verb | S + to be + adverb',
    analogy: { emoji: 'thermometer', text: 'Imaginate un <strong>termómetro de frecuencia</strong> de 0% a 100%: <em>never</em> = frío total (0%), <em>sometimes</em> = temperatura media (50%), <em>always</em> = máxima temperatura (100%). Cuanto más alto el porcentaje, más seguido ocurre la acción.' },
    examples: [
      { type: 'pos', text: 'She always eats breakfast.' },
      { type: 'pos', text: 'He is always happy.' },
      { type: 'q', text: 'How often do you exercise? → I usually exercise.' },
      { type: 'kw', text: 'always(100%) usually(90%) sometimes(50%) never(0%)' },
    ],
    table: {
      headers: ['Adverbio', '%', 'Ejemplo'],
      rows: [
        ['always', '100%', 'She always studies.'],
        ['usually', '90-99%', 'I usually wake up early.'],
        ['often', '60-80%', 'They often play soccer.'],
        ['sometimes', '50%', 'We sometimes watch movies.'],
        ['rarely', '1-10%', 'She rarely eats meat.'],
        ['never', '0%', 'He never drinks coffee.'],
      ]
    }
  },
  {
    icon: 'help-circle', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'WH-Questions',
    desc: 'Para obtener información específica (no solo sí/no).',
    formula: 'WH + do/does/did + S + verb?',
    analogy: { emoji: 'search', text: 'Pensá en un <strong>detective interrogando</strong>: cada palabra WH es una pregunta de investigación específica. <em>Who</em> = ¿quién lo hizo? <em>Where</em> = ¿dónde? <em>When</em> = ¿cuándo? <em>Why</em> = ¿por qué? Cada WH abre un camino de información distinto, como las pistas de un caso policial.' },
    examples: [
      { type: 'q', text: 'What do you eat for lunch?' },
      { type: 'q', text: 'Where does she live?' },
      { type: 'q', text: 'When did they arrive?' },
      { type: 'kw', text: 'What · Who · Where · When · Why · How · How often · How many' },
    ],
    table: {
      headers: ['WH', 'Pregunta sobre...', 'Ejemplo'],
      rows: [
        ['What', 'Cosa/acción', 'What do you eat?'],
        ['Who', 'Persona', 'Who plays soccer?'],
        ['Where', 'Lugar', 'Where does she live?'],
        ['When', 'Tiempo', 'When did they arrive?'],
        ['Why', 'Razón', 'Why are you late?'],
        ['How', 'Manera', 'How do you go to work?'],
        ['How often', 'Frecuencia (se responde con Adverbios de Frecuencia)', 'How often do you exercise?'],
      ]
    }
  },
  {
    icon: 'repeat', color: '#00bfff', course: 'Inglés 1 & 2',
    title: 'Present Continuous',
    desc: 'Acciones que pasan AHORA o planes futuros cercanos.',
    formula: 'S + am/is/are + verb-ing',
    analogy: { emoji: 'tv', text: 'Imaginate una <strong>transmisión en vivo</strong>: el comentarista narra lo que ve en este momento. "He <em>is running</em>! She <em>is scoring</em>!" Todo en tiempo real, mientras sucede. El Present Continuous es ese instante que se está describiendo <em>ahora mismo</em>.' },
    examples: [
      { type: 'pos', text: 'She is studying English right now.' },
      { type: 'neg', text: "She isn't studying English." },
      { type: 'q', text: 'Is she studying English?' },
      { type: 'kw', text: 'now, right now, at the moment, tonight, tomorrow' },
    ],
    table: {
      headers: ['Verbo', 'Non-Progressive?', 'Alternativa'],
      rows: [
        ['know', '✓ (NO -ing)', 'She knows the answer.'],
        ['like/love', '✓', 'He loves pizza.'],
        ['want/need', '✓', 'I need help.'],
        ['have (posesión)', '✓', 'She has a car.'],
        ['see/hear', '✓', 'I see you.'],
      ]
    }
  },
  {
    icon: 'map-pin', color: '#00ff88', course: 'Inglés 2',
    title: 'There is / There are',
    desc: 'Indicar la existencia de algo en un lugar.',
    formula: 'There is + singular | There are + plural',
    analogy: { emoji: 'store', text: 'Pensá en el <strong>sistema de inventario de una tienda</strong>: "There <em>are</em> 5 apples in stock" — el sistema reporta lo que existe y cuánto hay. No hay un sujeto que haga algo, solo se declara la existencia. <em>There is/are</em> funciona igual: reporta que algo está ahí.' },
    examples: [
      { type: 'pos', text: 'There is a bank near here.' },
      { type: 'pos', text: 'There are some cafes in town.' },
      { type: 'neg', text: "There isn't a hospital. / There aren't any movie theaters." },
      { type: 'q', text: 'Is there a school? / Are there any colleges?' },
      { type: 'kw', text: 'some (afirm.) · any (neg./preg.) · a (singular)' },
    ],
  },
  {
    icon: 'history', color: '#00bfff', course: 'Inglés 2',
    title: 'Simple Past',
    desc: 'Acciones completadas en el pasado. Regulares: +ed. Irregulares: cambia el verbo.',
    formula: 'S + verb-ed/irregular | S + didn\'t + verb | Did + S + verb?',
    analogy: { emoji: 'camera', text: 'Pensá en un <strong>álbum de fotos</strong>: cada foto ya fue tomada, ya pasó, está fija para siempre. No podés cambiarla ni editarla. El Simple Past es exactamente eso: una acción que ya terminó y quedó congelada en el tiempo, como una fotografía.' },
    examples: [
      { type: 'pos', text: 'She walked to school yesterday.' },
      { type: 'pos', text: 'He went to the gym last night.' },
      { type: 'neg', text: "She didn't walk to school." },
      { type: 'q', text: 'Did she walk? / Where did he go?' },
      { type: 'kw', text: 'yesterday, last week/month, ago, in 2020' },
    ],
    table: {
      headers: ['Pronunciación -ed', 'Regla', 'Ejemplos'],
      rows: [
        ['/d/', 'Verbo termina en sonido sonoro', 'played, called, loved'],
        ['/t/', 'Verbo termina en sonido sordo', 'washed, cooked, liked'],
        ['/ɪd/', 'Verbo termina en /t/ o /d/', 'started, needed, wanted'],
      ]
    }
  },
  {
    icon: 'trending-up', color: '#ffd93d', course: 'Inglés 2',
    title: 'Comparatives',
    desc: 'Comparar dos cosas. Se usa "than" después del adjetivo.',
    formula: 'adj+er than | more + adj + than | as + adj + as',
    analogy: { emoji: 'trophy', text: 'Pensá en un <strong>marcador de partido</strong>: siempre hay dos equipos (dos cosas) y uno supera al otro. "Tokyo <em>is bigger than</em> London" = Tokyo 1, London 0. Los comparativos siempre necesitan <em>dos</em> elementos para funcionar, como un marcador necesita dos equipos.' },
    examples: [
      { type: 'pos', text: 'Tokyo is bigger than London.' },
      { type: 'pos', text: 'That book is more interesting than this one.' },
      { type: 'pos', text: 'English is as hard as Portuguese.' },
      { type: 'kw', text: 'Irregulares: good→better, bad→worse, far→farther' },
    ],
    table: {
      headers: ['Tipo', 'Regla', 'Ejemplo'],
      rows: [
        ['1 sílaba general', '+ er + than', 'tall → taller than'],
        ['1 sílaba en -e', '+ r + than', 'nice → nicer than'],
        ['CVC de 1 sílaba', 'Dobla + er', 'big → bigger than'],
        ['2+ sílabas', 'more + adj + than', 'more comfortable than'],
        ['Irregulares', 'Forma especial', 'good→better, bad→worse'],
        ['Igualdad', 'as + adj + as', 'as tall as her'],
      ]
    }
  },
  {
    icon: 'sparkles', color: '#ff6b6b', course: 'Inglés 2',
    title: 'Be Going To',
    desc: 'Planes futuros y predicciones con evidencia.',
    formula: 'S + am/is/are + going to + verb',
    analogy: { emoji: 'calendar', text: 'Imaginate un <strong>calendario con planes ya escritos</strong>: si ya lo apuntaste, es <em>going to</em>. Y si ves nubes negras y decís "it\'s going to rain" — también es <em>going to</em>, porque la evidencia visible ya te lo dice. En ambos casos, el futuro ya se puede ver desde ahora.' },
    examples: [
      { type: 'pos', text: "I'm going to study tonight. (plan)" },
      { type: 'pos', text: "Look at those clouds! It's going to rain. (predicción)" },
      { type: 'neg', text: "She isn't going to eat fish." },
      { type: 'q', text: 'Are you going to play soccer?' },
      { type: 'kw', text: 'next, later, tomorrow, tonight' },
    ],
  },
  {
    icon: 'book', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Noun Phrases (Frases Nominales)',
    desc: 'Un grupo de palabras estructurado alrededor de un sustantivo principal (Head Noun). En inglés, los modificadores van ANTES del sustantivo.',
    formula: 'Modifiers (Articles/Adjectives/Nouns) + HEAD NOUN',
    analogy: { emoji: 'package', text: 'Pensá en una <strong>caja de envío</strong>: el sustantivo principal (Head Noun) es el objeto que compraste. Todo lo demás (el plástico de burbujas, la etiqueta, la caja de cartón) son los <em>modificadores</em> que lo envuelven para darle contexto. "A WIRELESS NETWORK <em>DEVICE</em>" -> el objeto principal es "device" (dispositivo).' },
    examples: [
      { type: 'pos', text: 'A risk (Artículo + Sustantivo)' },
      { type: 'pos', text: 'Security threats (Sustantivo + Sustantivo)' },
      { type: 'pos', text: 'A database program (Artículo + Sust. + Sust.)' },
      { type: 'pos', text: 'The memory address signals (Art + Sust + Sust + Sust)' },
      { type: 'kw', text: 'Truco: Para traducirlo al español, casi siempre se lee de ATRÁS hacia ADELANTE.' },
    ],
    table: {
      headers: ['Modificadores', 'Head Noun', 'Traducción'],
      rows: [
        ['a wireless network', 'device', 'un dispositivo de red inalámbrica'],
        ['security', 'threats', 'amenazas de seguridad'],
        ['your website\'s', 'purpose', 'el propósito de tu sitio web'],
      ]
    }
  },
  {
    icon: 'search', color: '#00ff88', course: 'Inglés Técnico',
    title: 'Pronoun Referents (Referentes Pronominales)',
    desc: 'Los pronombres reemplazan a los sustantivos para evitar repeticiones. En textos técnicos es clave saber a qué palabra exacta (referente) están apuntando.',
    formula: 'Sustantivo Original ... Pronombre',
    analogy: { emoji: 'link', text: 'Imaginate un <strong>acceso directo</strong> en tu escritorio. El icono no es el programa real, es solo un link que te lleva a él. Los pronombres hacen lo mismo: "IT (pronombre) is a field..." -> "IT" es el acceso directo que apunta a "Information Technology".' },
    examples: [
      { type: 'pos', text: 'Subject: IT is a field... IT plays a crucial role.' },
      { type: 'pos', text: 'Object: These are the cases. Where shall I put THEM?' },
      { type: 'pos', text: 'Reciprocal: Rachel and Joe love EACH OTHER.' },
      { type: 'pos', text: 'Reflexive/Emphatic: A transmitter ITSELF generates a wave.' },
      { type: 'pos', text: 'Relative: A monitor is a screen THAT displays text.' },
    ],
    table: {
      headers: ['Tipo de Pronombre', 'Palabras', 'Uso'],
      rows: [
        ['Subject', 'I, you, he, she, it, we, they', 'Realiza la acción principal.'],
        ['Object', 'me, him, her, it, us, them', 'Recibe la acción (después del verbo).'],
        ['Reflexive / Emphatic', 'myself, itself, themselves', 'Refleja la acción al sujeto o le da énfasis.'],
        ['Relative', 'that, which, who, whom, whose', 'Conecta frases refiriéndose a algo anterior.'],
        ['Reciprocal', 'each other, one another', 'Acción mutua entre 2 o más sujetos.'],
      ]
    }
  },
  {
    icon: 'tag', color: '#ffd93d', course: 'Inglés Técnico',
    title: 'Connectors (Conectores)',
    desc: 'Palabras que unen ideas lógicas dentro de un manual o texto técnico, indicando causa, efecto, contraste o secuencia.',
    formula: 'Clause 1 + Connector + Clause 2',
    analogy: { emoji: 'git-merge', text: 'Como las <strong>señales de tránsito</strong>: te dicen qué viene en la siguiente oración. "However" es un cartel de desvío (cambio de idea). "Therefore" es una flecha recta (consecuencia lógica). "Furthermore" es un carril de suma (agrega más información).' },
    examples: [
      { type: 'pos', text: 'The system crashed. THEREFORE, data was lost. (Efecto)' },
      { type: 'pos', text: 'It is secure; HOWEVER, it is slow. (Contraste)' },
      { type: 'pos', text: 'First, reboot the PC. THEN, check the IP. (Secuencia)' },
      { type: 'kw', text: 'Cause: because, since, due to' },
    ],
    table: {
      headers: ['Función', 'Conectores Comunes', 'Ejemplo'],
      rows: [
        ['Causa', 'because, since, due to', '...due to a power failure.'],
        ['Efecto / Resultado', 'therefore, thus, as a result', '...therefore, the server went offline.'],
        ['Contraste', 'however, although, but', '...however, the backup was saved.'],
        ['Adición', 'furthermore, in addition, also', '...in addition, it encrypts the files.'],
        ['Secuencia', 'first, then, finally, next', 'First, install the app. Then, run it.'],
      ]
    }
  },
  {
    icon: 'star', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Parts of Speech (Componentes)',
    desc: 'Los bloques de construcción de cualquier oración en inglés. Entender qué función cumple cada palabra es vital para traducir manuales técnicos.',
    formula: 'Nouns, Verbs, Adjectives, Adverbs, etc.',
    analogy: { emoji: 'cpu', text: 'Piensa en las partes de la oración como los <strong>componentes de hardware</strong> de una PC. El Sustantivo (Noun) es el disco duro (donde están las cosas), el Verbo (Verb) es el procesador (hace la acción), y el Adjetivo (Adjective) es la tarjeta gráfica (le da color/detalle al sustantivo).' },
    examples: [
      { type: 'pos', text: 'Noun: "The SERVER is down." (Persona, lugar, objeto o concepto)' },
      { type: 'pos', text: 'Verb: "We UPGRADED the RAM." (Acción o estado)' },
      { type: 'pos', text: 'Adjective: "It is a FAST network." (Modifica al sustantivo)' },
      { type: 'pos', text: 'Adverb: "The program ran QUICKLY." (Modifica al verbo/adjetivo)' },
      { type: 'pos', text: 'Preposition: "Data travels THROUGH the cable." (Relación espacial/lógica)' }
    ],
    table: {
      headers: ['Part of Speech', 'Función Técnica', 'Ejemplo IT'],
      rows: [
        ['Noun', 'Nombra componentes, redes, datos', 'Smartphone, modem, network, data'],
        ['Verb', 'Acciones del sistema o usuario', 'Boot, install, download, crash'],
        ['Adjective', 'Describe capacidades o estados', 'Wireless, digital, binary, secure'],
        ['Adverb', 'Cómo ocurre un proceso', 'Automatically, remotely, quickly'],
      ]
    }
  },
  {
    icon: 'alert', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'False Friends & Cognates',
    desc: 'Palabras que se parecen al español. Los Cognados significan lo mismo, pero los Falsos Amigos (False Friends) engañan y significan algo totalmente distinto.',
    formula: 'Cognate = Amigo / False Friend = Trampa',
    analogy: { emoji: 'shield', text: 'Los falsos amigos son como el <strong>Phishing</strong>. Parecen legítimos a simple vista, pero si haces clic asumiendo que significan lo que parecen, cometerás un error de traducción.' },
    examples: [
      { type: 'pos', text: 'Cognate: Program = Programa' },
      { type: 'pos', text: 'Cognate: Binary = Binario' },
      { type: 'pos', text: 'False Friend: Actual = Real (NO significa "actual" de tiempo)' },
      { type: 'pos', text: 'False Friend: Large = Grande (NO significa "largo")' },
    ],
    table: {
      headers: ['Palabra en Inglés', 'Parece que es...', 'Realmente significa...'],
      rows: [
        ['Large', 'Largo', 'Grande'],
        ['Actual', 'Actual (hoy)', 'Real / Verdadero'],
        ['Library', 'Librería (tienda)', 'Biblioteca (ej. de código)'],
        ['Exit', 'Éxito', 'Salida (exit code)'],
        ['Sensible', 'Sensible', 'Sensato / Lógico'],
      ]
    }
  },
  {
    icon: 'message', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Phrasal Verbs & Tech Idioms',
    desc: 'Verbos compuestos (Verbo + Preposición) muy usados en IT, y frases coloquiales (modismos) usadas en el entorno laboral.',
    formula: 'Verb + Preposition',
    analogy: { emoji: 'terminal', text: 'Los Phrasal Verbs son como <strong>macros de teclado</strong> (atajos). En lugar de decir "initialize the authentication protocol" (formal), los gringos usan un atajo: "Log in".' },
    examples: [
      { type: 'pos', text: 'Boot up: Iniciar (un servidor o PC)' },
      { type: 'pos', text: 'Log on/in: Conectarse (iniciar sesión)' },
      { type: 'pos', text: 'Back up: Respaldar información' },
      { type: 'pos', text: 'Idiom: "Out of the blue" (De la nada / Inesperado)' },
      { type: 'pos', text: 'Idiom: "No sweat" (Sin problema / Fácil)' },
    ],
    table: {
      headers: ['Phrasal Verb', 'Sinónimo Formal', 'Español'],
      rows: [
        ['Turn on / Switch on', 'Activate', 'Encender'],
        ['Turn off / Shut down', 'Deactivate', 'Apagar'],
        ['Hook up', 'Connect', 'Conectar (cables/equipos)'],
        ['Set up', 'Install / Configure', 'Instalar / Configurar'],
        ['Wipe out', 'Erase completely', 'Borrar por completo (ej. un disco)'],
      ]
    }
  },
  {
    icon: 'eye', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Reading: Skimming & Scanning',
    desc: 'Estrategias de comprensión lectora (Reading Comprehension) esenciales para digerir manuales de documentación largos rápidamente.',
    formula: 'Skim = Idea General | Scan = Dato Específico',
    analogy: { emoji: 'search', text: '<strong>Skimming</strong> es como hacer scroll rápido en un post de Reddit solo leyendo los títulos para ver de qué trata. <strong>Scanning</strong> es hacer "Ctrl + F" en el teclado para encontrar una palabra clave exacta en el texto.' },
    examples: [
      { type: 'pos', text: 'Skimming: Leer títulos, subtítulos, 1ra y última oración del párrafo.' },
      { type: 'pos', text: 'Scanning: Ignorar el 90% del texto y buscar acrónimos, números o nombres.' },
      { type: 'kw', text: 'Topic Sentence: Indica la idea principal del párrafo (suele ser la 1ra oración).' },
    ],
    table: {
      headers: ['Técnica', 'Objetivo', 'Cuándo usarla en IT'],
      rows: [
        ['Skimming', 'Idea General (Gist)', 'Evaluando si un tutorial sirve para tu problema.'],
        ['Scanning', 'Datos Específicos', 'Buscando una dirección IP o un comando en la wiki.'],
        ['Close Reading', 'Comprensión Total', 'Leyendo los términos de licencia o un bloque de código crítico.'],
      ]
    }
  },
  {
    icon: 'server', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'IT Definitions & Latency',
    desc: 'Definiciones técnicas estándar y fundamentos de redes que todo profesional de IT debe poder explicar en inglés.',
    formula: 'Term + refers to + Definition',
    analogy: { emoji: 'cloud', text: 'Estos son los <strong>fundamentos de infraestructura</strong>. Saber armar una frase "Noun Phrase" no sirve de nada si no conoces el significado técnico del hardware y software con el que trabajas.' },
    examples: [
      { type: 'pos', text: 'Hardware: Physical devices (servers, equipment).' },
      { type: 'pos', text: 'Software: Programs that run on hardware to perform tasks.' },
      { type: 'pos', text: 'Latency: The delay for data to travel from source to destination.' },
      { type: 'kw', text: 'High latency = Slower response times.' },
    ],
    table: {
      headers: ['Término', 'Palabras Clave (Keywords)', 'Español'],
      rows: [
        ['Networks', 'Connect computers, exchange data', 'Redes'],
        ['Data Storage', 'Storing, retrieving, databases', 'Almacenamiento de datos'],
        ['Cybersecurity', 'Protect data, threats, unauthorized access', 'Ciberseguridad'],
        ['Latency', 'Delay, travel time, congestion', 'Latencia'],
      ]
    }
  },
  {
    icon: 'book', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Lexical Phenomena & Translation',
    desc: 'Fenómenos léxicos comunes en la traducción de textos técnicos (compuestos, afijos, préstamos).',
    formula: 'Context + Vocabulary = Accurate Translation',
    analogy: { emoji: 'shuffle', text: 'Traducir inglés técnico no es buscar palabra por palabra en el diccionario, es como resolver un rompecabezas donde el contexto dicta el significado.' },
    examples: [
      { type: 'pos', text: 'Compounding: Dos palabras juntas (ej: firewall, database).' },
      { type: 'pos', text: 'Affixation: Prefijos o sufijos (ej: re-boot, un-install).' },
      { type: 'pos', text: 'Borrowing: Palabras prestadas (ej: "router" se usa en español).' }
    ]
  },
  {
    icon: 'timer', color: '#00ff88', course: 'Inglés Técnico',
    title: 'Simple Present vs Present Progressive',
    desc: 'Contraste entre rutinas (Simple Present) y acciones en progreso (Present Progressive) en IT.',
    formula: 'Routine (Present) vs Happening Now (Progressive)',
    examples: [
      { type: 'pos', text: 'Simple Present: The server RUNS backups every night. (Rutina)' },
      { type: 'pos', text: 'Present Progressive: The server IS RUNNING a backup right now. (En progreso)' }
    ]
  },
  {
    icon: 'user', color: '#00bfff', course: 'Inglés Técnico',
    title: 'Subject & Object Pronouns',
    desc: 'Revisión técnica de pronombres. Subject (hace la acción) vs Object (recibe la acción).',
    formula: 'Subject + Verb + Object',
    analogy: { emoji: 'arrow-right', text: 'El Subject es el origen del comando. El Object es el destino del comando.' },
    examples: [
      { type: 'pos', text: 'THEY (Subject) configured the router.' },
      { type: 'pos', text: 'The admin gave THEM (Object) access.' }
    ],
    table: {
      headers: ['Subject Pronoun', 'Object Pronoun', 'Uso Técnico'],
      rows: [
        ['I', 'me', 'Contact me for support.'],
        ['you', 'you', 'You must log in.'],
        ['he / she / it', 'him / her / it', 'Reboot it (the server).'],
        ['we', 'us', 'Send us the logs.'],
        ['they', 'them', 'Update them (the drivers).']
      ]
    }
  },
  {
    icon: 'lightbulb', color: '#ffd93d', course: 'Inglés Técnico',
    title: 'Topic Sentence & Paragraphs',
    desc: 'La oración principal (Topic Sentence) define de qué trata todo el párrafo en textos técnicos.',
    formula: 'Topic Sentence + Supporting Details + Conclusion',
    examples: [
      { type: 'kw', text: 'Suele ser la primera oración.' },
      { type: 'pos', text: '"Cloud computing offers many benefits. First, it is scalable..." -> La Topic Sentence indica que hablaremos de beneficios.' }
    ]
  },
  {
    icon: 'check', color: '#ff6b6b', course: 'Inglés Técnico',
    title: 'True / False Reading Strategies',
    desc: 'Estrategias para determinar si una afirmación es verdadera o falsa basándose estrictamente en el texto, no en conocimiento previo.',
    formula: 'Find Keyword -> Scan Text -> Compare Meaning',
    analogy: { emoji: 'search', text: 'Pensá en un detector de mentiras. Tenés que buscar palabras restrictivas como "always", "never", "only" vs palabras flexibles como "sometimes", "usually". Si el texto dice "usually" y la pregunta dice "always", es False.' },
    examples: [
      { type: 'kw', text: 'Cuidado con modificadores absolutos: all, every, never, none.' },
      { type: 'pos', text: 'True: La afirmación coincide exactamente con el texto.' },
      { type: 'neg', text: 'False: La afirmación contradice o exagera lo que dice el texto.' }
    ]
  },
  {
    icon: 'repeat', color: '#00bfff', course: 'Inglés Técnico',
    title: 'Prefixes & Suffixes (Affixation)',
    desc: 'Letras que se agregan al principio o al final de una palabra base para cambiar radicalmente su significado o su categoría gramatical (ej. de verbo a sustantivo). Es la clave principal para leer manuales técnicos sin traductor.',
    formula: 'Prefix + Root + Suffix',
    analogy: { emoji: 'package', text: 'Pensá en los afijos como "mods" o accesorios que le ponés a un personaje en un videojuego. Un prefijo "un-" le cambia el bando al personaje (lo hace negativo). Un sufijo "-er" le da una profesión (program -> programmer). Si aprendes las reglas, puedes adivinar cientos de palabras nuevas.' },
    examples: [
      { type: 'pos', text: 'Prefix re- (otra vez): re-boot, re-connect, re-install' },
      { type: 'pos', text: 'Prefix un-/dis-/in- (negativo / opuesto): un-install, dis-connect, in-valid' },
      { type: 'kw', text: 'Los SUFIJOS te dicen qué TIPO de palabra es (Sustantivo, Adjetivo, etc.).' }
    ],
    table: {
      headers: ['Afijo', 'Tipo/Significado', 'Ejemplos Técnicos'],
      rows: [
        ['-tion / -sion', 'Crea SUSTANTIVOS (acción o proceso)', 'connection, installation, configuration'],
        ['-ment', 'Crea SUSTANTIVOS (resultado de una acción)', 'development, deployment, management'],
        ['-er / -or', 'Crea SUSTANTIVOS (persona o cosa que hace algo)', 'server, developer, processor, administrator'],
        ['-able / -ible', 'Crea ADJETIVOS (que se puede hacer)', 'executable, portable, flexible, scalable'],
        ['-ive', 'Crea ADJETIVOS (tendencia a algo)', 'responsive, active, preventive'],
        ['-ly', 'Crea ADVERBIOS (la manera en que se hace)', 'automatically, securely, locally'],
        ['pre- / post-', 'PREFIJOS de tiempo (antes / después)', 'pre-processor, post-mortem'],
        ['mis-', 'PREFIJOS de error (mal hecho)', 'misconfiguration, mismatch, misalign']
      ]
    }
  }
];