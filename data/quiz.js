const quizData = [
  {
    cat: 'Pronombres', q: 'He never listens to ___.',
    opts: ['we', 'us', 'our', 'ours'], correct: 1, exp: 'Después de preposición → objeto pronoun: us'
  },
  {
    cat: 'Artículos', q: '___ sun sets in the west.',
    opts: ['A', 'An', 'The', '∅'], correct: 2, exp: 'El sol es único → THE'
  },
  {
    cat: 'Artículos', q: 'She found ___ umbrella.',
    opts: ['a', 'an', 'the', 'some'], correct: 1, exp: 'Umbrella empieza con vocal → AN'
  },
  {
    cat: 'Simple Present', q: 'She always ___ breakfast at 7.',
    opts: ['eat', 'eats', 'eating', 'ate'], correct: 1, exp: '3ra persona (she) → eat + s = eats'
  },
  {
    cat: 'Simple Present', q: 'He ___ like coffee.',
    opts: ["don't", "doesn't", "isn't", "aren't"], correct: 1, exp: '3ra persona negativo → doesn\'t'
  },
  {
    cat: 'Frecuencia', q: '"She ___ is happy." ¿Cuál adverbio va ahí?',
    opts: ['always before is', 'always after is', 'never with is', 'only with do'], correct: 1,
    exp: 'Los adverbios de frecuencia van DESPUÉS del verbo to be'
  },
  {
    cat: 'Present Continuous', q: '¿Cuál NO puede usarse en -ing?',
    opts: ['run', 'study', 'know', 'eat'], correct: 2,
    exp: '"Know" es non-progressive verb (estado mental). No se usa en -ing.'
  },
  {
    cat: 'WH-Questions', q: 'What ___ she eat for breakfast?',
    opts: ['do', 'does', 'did', 'is'], correct: 1, exp: 'She → Does (Simple Present)'
  },
  {
    cat: 'Simple Past', q: 'She ___ to school yesterday. (walk)',
    opts: ['walk', 'walks', 'walked', 'walking'], correct: 2, exp: 'Pasado regular: walk + ed = walked'
  },
  {
    cat: 'Simple Past', q: 'He ___ to the gym last night. (go)',
    opts: ['goed', 'goes', 'gone', 'went'], correct: 3, exp: 'go es irregular → went'
  },
  {
    cat: 'Simple Past', q: '"played" → pronunciación del -ed:',
    opts: ['/t/', '/d/', '/ɪd/', 'silent'], correct: 1, exp: 'play termina en sonido sonoro → /d/'
  },
  {
    cat: 'Simple Past', q: '"started" → pronunciación del -ed:',
    opts: ['/t/', '/d/', '/ɪd/', 'silent'], correct: 2, exp: 'start termina en /t/ → /ɪd/'
  },
  {
    cat: 'Simple Past', q: 'She ___ go to the gym. (negativo pasado)',
    opts: ["don't", "doesn't", "didn't", "wasn't"], correct: 2,
    exp: 'Negativo simple past → didn\'t + verbo base'
  },
  {
    cat: 'Comparativos', q: 'Tokyo is ___ than London. (big)',
    opts: ['more big', 'biger', 'bigger', 'biggest'], correct: 2,
    exp: 'CVC de 1 sílaba → dobla la consonante + er: bigger'
  },
  {
    cat: 'Comparativos', q: 'Comparativo de "good":',
    opts: ['gooder', 'more good', 'better', 'best'], correct: 2, exp: 'Irregular: good → better'
  },
  {
    cat: 'Be Going To', q: 'I ___ study tonight.',
    opts: ['am going to', 'is going to', 'are going to', 'going to'], correct: 0,
    exp: 'I → am going to + verb'
  },
  {
    cat: 'Be Going To', q: 'Look at those clouds! It ___ rain.',
    opts: ["'s going to", "'s going", "will be", "go to"], correct: 0,
    exp: 'Predicción con evidencia → be going to'
  },
  {
    cat: 'There is/are', q: 'There ___ some cafes in town.',
    opts: ['is', 'are', 'be', 'am'], correct: 1, exp: 'Plural "cafes" → there are'
  },
  {
    cat: 'There is/are', q: 'There ___ a hospital near here. (negativo)',
    opts: ["aren't", "isn't", "don't", "not"], correct: 1,
    exp: 'Singular negativo → there isn\'t'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Hit the books"?',
    opts: ['Golpear libros', 'Ponerse a estudiar', 'Ir a la biblioteca', 'Terminar un libro'], correct: 1,
    exp: 'Idiom: Hit the books = ponerse a estudiar'
  },
  {
    cat: 'Simple Present', q: 'My parents ___ in a small town.',
    opts: ['live', 'lives', 'living', 'lived'], correct: 0, exp: 'They → live (sin -s)'
  },
  {
    cat: 'Simple Past', q: 'We ___ a great movie last weekend.',
    opts: ['see', 'saw', 'seen', 'seeing'], correct: 1, exp: 'Pasado irregular de see → saw'
  },
  {
    cat: 'Comparativos', q: 'This sofa is ___ than the old one.',
    opts: ['more soft', 'softer', 'softest', 'as soft'], correct: 1, exp: 'Adjetivo corto (soft) → softer'
  },
  {
    cat: 'Be Going To', q: 'What ___ do for your birthday?',
    opts: ['are you going to', 'you are going to', 'do you going to', 'are going'], correct: 0, exp: 'Pregunta: Are + you + going to'
  },
  {
    cat: 'WH-Questions', q: '___ do you go to the supermarket?',
    opts: ['What', 'Who', 'Where', 'How often'], correct: 3, exp: 'How often pregunta sobre frecuencia'
  },
  // Demonstratives
  {
    cat: 'Demonstratives', q: '"___ is my phone." (cerca, singular)',
    opts: ['That', 'Those', 'This', 'These'], correct: 2, exp: 'Cerca + singular = This'
  },
  {
    cat: 'Demonstratives', q: '"Are ___ your keys?" (lejos, plural)',
    opts: ['this', 'that', 'these', 'those'], correct: 3, exp: 'Lejos + plural = those'
  },
  {
    cat: 'Demonstratives', q: '"___ shoes are very comfortable." (cerca, plural)',
    opts: ['This', 'That', 'Those', 'These'], correct: 3, exp: 'Cerca + plural = These'
  },
  {
    cat: 'Demonstratives', q: '"___ is my dog over there." (lejos, singular)',
    opts: ['This', 'These', 'That', 'Those'], correct: 2, exp: 'Lejos + singular = That'
  },
  {
    cat: 'Demonstratives', q: '¿Cuál es el plural de "this"?',
    opts: ['that', 'those', 'these', 'thats'], correct: 2, exp: 'This (singular) → these (plural). Ambos indican cercanía.'
  },
  {
    cat: 'Demonstratives', q: '"___ coffee is cold." (el café que está lejos)',
    opts: ['This', 'These', 'Those', 'That'], correct: 3, exp: 'Lejos + singular = That. That coffee is cold.'
  },
  // Imperatives
  {
    cat: 'Imperatives', q: '___ open the window, it is cold!',
    opts: ["Don't", 'Not', 'No', "Doesn't"], correct: 0, exp: 'El imperativo negativo se forma con "Don\'t" + verbo base.'
  },
  {
    cat: 'Imperatives', q: '"___ go to the cinema tonight!" (Sugerencia)',
    opts: ['Let', 'Lets', "Let's", 'Let us to'], correct: 2, exp: 'Para sugerencias grupales se usa "Let\'s" (Let us).'
  },
  {
    cat: 'Imperatives', q: '"___ your homework before watching TV!" (orden directa)',
    opts: ['You do', 'Do', 'Does', 'Did'], correct: 1, exp: 'Imperativo afirmativo = verbo base sin sujeto: Do your homework!'
  },
  {
    cat: 'Imperatives', q: 'Please ___ quiet during the exam.',
    opts: ['to be', 'be', 'are', 'is'], correct: 1, exp: "Imperativo con 'be': Please be quiet. No lleva sujeto ni auxiliar."
  },
  {
    cat: 'Imperatives', q: '¿Cuál es el imperativo de "(you) leave"?',
    opts: ['You leave!', 'Leave!', 'Leaving!', 'Left!'], correct: 1, exp: 'El imperativo omite el sujeto: ¡Leave!'
  },
  {
    cat: 'Imperatives', q: '"___ run in the hallway!" (prohibición)',
    opts: ['Not', 'No', "Don't", "Doesn't"], correct: 2, exp: "Prohibición = Don't + verbo base: Don't run!"
  },
  // Tipos de Verbos
  {
    cat: 'Tipos de Verbos', q: '¿Cuál de estos es un Stative Verb?',
    opts: ['run', 'know', 'jump', 'build'], correct: 1,
    exp: '"Know" describe un estado mental. NO se puede usar en -ing.'
  },
  {
    cat: 'Tipos de Verbos', q: '¿Cuál es INCORRECTO?',
    opts: ['She is running.', 'I am knowing the answer.', 'He can swim.', 'They are working.'], correct: 1,
    exp: 'Stative verbs NO van en continuo. Lo correcto es: I know the answer.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Can", "should" y "must" son verbos de tipo:',
    opts: ['Action', 'Stative', 'Auxiliary', 'Modal'], correct: 3,
    exp: 'Los Modal Verbs expresan habilidad, obligación o posibilidad.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Do", "be" y "have" son verbos de tipo:',
    opts: ['Action', 'Stative', 'Auxiliary', 'Modal'], correct: 2,
    exp: 'Los Auxiliary Verbs ayudan a formar tiempos y preguntas.'
  },
  {
    cat: 'Tipos de Verbos', q: '¿Cuál oración usa un Action Verb correctamente?',
    opts: ['She is knowing French.', 'I am having a car.', 'He is building a house.', 'They are believing you.'], correct: 2,
    exp: '"Build" es Action Verb → puede ir en -ing. Know, have y believe son stative.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Be" puede funcionar como:',
    opts: ['Solo verbo principal', 'Solo auxiliar', 'Principal y auxiliar', 'Verbo modal'], correct: 2,
    exp: '"Be" es auxiliar (She is running) y también verbo principal (She is a teacher).'
  },
  // Pronombres (extra)
  {
    cat: 'Pronombres', q: 'She loves ___. (him)',
    opts: ['he', 'him', 'his', 'her'], correct: 1, exp: 'Después de un verbo → objeto pronoun: him'
  },
  {
    cat: 'Pronombres', q: 'They need ___. (us)',
    opts: ['we', 'our', 'us', 'ours'], correct: 2, exp: 'Después de un verbo → objeto pronoun: us'
  },
  {
    cat: 'Pronombres', q: 'I told ___ about the meeting. (them)',
    opts: ['they', 'them', 'their', 'theirs'], correct: 1, exp: 'Después de un verbo → objeto pronoun: them'
  },
  {
    cat: 'Pronombres', q: '"___ is my best friend." ¿Cuál es correcto?',
    opts: ['Her', 'Him', 'She', 'Them'], correct: 2, exp: 'Sujeto de la oración → subject pronoun: She'
  },
  {
    cat: 'Pronombres', q: 'Can you help ___? (me)',
    opts: ['I', 'my', 'me', 'mine'], correct: 2, exp: 'Después de un verbo → objeto pronoun: me'
  },
  // Artículos (extra)
  {
    cat: 'Artículos', q: 'He wants to be ___ engineer.',
    opts: ['a', 'an', 'the', '∅'], correct: 1, exp: '"Engineer" comienza con vocal /ɛ/ → AN'
  },
  {
    cat: 'Artículos', q: 'I play ___ piano every evening.',
    opts: ['a', 'an', 'the', '∅'], correct: 2, exp: 'Instrumentos musicales llevan THE: play the piano'
  },
  {
    cat: 'Artículos', q: '"___ dogs are good pets." (generalización)',
    opts: ['A', 'An', 'The', '∅'], correct: 3, exp: 'Plural general/abstracto → sin artículo (∅). Dogs are good pets.'
  },
  {
    cat: 'Artículos', q: 'She is ___ honest person.',
    opts: ['a', 'an', 'the', 'some'], correct: 1, exp: '"Honest" comienza con sonido vocal /ɒ/ → AN'
  },
  // Frecuencia (extra)
  {
    cat: 'Frecuencia', q: '"She ___ eats breakfast." ¿Dónde va el adverbio?',
    opts: ['always before eats', 'always after eats', 'at the end', 'before She'], correct: 0,
    exp: 'Con verbos normales, los adverbios van ANTES del verbo principal: She always eats.'
  },
  {
    cat: 'Frecuencia', q: '¿Qué porcentaje representa "sometimes"?',
    opts: ['100%', '90%', '50%', '0%'], correct: 2, exp: 'Sometimes = aproximadamente 50% de las veces.'
  },
  {
    cat: 'Frecuencia', q: '¿Qué significa "rarely"?',
    opts: ['nunca', 'a veces', 'casi nunca', 'siempre'], correct: 2, exp: 'Rarely = casi nunca, muy pocas veces (1-10%).'
  },
  {
    cat: 'Frecuencia', q: '"She ___ late." (never, con to be)',
    opts: ['is never', 'never is', 'is never being', 'be never'], correct: 0,
    exp: 'Con to be → sujeto + to be + adverbio: She is never late.'
  },
  {
    cat: 'Frecuencia', q: '"I ___ eat vegetables." (90% de frecuencia)',
    opts: ['always', 'usually', 'sometimes', 'never'], correct: 1, exp: 'Usually = 90% de frecuencia.'
  },
  {
    cat: 'Frecuencia', q: 'A: How often do you study?<br>B: I ___ study at night. (Siempre)',
    opts: ['always', 'usually', 'sometimes', 'never'], correct: 0,
    exp: 'Para responder a la pregunta "How often" (con qué frecuencia), usamos un adverbio como always (siempre).'
  },
  // WH-Questions (extra)
  {
    cat: 'WH-Questions', q: '"___ is your name?"',
    opts: ['Who', 'What', 'Where', 'When'], correct: 1, exp: 'What pregunta sobre cosas e información: What is your name?'
  },
  {
    cat: 'WH-Questions', q: '"___ does she live?" (lugar)',
    opts: ['What', 'Who', 'Where', 'Why'], correct: 2, exp: 'Where pregunta sobre lugar o ubicación.'
  },
  {
    cat: 'WH-Questions', q: '"___ did they go to the party?" (razón)',
    opts: ['When', 'Where', 'Why', 'Who'], correct: 2, exp: 'Why pregunta sobre razones o motivos.'
  },
  {
    cat: 'WH-Questions', q: '"___ called you last night?" (persona sujeto)',
    opts: ['What', 'Who', 'Where', 'How'], correct: 1,
    exp: 'Who pregunta sobre personas. Como es sujeto, NO necesita do/did: Who called you?'
  },
  // Present Continuous (extra)
  {
    cat: 'Present Continuous', q: '"She ___ English right now."',
    opts: ['study', 'studies', 'is studying', 'studied'], correct: 2,
    exp: 'Acción en progreso ahora → am/is/are + verb-ing'
  },
  {
    cat: 'Present Continuous', q: '"They ___ soccer at the moment."',
    opts: ['are play', 'are playing', 'is playing', 'play'], correct: 1,
    exp: 'They → are + verb-ing: They are playing.'
  },
  {
    cat: 'Present Continuous', q: '"___ you listening to me?"',
    opts: ['Do', 'Does', 'Are', 'Is'], correct: 2,
    exp: 'Pregunta en Present Continuous → Are/Is + sujeto + verb-ing?'
  },
  {
    cat: 'Present Continuous', q: '¿Cuál oración es CORRECTA?',
    opts: ['She is knowing the answer.', 'I am wanting coffee.', 'He is running fast.', 'They are understanding.'],
    correct: 2, exp: '"Run" es Action Verb → puede ir en -ing. Know, want y understand son stative.'
  },
  {
    cat: 'Present Continuous', q: '"I ___ work tomorrow." (plan futuro)',
    opts: ["am not working", "don't work", "am working", "working"], correct: 2,
    exp: 'Present Continuous expresa planes futuros confirmados: am working.'
  },
  // There is/are (extra)
  {
    cat: 'There is/are', q: '"___ any students in the class?"',
    opts: ['Is there', 'Are there', 'There is', 'There are'], correct: 1,
    exp: 'Students es plural → Are there any...?'
  },
  {
    cat: 'There is/are', q: '"There ___ a book on the table."',
    opts: ['are', 'is', 'were', 'am'], correct: 1, exp: 'Singular (a book) → There is'
  },
  {
    cat: 'There is/are', q: '"There ___ many problems with this plan."',
    opts: ['is', 'are', 'am', 'be'], correct: 1, exp: 'Many problems = plural → There are'
  },
  {
    cat: 'There is/are', q: '¿Qué artículo va con "There is" en singular afirmativo?',
    opts: ['some', 'any', 'a / an', 'the'], correct: 2, exp: 'There is + a/an + sustantivo singular: There is a cat.'
  },
  // Comparativos (extra)
  {
    cat: 'Comparativos', q: '"This book is ___ than that one." (interesting)',
    opts: ['more interesting', 'interestinger', 'most interesting', 'interestingest'], correct: 0,
    exp: '2+ sílabas → more + adj + than: more interesting than'
  },
  {
    cat: 'Comparativos', q: 'Comparativo de "bad":',
    opts: ['badder', 'more bad', 'worse', 'worst'], correct: 2, exp: 'Irregular: bad → worse'
  },
  {
    cat: 'Comparativos', q: '"My cat is ___ fast ___ your dog." (igualdad)',
    opts: ['more...than', 'as...as', 'so...that', 'too...to'], correct: 1,
    exp: 'Igualdad → as + adj + as: My cat is as fast as your dog.'
  },
  // Be Going To (extra)
  {
    cat: 'Be Going To', q: '"She ___ visit her family next week."',
    opts: ['is going to', 'are going to', 'am going to', 'going to'], correct: 0,
    exp: 'She → is going to + verb'
  },
  {
    cat: 'Be Going To', q: '"She ___ eat meat." (negativo)',
    opts: ["isn't going to", "aren't going to", "not going to", "don't going to"], correct: 0,
    exp: "She → isn't going to (negación)"
  },
  {
    cat: 'Be Going To', q: '"I can see dark clouds. It ___ rain." (predicción con evidencia)',
    opts: ['is going to', 'will probably', 'is going', 'goes to'], correct: 0,
    exp: 'Predicción con evidencia visible → be going to'
  },
  // Vocab (extra)
  {
    cat: 'Vocab', q: '¿Qué significa "Piece of cake"?',
    opts: ['Un pedazo de pastel', 'Muy fácil', 'Una sorpresa agradable', 'Trabajo en equipo'], correct: 1,
    exp: 'Idiom: Piece of cake = muy fácil, pan comido'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Break a leg"?',
    opts: ['Romper algo', 'Buena suerte', 'Salir corriendo', 'Trabajar duro'], correct: 1,
    exp: 'Idiom: Break a leg = ¡Buena suerte! (especialmente antes de actuar o presentar)'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Under the weather"?',
    opts: ['Al aire libre', 'Sentirse mal / enfermo', 'Bajo presión', 'Con mucho trabajo'], correct: 1,
    exp: 'Idiom: Under the weather = sentirse mal o enfermo'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Hang out"?',
    opts: ['Colgar ropa', 'Pasar el rato', 'Salir de viaje', 'Trabajar horas extra'], correct: 1,
    exp: 'Phrasal verb: Hang out = pasar el rato, juntarse con alguien'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Catch up"?',
    opts: ['Atrapar a alguien', 'Ponerse al día', 'Llegar tarde', 'Entender algo difícil'], correct: 1,
    exp: 'Phrasal verb: Catch up = ponerse al día con alguien o algo'
  },
  // ── INGLÉS TÉCNICO ──────────────────────────────────────────────────
  // False Friends
  {
    cat: 'False Friends', q: '¿Qué significa "actual" en inglés?',
    opts: ['Actual (igual al español)', 'Real / Verdadero', 'Reciente', 'Próximo'],
    correct: 1, exp: 'False Friend: "actual" EN = real/verdadero. En español lo usamos como "actual" (presente), pero en inglés eso se dice "current".'
  },
  {
    cat: 'False Friends', q: '¿Cuál es el significado correcto de "library" en inglés?',
    opts: ['Librería (tienda)', 'Biblioteca', 'Libreta', 'Laboratorio'],
    correct: 1, exp: 'Library = Biblioteca. Librería (tienda de libros) = Bookstore.'
  },
  {
    cat: 'False Friends', q: '¿Qué palabra inglesa es sinónimo de "éxito"?',
    opts: ['Exit', 'Exact', 'Success', 'Access'],
    correct: 2, exp: 'Exit = Salida. Éxito = Success. Son False Friends clásicos.'
  },
  {
    cat: 'False Friends', q: '"Large" en inglés significa:',
    opts: ['Largo', 'Grande', 'Amplio', 'Ancho'],
    correct: 1, exp: 'Large = Grande. Largo = Long. ¡No confundir!'
  },
  // Parts of Speech
  {
    cat: 'Parts of Speech', q: 'En "The old laptop crashed.", ¿qué función tiene "old"?',
    opts: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correct: 2, exp: '"Old" describe al sustantivo "laptop" → es un Adjective.'
  },
  {
    cat: 'Parts of Speech', q: '¿Cuál de estas palabras es un Adverb (adverbio)?',
    opts: ['quickly', 'server', 'broken', 'network'],
    correct: 0, exp: '"Quickly" modifica un verbo → The system runs quickly. Es un adverbio.'
  },
  {
    cat: 'Parts of Speech', q: 'En la frase "a high-speed network", ¿cuál es el núcleo de la Noun Phrase?',
    opts: ['high', 'speed', 'network', 'a'],
    correct: 2, exp: 'El núcleo de una Noun Phrase siempre es el sustantivo → "network".'
  },
  {
    cat: 'Parts of Speech', q: '¿Qué tipo de palabra es "between" en "between the client and server"?',
    opts: ['Noun', 'Verb', 'Adjective', 'Preposition'],
    correct: 3, exp: '"Between" indica relación de posición entre dos elementos → Preposition.'
  },
  // Phrasal Verbs IT
  {
    cat: 'Phrasal Verbs IT', q: '"Boot up" en un contexto de TI significa:',
    opts: ['Apagar el sistema', 'Encender/iniciar el sistema', 'Reiniciar la red', 'Cerrar sesión'],
    correct: 1, exp: 'Boot up = iniciar o encender un sistema. "Boot up the server before the migration."'
  },
  {
    cat: 'Phrasal Verbs IT', q: 'El opuesto de "log in" es:',
    opts: ['Log off / Log out', 'Log in again', 'Boot up', 'Shut in'],
    correct: 0, exp: 'Log in = iniciar sesión. Log off / Log out = cerrar sesión.'
  },
  {
    cat: 'Phrasal Verbs IT', q: '"We had to ___ the update after the bug was discovered."',
    opts: ['roll back', 'log in', 'boot up', 'hook up'],
    correct: 0, exp: 'Roll back = revertir a una versión anterior después de un error.'
  },
  // IT Definitions
  {
    cat: 'IT Vocab', q: '¿Qué mide la "latency" en una red?',
    opts: ['La velocidad máxima de descarga', 'El tiempo de demora en transmitir datos', 'La cantidad de usuarios conectados', 'El tamaño del archivo'],
    correct: 1, exp: 'Latency (latencia) = el tiempo que tarda un paquete de datos en llegar de un punto a otro.'
  },
  {
    cat: 'IT Vocab', q: '"Bandwidth" en español equivale a:',
    opts: ['Cortafuegos', 'Ancho de banda', 'Memoria RAM', 'Firmware'],
    correct: 1, exp: 'Bandwidth = Ancho de banda. Define la capacidad máxima de transferencia de datos.'
  },
  {
    cat: 'IT Vocab', q: '¿Qué significa "deploy" en el contexto de software?',
    opts: ['Eliminar una aplicación', 'Hacer una copia de seguridad', 'Desplegar/publicar una aplicación en producción', 'Encriptar datos'],
    correct: 2, exp: 'Deploy = desplegar. "We deploy to production every Friday" = publicamos los cambios cada viernes.'
  },
  {
    cat: 'IT Vocab', q: '"Firmware" es:',
    opts: ['Un tipo de malware', 'Software integrado permanentemente en hardware', 'Un sistema operativo móvil', 'Un tipo de red WiFi'],
    correct: 1, exp: 'Firmware = software de bajo nivel incrustado en el hardware (ej: BIOS de una PC, software de un router).'
  },
  // ── NUEVO: INGLÉS 1 (VERB TO BE, POSSESSIVES, COUNTABLES) ──
  {
    cat: 'Verb To Be', q: '"I ___ a software developer."',
    opts: ['is', 'are', 'am', 'be'],
    correct: 2, exp: 'Sujeto I → Verb to be: am'
  },
  {
    cat: 'Verb To Be', q: '"They ___ from Argentina. They are from Mexico."',
    opts: ['are', 'is', "aren't", "isn't"],
    correct: 2, exp: 'Negativo plural para They → aren\'t'
  },
  {
    cat: 'Posesivos', q: '"___ laptop is broken." (La laptop de él)',
    opts: ['He', 'Him', 'His', 'Her'],
    correct: 2, exp: 'Adjetivo posesivo para él → His. (His laptop)'
  },
  {
    cat: 'Posesivos', q: '"This book isn\'t mine. Is it ___?"',
    opts: ['your', 'you', 'yours', 'our'],
    correct: 2, exp: 'Pronombre posesivo sin sustantivo después → yours. (¿Es tuyo?)'
  },
  {
    cat: 'Contables/Incont.', q: '"___ time do we have left?"',
    opts: ['How many', 'How much', 'Any', 'Many'],
    correct: 1, exp: 'El tiempo es incontable en inglés → How much'
  },
  {
    cat: 'Contables/Incont.', q: '"I don\'t have ___ questions."',
    opts: ['some', 'any', 'much', 'a'],
    correct: 1, exp: 'En oraciones negativas e interrogativas plurales se usa "any".'
  },
  // ── NUEVO: PREFIJOS Y SUFIJOS ──
  {
    cat: 'Afijos', q: 'Si agregas el prefijo "un-" a "install" (uninstall), ¿qué significa?',
    opts: ['Instalar otra vez', 'Desinstalar / lo opuesto', 'Instalación', 'El que instala'],
    correct: 1, exp: 'El prefijo un- (igual que dis-) indica la acción opuesta o negación.'
  },
  {
    cat: 'Afijos', q: '¿Qué sufijo usarías para convertir el verbo "connect" en un sustantivo?',
    opts: ['-able', '-ive', '-ly', '-tion'],
    correct: 3, exp: 'El sufijo -tion crea sustantivos de acción (connection).'
  },
  {
    cat: 'Afijos', q: '"Automatically" y "securely" son palabras que indican la manera en que se hace algo. Son:',
    opts: ['Sustantivos', 'Adjetivos', 'Adverbios', 'Verbos'],
    correct: 2, exp: 'El sufijo -ly generalmente crea Adverbios (equivalente a "-mente" en español).'
  },
  {
    cat: 'Afijos', q: 'El sufijo "-er" en "developer" o "server" indica:',
    opts: ['El resultado de una acción', 'La persona o cosa que hace la acción', 'El opuesto de la acción', 'Una acción repetida'],
    correct: 1, exp: 'El sufijo -er / -or significa "el que hace" algo. Develop (desarrollar) -> Developer (desarrollador).'
  },
  // ── NUEVO: PLURALES, NOUN PHRASES, CONNECTORS ──
  {
    cat: 'Plurales', q: '¿Cuál es el plural de "city"?',
    opts: ['citys', 'cities', 'cityes', 'citeis'],
    correct: 1, exp: 'Consonante + y → y cambia por ies: cities.'
  },
  {
    cat: 'Plurales', q: '¿Cuál es el plural irregular de "man"?',
    opts: ['mans', 'men', 'mens', 'manies'],
    correct: 1, exp: 'Irregular: man → men.'
  },
  {
    cat: 'Plurales', q: '¿Cuál es el plural de "watch"?',
    opts: ['watchs', 'watches', 'watchies', 'watch'],
    correct: 1, exp: 'Sustantivos que terminan en -ch agregan -es: watches.'
  },
  {
    cat: 'Noun Phrases', q: 'En la frase "A high-speed wireless network router", ¿cuál es el Head Noun (sustantivo principal)?',
    opts: ['high-speed', 'wireless', 'network', 'router'],
    correct: 3, exp: 'El núcleo (Head Noun) siempre va al final en inglés. Todo lo anterior funciona como un modificador ("empaque").'
  },
  {
    cat: 'Noun Phrases', q: 'Traduce "Database management system" usando la regla técnica:',
    opts: ['Base de datos para el sistema de gestión', 'Sistema de gestión de base de datos', 'Gestión de sistema de base de datos', 'Sistema de base de datos de gestión'],
    correct: 1, exp: 'Se lee de atrás hacia adelante: System (Sistema) de management (gestión) de database (base de datos).'
  },
  {
    cat: 'Connectors', q: '"The system crashed. ___, data was lost." ¿Qué conector de EFECTO encaja mejor?',
    opts: ['However', 'Because', 'Therefore', 'First'],
    correct: 2, exp: '"Therefore" (por lo tanto) indica el resultado lógico/efecto directo del fallo.'
  },
  {
    cat: 'Connectors', q: '"It is secure; ___, it is slow." ¿Qué conector de CONTRASTE encaja mejor?',
    opts: ['Therefore', 'Due to', 'However', 'Then'],
    correct: 2, exp: '"However" (sin embargo) indica un contraste o cambio de idea. (Es seguro, pero es lento).'
  },
  {
    cat: 'Connectors', q: '"___, reboot the PC. Then, check the IP." ¿Qué conector de SECUENCIA encaja mejor?',
    opts: ['However', 'First', 'Because', 'Therefore'],
    correct: 1, exp: '"First" (primero) marca el inicio de una secuencia de pasos.'
  },
  // ── NUEVO: READING STRATEGIES ──
  {
    cat: 'Reading', q: '¿Qué es una "Topic Sentence" en un párrafo técnico?',
    opts: ['La última oración', 'La oración principal que define de qué trata el párrafo', 'Una oración de ejemplo', 'Un conector lógico'],
    correct: 1, exp: 'La Topic Sentence (usualmente la primera oración) indica la idea principal. Todo lo que sigue son detalles de soporte.'
  },
  {
    cat: 'Reading', q: 'En preguntas de True/False, ¿qué indican palabras absolutas como "always", "never" o "only"?',
    opts: ['Que es un conector', 'Que la oración suele ser flexible', 'Una restricción absoluta (útil para detectar si es False si el texto decía "sometimes")', 'Que es la Topic Sentence'],
    correct: 2, exp: 'Los modificadores absolutos (all, every, never, none) suelen hacer que una afirmación sea Falsa si el texto original era más flexible.'
  }
];