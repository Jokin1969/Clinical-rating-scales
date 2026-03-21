
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
    doi: '10.1093/brain/awt048',
    questions: [
      // 1. Bowel function (max 1)
      {
        text: {
          es: 'Función intestinal',
          en: 'Bowel function',
          de: 'Darmfunktion',
          it: 'Funzione intestinale',
        },
        help: {
          es: 'Evalúe si ha habido algún episodio de incontinencia fecal en los últimos 7 días.',
          en: 'Assess whether there has been any episode of faecal incontinence in the last 7 days.',
          de: 'Beurteilen Sie, ob es in den letzten 7 Tagen Episoden von Stuhlinkontinenz gab.',
          it: 'Valutare se ci sono stati episodi di incontinenza fecale negli ultimi 7 giorni.',
        },
        options: [
          {
            label: {
              es: 'Al menos un episodio de incontinencia en los últimos 7 días',
              en: 'At least one episode of incontinence in the last 7 days',
              de: 'Mindestens eine Inkontinenzepisode in den letzten 7 Tagen',
              it: 'Almeno un episodio di incontinenza negli ultimi 7 giorni',
            },
            value: 0,
          },
          {
            label: {
              es: 'Continente durante los últimos 7 días',
              en: 'Continent for last 7 days',
              de: 'Kontinent in den letzten 7 Tagen',
              it: 'Continente negli ultimi 7 giorni',
            },
            value: 1,
          },
        ],
      },
      // 2. Bladder function (max 1)
      {
        text: {
          es: 'Función vesical',
          en: 'Bladder function',
          de: 'Blasenfunktion',
          it: 'Funzione vescicale',
        },
        help: {
          es: 'Evalúe el control de la vejiga, incluyendo cateterismo permanente.',
          en: 'Assess bladder control, including permanent catheterisation.',
          de: 'Blasenkontrolle beurteilen, einschließlich Dauerkatheter.',
          it: 'Valutare il controllo vescicale, incluso il catetere permanente.',
        },
        options: [
          {
            label: {
              es: 'Siempre incontinente o cateterizado/a',
              en: 'Always incontinent or catheterised',
              de: 'Immer inkontinent oder katheterisiert',
              it: 'Sempre incontinente o cateterizzato/a',
            },
            value: 0,
          },
          {
            label: {
              es: 'Continente o accidentes ocasionales',
              en: 'Continent or occasional accidents',
              de: 'Kontinent oder gelegentliche Unfälle',
              it: 'Continente o incidenti occasionali',
            },
            value: 1,
          },
        ],
      },
      // 3. Toilet use (max 2)
      {
        text: {
          es: 'Uso del aseo',
          en: 'Toilet use',
          de: 'Toilettenbenutzung',
          it: 'Uso del bagno',
        },
        help: {
          es: 'Incluye trasladarse al baño, sentarse, limpiarse y vestirse.',
          en: 'Includes getting to bathroom, sitting, cleaning and dressing.',
          de: 'Beinhaltet Toilettengang, Setzen, Säubern und Ankleiden.',
          it: 'Include raggiungere il bagno, sedersi, pulirsi e rivestirsi.',
        },
        options: [
          {
            label: {
              es: 'Totalmente dependiente',
              en: 'Fully dependent',
              de: 'Vollständig abhängig',
              it: 'Completamente dipendente',
            },
            value: 0,
          },
          {
            label: {
              es: 'Necesita algo de ayuda',
              en: 'Needs some help',
              de: 'Benötigt etwas Hilfe',
              it: 'Necessita di qualche aiuto',
            },
            value: 1,
          },
          {
            label: {
              es: 'Independiente',
              en: 'Independent',
              de: 'Selbstständig',
              it: 'Indipendente',
            },
            value: 2,
          },
        ],
      },
      // 4. Bathing (max 1)
      {
        text: {
          es: 'Baño / Ducha',
          en: 'Bathing',
          de: 'Baden / Duschen',
          it: 'Bagno / Doccia',
        },
        help: {
          es: 'Incluye entrar y salir de la bañera o ducha y lavarse.',
          en: 'Includes getting in and out of the bath or shower and washing.',
          de: 'Beinhaltet Ein- und Aussteigen aus Badewanne/Dusche und Waschen.',
          it: 'Include entrare e uscire dalla vasca o dalla doccia e lavarsi.',
        },
        options: [
          {
            label: {
              es: 'Totalmente dependiente o necesita algo de ayuda',
              en: 'Fully dependent or needs some help',
              de: 'Vollständig abhängig oder benötigt etwas Hilfe',
              it: 'Completamente dipendente o necessita di qualche aiuto',
            },
            value: 0,
          },
          {
            label: {
              es: 'Independiente',
              en: 'Independent',
              de: 'Selbstständig',
              it: 'Indipendente',
            },
            value: 1,
          },
        ],
      },
      // 5. Feeding (max 2)
      {
        text: {
          es: 'Alimentación',
          en: 'Feeding',
          de: 'Nahrungsaufnahme',
          it: 'Alimentazione',
        },
        help: {
          es: 'Incluye alimentación por sonda (NG/PEG/RIG) si el paciente no puede tragar.',
          en: 'Includes tube feeding (NG/PEG/RIG) if the patient cannot swallow.',
          de: 'Beinhaltet Sondenernährung (NG/PEG/RIG) wenn der Patient nicht schlucken kann.',
          it: 'Include nutrizione enterale (NG/PEG/RIG) se il paziente non riesce a deglutire.',
        },
        options: [
          {
            label: {
              es: 'Incapaz o alimentado por sonda NG/PEG/RIG (no ingiere nada por boca)',
              en: 'Unable or NG/PEG/RIG fed (takes nothing by mouth)',
              de: 'Unfähig oder Sondenernährung NG/PEG/RIG (nimmt nichts oral auf)',
              it: 'Incapace o alimentato per sonda NG/PEG/RIG (non assume nulla per bocca)',
            },
            value: 0,
          },
          {
            label: {
              es: 'Necesita ayuda pero puede tragar (aunque sea de forma insegura)',
              en: 'Needs help but can swallow (even if unsafe)',
              de: 'Benötigt Hilfe, kann aber schlucken (auch wenn unsicher)',
              it: 'Necessita di aiuto ma riesce a deglutire (anche se in modo non sicuro)',
            },
            value: 1,
          },
          {
            label: {
              es: 'Independiente',
              en: 'Independent',
              de: 'Selbstständig',
              it: 'Indipendente',
            },
            value: 2,
          },
        ],
      },
      // 6. Transfer and mobility (max 2)
      {
        text: {
          es: 'Transferencia y movilidad',
          en: 'Transfer and mobility',
          de: 'Transfer und Mobilität',
          it: 'Trasferimento e mobilità',
        },
        help: {
          es: 'Evalúe la capacidad de sentarse, transferirse y moverse de forma independiente.',
          en: 'Assess ability to sit up, transfer and move independently.',
          de: 'Fähigkeit zum Aufsetzen, Transfer und selbstständigem Bewegen beurteilen.',
          it: 'Valutare la capacità di sedersi, trasferirsi e muoversi in modo indipendente.',
        },
        options: [
          {
            label: {
              es: 'En cama, incapaz de sentarse',
              en: 'Bedbound, unable to sit',
              de: 'Bettlägerig, nicht in der Lage aufzusitzen',
              it: 'Allettato, incapace di sedersi',
            },
            value: 0,
          },
          {
            label: {
              es: 'Puede sentarse pero no puede desplazarse ni transferirse sin ayuda (de persona o ayuda técnica)',
              en: 'Can sit but cannot mobilise or transfer without help (from person or walking aid)',
              de: 'Kann sitzen, aber nicht ohne Hilfe mobilisieren oder transferieren (Person oder Gehhilfe)',
              it: 'Riesce a sedersi ma non a spostarsi o trasferirsi senza aiuto (di persona o ausilio deambulatorio)',
            },
            value: 1,
          },
          {
            label: {
              es: 'Puede transferirse o desplazarse de forma independiente, o ambas',
              en: 'Can transfer or mobilise independently or both',
              de: 'Kann selbstständig transferieren oder mobilisieren oder beides',
              it: 'Riesce a trasferirsi o spostarsi in modo indipendente, o entrambe',
            },
            value: 2,
          },
        ],
      },
      // 7. Stairs (max 2)
      {
        text: {
          es: 'Escaleras',
          en: 'Stairs',
          de: 'Treppen',
          it: 'Scale',
        },
        help: {
          es: 'Evalúe la capacidad de subir y bajar escaleras con o sin ayuda.',
          en: 'Assess ability to go up and down stairs with or without help.',
          de: 'Fähigkeit zum Treppensteigen beurteilen, mit oder ohne Hilfe.',
          it: 'Valutare la capacità di salire e scendere le scale con o senza aiuto.',
        },
        options: [
          {
            label: {
              es: 'Incapaz',
              en: 'Unable',
              de: 'Nicht in der Lage',
              it: 'Incapace',
            },
            value: 0,
          },
          {
            label: {
              es: 'Necesita ayuda',
              en: 'Needs help',
              de: 'Benötigt Hilfe',
              it: 'Necessita di aiuto',
            },
            value: 1,
          },
          {
            label: {
              es: 'Independiente',
              en: 'Independent',
              de: 'Selbstständig',
              it: 'Indipendente',
            },
            value: 2,
          },
        ],
      },
      // 8. Best verbal response (max 4)
      {
        text: {
          es: 'Mejor respuesta verbal',
          en: 'Best verbal response',
          de: 'Beste verbale Reaktion',
          it: 'Migliore risposta verbale',
        },
        help: {
          es: 'Seleccione la mejor respuesta verbal que el paciente es capaz de producir.',
          en: 'Select the best verbal response the patient is capable of producing.',
          de: 'Wählen Sie die beste verbale Reaktion, die der Patient produzieren kann.',
          it: 'Selezionare la migliore risposta verbale che il paziente è in grado di produrre.',
        },
        options: [
          {
            label: {
              es: 'Mudo/a',
              en: 'Mute',
              de: 'Stumm',
              it: 'Muto/a',
            },
            value: 0,
          },
          {
            label: {
              es: 'Sonidos incomprensibles',
              en: 'Incomprehensible sounds',
              de: 'Unverständliche Laute',
              it: 'Suoni incomprensibili',
            },
            value: 1,
          },
          {
            label: {
              es: 'Palabras aisladas',
              en: 'Single words',
              de: 'Einzelne Wörter',
              it: 'Parole isolate',
            },
            value: 2,
          },
          {
            label: {
              es: 'Frases pero con dificultad para encontrar palabras, usa palabras incorrectas o está frecuentemente desorientado/confuso',
              en: 'Sentences but difficulty in finding words, uses incorrect words or is often disoriented / confused',
              de: 'Sätze, aber Schwierigkeiten beim Wortfinden, verwendet falsche Wörter oder ist häufig desorientiert / verwirrt',
              it: 'Frasi ma con difficoltà nel trovare le parole, usa parole errate o è spesso disorientato/confuso',
            },
            value: 3,
          },
          {
            label: {
              es: 'Conversación normal',
              en: 'Normal conversation',
              de: 'Normale Konversation',
              it: 'Conversazione normale',
            },
            value: 4,
          },
        ],
      },
      // 9. Memory and orientation to surroundings (max 3)
      {
        text: {
          es: 'Memoria y orientación en el entorno',
          en: 'Memory and orientation to surroundings',
          de: 'Gedächtnis und Orientierung zur Umgebung',
          it: "Memoria e orientamento nell'ambiente",
        },
        help: {
          es: 'Evalúe la memoria y la capacidad del paciente para orientarse en su entorno.',
          en: "Assess the patient's memory and ability to orientate to their surroundings.",
          de: 'Gedächtnis und Fähigkeit zur Orientierung in der Umgebung beurteilen.',
          it: 'Valutare la memoria e la capacità del paziente di orientarsi nel proprio ambiente.',
        },
        options: [
          {
            label: {
              es: 'Sin consciencia del entorno ni evidencia alguna de memoria',
              en: 'Shows no awareness of surroundings or any evidence of memory',
              de: 'Kein Bewusstsein der Umgebung und keinerlei Gedächtnisnachweis',
              it: "Nessuna consapevolezza dell'ambiente né alcuna evidenza di memoria",
            },
            value: 0,
          },
          {
            label: {
              es: 'Evidencia de retención de material muy aprendido (p. ej., reconocer a personas familiares) o consciencia del entorno, pero sin evidencia de adquirir material nuevo',
              en: 'Evidence of retaining some highly learned material (e.g. recognising familiar people) or awareness of surroundings but no evidence of acquiring new material',
              de: 'Nachweis der Beibehaltung hochgelernten Materials (z. B. Erkennen vertrauter Personen) oder Bewusstsein der Umgebung, aber kein Nachweis des Erwerbs neuen Materials',
              it: "Evidenza di ritenzione di materiale molto appreso (es. riconoscere persone familiari) o consapevolezza dell'ambiente, ma nessuna evidenza di acquisire nuovo materiale",
            },
            value: 1,
          },
          {
            label: {
              es: 'Capaz de retener alguna información nueva, pero la memoria está consistentemente deteriorada',
              en: 'Able to retain some new information BUT memory consistently impaired',
              de: 'In der Lage, einige neue Informationen zu behalten, aber Gedächtnis konsistent beeinträchtigt',
              it: 'In grado di ritenere alcune informazioni nuove MA la memoria è costantemente compromessa',
            },
            value: 2,
          },
          {
            label: {
              es: 'Memoria normal o con algún deterioro ocasional',
              en: 'Memory normal or some impairment off and on',
              de: 'Gedächtnis normal oder gelegentliche Beeinträchtigung',
              it: 'Memoria normale o con qualche deterioramento occasionale',
            },
            value: 3,
          },
        ],
      },
      // 10. Judgement and problem solving (max 1)
      {
        text: {
          es: 'Juicio y resolución de problemas',
          en: 'Judgement and problem solving',
          de: 'Urteilsvermögen und Problemlösung',
          it: 'Giudizio e risoluzione dei problemi',
        },
        help: {
          es: 'Evalúe la capacidad del paciente para tomar decisiones o resolver problemas sencillos.',
          en: "Assess the patient's ability to make decisions or solve simple problems.",
          de: 'Fähigkeit des Patienten zur Entscheidungsfindung oder Lösung einfacher Probleme beurteilen.',
          it: 'Valutare la capacità del paziente di prendere decisioni o risolvere problemi semplici.',
        },
        options: [
          {
            label: {
              es: 'Incapaz de mostrar ningún juicio o resolución de problemas',
              en: 'Unable to show any judgement or problem-solving',
              de: 'Nicht in der Lage, Urteilsvermögen oder Problemlösung zu zeigen',
              it: 'Incapace di mostrare alcun giudizio o capacità di problem solving',
            },
            value: 0,
          },
          {
            label: {
              es: 'Capaz de mostrar algún juicio o resolución de problemas, aunque sea gravemente deteriorado',
              en: 'Able to show some judgement or problem-solving, even if this is severely impaired',
              de: 'In der Lage, etwas Urteilsvermögen oder Problemlösung zu zeigen, auch wenn stark beeinträchtigt',
              it: 'In grado di mostrare qualche giudizio o problem solving, anche se gravemente compromesso',
            },
            value: 1,
          },
        ],
      },
      // 11. Use of tools (max 1)
      {
        text: {
          es: 'Uso de herramientas',
          en: 'Use of tools',
          de: 'Verwendung von Werkzeugen',
          it: 'Uso degli strumenti',
        },
        help: {
          es: 'Evalúe si el paciente puede usar utensilios o herramientas del hogar (p. ej., cubiertos, mando a distancia).',
          en: 'Assess whether the patient can use household tools or utensils (e.g. cutlery, remote control).',
          de: 'Beurteilung ob der Patient Haushaltswerkzeuge oder Utensilien verwenden kann.',
          it: 'Valutare se il paziente riesce a usare utensili o strumenti domestici (es. posate, telecomando).',
        },
        options: [
          {
            label: {
              es: 'Incapaz de usar ninguna herramienta u objeto',
              en: 'Unable to use any tools or objects',
              de: 'Nicht in der Lage, Werkzeuge oder Gegenstände zu benutzen',
              it: 'Incapace di usare qualsiasi strumento o oggetto',
            },
            value: 0,
          },
          {
            label: {
              es: 'Capaz de usar algunas herramientas u objetos, con ayuda si es necesario',
              en: 'Able to use some tools or objects, with help if necessary',
              de: 'In der Lage, einige Werkzeuge oder Gegenstände zu benutzen, mit Hilfe wenn nötig',
              it: 'In grado di usare alcuni strumenti o oggetti, con aiuto se necessario',
            },
            value: 1,
          },
        ],
      },
    ],
  },

  // ── ATX ──────────────────────────────────────────────────────────────
  ATX: {
    doi: '10.1212/01.wnl.0000219042.60538.92',
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
    doi: '10.1212/wnl.44.12.2308',
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
    doi: '10.1097/00004583-199705000-00017',
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
    doi: '10.1017/s0033291700005742',
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
