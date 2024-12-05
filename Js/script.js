const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const suggestionsBox = document.getElementById("suggestions");

const responses = {
  // Derechos Humanos
  "¿QUÉ SON LOS DERECHOS HUMANOS?": "Son derechos inalienables que todo ser humano posee, diseñados para proteger la dignidad humana, garantizar la igualdad y la libertad para todos.",
  "¿CUÁLES SON LOS DERECHOS HUMANOS FUNDAMENTALES?": "Incluyen el derecho a la vida, a la libertad, a la igualdad ante la ley, a la educación, a la salud, al trabajo digno, y al respeto de la dignidad humana.",
  "¿POR QUÉ SON IMPORTANTES LOS DERECHOS HUMANOS?": "Son fundamentales porque garantizan la dignidad, la libertad y la igualdad de todas las personas, y son esenciales para construir una sociedad justa y democrática.",
  "¿CUÁL ES EL PROPÓSITO DE LOS DERECHOS HUMANOS?": "Asegurar la protección de la dignidad humana, garantizar la igualdad de oportunidades y eliminar cualquier forma de discriminación.",
  "¿QUIÉN PROTEGE LOS DERECHOS HUMANOS?": "Los derechos humanos son protegidos por organismos internacionales como la ONU, a través de la Declaración Universal de los Derechos Humanos, y por instituciones locales como comisiones de derechos humanos en cada país.",
  "¿QUÉ SON LOS DERECHOS ECONÓMICOS, SOCIALES Y CULTURALES?": "Son derechos que garantizan acceso a la educación, la salud, la vivienda, el empleo y la cultura, asegurando una vida digna para todos.",
  "¿CÓMO SE DENUNCIAN LAS VIOLACIONES A LOS DERECHOS HUMANOS?": "Puedes denunciarlas a las comisiones de derechos humanos locales o internacionales. También hay organizaciones no gubernamentales como Amnistía Internacional que brindan apoyo.",
  "¿CUÁLES SON LAS CARACTERÍSTICAS DE LOS DERECHOS HUMANOS?": "Los derechos humanos son universales (aplican a todas las personas sin distinción), inalienables (no se pueden renunciar ni transferir), interdependientes (se complementan entre sí) e indivisibles (todos son igual de importantes).",
  "¿CUÁLES SON LAS CLASIFICACIONES SEGÚN LA DECLARACIÓN UNIVERSAL DE LOS DERECHOS HUMANOS?": "Se dividen en derechos civiles y políticos (como la libertad de expresión y el derecho al voto), y derechos económicos, sociales y culturales (como el acceso a la educación y la seguridad social).",
  "¿CUÁLES SON LAS PRINCIPALES CARACTERÍSTICAS DE LOS DERECHOS HUMANOS?": "Universalidad e inalienabilidad, Indivisibilidad, Interdependencia e interrelación, Igualdad y no discriminación, Participación e inclusión, Rendición de cuentas y Estado de Derecho.",
  "CLASIFICACIÓN CONFORME A LA DECLARACIÓN UNIVERSAL DE LOS DERECHOS HUMANOS": "Primera generación: Derechos civiles y políticos. Segunda generación: Derechos económicos, sociales y culturales. Tercera generación: Derechos relacionados con el progreso social y el respeto entre naciones.",
  "EJEMPLOS DE PROPÓSITOS DE LOS DERECHOS HUMANOS": "Protección de la dignidad humana, Promoción de la igualdad, Garantía de libertades fundamentales, Protección frente al abuso de poder, Promoción de la justicia y el Estado de derecho, Fomento del desarrollo humano integral y Respeto a la diversidad y la pluralidad.",
  "EJEMPLOS DE VULNERACIÓN DE DERECHOS HUMANOS": "Violencia de género, Tráfico de personas, Represión política, Discriminación racial y Restricciones a la libertad de expresión.",

  // Inclusión
  "¿QUÉ ES LA INCLUSIÓN?": "Es el principio y la práctica de garantizar que todas las personas, sin importar sus diferencias, tengan las mismas oportunidades de participación y valoración en la sociedad.",
  "¿POR QUÉ ES IMPORTANTE LA INCLUSIÓN SOCIAL?": "Promueve la equidad, la diversidad y la participación activa de todas las personas en la sociedad, fomentando una convivencia enriquecedora.",
  "¿CÓMO SE PUEDE PROMOVER LA INCLUSIÓN?": "A través de políticas inclusivas, eliminación de barreras físicas y sociales, educación en valores, y campañas de sensibilización.",
  "¿QUÉ ES LA INCLUSIÓN EN EL TRABAJO?": "Significa garantizar que todas las personas, independientemente de su género, raza, orientación sexual o discapacidad, tengan las mismas oportunidades laborales.",
  "¿QUÉ BARRERAS DIFICULTAN LA INCLUSIÓN?": "Las principales barreras incluyen los prejuicios, la falta de accesibilidad física y digital, la carencia de políticas inclusivas y la falta de sensibilización en la sociedad.",
  "¿QUÉ EJEMPLOS DE INCLUSIÓN EXISTEN EN LA EDUCACIÓN?": "Incluyen adaptar materiales educativos para personas con discapacidad, ofrecer becas para grupos desfavorecidos y promover un ambiente escolar libre de discriminación.",
  "¿CÓMO INFLUYE LA INCLUSIÓN EN EL DESARROLLO SOCIAL?": "Fortalece el tejido social al garantizar que todas las personas participen activamente en la sociedad, reduciendo desigualdades y promoviendo la cohesión.",
  "¿QUÉ TIPOS DE INCLUSIÓN EXISTEN?": "Incluyen la inclusión social, educativa, laboral, digital y cultural. Cada una busca integrar plenamente a personas en sus respectivos contextos, eliminando barreras y discriminación.",
  "¿CUÁLES SON LOS PROPÓSITOS DE LA INCLUSIÓN?": "Garantizar la igualdad de oportunidades, promover la participación activa de todos en la sociedad, y eliminar la exclusión basada en género, discapacidad, origen étnico, religión, entre otros.",
  "¿QUÉ ESTRATEGIAS DE INCLUSIÓN SE PUEDEN APLICAR?": "Algunas estrategias de inclusión incluyen: 1) Promover en el aula de clases el trabajo en grupos diversificados, 2) Gestionar facilidades de acceso para personas con limitaciones físicas en un edificio, 3) Respetar las creencias de los demás, 4) Tener cuartos de baños para las personas de cualquier identidad sexual, y 5) Enseñar en las escuelas lengua de señas.",
  "¿QUÉ ES EL RESPETO EN LA INCLUSIÓN?": "Es el reconocimiento y valoración de los derechos, cualidades y opiniones de los demás, promoviendo la convivencia armoniosa y evitando el conflicto.",
  "¿CUÁLES SON LOS ELEMENTOS DE LA CULTURA EN LA INCLUSIÓN?": "Incluyen la lengua, tradiciones, costumbres, valores, arte, religión y normas sociales que identifican a una comunidad o sociedad.",
  "¿CUÁL ES LA IMPORTANCIA DEL RESPETO?": "El respeto es fundamental para mantener relaciones armoniosas, fomentar la tolerancia y prevenir conflictos. Es un valor clave para la convivencia en la diversidad.",
  "¿QUÉ ES LA CULTURA?": "Es el conjunto de valores, creencias, prácticas, tradiciones, conocimientos y símbolos compartidos por una sociedad, que la distinguen y le dan identidad.",
  "¿QUÉ ES UN PREJUICIO?": "Es una idea u opinión preconcebida y generalmente negativa respecto de algo o alguien; es decir, un juicio formado antes de tener la oportunidad de experimentar la realidad directamente.",
  "¿QUÉ ES UN ESTIGMA?": "Es el conjunto de las actitudes y creencias desfavorables que 'desacreditan o rechazan' a una persona o un grupo por considerarlos diferentes.",
  "LEY EN MÉXICO QUE FOMENTAN LA INCLUSIÓN": "La Ley General para la Inclusión de las Personas con Discapacidad, La Ley para la Protección de los Derechos de Niñas, Niños y Adolescentes, La Ley Federal del Trabajo y la Ley Federal de Telecomunicaciones y Radiodifusión.",


 // Equidad de Género
  "¿QUÉ ES LA EQUIDAD DE GÉNERO?": "Es el principio de justicia social que asegura que todas las personas, sin importar su género, tengan acceso a los mismos derechos, oportunidades y recursos.",
  "¿CUÁL ES LA DIFERENCIA ENTRE IGUALDAD Y EQUIDAD DE GÉNERO?": "La igualdad de género implica dar las mismas oportunidades a todas las personas, mientras que la equidad se centra en proporcionar los medios necesarios para que todos puedan alcanzar esas oportunidades de manera justa.",
  "¿POR QUÉ ES IMPORTANTE LA EQUIDAD DE GÉNERO?": "Es esencial para eliminar las desigualdades y construir una sociedad justa, promoviendo el bienestar de todas las personas.",
  "¿CÓMO SE PROMUEVE LA EQUIDAD DE GÉNERO EN LA EDUCACIÓN?": "A través de la eliminación de estereotipos, promoción de roles equitativos, y asegurando que niños y niñas tengan las mismas oportunidades de aprendizaje.",
  "¿QUÉ OBSTÁCULOS ENFRENTA LA EQUIDAD DE GÉNERO?": "Incluyen la brecha salarial, la violencia de género, los estereotipos culturales y la falta de representación en posiciones de liderazgo.",
  "¿QUÉ ES EL TECHO DE CRISTAL?": "Es una barrera invisible que impide a las mujeres acceder a posiciones de liderazgo a pesar de tener las capacidades necesarias.",
  "¿CÓMO PROMOVER LA EQUIDAD DE GÉNERO EN EL HOGAR?": "Repartiendo equitativamente las responsabilidades del hogar, fomentando la corresponsabilidad y educando en igualdad desde la infancia.",
  "¿QUÉ ES EL GÉNERO?": "Suma de valores, actitudes, funciones, roles, prácticas o características culturales basadas en el sexo. Es la construcción social de la diferencia sexual.",
  "¿QUÉ ES EL SEXO?": "Se refiere a las características biológicas, anatómicas, fisiológicas y cromosómicas de la especie humana, sobre todo relacionadas a funciones de la procreación, que hacen los cuerpos de mujeres y hombres diferentes.",
  "¿QUÉ ES LA PERSPECTIVA DE GÉNERO?": "Categoría de análisis para identificar las diferencias entre hombres y mujeres en el uso y distribución del poder y los recursos.",
  "¿QUÉ SON LOS ROLES DE GÉNERO?": "Son el conjunto de conductas y expectativas que rigen la forma de ser, sentir y actuar de las mujeres y los hombres.",
  "¿QUÉ SON LOS ESTEREOTIPOS?": "Son ideas, cualidades y expectativas que la sociedad atribuye a mujeres y hombres; son representaciones simbólicas de lo que mujeres y hombres deberían ser y sentir.",

// Diversidad e Interculturalidad
  "¿CUÁLES SON LAS CARACTERÍSTICAS DE LA CULTURA?": "Se vale de la creación y producción humana. Es generada y compartida por un grupo de la sociedad, de acuerdo a aspectos geográficos, sociales o económicos. Es dinámica, por lo que va cambiando y mutando de acuerdo a las necesidades del grupo. Es diversa, no existe una única cultura universal, sino que existen muchos tipos de culturas de acuerdo a diferentes criterios. Es aprendida por los miembros de un grupo. Se vale tanto de elementos materiales como inmateriales. Se transmite de generación en generación.",
  "¿CUÁL ES LA IMPORTANCIA DEL RESPETO EN LA DIVERSIDAD E INTERCULTURALIDAD?": "Produce vínculos positivos, Previene el maltrato y la agresividad, Garantiza derechos básicos, Mejora la autoestima,  Mejora el funcionamiento de grupos.",
  "¿QUÉ SIGNIFICA EL RESPETO A LA DIVERSIDAD?": "Es reconocer, valorar y aceptar las diferencias culturales, sociales, de género y de orientación, promoviendo un entorno de convivencia armoniosa.",
  "¿QUÉ ES LA INTERCULTURALIDAD?": "Es el intercambio abierto y respetuoso de puntos de vista entre individuos y grupos de diferentes orígenes étnicos, religiosos, lingüísticos y nacionales, sobre la base del entendimiento mutuo y el respeto.",
  "¿POR QUÉ ES IMPORTANTE LA INTERCULTURALIDAD?": "Fomenta el entendimiento, el respeto mutuo y la convivencia pacífica en una sociedad globalizada.",
  "¿CÓMO SE PUEDE FOMENTAR EL RESPETO A LA DIVERSIDAD?": "A través de la educación en valores, promoción de la tolerancia, y creando espacios de diálogo intercultural.",
  "¿QUÉ ES LA DIVERSIDAD CULTURAL?": "Es la coexistencia de diferentes culturas en un mismo entorno, valorando sus tradiciones, idiomas y expresiones artísticas.",
  "¿CÓMO AFECTA LA GLOBALIZACIÓN A LA DIVERSIDAD CULTURAL?": "Por un lado, facilita el intercambio cultural, pero también puede homogeneizar culturas locales debido a la influencia de culturas dominantes.",
  "¿QUÉ BENEFICIOS TRAE LA INTERCULTURALIDAD?": "Fomenta la innovación, la resolución creativa de problemas y la convivencia pacífica en sociedades multiculturales.",
  "¿CUÁLES SON LOS TIPOS DE DIVERSIDAD?": "Según factores intrínsecos: Raza, Género, Orientación sexual, Diversidad funcional. Según factores extrínsecos: Cultura, Religión, Nacionalidad, Lingüística",
  "¿QUÉ CONCEPTOS ESTÁN RELACIONADOS CON LA INCLUSIÓN?": "Conceptos como equidad, accesibilidad, igualdad de oportunidades, respeto a la diversidad y no discriminación están estrechamente vinculados con la inclusión.",
  "¿QUÉ ES EL RESPETO?": "El respeto es un valor que permite al ser humano reconocer, aceptar, apreciar y valorar las cualidades del prójimo y sus derechos. Es decir, el respeto es el reconocimiento del valor propio y de los derechos del individuo y de la sociedad.",
  "¿QUÉ ES LA DIVERSIDAD?": "La diversidad es la cualidad de poseer variedad y generalmente es un término que se usa para referirse a la diversidad humana dentro de una organización, comunidad o sociedad.",
  "¿QUÉ ES LA CULTURA?": "La cultura es el conjunto de elementos y características propias de una determinada comunidad humana. Incluye aspectos como las costumbres, las tradiciones, las normas y el modo de un grupo de pensarse a sí mismo, de comunicarse y de construir una sociedad.",
  "¿QUÉ ES LA TOLERANCIA?": "La tolerancia consiste en ser paciente, comprender y aceptar cualquier cosa diferente.",
  "ELEMENTOS DE LA CULTURA": "Valores, Normas y sanciones, Creencias, Símbolos, Lenguaje y Tecnología.",


 // Responsabilidad Social
  "¿QUÉ ES LA RESPONSABILIDAD SOCIAL?": "Es el compromiso de individuos y organizaciones de actuar éticamente para contribuir al bienestar social y ambiental.",
  "¿CUÁLES SON LOS PILARES DE LA RESPONSABILIDAD SOCIAL?": "Incluyen el respeto por los derechos humanos, la sostenibilidad ambiental, el desarrollo comunitario y la ética empresarial.",
  "¿CÓMO SE FOMENTA LA RESPONSABILIDAD SOCIAL EN LAS EMPRESAS?": "Mediante prácticas éticas, apoyo a causas sociales, respeto al medio ambiente y promoción de la igualdad de derechos.",
  "¿CUÁL ES LA IMPORTANCIA DE LA RESPONSABILIDAD SOCIAL?": "Contribuye al bienestar colectivo, fortalece el tejido social y mejora la calidad de vida de las personas y comunidades.",
  "¿CÓMO SE MIDE LA RESPONSABILIDAD SOCIAL?": "A través de indicadores como la sostenibilidad ambiental, el impacto social positivo y la transparencia en las prácticas empresariales.",
  "¿QUÉ ES LA TRIPLE CUENTA DE RESULTADOS?": "Es un modelo que mide el éxito de una organización en términos económicos, sociales y ambientales.",
  "¿QUÉ EJEMPLOS DE RESPONSABILIDAD SOCIAL INDIVIDUAL EXISTEN?": "Incluyen el voluntariado, el consumo responsable y el uso eficiente de los recursos naturales.",
  "¿QUÉ ES LA ÉTICA?": "La ética, también conocida como filosofía moral, es una rama de la filosofía que implica sistematizar, defender y recomendar conceptos de conducta correcta en todos los ámbitos de la vida humana.",
  "¿QUÉ ES LA SUSTENTABILIDAD?": "Es un proceso que tiene el objetivo de encontrar el equilibrio entre el medio ambiente y el uso de los recursos naturales.",
  "¿QUÉ ES LA SOSTENIBILIDAD?": "Es gestionar los recursos para satisfacer las necesidades actuales, sin poner en riesgo las necesidades del futuro.",
  "¿QUÉ ES LA ECONOMÍA CIRCULAR?": "Es un sistema de aprovechamiento máximo de recursos donde predomina la reducción, la reutilización y el reciclaje de los elementos.",
  "¿QUÉ ES EL VALOR COMPARTIDO?": "Es una nueva filosofía empresarial que trasciende a la responsabilidad social y plantea la necesidad de que las organizaciones piensen el desarrollo de su negocio siendo consecuentes con la sostenibilidad social y ambiental.",
  "¿QUÉ ES EL MEDIO AMBIENTE?": "Es el espacio en el que se desarrolla la vida de los seres vivos y que permite la interacción de los mismos.",

// Sostenibilidad
  "¿QUÉ ES LA SOSTENIBILIDAD?": "Es el enfoque de satisfacer las necesidades actuales sin comprometer los recursos y el bienestar de las generaciones futuras.",
  "¿CUÁLES SON LAS DIMENSIONES DE LA SOSTENIBILIDAD?": "Incluyen la sostenibilidad social, económica y ambiental, trabajando juntas para un desarrollo equilibrado.",
  "¿QUÉ ES LA SOSTENIBILIDAD SOCIAL?": "Es el proceso de garantizar que el desarrollo económico y el bienestar de las personas se logren de manera justa y equitativa a lo largo del tiempo.",
  "¿CÓMO SE RELACIONA LA SOSTENIBILIDAD AMBIENTAL CON LOS DERECHOS HUMANOS?": "La sostenibilidad ambiental garantiza que los recursos naturales sean utilizados de manera responsable para proteger el derecho de las futuras generaciones a un medio ambiente saludable.",
  "¿QUÉ ES LA SOSTENIBILIDAD ECONÓMICA?": "Es el uso eficiente de recursos financieros y materiales para satisfacer las necesidades actuales sin comprometer las de las futuras generaciones.",
  "¿CÓMO PUEDEN LAS EMPRESAS SER SOSTENIBLES?": "Adoptando prácticas como el reciclaje, el uso de energías renovables, y la reducción de emisiones de carbono en sus procesos.",
  "¿CUÁLES SON LOS OBJETIVOS DE DESARROLLO SOSTENIBLE (ODS)?": "Son 17 metas globales establecidas por la ONU para erradicar la pobreza, proteger el planeta y asegurar la prosperidad para todos hacia 2030.",
  "¿CUÁLES SON LAS CARACTERÍSTICAS DE LA SOSTENIBILIDAD SOCIAL?": "Justicia social, Inclusión, Participación ciudadana, Responsabilidad corporativa y Desarrollo sostenible.",

  // Discriminación
  "¿QUÉ ES LA DISCRIMINACIÓN?": "Es el trato desigual o injusto hacia una persona o grupo, basado en características como género, raza, religión, orientación sexual o discapacidad.",
  "¿CÓMO SE PUEDE COMBATIR LA DISCRIMINACIÓN?": "A través de leyes inclusivas, educación en igualdad de derechos, y campañas de sensibilización para promover el respeto y la tolerancia.",
  "¿QUÉ TIPOS DE DISCRIMINACIÓN EXISTEN?": "Incluyen discriminación por género, raza, religión, orientación sexual, discapacidad, edad, entre otros.",
  "¿CÓMO AFECTA LA DISCRIMINACIÓN A LA SOCIEDAD?": "Genera desigualdad, exclusión social y conflictos, limitando el desarrollo pleno de individuos y comunidades.",

// Valores Universales
  "¿QUÉ SON LOS VALORES UNIVERSALES?": "Son principios éticos y morales que trascienden culturas y épocas, como la justicia, la paz, la libertad, el respeto y la solidaridad.",
  "¿CUÁL ES LA IMPORTANCIA DE LOS VALORES UNIVERSALES?": "Unifican a la humanidad bajo principios comunes, promoviendo la convivencia pacífica y el desarrollo social.",
  "¿CUÁLES SON EJEMPLOS DE VALORES UNIVERSALES?": "Incluyen la justicia, la equidad, la libertad, el respeto, la responsabilidad, la honestidad y la tolerancia.",
  "¿CÓMO SE PUEDEN ENSEÑAR LOS VALORES UNIVERSALES?": "A través de la educación formal, actividades culturales y ejemplos prácticos en la vida cotidiana.",

  // Por defecto
  "default": "Lo siento, no tengo información sobre eso. Por favor, intenta preguntar algo más relacionado con derechos humanos, inclusión, equidad o sostenibilidad."
};
const suggestions = Object.keys(responses);

// Agregar un mensaje al chat
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  const textElement = document.createElement("div");
  textElement.classList.add("text");
  textElement.textContent = message;
  messageElement.appendChild(textElement);
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Desplaza el chat hacia abajo
}

// Manejar el envío del mensaje
function handleSend() {
  const userMessage = userInput.value.trim();
  if (userMessage === "") return;

  addMessage(userMessage, "user");
  const botResponse = responses[userMessage.toUpperCase()] || responses["default"];
  addMessage(botResponse, "bot");

  userInput.value = ""; // Limpia el input
  suggestionsBox.style.display = "none"; // Ocultar sugerencias
}

// Mostrar sugerencias relacionadas
function showSuggestions(input) {
  const query = input.toUpperCase();
  const filteredSuggestions = suggestions.filter((s) =>
    s.toUpperCase().includes(query) && query !== ""
  );

  if (filteredSuggestions.length > 0) {
    suggestionsBox.innerHTML = filteredSuggestions
      .map((s) => {
        const highlighted = s.replace(
          new RegExp(query, "gi"),
          (match) => `<strong>${match}</strong>`
        );
        return `<p>${highlighted}</p>`;
      })
      .join("");
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
}

// Agregar sugerencia al campo de entrada y responder automáticamente
suggestionsBox.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    const selectedSuggestion = e.target.textContent.replace(/<[^>]+>/g, ""); // Elimina etiquetas HTML
    userInput.value = ""; // Limpia el campo de entrada
    addMessage(selectedSuggestion, "user");
    const botResponse = responses[selectedSuggestion.toUpperCase()] || responses["default"];
    addMessage(botResponse, "bot");
    suggestionsBox.style.display = "none";
  }
});

// Debounce para el evento de entrada
let debounceTimeout;
userInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    showSuggestions(userInput.value);
  }, 700); // Espera 300ms antes de ejecutar la búsqueda
});


// Eventos
sendButton.addEventListener("click", handleSend);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSend();
});
userInput.addEventListener("input", () => showSuggestions(userInput.value));


