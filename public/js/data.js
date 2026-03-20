
/**
 * data.js — Clinical scales definitions
 * Structure per scale:
 *   questions[i].text   : { es, en, de, it }
 *   questions[i].help   : { es, en, de, it }
 *   questions[i].options: [{ label: {es,en,de,it}, value: number }]
 */
const SCALES = {

  // ── MRC ──────────────────────────────────────────────────────────────
  MRC: {
    questions: [
      {
        text: {
          es: '¿Puede el paciente bañarse o ducharse de forma independiente?',
          en: 'Can the patient bathe or shower independently?',
          de: 'Kann der Patient selbstständig duschen oder baden?',
          it: 'Il paziente può fare il bagno o la doccia in modo indipendente?',
        },
        help: {
          es: 'Considere la capacidad de entrar/salir de la bañera y lavarse sin ayuda.',
          en: 'Consider ability to get in/out of the tub and wash without help.',
          de: 'Berücksichtigen Sie das Ein-/Aussteigen aus der Badewanne ohne Hilfe.',
          it: 'Considerare la capacità di entrare/uscire dalla vasca senza aiuto.',
        },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita supervisión', en: 'Needs supervision', de: 'Benötigt Aufsicht', it: 'Necessita supervisione' }, value: 1 },
          { label: { es: 'Necesita ayuda parcial', en: 'Needs partial help', de: 'Benötigt teilweise Hilfe', it: 'Necessita aiuto parziale' }, value: 2 },
          { label: { es: 'Dependiente', en: 'Dependent', de: 'Abhängig', it: 'Dipendente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente vestirse y desvestirse solo?',
          en: 'Can the patient dress and undress alone?',
          de: 'Kann der Patient sich alleine an- und ausziehen?',
          it: 'Il paziente può vestirsi e svestirsi da solo?',
        },
        help: {
          es: 'Incluye ponerse y quitarse ropa, abrocharse botones, zapatos.',
          en: 'Includes putting on and removing clothing, fastening buttons, shoes.',
          de: 'Beinhaltet An- und Ausziehen, Knöpfe schließen, Schuhe.',
          it: 'Include indossare e togliere vestiti, abbottonare, scarpe.',
        },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita supervisión', en: 'Needs supervision', de: 'Benötigt Aufsicht', it: 'Necessita supervisione' }, value: 1 },
          { label: { es: 'Necesita ayuda parcial', en: 'Needs partial help', de: 'Benötigt teilweise Hilfe', it: 'Necessita aiuto parziale' }, value: 2 },
          { label: { es: 'Dependiente', en: 'Dependent', de: 'Abhängig', it: 'Dipendente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente alimentarse por sí mismo?',
          en: 'Can the patient feed themselves?',
          de: 'Kann der Patient selbst essen?',
          it: 'Il paziente riesce ad alimentarsi da solo?',
        },
        help: {
          es: 'Considere si puede cortar la comida, usar cubiertos y llevar la comida a la boca.',
          en: 'Consider whether they can cut food, use utensils and bring food to mouth.',
          de: 'Berücksichtigen Sie Schneiden, Besteck benutzen, Essen zum Mund führen.',
          it: 'Considerare se riesce a tagliare, usare le posate e portare il cibo alla bocca.',
        },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita supervisión', en: 'Needs supervision', de: 'Benötigt Aufsicht', it: 'Necessita supervisione' }, value: 1 },
          { label: { es: 'Necesita ayuda parcial', en: 'Needs partial help', de: 'Benötigt teilweise Hilfe', it: 'Necessita aiuto parziale' }, value: 2 },
          { label: { es: 'Dependiente', en: 'Dependent', de: 'Abhängig', it: 'Dipendente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente trasladarse de la cama al sillón?',
          en: 'Can the patient transfer from bed to chair?',
          de: 'Kann der Patient vom Bett zum Stuhl wechseln?',
          it: 'Il paziente riesce a trasferirsi dal letto alla sedia?',
        },
        help: { es: 'Transferencia cama-sillón sin ayuda física de otra persona.', en: 'Bed-chair transfer without physical help from another person.', de: 'Bett-Stuhl-Transfer ohne körperliche Hilfe einer anderen Person.', it: 'Trasferimento letto-sedia senza aiuto fisico.' },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita supervisión', en: 'Needs supervision', de: 'Benötigt Aufsicht', it: 'Necessita supervisione' }, value: 1 },
          { label: { es: 'Necesita ayuda parcial', en: 'Needs partial help', de: 'Benötigt teilweise Hilfe', it: 'Necessita aiuto parziale' }, value: 2 },
          { label: { es: 'Dependiente', en: 'Dependent', de: 'Abhängig', it: 'Dipendente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente controlar el intestino?',
          en: 'Can the patient control their bowels?',
          de: 'Kann der Patient den Darm kontrollieren?',
          it: 'Il paziente riesce a controllare l\'intestino?',
        },
        help: { es: 'Sin episodios de incontinencia fecal en la última semana.', en: 'No fecal incontinence episodes in the last week.', de: 'Keine Stuhlinkontinenz in der letzten Woche.', it: 'Nessun episodio di incontinenza fecale nell\'ultima settimana.' },
        options: [
          { label: { es: 'Continente', en: 'Continent', de: 'Kontinent', it: 'Continente' }, value: 0 },
          { label: { es: 'Accidente ocasional', en: 'Occasional accident', de: 'Gelegentlicher Unfall', it: 'Incidente occasionale' }, value: 1 },
          { label: { es: 'Incontinente', en: 'Incontinent', de: 'Inkontinent', it: 'Incontinente' }, value: 2 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente controlar la vejiga?',
          en: 'Can the patient control their bladder?',
          de: 'Kann der Patient die Blase kontrollieren?',
          it: 'Il paziente riesce a controllare la vescica?',
        },
        help: { es: 'Sin episodios de incontinencia urinaria en la última semana.', en: 'No urinary incontinence episodes in the last week.', de: 'Keine Harninkontinenz in der letzten Woche.', it: 'Nessun episodio di incontinenza urinaria nell\'ultima settimana.' },
        options: [
          { label: { es: 'Continente', en: 'Continent', de: 'Kontinent', it: 'Continente' }, value: 0 },
          { label: { es: 'Accidente ocasional', en: 'Occasional accident', de: 'Gelegentlicher Unfall', it: 'Incidente occasionale' }, value: 1 },
          { label: { es: 'Incontinente', en: 'Incontinent', de: 'Inkontinent', it: 'Incontinente' }, value: 2 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente ir al aseo de forma independiente?',
          en: 'Can the patient use the toilet independently?',
          de: 'Kann der Patient selbstständig die Toilette benutzen?',
          it: 'Il paziente riesce ad usare il bagno in modo indipendente?',
        },
        help: { es: 'Incluye trasladarse al baño, sentarse, limpiarse y vestirse.', en: 'Includes getting to bathroom, sitting, cleaning and dressing.', de: 'Beinhaltet Toilettengang, Setzen, Säubern und Ankleiden.', it: 'Include raggiungere il bagno, sedersi, pulirsi e rivestirsi.' },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita ayuda', en: 'Needs help', de: 'Benötigt Hilfe', it: 'Necessita aiuto' }, value: 1 },
          { label: { es: 'Dependiente', en: 'Dependent', de: 'Abhängig', it: 'Dipendente' }, value: 2 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente desplazarse por la casa o la calle?',
          en: 'Can the patient move around the house or street?',
          de: 'Kann der Patient sich im Haus oder auf der Straße bewegen?',
          it: 'Il paziente riesce a spostarsi in casa o per strada?',
        },
        help: { es: 'Movilidad con o sin ayuda técnica (andador, silla de ruedas).', en: 'Mobility with or without technical aid (walker, wheelchair).', de: 'Mobilität mit oder ohne Hilfsmittel (Rollator, Rollstuhl).', it: 'Mobilità con o senza ausili tecnici (deambulatore, sedia a rotelle).' },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita supervisión', en: 'Needs supervision', de: 'Benötigt Aufsicht', it: 'Necessita supervisione' }, value: 1 },
          { label: { es: 'En silla de ruedas', en: 'In wheelchair', de: 'Im Rollstuhl', it: 'In sedia a rotelle' }, value: 2 },
          { label: { es: 'Encamado', en: 'Bedridden', de: 'Bettlägerig', it: 'Allettato' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente subir y bajar escaleras?',
          en: 'Can the patient go up and down stairs?',
          de: 'Kann der Patient Treppen steigen?',
          it: 'Il paziente riesce a salire e scendere le scale?',
        },
        help: { es: 'Con o sin barandilla o bastón.', en: 'With or without handrail or cane.', de: 'Mit oder ohne Geländer oder Stock.', it: 'Con o senza corrimano o bastone.' },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita ayuda', en: 'Needs help', de: 'Benötigt Hilfe', it: 'Necessita aiuto' }, value: 1 },
          { label: { es: 'Incapaz', en: 'Unable', de: 'Nicht in der Lage', it: 'Non in grado' }, value: 2 },
        ],
      },
      {
        text: {
          es: '¿Puede el paciente arreglarse (higiene facial, peinado, afeitado)?',
          en: 'Can the patient groom themselves (face, hair, shaving)?',
          de: 'Kann der Patient sich pflegen (Gesicht, Haare, Rasur)?',
          it: 'Il paziente riesce a curarsi (viso, capelli, rasatura)?',
        },
        help: { es: 'Higiene personal básica diaria.', en: 'Basic daily personal hygiene.', de: 'Grundlegende tägliche Körperpflege.', it: 'Igiene personale di base quotidiana.' },
        options: [
          { label: { es: 'Independiente', en: 'Independent', de: 'Selbstständig', it: 'Indipendente' }, value: 0 },
          { label: { es: 'Necesita ayuda', en: 'Needs help', de: 'Benötigt Hilfe', it: 'Necessita aiuto' }, value: 1 },
        ],
      },
      {
        text: {
          es: '¿Con qué frecuencia necesita el cuidador ayudar al paciente en las actividades diarias?',
          en: 'How often does the caregiver need to help the patient with daily activities?',
          de: 'Wie oft muss der Betreuer dem Patienten bei täglichen Aktivitäten helfen?',
          it: 'Con quale frequenza il caregiver deve assistere il paziente nelle attività quotidiane?',
        },
        help: { es: 'Frecuencia media de asistencia en la última semana.', en: 'Average assistance frequency in the last week.', de: 'Durchschnittliche Hilfsfrequenz in der letzten Woche.', it: 'Frequenza media di assistenza nell\'ultima settimana.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
          { label: { es: 'Siempre', en: 'Always', de: 'Immer', it: 'Sempre' }, value: 4 },
        ],
      },
    ],
  },

  // ── ATX ──────────────────────────────────────────────────────────────
  ATX: {
    questions: [
      {
        text: {
          es: '¿Presenta el paciente inestabilidad al caminar o tendencia a desviarse?',
          en: 'Does the patient show instability when walking or tendency to deviate?',
          de: 'Zeigt der Patient Instabilität beim Gehen oder Tendenz abzuweichen?',
          it: 'Il paziente mostra instabilità nel camminare o tendenza a deviare?',
        },
        help: {
          es: 'Observe la marcha en línea recta. Evalúe desviaciones laterales o caídas.',
          en: 'Observe walking in a straight line. Assess lateral deviations or falls.',
          de: 'Beobachten Sie das Gehen geradeaus. Seitliche Abweichungen oder Stürze bewerten.',
          it: 'Osservare la camminata in linea retta. Valutare deviazioni laterali o cadute.',
        },
        options: [
          { label: { es: 'Ausente', en: 'Absent', de: 'Abwesend', it: 'Assente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 1 },
          { label: { es: 'Moderada', en: 'Moderate', de: 'Mäßig', it: 'Moderata' }, value: 2 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente temblor o movimientos incoordinados en las extremidades?',
          en: 'Does the patient show tremor or uncoordinated movements in the limbs?',
          de: 'Zeigt der Patient Zittern oder unkoordinierte Bewegungen in den Gliedmaßen?',
          it: 'Il paziente mostra tremore o movimenti incoordinati agli arti?',
        },
        help: {
          es: 'Prueba dedo-nariz y talón-rodilla para valorar dismetría.',
          en: 'Finger-nose and heel-knee test to assess dysmetria.',
          de: 'Finger-Nase- und Hacke-Knie-Test zur Beurteilung von Dysmetrie.',
          it: 'Test dito-naso e tallone-ginocchio per valutare la dismetria.',
        },
        options: [
          { label: { es: 'Ausente', en: 'Absent', de: 'Abwesend', it: 'Assente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 1 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 2 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 3 },
        ],
      },
    ],
  },

  // ── NPI ──────────────────────────────────────────────────────────────
  NPI: {
    questions: [
      {
        text: {
          es: '¿Ha mostrado el paciente delirios o creencias falsas (p. ej., creer que le roban)?',
          en: 'Has the patient shown delusions or false beliefs (e.g., believing things are stolen)?',
          de: 'Hat der Patient Wahnvorstellungen oder falsche Überzeugungen gezeigt?',
          it: 'Il paziente ha mostrato deliri o false credenze (es. credere che gli rubino)?',
        },
        help: { es: 'Frecuencia × gravedad. 1=raramente, 4=muy frecuente. 1=leve, 3=grave.', en: 'Frequency × severity. 1=rarely, 4=very frequent. 1=mild, 3=severe.', de: 'Häufigkeit × Schwere.', it: 'Frequenza × gravità.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve (1-2)', en: 'Mild (1-2)', de: 'Leicht (1-2)', it: 'Lieve (1-2)' }, value: 2 },
          { label: { es: 'Moderado (3-6)', en: 'Moderate (3-6)', de: 'Mäßig (3-6)', it: 'Moderato (3-6)' }, value: 6 },
          { label: { es: 'Grave (7-12)', en: 'Severe (7-12)', de: 'Schwer (7-12)', it: 'Grave (7-12)' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente alucinaciones (ver u oír cosas que no existen)?',
          en: 'Has the patient shown hallucinations (seeing or hearing things that do not exist)?',
          de: 'Hat der Patient Halluzinationen gezeigt?',
          it: 'Il paziente ha mostrato allucinazioni?',
        },
        help: { es: 'Incluye alucinaciones visuales y auditivas.', en: 'Includes visual and auditory hallucinations.', de: 'Einschließlich visueller und akustischer Halluzinationen.', it: 'Include allucinazioni visive e uditive.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve (1-2)', en: 'Mild (1-2)', de: 'Leicht (1-2)', it: 'Lieve (1-2)' }, value: 2 },
          { label: { es: 'Moderado (3-6)', en: 'Moderate (3-6)', de: 'Mäßig (3-6)', it: 'Moderato (3-6)' }, value: 6 },
          { label: { es: 'Grave (7-12)', en: 'Severe (7-12)', de: 'Schwer (7-12)', it: 'Grave (7-12)' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente agitación o comportamiento agresivo?',
          en: 'Has the patient shown agitation or aggressive behaviour?',
          de: 'Hat der Patient Unruhe oder aggressives Verhalten gezeigt?',
          it: 'Il paziente ha mostrato agitazione o comportamento aggressivo?',
        },
        help: { es: 'Agitación verbal o física, resistencia a cuidados.', en: 'Verbal or physical agitation, resistance to care.', de: 'Verbale oder körperliche Unruhe, Widerstand gegen Pflege.', it: 'Agitazione verbale o fisica, resistenza alle cure.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 2 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 6 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente depresión o tristeza?',
          en: 'Has the patient shown depression or sadness?',
          de: 'Hat der Patient Depressionen oder Traurigkeit gezeigt?',
          it: 'Il paziente ha mostrato depressione o tristezza?',
        },
        help: { es: 'Llanto, expresión de tristeza, pérdida de interés.', en: 'Crying, expressions of sadness, loss of interest.', de: 'Weinen, Traurigkeitsausdruck, Interessenverlust.', it: 'Pianto, espressioni di tristezza, perdita di interesse.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 2 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 6 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente ansiedad o nerviosismo excesivo?',
          en: 'Has the patient shown anxiety or excessive nervousness?',
          de: 'Hat der Patient Angst oder übermäßige Nervosität gezeigt?',
          it: 'Il paziente ha mostrato ansia o eccessivo nervosismo?',
        },
        help: { es: 'Miedo, preocupación excesiva, tensión motora.', en: 'Fear, excessive worry, motor tension.', de: 'Angst, übermäßige Sorge, motorische Spannung.', it: 'Paura, preoccupazione eccessiva, tensione motoria.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 2 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 6 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente apatía o falta de interés?',
          en: 'Has the patient shown apathy or lack of interest?',
          de: 'Hat der Patient Apathie oder mangelndes Interesse gezeigt?',
          it: 'Il paziente ha mostrato apatia o mancanza di interesse?',
        },
        help: { es: 'Reducción de motivación, iniciativa y reactividad emocional.', en: 'Reduction in motivation, initiative and emotional reactivity.', de: 'Verringerung von Motivation, Initiative und emotionaler Reaktivität.', it: 'Riduzione di motivazione, iniziativa e reattività emotiva.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 2 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 6 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 12 },
        ],
      },
      {
        text: {
          es: '¿Ha mostrado el paciente comportamientos motores aberrantes (p. ej., deambulación sin propósito)?',
          en: 'Has the patient shown aberrant motor behaviours (e.g., purposeless wandering)?',
          de: 'Hat der Patient aberrante motorische Verhaltensweisen gezeigt?',
          it: 'Il paziente ha mostrato comportamenti motori aberranti?',
        },
        help: { es: 'Conductas repetitivas, deambulación sin objetivo, manierismos.', en: 'Repetitive behaviours, purposeless wandering, mannerisms.', de: 'Wiederholende Verhaltensweisen, zielloses Umherwandern, Manierismen.', it: 'Comportamenti ripetitivi, vagabondaggio senza scopo, manierismi.' },
        options: [
          { label: { es: 'No presente', en: 'Not present', de: 'Nicht vorhanden', it: 'Non presente' }, value: 0 },
          { label: { es: 'Leve', en: 'Mild', de: 'Leicht', it: 'Lieve' }, value: 2 },
          { label: { es: 'Moderado', en: 'Moderate', de: 'Mäßig', it: 'Moderato' }, value: 6 },
          { label: { es: 'Grave', en: 'Severe', de: 'Schwer', it: 'Grave' }, value: 12 },
        ],
      },
    ],
  },

  // ── BISAD ─────────────────────────────────────────────────────────────
  BISAD: {
    questions: [
      {
        text: {
          es: '¿Observa en el paciente una expresión facial de dolor (ceño fruncido, muecas)?',
          en: 'Do you observe a pain facial expression in the patient (frowning, grimacing)?',
          de: 'Beobachten Sie beim Patienten einen Schmerzgesichtsausdruck?',
          it: 'Osserva nel paziente un\'espressione facciale di dolore?',
        },
        help: { es: 'Observe el rostro en reposo y durante movilizaciones.', en: 'Observe the face at rest and during mobilisation.', de: 'Beobachten Sie das Gesicht in Ruhe und bei Bewegungen.', it: 'Osservare il viso a riposo e durante le mobilizzazioni.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente quejidos, gemidos o llanto relacionados con el dolor?',
          en: 'Does the patient show moaning, groaning or crying related to pain?',
          de: 'Zeigt der Patient Stöhnen, Klagen oder Weinen im Zusammenhang mit Schmerzen?',
          it: 'Il paziente mostra gemiti, lamenti o pianto legati al dolore?',
        },
        help: { es: 'Vocalizaciones de dolor espontáneas o provocadas por el movimiento.', en: 'Spontaneous or movement-provoked pain vocalisations.', de: 'Spontane oder bewegungsausgelöste Schmerzäußerungen.', it: 'Vocalizzazioni di dolore spontanee o provocate dal movimento.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente tensión corporal o rigidez muscular?',
          en: 'Does the patient show body tension or muscle rigidity?',
          de: 'Zeigt der Patient Körperspannung oder Muskelsteifheit?',
          it: 'Il paziente mostra tensione corporea o rigidità muscolare?',
        },
        help: { es: 'Rigidez durante la movilización o el cuidado.', en: 'Rigidity during mobilisation or care.', de: 'Steifheit bei Mobilisierung oder Pflege.', it: 'Rigidità durante la mobilizzazione o le cure.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Rechaza el paciente los cuidados o la movilización?',
          en: 'Does the patient refuse care or mobilisation?',
          de: 'Verweigert der Patient die Pflege oder Mobilisierung?',
          it: 'Il paziente rifiuta le cure o la mobilizzazione?',
        },
        help: { es: 'Resistencia activa o pasiva a los cuidados.', en: 'Active or passive resistance to care.', de: 'Aktiver oder passiver Widerstand gegen Pflege.', it: 'Resistenza attiva o passiva alle cure.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente inquietud o agitación motora?',
          en: 'Does the patient show restlessness or motor agitation?',
          de: 'Zeigt der Patient Unruhe oder motorische Agitation?',
          it: 'Il paziente mostra irrequietezza o agitazione motoria?',
        },
        help: { es: 'Movimientos repetitivos, incapacidad para estar quieto.', en: 'Repetitive movements, inability to stay still.', de: 'Wiederholende Bewegungen, Unfähigkeit stillzubleiben.', it: 'Movimenti ripetitivi, incapacità di stare fermi.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente palidez, sudoración o cambios vegetativos?',
          en: 'Does the patient show pallor, sweating or vegetative changes?',
          de: 'Zeigt der Patient Blässe, Schwitzen oder vegetative Veränderungen?',
          it: 'Il paziente mostra pallore, sudorazione o cambiamenti vegetativi?',
        },
        help: { es: 'Signos físicos de estrés o dolor: sudor frío, palidez, taquicardia.', en: 'Physical signs of stress or pain: cold sweat, pallor, tachycardia.', de: 'Körperliche Anzeichen von Stress oder Schmerz: kalter Schweiß, Blässe, Tachykardie.', it: 'Segni fisici di stress o dolore: sudore freddo, pallore, tachicardia.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Presenta el paciente cambios en el comportamiento habitual relacionados con el dolor?',
          en: 'Does the patient show changes in usual behaviour related to pain?',
          de: 'Zeigt der Patient schmerzbedingte Verhaltensänderungen?',
          it: 'Il paziente mostra cambiamenti nel comportamento abituale legati al dolore?',
        },
        help: { es: 'Cambio respecto a su conducta basal: más retraído, irritable o asustado.', en: 'Change from baseline behaviour: more withdrawn, irritable or frightened.', de: 'Veränderung gegenüber dem Ausgangsverhalten: zurückgezogener, reizbarer oder ängstlicher.', it: 'Cambiamento rispetto al comportamento basale: più ritirato, irritabile o spaventato.' },
        options: [
          { label: { es: 'Nunca', en: 'Never', de: 'Nie', it: 'Mai' }, value: 0 },
          { label: { es: 'Raramente', en: 'Rarely', de: 'Selten', it: 'Raramente' }, value: 1 },
          { label: { es: 'A veces', en: 'Sometimes', de: 'Manchmal', it: 'A volte' }, value: 2 },
          { label: { es: 'Frecuentemente', en: 'Frequently', de: 'Häufig', it: 'Frequentemente' }, value: 3 },
        ],
      },
      {
        text: {
          es: '¿Cómo valora globalmente el nivel de dolor del paciente en la última semana?',
          en: 'How do you globally rate the patient\'s pain level in the last week?',
          de: 'Wie bewerten Sie den Schmerz des Patienten in der letzten Woche insgesamt?',
          it: 'Come valuta globalmente il livello di dolore del paziente nell\'ultima settimana?',
        },
        help: { es: 'Valoración global del cuidador o profesional.', en: 'Global assessment by caregiver or professional.', de: 'Globale Einschätzung durch Betreuer oder Fachkraft.', it: 'Valutazione globale del caregiver o del professionista.' },
        options: [
          { label: { es: 'Sin dolor', en: 'No pain', de: 'Kein Schmerz', it: 'Nessun dolore' }, value: 0 },
          { label: { es: 'Dolor leve', en: 'Mild pain', de: 'Leichter Schmerz', it: 'Dolore lieve' }, value: 1 },
          { label: { es: 'Dolor moderado', en: 'Moderate pain', de: 'Mäßiger Schmerz', it: 'Dolore moderato' }, value: 2 },
          { label: { es: 'Dolor intenso', en: 'Severe pain', de: 'Starker Schmerz', it: 'Dolore intenso' }, value: 3 },
        ],
      },
    ],
  },

  // ── IQCODE ────────────────────────────────────────────────────────────
  IQCODE: {
    questions: [
      {
        text: {
          es: 'En comparación con hace 10 años, ¿cómo recuerda el paciente cosas que le pasaron recientemente?',
          en: 'Compared to 10 years ago, how does the patient remember things that happened recently?',
          de: 'Im Vergleich zu vor 10 Jahren, wie erinnert sich der Patient an kürzlich Geschehenes?',
          it: 'Rispetto a 10 anni fa, come il paziente ricorda le cose successe di recente?',
        },
        help: { es: 'Ejemplos: recordar conversaciones recientes, lo que hizo ayer.', en: 'Examples: remembering recent conversations, what they did yesterday.', de: 'Beispiele: Sich an aktuelle Gespräche erinnern, was sie gestern getan haben.', it: 'Esempi: ricordare conversazioni recenti, cosa ha fatto ieri.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo recuerda el paciente el nombre de personas conocidas y familiares?',
          en: 'How does the patient remember the names of familiar people and family?',
          de: 'Wie erinnert sich der Patient an die Namen bekannter Personen und Familienmitglieder?',
          it: 'Come il paziente ricorda i nomi di persone conosciute e familiari?',
        },
        help: { es: 'Nombres de amigos, vecinos, familiares cercanos.', en: 'Names of friends, neighbours, close family.', de: 'Namen von Freunden, Nachbarn, nahen Familienangehörigen.', it: 'Nomi di amici, vicini, familiari stretti.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo maneja el paciente el dinero y los pagos cotidianos?',
          en: 'How does the patient handle money and everyday payments?',
          de: 'Wie geht der Patient mit Geld und alltäglichen Zahlungen um?',
          it: 'Come gestisce il paziente il denaro e i pagamenti quotidiani?',
        },
        help: { es: 'Dar el cambio correcto, pagar recibos, manejar la cuenta bancaria.', en: 'Giving correct change, paying bills, managing the bank account.', de: 'Richtiges Wechselgeld geben, Rechnungen bezahlen, Bankkonto verwalten.', it: 'Dare il resto corretto, pagare le bollette, gestire il conto bancario.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo recuerda el paciente dónde se guardan las cosas habitualmente?',
          en: 'How does the patient remember where things are usually kept?',
          de: 'Wie erinnert sich der Patient daran, wo Dinge normalerweise aufbewahrt werden?',
          it: 'Come il paziente ricorda dove si tengono abitualmente le cose?',
        },
        help: { es: 'Localizar objetos cotidianos: llaves, gafas, medicamentos.', en: 'Locating everyday objects: keys, glasses, medications.', de: 'Alltägliche Gegenstände finden: Schlüssel, Brillen, Medikamente.', it: 'Trovare oggetti quotidiani: chiavi, occhiali, farmaci.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo aprende el paciente a usar nuevos aparatos o dispositivos?',
          en: 'How does the patient learn to use new appliances or devices?',
          de: 'Wie lernt der Patient, neue Geräte oder Apparate zu bedienen?',
          it: 'Come il paziente impara ad usare nuovi apparecchi o dispositivi?',
        },
        help: { es: 'Ejemplos: nuevo teléfono, microondas, mando a distancia.', en: 'Examples: new phone, microwave, remote control.', de: 'Beispiele: neues Telefon, Mikrowelle, Fernbedienung.', it: 'Esempi: nuovo telefono, microonde, telecomando.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo recuerda el paciente los sucesos que salen en los periódicos o la televisión?',
          en: 'How does the patient remember events from newspapers or television?',
          de: 'Wie erinnert sich der Patient an Ereignisse aus Zeitungen oder dem Fernsehen?',
          it: 'Come il paziente ricorda gli eventi dai giornali o dalla televisione?',
        },
        help: { es: 'Noticias recientes, programas de televisión vistos recientemente.', en: 'Recent news, recently watched TV programmes.', de: 'Aktuelle Nachrichten, kürzlich gesehene Fernsehprogramme.', it: 'Notizie recenti, programmi TV visti di recente.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
      {
        text: {
          es: '¿Cómo toma decisiones cotidianas el paciente (qué ponerse, qué comer)?',
          en: 'How does the patient make everyday decisions (what to wear, what to eat)?',
          de: 'Wie trifft der Patient alltägliche Entscheidungen (was anziehen, was essen)?',
          it: 'Come il paziente prende decisioni quotidiane (cosa indossare, cosa mangiare)?',
        },
        help: { es: 'Capacidad de juicio en decisiones simples del día a día.', en: 'Judgement ability in simple day-to-day decisions.', de: 'Urteilsvermögen bei einfachen alltäglichen Entscheidungen.', it: 'Capacità di giudizio nelle semplici decisioni quotidiane.' },
        options: [
          { label: { es: 'Mucho mejor', en: 'Much better', de: 'Viel besser', it: 'Molto meglio' }, value: 1 },
          { label: { es: 'Un poco mejor', en: 'A bit better', de: 'Etwas besser', it: 'Un po\' meglio' }, value: 2 },
          { label: { es: 'No hay cambio', en: 'No change', de: 'Keine Veränderung', it: 'Nessun cambiamento' }, value: 3 },
          { label: { es: 'Un poco peor', en: 'A bit worse', de: 'Etwas schlechter', it: 'Un po\' peggio' }, value: 4 },
          { label: { es: 'Mucho peor', en: 'Much worse', de: 'Viel schlechter', it: 'Molto peggio' }, value: 5 },
        ],
      },
    ],
  },
};
