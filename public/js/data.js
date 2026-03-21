
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
    group: 'symptomatic',
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

  // ── SARA ─────────────────────────────────────────────────────────────
  SARA: {
    group: 'symptomatic',
    doi: '10.1212/01.wnl.0000219042.60538.92',
    questions: [
      // 1. Gait / Marcha (0-8)
      {
        text: {
          es: 'Marcha (Gait): ¿Cómo es la estabilidad y la necesidad de apoyo al caminar y girar?',
          en: 'Gait: How is the stability and need for support when walking and turning?',
          de: 'Gang (Gait): Wie ist die Stabilität und Stütznotwendigkeit beim Gehen und Drehen?',
          it: 'Andatura (Gait): Com\'è la stabilità e la necessità di supporto nel camminare e girare?',
        },
        help: {
          es: 'Observe si su familiar camina en línea recta o si parece "borracho". Fíjese si necesita tocar las paredes para no caerse o si ya es imprescindible que alguien le sujete del brazo o use un andador.',
          en: 'Observe whether your relative walks in a straight line or appears "drunk". Notice if they need to touch walls to avoid falling or if it is already essential for someone to hold their arm or use a walking aid.',
          de: 'Beobachten Sie, ob Ihr Angehöriger geradeaus geht oder "betrunken" wirkt. Achten Sie darauf, ob er Wände berühren muss, um nicht zu fallen, oder ob jemand seinen Arm halten oder ein Hilfsmittel nutzen muss.',
          it: 'Osservi se il suo familiare cammina in linea retta o sembra "ubriaco". Noti se ha bisogno di toccare le pareti per non cadere o se è già necessario che qualcuno lo sorregga o usi un deambulatore.',
        },
        options: [
          { label: { es: '0 – Normal', en: '0 – Normal', de: '0 – Normal', it: '0 – Normale' }, value: 0 },
          { label: { es: '1 – Leve dificultad; marcha en tándem con varios pasos posible', en: '1 – Slight difficulty; tandem gait, several steps possible', de: '1 – Leichte Schwierigkeiten; Tandemgang mit mehreren Schritten möglich', it: '1 – Lieve difficoltà; tandem possibile con alcuni passi' }, value: 1 },
          { label: { es: '2 – Claramente anormal; marcha en tándem imposible', en: '2 – Clearly abnormal; tandem gait impossible', de: '2 – Deutlich abnormal; Tandemgang unmöglich', it: '2 – Chiaramente anormale; tandem impossibile' }, value: 2 },
          { label: { es: '3 – Considerablemente atáxico; usa apoyo ocasionalmente', en: '3 – Considerably ataxic; occasionally uses support', de: '3 – Erheblich ataktisch; gelegentlich Stütze erforderlich', it: '3 – Considerevolmente atassico; supporto usato occasionalmente' }, value: 3 },
          { label: { es: '4 – Marcadamente atáxico; requiere apoyo constante', en: '4 – Markedly ataxic; constant support required', de: '4 – Deutlich ataktisch; ständige Stütze erforderlich', it: '4 – Marcatamente atassico; supporto costante necessario' }, value: 4 },
          { label: { es: '5 – Solo unos pocos pasos posibles con apoyo', en: '5 – Only a few steps possible with support', de: '5 – Nur wenige Schritte mit Stütze möglich', it: '5 – Solo pochi passi possibili con supporto' }, value: 5 },
          { label: { es: '6 – Incapaz de caminar sin apoyo; puede mantenerse de pie sin apoyo', en: '6 – Unable to walk without support; standing possible without support', de: '6 – Unfähig ohne Stütze zu gehen; Stehen ohne Stütze möglich', it: '6 – Impossibile camminare senza supporto; in piedi possibile senza supporto' }, value: 6 },
          { label: { es: '7 – Solo puede estar de pie con apoyo; imposible sin apoyo', en: '7 – Standing only with support; impossible without support', de: '7 – Stehen nur mit Stütze; unmöglich ohne Stütze', it: '7 – In piedi solo con supporto; impossibile senza' }, value: 7 },
          { label: { es: '8 – Incapaz de caminar e incapaz de mantenerse de pie', en: '8 – Unable to walk and unable to stand', de: '8 – Unfähig zu gehen und zu stehen', it: '8 – Impossibile camminare e stare in piedi' }, value: 8 },
        ],
      },
      // 2. Stance / Bipedestación (0-6)
      {
        text: {
          es: 'Bipedestación (Stance): ¿Cuánto tiempo aguanta de pie con los pies juntos antes de perder el equilibrio?',
          en: 'Stance: How long can they stand with feet together before losing balance?',
          de: 'Stand (Stance): Wie lange kann der Patient mit zusammengestellten Füßen stehen, bevor er das Gleichgewicht verliert?',
          it: 'Postura eretta (Stance): Quanto tempo riesce a stare in piedi con i piedi uniti prima di perdere l\'equilibrio?',
        },
        help: {
          es: 'Queremos ver qué tan estable está cuando se queda quieto de pie. Díganos si en casa nota que se tambalea al cepillarse los dientes o si necesita separar mucho las piernas para sentir que no se cae.',
          en: 'We want to see how stable they are when standing still. Tell us if at home you notice them swaying while brushing their teeth or needing to spread their legs wide to feel stable.',
          de: 'Wir möchten sehen, wie stabil der Patient beim ruhigen Stehen ist. Sagen Sie uns, ob er zu Hause beim Zähneputzen schwankt oder die Beine weit spreizen muss, um nicht zu fallen.',
          it: 'Vogliamo vedere quanto è stabile stando fermo in piedi. Ci dica se a casa nota che barcolla mentre si lava i denti o se deve allargare molto le gambe per sentirsi stabile.',
        },
        options: [
          { label: { es: '0 – Normal; pies juntos, estable >10 s, ojos abiertos y cerrados', en: '0 – Normal; feet together, stable >10 s, eyes open and closed', de: '0 – Normal; Füße zusammen, stabil >10 s, Augen offen und geschlossen', it: '0 – Normale; piedi uniti, stabile >10 s, occhi aperti e chiusi' }, value: 0 },
          { label: { es: '1 – Ligeramente inestable; tándem imposible, pero pies juntos posible >10 s', en: '1 – Slightly unstable; tandem impossible, feet together stable >10 s', de: '1 – Leicht instabil; Tandem unmöglich, Füße zusammen stabil >10 s', it: '1 – Leggermente instabile; tandem impossibile, piedi uniti stabili >10 s' }, value: 1 },
          { label: { es: '2 – Pies juntos >10 s, pero claramente inestable (se tambalea)', en: '2 – Feet together >10 s, but clearly unstable (sways)', de: '2 – Füße zusammen >10 s, aber deutlich instabil (schwankt)', it: '2 – Piedi uniti >10 s, ma chiaramente instabile (oscilla)' }, value: 2 },
          { label: { es: '3 – Pies juntos solo breve tiempo (<10 s) sin apoyo', en: '3 – Feet together only briefly (<10 s) without support', de: '3 – Füße zusammen nur kurz (<10 s) ohne Stütze', it: '3 – Piedi uniti solo brevemente (<10 s) senza supporto' }, value: 3 },
          { label: { es: '4 – Pies juntos imposible; base amplia posible <10 s sin apoyo', en: '4 – Feet together impossible; wide base possible <10 s without support', de: '4 – Füße zusammen unmöglich; breite Basis <10 s ohne Stütze', it: '4 – Piedi uniti impossibile; base larga <10 s senza supporto' }, value: 4 },
          { label: { es: '5 – Imposible mantenerse de pie sin apoyo', en: '5 – Impossible to stand without support', de: '5 – Unmöglich ohne Stütze zu stehen', it: '5 – Impossibile stare in piedi senza supporto' }, value: 5 },
          { label: { es: '6 – Imposible mantenerse de pie incluso con apoyo; confinado a silla de ruedas', en: '6 – Impossible to stand even with support; confined to wheelchair', de: '6 – Unmöglich zu stehen, auch mit Stütze; auf Rollstuhl angewiesen', it: '6 – Impossibile stare in piedi anche con supporto; in sedia a rotelle' }, value: 6 },
        ],
      },
      // 3. Sitting / Sedestación (0-4)
      {
        text: {
          es: 'Sedestación (Sitting): ¿Puede mantener el tronco erguido sin apoyo de espalda ni brazos?',
          en: 'Sitting: Can they maintain an upright trunk without back or arm support?',
          de: 'Sitzen (Sitting): Kann der Patient den Rumpf aufrecht halten ohne Rücken- oder Armstütze?',
          it: 'Postura seduta (Sitting): Riesce a mantenere il tronco eretto senza supporto dorsale né dei braccioli?',
        },
        help: {
          es: 'Vamos a ver si puede sentarse en el borde de la cama sin agarrarse. Si nota que cuando está sentado en una silla sin brazos el cuerpo se le va hacia los lados o hacia adelante, eso es un signo importante.',
          en: 'We will see if they can sit on the edge of the bed without holding on. If you notice that when sitting in an armless chair their body tilts to the sides or forwards, that is an important sign.',
          de: 'Wir schauen, ob der Patient auf dem Bettrand sitzen kann, ohne sich festzuhalten. Wenn er auf einem Stuhl ohne Armlehnen seitlich oder vorwärts kippt, ist das ein wichtiges Zeichen.',
          it: 'Vedremo se riesce a sedersi sul bordo del letto senza tenersi. Se nota che seduto su una sedia senza braccioli il corpo gli va di lato o in avanti, è un segno importante.',
        },
        options: [
          { label: { es: '0 – Normal; tronco estable sentado sin apoyo de espalda ni brazos', en: '0 – Normal; stable trunk in unsupported sitting', de: '0 – Normal; stabiler Rumpf im ungestützten Sitzen', it: '0 – Normale; tronco stabile seduto senza supporto' }, value: 0 },
          { label: { es: '1 – Leve inestabilidad; balanceo intermitente del tronco', en: '1 – Slight instability; intermittent trunk swaying', de: '1 – Leichte Instabilität; intermittierendes Rumpfschwanken', it: '1 – Lieve instabilità; oscillazione intermittente del tronco' }, value: 1 },
          { label: { es: '2 – Inestabilidad moderada; balanceo persistente del tronco', en: '2 – Moderate instability; persistent trunk swaying', de: '2 – Mäßige Instabilität; anhaltendes Rumpfschwanken', it: '2 – Instabilità moderata; oscillazione persistente del tronco' }, value: 2 },
          { label: { es: '3 – Inestabilidad marcada; solo posible apoyándose en los brazos', en: '3 – Marked instability; only possible with arm support', de: '3 – Deutliche Instabilität; nur mit Armstütze möglich', it: '3 – Instabilità marcata; solo possibile con supporto delle braccia' }, value: 3 },
          { label: { es: '4 – Imposible sentarse sin apoyo', en: '4 – Impossible to sit without support', de: '4 – Unmöglich ohne Stütze zu sitzen', it: '4 – Impossibile sedersi senza supporto' }, value: 4 },
        ],
      },
      // 4. Speech / Habla (0-4)
      {
        text: {
          es: 'Habla (Speech): ¿Existe disartria (dificultad para articular) o escansión (hablar a sacudidas)?',
          en: 'Speech: Is there dysarthria (difficulty articulating) or scanning speech (jerky delivery)?',
          de: 'Sprache (Speech): Liegt Dysarthrie (Artikulationsschwierigkeiten) oder skandierendes Sprechen vor?',
          it: 'Linguaggio (Speech): È presente disartria (difficoltà di articolazione) o eloquio scandito (a scatti)?',
        },
        help: {
          es: 'Escuchemos cómo pronuncia. A veces las palabras suenan arrastradas o como si le costara separar las sílabas. Díganos si personas extrañas a la familia ya no logran entender lo que dice.',
          en: 'Let us listen to how they pronounce words. Sometimes words sound slurred or as though it is an effort to separate the syllables. Tell us if strangers can no longer understand what they say.',
          de: 'Lassen Sie uns hören, wie er ausspricht. Manchmal klingen Wörter verwaschen oder als ob es ihm schwerfällt, Silben zu trennen. Sagen Sie uns, ob Fremde nicht mehr verstehen, was er sagt.',
          it: 'Ascoltiamo come pronuncia. A volte le parole suonano strascicate o come se facesse fatica a separare le sillabe. Ci dica se persone estranee alla famiglia non riescono più a capire quello che dice.',
        },
        options: [
          { label: { es: '0 – Normal', en: '0 – Normal', de: '0 – Normal', it: '0 – Normale' }, value: 0 },
          { label: { es: '1 – Leve alteración; fácilmente comprensible', en: '1 – Slight disturbance; easily understood', de: '1 – Leichte Störung; gut verständlich', it: '1 – Lieve alterazione; facilmente comprensibile' }, value: 1 },
          { label: { es: '2 – Claramente anormal; ocasionalmente difícil de entender', en: '2 – Clearly abnormal; occasionally difficult to understand', de: '2 – Deutlich abnormal; gelegentlich schwer verständlich', it: '2 – Chiaramente anormale; occasionalmente difficile da capire' }, value: 2 },
          { label: { es: '3 – Disartria marcada; difícil de entender la mayor parte del tiempo', en: '3 – Marked dysarthria; mostly difficult to understand', de: '3 – Ausgeprägte Dysarthrie; meistens schwer verständlich', it: '3 – Disartria marcata; difficile da capire per la maggior parte del tempo' }, value: 3 },
          { label: { es: '4 – Anartria; imposible entender', en: '4 – Anarthria; impossible to understand', de: '4 – Anarthrie; unmöglich zu verstehen', it: '4 – Anartria; impossibile capire' }, value: 4 },
        ],
      },
      // 5. Finger-to-nose / Dismetría (0-4)
      {
        text: {
          es: 'Dismetría (Finger-to-nose): ¿Llega el dedo al objetivo con precisión o se pasa de largo?',
          en: 'Dysmetria (Finger-to-nose): Does the finger reach the target precisely or overshoot?',
          de: 'Dysmetrie (Finger-Nase): Trifft der Finger das Ziel präzise oder geht er vorbei?',
          it: 'Dismetria (Dito-Naso): Il dito raggiunge il bersaglio con precisione o va oltre?',
        },
        help: {
          es: 'Le pediremos que se toque la nariz. Si nota que su familiar "falla la puntería" al intentar coger un vaso o al abrocharse un botón, es porque la distancia y la dirección del movimiento están afectadas.',
          en: 'We will ask them to touch their nose. If you notice your relative "misses the target" when trying to pick up a glass or button a shirt, it is because the distance and direction of movement are affected.',
          de: 'Wir bitten ihn, sich die Nase zu berühren. Wenn er beim Greifen nach einem Glas oder beim Zuknöpfen "danebentrifft", sind Distanz und Richtung der Bewegung beeinträchtigt.',
          it: 'Gli chiederemo di toccarsi il naso. Se nota che il suo familiare "manca il bersaglio" tentando di prendere un bicchiere o abbottonarsi, è perché la distanza e la direzione del movimento sono compromesse.',
        },
        options: [
          { label: { es: '0 – Sin dismetría', en: '0 – No dysmetria', de: '0 – Keine Dysmetrie', it: '0 – Nessuna dismetria' }, value: 0 },
          { label: { es: '1 – Leve dismetría', en: '1 – Slight dysmetria', de: '1 – Leichte Dysmetrie', it: '1 – Lieve dismetria' }, value: 1 },
          { label: { es: '2 – Dismetría claramente presente', en: '2 – Clearly present dysmetria', de: '2 – Deutliche Dysmetrie', it: '2 – Dismetria chiaramente presente' }, value: 2 },
          { label: { es: '3 – Dismetría marcada', en: '3 – Marked dysmetria', de: '3 – Ausgeprägte Dysmetrie', it: '3 – Dismetria marcata' }, value: 3 },
          { label: { es: '4 – Dismetría grave; incapaz de realizar el movimiento', en: '4 – Severe dysmetria; unable to perform the movement', de: '4 – Schwere Dysmetrie; Bewegung nicht ausführbar', it: '4 – Dismetria grave; impossibile eseguire il movimento' }, value: 4 },
        ],
      },
      // 6. Finger-chase / Temblor de intención (0-4)
      {
        text: {
          es: 'Temblor de intención (Finger-chase): ¿Aparece un temblor que aumenta justo cuando va a alcanzar un objeto?',
          en: 'Intention tremor (Finger-chase): Does a tremor appear that increases just as they are about to reach an object?',
          de: 'Intentionstremor (Finger-Folge): Tritt ein Tremor auf, der zunimmt, kurz bevor der Finger ein Objekt erreicht?',
          it: 'Tremore intenzionale (Finger-chase): Compare un tremore che aumenta proprio quando sta per raggiungere un oggetto?',
        },
        help: {
          es: 'Observe si la mano le tiembla más justo en el momento final de alcanzar algo (como la cuchara al llegar a la boca). No es un temblor de reposo, es un temblor que aparece con la intención de moverse.',
          en: 'Observe whether the hand trembles more at the final moment of reaching something (like a spoon reaching the mouth). It is not a resting tremor; it is a tremor that appears with the intention to move.',
          de: 'Achten Sie darauf, ob die Hand im letzten Moment des Greifens stärker zittert (z. B. Löffel beim Mund). Es ist kein Ruhetremor, sondern ein Tremor der mit der Bewegungsabsicht auftritt.',
          it: 'Osservi se la mano trema di più nel momento finale di raggiungere qualcosa (come il cucchiaio che arriva alla bocca). Non è un tremore a riposo, ma un tremore che compare con l\'intenzione di muoversi.',
        },
        options: [
          { label: { es: '0 – Sin temblor de intención', en: '0 – No intention tremor', de: '0 – Kein Intentionstremor', it: '0 – Nessun tremore intenzionale' }, value: 0 },
          { label: { es: '1 – Leve temblor de intención', en: '1 – Slight intention tremor', de: '1 – Leichter Intentionstremor', it: '1 – Lieve tremore intenzionale' }, value: 1 },
          { label: { es: '2 – Temblor de intención moderado, claramente presente', en: '2 – Moderate, clearly present intention tremor', de: '2 – Mäßiger, deutlicher Intentionstremor', it: '2 – Tremore intenzionale moderato, chiaramente presente' }, value: 2 },
          { label: { es: '3 – Temblor de intención marcado', en: '3 – Marked intention tremor', de: '3 – Ausgeprägter Intentionstremor', it: '3 – Tremore intenzionale marcato' }, value: 3 },
          { label: { es: '4 – Temblor de intención grave; imposible completar la tarea', en: '4 – Severe intention tremor; impossible to complete task', de: '4 – Schwerer Intentionstremor; Aufgabe nicht ausführbar', it: '4 – Tremore intenzionale grave; impossibile completare il compito' }, value: 4 },
        ],
      },
      // 7. Fast alternating hand movements / Diadococinesia (0-4)
      {
        text: {
          es: 'Diadococinesia (Fast hands): ¿Puede realizar movimientos rápidos y rítmicos (como "hacer tortitas")?',
          en: 'Dysdiadochokinesia (Fast hands): Can they perform rapid rhythmic movements (like "clapping hands alternately")?',
          de: 'Dysdiadochokinese (Schnelle Hände): Kann der Patient schnelle rhythmische Bewegungen ausführen (wie "abwechselndes Klatschen")?',
          it: 'Disdiadococinesia (Mani veloci): Riesce a eseguire movimenti rapidi e ritmici (come "fare le frittelle")?',
        },
        help: {
          es: 'Le pedimos que gire las manos rápido sobre sus muslos. Si nota que los movimientos de las manos se vuelven torpes, lentos o pierden el ritmo al realizar tareas repetitivas, anótelo.',
          en: 'We ask them to rapidly rotate their hands on their thighs. If you notice that hand movements become clumsy, slow or lose their rhythm when performing repetitive tasks, note it.',
          de: 'Wir bitten ihn, die Hände schnell auf den Oberschenkeln zu drehen. Wenn Handbewegungen bei wiederholten Aufgaben ungeschickt, langsam oder rhythmisch unregelmäßig werden, notieren Sie es.',
          it: 'Gli chiediamo di ruotare rapidamente le mani sulle cosce. Se nota che i movimenti delle mani diventano goffi, lenti o perdono il ritmo nei compiti ripetitivi, lo annoti.',
        },
        options: [
          { label: { es: '0 – Normal; movimientos rítmicos y regulares', en: '0 – Normal; rhythmic and regular movements', de: '0 – Normal; rhythmische und regelmäßige Bewegungen', it: '0 – Normale; movimenti ritmici e regolari' }, value: 0 },
          { label: { es: '1 – Levemente irregular o lento', en: '1 – Slightly irregular or slow', de: '1 – Leicht unregelmäßig oder langsam', it: '1 – Leggermente irregolare o lento' }, value: 1 },
          { label: { es: '2 – Claramente irregular o lento; todos los movimientos realizados', en: '2 – Clearly irregular or slow; all movements completed', de: '2 – Deutlich unregelmäßig oder langsam; alle Bewegungen ausgeführt', it: '2 – Chiaramente irregolare o lento; tutti i movimenti completati' }, value: 2 },
          { label: { es: '3 – Muy irregular; algunos movimientos no pueden realizarse', en: '3 – Very irregular; some movements cannot be performed', de: '3 – Sehr unregelmäßig; einige Bewegungen nicht ausführbar', it: '3 – Molto irregolare; alcuni movimenti non possono essere eseguiti' }, value: 3 },
          { label: { es: '4 – Imposible realizar los movimientos', en: '4 – Unable to perform the movements', de: '4 – Unmöglich, die Bewegungen auszuführen', it: '4 – Impossibile eseguire i movimenti' }, value: 4 },
        ],
      },
      // 8. Heel-to-shin / Talón-Rodilla (0-4)
      {
        text: {
          es: 'Talón-Rodilla (Heel-to-shin): ¿Puede deslizar el talón por la espinilla de forma recta y fluida?',
          en: 'Heel-to-shin: Can they slide the heel along the shin in a straight and smooth movement?',
          de: 'Fersen-Schienbein (Heel-to-shin): Kann der Patient die Ferse gerade und flüssig am Schienbein entlanggleiten lassen?',
          it: 'Tallone-Ginocchio (Heel-to-shin): Riesce a far scorrere il tallone lungo la tibia in modo retto e fluido?',
        },
        help: {
          es: 'Es una prueba de coordinación para las piernas. Si al vestirse nota que su familiar no puede dirigir el pie correctamente hacia el pantalón o si el talón se le resbala hacia los lados constantemente, es un signo de progresión.',
          en: 'It is a coordination test for the legs. If when dressing you notice your relative cannot direct their foot properly towards the trouser leg, or if the heel constantly slips sideways, it is a sign of progression.',
          de: 'Es ist ein Koordinationstest für die Beine. Wenn beim Anziehen der Fuß nicht richtig in die Hose dirigiert werden kann oder die Ferse ständig seitlich wegrutscht, ist das ein Zeichen der Progression.',
          it: 'È un test di coordinazione per le gambe. Se nel vestirsi nota che il suo familiare non riesce a dirigere il piede correttamente verso il pantalone o il tallone scivola costantemente di lato, è un segno di progressione.',
        },
        options: [
          { label: { es: '0 – Normal; talón desliza recto y fluido por la espinilla', en: '0 – Normal; heel slides straight and smoothly along the shin', de: '0 – Normal; Ferse gleitet gerade und flüssig entlang des Schienbeins', it: '0 – Normale; tallone scorre dritto e fluido lungo la tibia' }, value: 0 },
          { label: { es: '1 – Leve dismetría o temblor al deslizar el talón', en: '1 – Slight dysmetria or tremor when sliding the heel', de: '1 – Leichte Dysmetrie oder Tremor beim Gleiten der Ferse', it: '1 – Lieve dismetria o tremore nel far scivolare il tallone' }, value: 1 },
          { label: { es: '2 – Moderada dismetría o temblor; claramente anormal', en: '2 – Moderate dysmetria or tremor; clearly abnormal', de: '2 – Mäßige Dysmetrie oder Tremor; deutlich abnormal', it: '2 – Dismetria o tremore moderato; chiaramente anormale' }, value: 2 },
          { label: { es: '3 – Marcada dismetría o temblor', en: '3 – Marked dysmetria or tremor', de: '3 – Ausgeprägte Dysmetrie oder Tremor', it: '3 – Dismetria o tremore marcato' }, value: 3 },
          { label: { es: '4 – Incapaz de realizar el movimiento', en: '4 – Unable to perform the movement', de: '4 – Bewegung nicht ausführbar', it: '4 – Impossibile eseguire il movimento' }, value: 4 },
        ],
      },
    ],
  },

  // ── NPI ──────────────────────────────────────────────────────────────
  NPI: {
    group: 'symptomatic',
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
    group: 'symptomatic',
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
    group: 'symptomatic',
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

  // ── RBD1Q ─────────────────────────────────────────────────────────────
  RBD1Q: {
    group: 'asymptomatic',
    doi: '10.1002/mds.25037',
    questions: [
      {
        text: {
          es: '¿Alguna vez le han dicho, o ha sospechado usted mismo, que parece "actuar en sus sueños" mientras duerme (por ejemplo, dar puñetazos, agitar los brazos en el aire, hacer movimientos de correr, etc.)?',
          en: 'Have you ever been told, or suspected yourself, that you seem to "act out your dreams" while asleep (e.g. punching, swinging your arms in the air, making running movements, etc.)?',
          de: 'Wurde Ihnen jemals gesagt oder haben Sie selbst vermutet, dass Sie Ihre Träume im Schlaf "ausagieren" (z. B. schlagen, Arme schwingen, Laufbewegungen machen usw.)?',
          it: 'Le è mai stato detto, o lo ha sospettato lei stesso, che sembra "agire i suoi sogni" mentre dorme (ad es. dare pugni, agitare le braccia in aria, fare movimenti di corsa, ecc.)?',
        },
        help: {
          es: 'Respondiente: Paciente y/o compañero/a de cama. Frecuencia: Anual (reducir a 6 meses si hay cambio). Una respuesta positiva indica un posible trastorno de conducta durante el sueño REM, marcador temprano de enfermedades neurodegenerativas.',
          en: 'Respondent: Patient and/or bed partner. Frequency: Annual (reduce to 6 months if change occurs). A positive answer indicates a possible REM sleep behaviour disorder, an early marker of neurodegenerative diseases.',
          de: 'Befragter: Patient und/oder Bettpartner. Häufigkeit: Jährlich (auf 6 Monate reduzieren bei Änderung). Eine positive Antwort weist auf eine mögliche REM-Schlafverhaltensstörung hin, ein früher Marker neurodegenerativer Erkrankungen.',
          it: 'Rispondente: Paziente e/o partner di letto. Frequenza: Annuale (ridurre a 6 mesi in caso di cambiamento). Una risposta positiva indica un possibile disturbo comportamentale del sonno REM, marcatore precoce di malattie neurodegenerative.',
        },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
    ],
  },

  // ── MBI-C ─────────────────────────────────────────────────────────────
  MBIC: {
    group: 'asymptomatic',
    doi: '10.1002/mds.25037',
    questions: [
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Ha perdido interés en sus aficiones o actividades habituales?',
          en: 'Has the patient lost interest in their hobbies or usual activities?',
          de: 'Hat der Patient das Interesse an seinen Hobbys oder üblichen Aktivitäten verloren?',
          it: 'Ha perso interesse per i suoi hobby o le attività abituali?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Ha perdido interés en pasar tiempo con familia o amigos?',
          en: 'Has the patient lost interest in spending time with family or friends?',
          de: 'Hat der Patient das Interesse verloren, Zeit mit Familie oder Freunden zu verbringen?',
          it: 'Ha perso interesse nel trascorrere tempo con la famiglia o gli amici?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Muestra menos entusiasmo por sus intereses habituales?',
          en: 'Does the patient show less enthusiasm for their usual interests?',
          de: 'Zeigt der Patient weniger Begeisterung für seine üblichen Interessen?',
          it: 'Mostra meno entusiasmo per i suoi interessi abituali?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Parece menos motivado para iniciar actividades por sí mismo?',
          en: 'Does the patient seem less motivated to start activities on their own?',
          de: 'Scheint der Patient weniger motiviert, Aktivitäten selbstständig zu beginnen?',
          it: 'Sembra meno motivato ad avviare attività da solo?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Le cuesta más tomar decisiones o planificar cosas?',
          en: 'Does the patient have more difficulty making decisions or planning things?',
          de: 'Fällt es dem Patienten schwerer, Entscheidungen zu treffen oder Dinge zu planen?',
          it: 'Ha più difficoltà a prendere decisioni o pianificare le cose?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio A: Motivación disminuida (Apatía)',
          en: 'Domain A: Decreased Motivation (Apathy)',
          de: 'Domäne A: Verminderte Motivation (Apathie)',
          it: 'Dominio A: Motivazione ridotta (Apatia)',
        },
        text: {
          es: '¿Parece emocionalmente más distante o indiferente a lo que sucede a su alrededor?',
          en: 'Does the patient seem emotionally more distant or indifferent to what happens around them?',
          de: 'Scheint der Patient emotional distanzierter oder gleichgültiger gegenüber dem, was um ihn herum passiert?',
          it: 'Sembra emotivamente più distante o indifferente a ciò che succede intorno a lui/lei?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Se siente más triste o con bajo estado de ánimo que antes?',
          en: 'Does the patient feel sadder or have a lower mood than before?',
          de: 'Fühlt sich der Patient trauriger oder hat er eine niedrigere Stimmung als zuvor?',
          it: 'Si sente più triste o di umore basso rispetto a prima?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Ha perdido el placer o la capacidad de disfrutar de actividades que antes le gustaban?',
          en: 'Has the patient lost pleasure or the ability to enjoy activities they previously liked?',
          de: 'Hat der Patient die Freude oder Fähigkeit verloren, Aktivitäten zu genießen, die ihm früher gefallen haben?',
          it: 'Ha perso il piacere o la capacità di godere di attività che prima gli/le piacevano?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Muestra sentimientos de desesperanza sobre el futuro?',
          en: 'Does the patient show feelings of hopelessness about the future?',
          de: 'Zeigt der Patient Gefühle der Hoffnungslosigkeit bezüglich der Zukunft?',
          it: 'Mostra sentimenti di disperazione riguardo al futuro?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Expresa sentimientos de culpa o autocrítica excesiva?',
          en: 'Does the patient express feelings of guilt or excessive self-criticism?',
          de: 'Äußert der Patient Schuldgefühle oder übermäßige Selbstkritik?',
          it: 'Esprime sentimenti di colpa o autocritica eccessiva?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Está más ansioso o preocupado que antes sin razón aparente?',
          en: 'Is the patient more anxious or worried than before without apparent reason?',
          de: 'Ist der Patient ängstlicher oder besorgter als zuvor ohne ersichtlichen Grund?',
          it: 'È più ansioso/a o preoccupato/a di prima senza ragione apparente?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio B: Desregulación afectiva (Estado de ánimo / Ansiedad)',
          en: 'Domain B: Affective Dysregulation (Mood / Anxiety)',
          de: 'Domäne B: Affektive Dysregulation (Stimmung / Angst)',
          it: 'Dominio B: Disregolazione affettiva (Umore / Ansia)',
        },
        text: {
          es: '¿Tiene ataques de pánico o momentos de angustia intensa?',
          en: 'Does the patient have panic attacks or moments of intense distress?',
          de: 'Hat der Patient Panikattacken oder Momente intensiver Angst?',
          it: 'Ha attacchi di panico o momenti di angoscia intensa?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Se muestra más agitado, inquieto o nervioso que antes?',
          en: 'Is the patient more agitated, restless or nervous than before?',
          de: 'Ist der Patient unruhiger, rastloser oder nervöser als zuvor?',
          it: 'È più agitato/a, irrequieto/a o nervoso/a di prima?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Tiene estallidos de mal genio o irritabilidad desproporcionados?',
          en: 'Does the patient have disproportionate outbursts of bad temper or irritability?',
          de: 'Hat der Patient unverhältnismäßige Ausbrüche von Jähzorn oder Reizbarkeit?',
          it: 'Ha scatti d'ira o irritabilità sproporzionati?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Muestra comportamientos agresivos verbales (gritos, insultos)?',
          en: 'Does the patient show verbal aggressive behaviour (shouting, insults)?',
          de: 'Zeigt der Patient verbale Aggressionen (Schreien, Beleidigungen)?',
          it: 'Mostra comportamenti aggressivi verbali (urla, insulti)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Muestra comportamientos agresivos físicos hacia personas u objetos?',
          en: 'Does the patient show physical aggressive behaviour towards people or objects?',
          de: 'Zeigt der Patient körperliche Aggressionen gegenüber Personen oder Gegenständen?',
          it: 'Mostra comportamenti aggressivi fisici verso persone o oggetti?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Actúa impulsivamente sin pensar en las consecuencias?',
          en: 'Does the patient act impulsively without thinking of the consequences?',
          de: 'Handelt der Patient impulsiv, ohne an die Folgen zu denken?',
          it: 'Agisce impulsivamente senza pensare alle conseguenze?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Toma decisiones apresuradas o arriesgadas (compras innecesarias, apuestas, gastos)?',
          en: 'Does the patient make hasty or risky decisions (unnecessary purchases, gambling, spending)?',
          de: 'Trifft der Patient übereilte oder riskante Entscheidungen (unnötige Käufe, Glücksspiel, Ausgaben)?',
          it: 'Prende decisioni affrettate o rischiose (acquisti inutili, scommesse, spese)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Tiene comportamientos repetitivos o compulsivos (verificar, ordenar, limpiar)?',
          en: 'Does the patient have repetitive or compulsive behaviours (checking, ordering, cleaning)?',
          de: 'Hat der Patient repetitive oder zwanghafte Verhaltensweisen (Überprüfen, Ordnen, Putzen)?',
          it: 'Ha comportamenti ripetitivi o compulsivi (verificare, ordinare, pulire)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Muestra rigidez o se resiste a cambios en las rutinas?',
          en: 'Does the patient show rigidity or resistance to changes in routine?',
          de: 'Zeigt der Patient Starrheit oder Widerstand gegen Veränderungen in den Routinen?',
          it: 'Mostra rigidità o resistenza ai cambiamenti nelle routine?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Realiza actividades repetitivas sin propósito (caminar de un lado a otro, mover objetos)?',
          en: 'Does the patient perform purposeless repetitive activities (pacing, moving objects)?',
          de: 'Führt der Patient zwecklose repetitive Aktivitäten durch (Auf-und-ab-Gehen, Gegenstände verschieben)?',
          it: 'Esegue attività ripetitive senza scopo (camminare avanti e indietro, spostare oggetti)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Ha aumentado su apetito o come más compulsivamente que antes?',
          en: 'Has the patient's appetite increased or do they eat more compulsively than before?',
          de: 'Hat sich der Appetit des Patienten erhöht oder isst er zwanghafter als zuvor?',
          it: 'È aumentato il suo appetito o mangia in modo più compulsivo di prima?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Ha habido cambios en sus preferencias alimentarias (comer solo dulces, alimentos específicos)?',
          en: 'Have there been changes in food preferences (eating only sweets, specific foods)?',
          de: 'Gab es Veränderungen in den Nahrungsmittelpräferenzen (nur Süßes essen, bestimmte Lebensmittel)?',
          it: 'Ci sono stati cambiamenti nelle preferenze alimentari (mangiare solo dolci, alimenti specifici)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio C: Descontrol de impulsos (Agitación / Impulsividad)',
          en: 'Domain C: Impulse Dyscontrol (Agitation / Impulsivity)',
          de: 'Domäne C: Impulskontrollstörung (Agitation / Impulsivität)',
          it: 'Dominio C: Discontrollo degli impulsi (Agitazione / Impulsività)',
        },
        text: {
          es: '¿Busca recompensas o gratificaciones de forma excesiva?',
          en: 'Does the patient seek rewards or gratification excessively?',
          de: 'Sucht der Patient exzessiv nach Belohnungen oder Befriedigung?',
          it: 'Cerca ricompense o gratificazioni in modo eccessivo?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio D: Inadecuación social (Pérdida de tacto social)',
          en: 'Domain D: Social Inappropriateness (Loss of Social Tact)',
          de: 'Domäne D: Soziale Unangemessenheit (Verlust sozialer Kompetenz)',
          it: 'Dominio D: Inadeguatezza sociale (Perdita del tatto sociale)',
        },
        text: {
          es: '¿Hace comentarios inapropiados o socialmente inadecuados?',
          en: 'Does the patient make inappropriate or socially inadequate comments?',
          de: 'Macht der Patient unangemessene oder sozial unpassende Kommentare?',
          it: 'Fa commenti inappropriati o socialmente inadeguati?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio D: Inadecuación social (Pérdida de tacto social)',
          en: 'Domain D: Social Inappropriateness (Loss of Social Tact)',
          de: 'Domäne D: Soziale Unangemessenheit (Verlust sozialer Kompetenz)',
          it: 'Dominio D: Inadeguatezza sociale (Perdita del tatto sociale)',
        },
        text: {
          es: '¿Ha perdido sensibilidad hacia los sentimientos de los demás?',
          en: 'Has the patient lost sensitivity towards the feelings of others?',
          de: 'Hat der Patient die Sensibilität für die Gefühle anderer verloren?',
          it: 'Ha perso sensibilità verso i sentimenti degli altri?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio D: Inadecuación social (Pérdida de tacto social)',
          en: 'Domain D: Social Inappropriateness (Loss of Social Tact)',
          de: 'Domäne D: Soziale Unangemessenheit (Verlust sozialer Kompetenz)',
          it: 'Dominio D: Inadeguatezza sociale (Perdita del tatto sociale)',
        },
        text: {
          es: '¿Muestra menos empatía o preocupación por otros?',
          en: 'Does the patient show less empathy or concern for others?',
          de: 'Zeigt der Patient weniger Empathie oder Sorge für andere?',
          it: 'Mostra meno empatia o preoccupazione per gli altri?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio D: Inadecuación social (Pérdida de tacto social)',
          en: 'Domain D: Social Inappropriateness (Loss of Social Tact)',
          de: 'Domäne D: Soziale Unangemessenheit (Verlust sozialer Kompetenz)',
          it: 'Dominio D: Inadeguatezza sociale (Perdita del tatto sociale)',
        },
        text: {
          es: '¿Se comporta de manera socialmente inapropiada (acercarse demasiado a extraños, tocar)?',
          en: 'Does the patient behave in socially inappropriate ways (approaching strangers too closely, touching)?',
          de: 'Verhält sich der Patient sozial unangemessen (Fremde zu nahe treten, berühren)?',
          it: 'Si comporta in modo socialmente inappropriato (avvicinarsi troppo agli estranei, toccare)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio D: Inadecuación social (Pérdida de tacto social)',
          en: 'Domain D: Social Inappropriateness (Loss of Social Tact)',
          de: 'Domäne D: Soziale Unangemessenheit (Verlust sozialer Kompetenz)',
          it: 'Dominio D: Inadeguatezza sociale (Perdita del tatto sociale)',
        },
        text: {
          es: '¿Ha perdido el tacto o la diplomacia en situaciones sociales?',
          en: 'Has the patient lost tact or diplomacy in social situations?',
          de: 'Hat der Patient Takt oder Diplomatie in sozialen Situationen verloren?',
          it: 'Ha perso il tatto o la diplomazia nelle situazioni sociali?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio E: Alteraciones perceptuales o del pensamiento',
          en: 'Domain E: Perceptual or Thought Disturbances',
          de: 'Domäne E: Wahrnehmungs- oder Denkstörungen',
          it: 'Dominio E: Alterazioni percettive o del pensiero',
        },
        text: {
          es: '¿Muestra suspicacia o desconfianza exagerada hacia otros?',
          en: 'Does the patient show exaggerated suspiciousness or distrust of others?',
          de: 'Zeigt der Patient übertriebenes Misstrauen oder Argwohn gegenüber anderen?',
          it: 'Mostra sospettosità o sfiducia esagerata verso gli altri?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio E: Alteraciones perceptuales o del pensamiento',
          en: 'Domain E: Perceptual or Thought Disturbances',
          de: 'Domäne E: Wahrnehmungs- oder Denkstörungen',
          it: 'Dominio E: Alterazioni percettive o del pensiero',
        },
        text: {
          es: '¿Tiene creencias falsas sobre que le roban o le persiguen?',
          en: 'Does the patient have false beliefs about being robbed or persecuted?',
          de: 'Hat der Patient falsche Überzeugungen, bestohlen oder verfolgt zu werden?',
          it: 'Ha false credenze di essere derubato/a o perseguitato/a?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio E: Alteraciones perceptuales o del pensamiento',
          en: 'Domain E: Perceptual or Thought Disturbances',
          de: 'Domäne E: Wahrnehmungs- oder Denkstörungen',
          it: 'Dominio E: Alterazioni percettive o del pensiero',
        },
        text: {
          es: '¿Tiene ideas de grandeza o se siente especialmente importante?',
          en: 'Does the patient have grandiose ideas or feel particularly important?',
          de: 'Hat der Patient Größenideen oder fühlt er sich besonders wichtig?',
          it: 'Ha idee di grandiosità o si sente particolarmente importante?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio E: Alteraciones perceptuales o del pensamiento',
          en: 'Domain E: Perceptual or Thought Disturbances',
          de: 'Domäne E: Wahrnehmungs- oder Denkstörungen',
          it: 'Dominio E: Alterazioni percettive o del pensiero',
        },
        text: {
          es: '¿Escucha voces o sonidos que otros no escuchan?',
          en: 'Does the patient hear voices or sounds that others do not hear?',
          de: 'Hört der Patient Stimmen oder Geräusche, die andere nicht hören?',
          it: 'Sente voci o suoni che gli altri non sentono?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
      {
        domain: {
          es: 'Dominio E: Alteraciones perceptuales o del pensamiento',
          en: 'Domain E: Perceptual or Thought Disturbances',
          de: 'Domäne E: Wahrnehmungs- oder Denkstörungen',
          it: 'Dominio E: Alterazioni percettive o del pensiero',
        },
        text: {
          es: '¿Ve cosas que otros no ven (sombras, personas, animales)?',
          en: 'Does the patient see things that others do not see (shadows, people, animals)?',
          de: 'Sieht der Patient Dinge, die andere nicht sehen (Schatten, Personen, Tiere)?',
          it: 'Vede cose che gli altri non vedono (ombre, persone, animali)?',
        },
        help: { es: '', en: '', de: '', it: '' },
        options: [
          { label: { es: 'No', en: 'No', de: 'Nein', it: 'No' }, value: 0 },
          { label: { es: 'Sí', en: 'Yes', de: 'Ja', it: 'Sì' }, value: 1 },
        ],
      },
    ],
  },
};
