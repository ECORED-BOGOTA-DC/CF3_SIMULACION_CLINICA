<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Marco en la evaluación para simulación clínica
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.col-lg-9.offset-lg-1(style="background-color: #13C4FF")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0(style="color: #2C04BF") La simulación clínica definida como:
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-left") Un conjunto de elementos y herramientas que, integradas, permiten generar estrategias que resultan afianzando técnicas que son aplicadas en una situación o ambiente simulado, permitiendo en los aprendices, instructores u otras personas la obtención de experiencias mediante representación de ambientes de la vida real, con un propósito u objetivo hacia el aprendizaje.
    p.mb-5(data-aos="fade-right") La implementación de prácticas de simulación clínica mejoran destrezas y habilidades,  la evaluación de estos procesos facilita mayor apropiación del conocimiento por medio de la innovación, transformación digital y acciones humanas, representando un beneficio en los procesos de formación, garantizando la retroalimentación y mejora continua. 
      br
      br
      |A través del siguiente video, es posible comprender el marco en la evolución de los programas simulados para el área clínica:
    
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8PI3TwKDrPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5(data-aos="fade-right") Teniendo en cuenta lo enunciado anteriormente sobre proceso de evaluación, en la siguiente tabla, se registran de manera breve las principales características de la evaluación sumativa y la evaluación formativa:

    .titulo-sexto.color-primario
      h5 Tabla 1.
      span Tipos de evaluación
    
    .tabla-a.color-primario.mb-5(data-aos="fade-right")
      table
        caption Nota. Tomado de Xunta (s. f.)
        thead(data-aos="fade-right")
          tr
            th Evaluación sumativa
            th Evaluación formativa
        tbody
          tr
            td Mide, mediante controles y exámenes, lo que los alumnos han aprendido, imputando a los centros la responsabilidad del rendimiento de sus alumnos.
            td Consiste en evaluar el progreso y los conocimientos del alumno de forma frecuente e interactiva.
          tr
            td El objetivo de la evaluación sumativa es evaluar el aprendizaje del estudiante al final de una unidad o de un proyecto al compararlo contra algún estándar o punto de referencia.
            td El objetivo de la evaluación formativa es monitorizar el aprendizaje del estudiante para proporcionar retroalimentación continua.
          tr
            td Tiene una función social: la de asegurar que las características de los estudiantes respondan a las demandas y metas educativas del sistema.
            td La información que se recoge en el proceso formativo se usa para ir modelando las mejoras, en lugar de limitarse a resumir los logros.
          tr
            td Establecer balances fiables de los resultados obtenidos al final de un proceso de enseñanza-aprendizaje. 
            td Es una de las estrategias más efectivas para aumentar el rendimiento escolar.
          tr
            td Un ejemplo es un examen final.
            td Un ejemplo es dibujar un mapa conceptual de la clase para representar una charla impartida por el profesor o un experto.

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.col-lg-9.offset-lg-1(style="background-color: #13C4FF")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0(style="color: #2C04BF") Antes de la simulación se realiza el <em>prebriefing</em>
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p(data-aos="fade-left") En el cual se brinda la información y los antecedentes necesarios para el desarrollo del ambiente; en este punto, también se distribuyen los roles y actividades que deben desarrollarse.
    
    p.mb-5(data-aos="fade-right") Cuando la simulación inicia, la tarea del instructor o facilitador es conducir el evento clínico, observar y consignar las acciones de los participantes (aprendices), manipular el simulador según la intención de la formación. También, los aprendices pueden encontrarse con ruidos o señales, que son aspectos que aparecen durante el desarrollo de la práctica y propenden a orientar y redirigir a los aprendices con la finalidad de llegar a que experimenten una situación cercana a la realidad. Estos pueden ser estímulos auditivos, visuales u olfativos, o también un comentario, pregunta o pista del instructor o simulador. De esta manera, se procura controlar el ambiente de simulación para el logro efectivo del aprendizaje. 


    .d-flex.flex-wrap.flex-xl-nowrap.mb-5.img-text-edit
      .container-bg.col-12.col-xl-9.order-2.order-xl-1
        p(data-aos="fade-right") Al terminar el evento simulado, es importante que se genere el proceso de evaluación, que no solo comprende la estrategia del <em>feedback</em> y la etapa de <em>debriefing</em>, sino que también procura valorar aspectos como la orientación que brinda el instructor o facilitador y el ambiente de simulación <em>per se</em>.
          br
          |En la siguiente figura, se aprecian los criterios a tener en cuenta para evaluar una simulación clínica:
      img.col-xl-6.order-1.order-xl-2.img-maxwidth-movil-1(src="@/assets/curso/temas/tema1/img-1.png" alt="muestra los criterios a tener en cuenta para evaluar una simulación clínica al finalizar el evento simulado")

    .tarjeta.p-4.mb-5(style="background: linear-gradient(0deg, rgba(71, 71, 255, 4%) 5%, white 10%,  white 90%, rgba(71, 71, 255, 4%) 96%); overflow: hidden;")
      .col-lg-11.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 1
          p.mb-0.text-small Criterios de evaluación en una simulación clínica
        .col-lg-11.mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 1030px" data-aos="fade-left" alt="mapa que ilustra los criterios de evaluación en una simulación clínica")
          span.text-small Nota.SENA (2022)

    p.mb-5(data-aos="fade-right") Una vez apropiada la información presentada, se recomienda consultar el siguiente manual de simulación clínica para ampliación de conceptos sobre las estrategias metodológicas en el marco de la evaluación:

    .d-flex.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/manual_de_simulacion_clinica_SLACIP.pdf')" target="_blank" style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
          .anexo__icono
            img(src="@/assets/curso/temas/img-pdf.svg")
          .anexo__texto
            p(style="color: black !important") <b style="color: black !important">Anexo.</b> Criterios Manual de simulación
    Separador 

    .titulo-segundo.color-secundario
      h2#t_1_1 1.1 Buenas prácticas en la aplicación de ambientes en simulación clínica 
    
    p.mb-5(data-aos="fade-right") Las buenas prácticas permiten la implementación y ejecución óptima, eficiente y segura de los ambientes simulados; ideadas para favorecer el objetivo de aprendizaje, se disponen como experiencias sistemáticas, pero flexibles y contextuales. Es por ello que, a medida que la simulación continúa evolucionando, es necesario plantear estándares que garanticen la calidad de las prácticas clínicas simuladas.
      br
      br
      |A continuación, se presentan algunos de los estándares que propone la International Nursing Association for Clinical Simulation and Learning (INACSL, 2016) para consolidar buenas prácticas en la simulación clínica. 

    .tarjeta.p-4.mb-5(style="background: linear-gradient(0deg, rgba(71, 71, 255, 4%) 5%, white 10%,  white 90%, rgba(71, 71, 255, 4%) 96%); overflow: hidden;")
      .col-lg-11.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 2
          p.mb-0.text-small Estándares para garantizar las buenas prácticas en simulación
        .col-lg-6.mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 1030px" data-aos="fade-left" alt="los 6 estándares para garantizar las buenas prácticas en simulación")
          span.text-small Nota.Adaptado de NACSL (2018).

    h3(data-aos="fade-left") a.	Diseño de simulación

    p.mb-5(data-aos="fade-right") Este  estándar pretende garantizar las experiencias basadas en simulación, partiendo de las necesidades, hasta la retroalimentación de la práctica simulada. La consecuencia de no seguir este estándar es desestimar toda la experiencia de simulación.
      br
      br
      |A continuación, se mencionan los criterios del estándar del diseño de simulación:

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-botones
        .row.col-lg-10.mx-auto(titulo="Valoración de necesidades")
          .col-md-6.mb-4.mb-md-auto(data-aos="fade-right")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-4.png' style="max-width: 482px" alt="Imagen que destaca el primer criterio para garantizar buenas prácticas en la simulación clínica")
          .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
            h4 Valoración de necesidades
            p Se presenta como el primer criterio para garantizar buenas prácticas, debido a que implica proporcionar la evidencia de la necesidad de diseñar una experiencia de simulación clínica. Este criterio solicita tener en cuenta:
              br
              br
              |1. El análisis del problema, o causa raíz, de las fortalezas y amenazas de la institución u organización, del grupo de interés, de los datos resultados de otras experiencias de simulación, de los estándares, reglas o normas u otros documentos guía. 
              br
              br
              |2. Valoración del contexto y de los conocimientos, destrezas y habilidades de las personas participantes.

        .row.col-lg-10.mx-auto(titulo="Objetivos medibles")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-5.png' style="max-width: 482px" alt="Imagen que enfatiza la importancia del objetivo general y los objetivos específicos en el diseño de la simulación clínica")
          .col-md-6.mb-4.mb-md-0
            h4 Objetivos medibles
            p El objetivo general y los objetivos específicos son la ruta que se brinda para el diseño de la simulación, es decir, orientan todo el proceso de la práctica clínica; el primero muestra el propósito general, y los segundos se relacionan con las medidas de desempeño de los participantes. Estos deben ser observables y medibles, de manera que se pueda verificar su logro. 
              br
              br
              |Durante el desarrollo de la simulación solo deben revelarse aquellos objetivos que brinden información o contextualicen a los participantes. Y el facilitador o instructor asume la responsabilidad de guiar el logro óptimo de los objetivos en todo el proceso. 

        
        .row.col-lg-10.mx-auto(titulo="Estructuración de la simulación")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-6.png' style="max-width: 482px" alt="Imagen que resalta la importancia de estructurar la experiencia de simulación clínica en base al análisis de las necesidades y objetivos establecidos")
          .col-md-6.mb-4.mb-md-0
            h4 Estructuración de la simulación
            p La estructuración de la experiencia de simulación clínica debe elaborarse con base en el resultado del análisis de las necesidades y de los objetivos planteados. 
              br
              br
              |Posteriormente, es importante seleccionar el formato de simulación: escoger una teoría de aprendizaje y una modalidad pertinente (inmersiva, realidad virtual, híbrida, etc.). Debe haber un entramado teórico, conceptual y contextual que consolide una práctica significativa y con sentido pedagógico.  
        
        .row.col-lg-10.mx-auto(titulo="Diseño de escenarios y casos")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-7.png' style="max-width: 482px" alt="Imagen que destaca la importancia de diseñar casos y escenarios de simulación que cumplan con los objetivos propuestos y se adapten al contexto")
          .col-md-6.mb-4.mb-md-0
            h4 Diseño de escenarios y casos
            p El diseño de los casos y escenarios de la simulación debe garantizar el cumplimiento de los objetivos propuestos de acuerdo con el contexto. Para garantizar las buenas prácticas, es imprescindible partir de casos clínicos reales que brinden los aspectos necesarios para el logro de las metas de aprendizaje propuestas, y que además estén diseñados teniendo en cuenta todas las acciones, decisiones y eventualidades posibles.
              br
              br
              |Para garantizar una buena práctica, es fundamental la creación del guion y las señales, así como la experiencia del diseñador.
        
        .row.col-lg-10.mx-auto(titulo="Uso de diversos tipos de fidelidad")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-8.png' style="max-width: 482px" alt="Imagen que destaca la importancia de involucrar diferentes tipos de fidelidad en la simulación, considerando aspectos físicos, psicológicos y conceptuales que aumentan la complejidad de la práctica simulada y crean una percepción de realismo")
          .col-md-6.mb-4.mb-md-0
            h4 Uso de diversos tipos de fidelidad
            p Involucrar en la simulación diversos tipos de fidelidad teniendo en cuenta los aspectos físicos, psicológicos y conceptuales que complejizan la práctica simulada creando la percepción de realismo y posibilitando a los asistentes a participar notablemente. 
        
        .row.col-lg-10.mx-auto(titulo="Enfoque facilitador centrado en el participante")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-9.png' style="max-width: 482px" alt="Imagen que resalta la importancia de diseñar un escenario simulado centrado en los participantes, teniendo en cuenta sus conocimientos y experiencias")
          .col-md-6.mb-4.mb-md-0
            h4 Enfoque facilitador centrado en el participante
            p Diseñar un escenario simulado centrado en los participantes, sus conocimientos y experiencias, en el cual el papel del instructor es el de facilitar los procesos.
              br
              br
              |Al diseñar el escenario, se debe tener en cuenta el alcance del centro de simulación, recursos, equipos, etc.
        
        .row.col-lg-10.mx-auto(titulo="<em>Prebriefing</em> antesala de la simulación")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-10.png' style="max-width: 482px" alt="Imagen que destaca la importancia de desarrollar un espacio previo a la simulación donde se tengan en cuenta las expectativas y conocimientos de los participantes, y se proporcione la información necesaria para el desarrollo exitoso de la simulación")
          .col-md-6.mb-4.mb-md-0
            h4 <em>Prebriefing</em>: antesala de la simulación
            p Debe desarrollarse un espacio anterior a la simulación en el cual se consideren las expectativas y conocimientos de los participantes y se brinde la información necesaria para el desarrollo de la simulación. Es fundamental asegurar que el <em>prebriefing</em> esté planificado y estructurado, y preferiblemente que pueda ser grabado o escrito para garantizar la estandarización de este momento. 
        
        .row.col-lg-10.mx-auto(titulo="<em>Debriefing</em> retroalimentación de la simulación")
          .col-md-6.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-11.png' style="max-width: 482px" alt="Imagen que resalta la importancia de que la fase de <em>debriefing</em> en la simulación esté diseñada y dirigida por un instructor o facilitador con capacitación formal en técnicas y estrategias de <em>debriefing</em>")
          .col-md-6.mb-4.mb-md-0
            h4 <em>Debriefing</em>: retroalimentación de la simulación
            p Esta fase de la simulación debe estar diseñada y dirigida por un instructor o facilitador que tenga capacitación formal en técnicas y estrategias de <em>debriefing</em>; así, se busca enriquecer el aprendizaje y asegurar la consistencia pedagógica en las experiencias simuladas. 


    h3(data-aos="fade-left") b.	Resultados y objetivos

    p.mb-5(data-aos="fade-right") Este estándar establece que, para garantizar una buena práctica en simulación clínica, todas las experiencias deben iniciar diseñando objetivos medibles, que permitan evidenciar los resultados. 
      br
      br
      |Para tener en cuenta este estándar, se deben abordar los siguientes elementos:
    
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Determinar los resultados de aprendizaje")
        .align-items-center.row.col-lg-10.mx-auto(titulo="<em>Debriefing</em>")
          .col-md-5.mb-4.mb-md-auto.mx-auto(data-aos="fade-right")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-12.jpg' style="max-width: 420px" alt="Imagen que destaca la importancia de que los resultados de aprendizaje en la simulación sean congruentes con la misión de la institución y el programa formativo")
          .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
            p Los resultados de aprendizaje deben ser congruentes con la misión de la institución y el programa formativo. Además, tienen que ser orientados todo el tiempo por los objetivos de aprendizaje a lo largo de todo el escenario simulado. 

      .py-3.py-md-4(titulo="Construir objetivos S.M.A.R.T.")
        .align-items-center.row.col-lg-10.mx-auto(titulo="<em>Debriefing</em>")
          .col-md-5.mb-4.mb-md-auto.mx-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-13.jpg' style="max-width: 420px" alt="Imagen que destaca los principios SMART (Specific, Measurable, Achievable, Relevant, Time-bound) en la definición de objetivos en la simulación")
          .col-md-6.mb-4.mb-md-0
            p Los objetivos se basan en la sigla en inglés <em>SMART (Specific, Measurable, Achievable, Relevant, Time-bound)</em>, que en español significan:
              br
              br
              |<b>Específicos</b>: identificar el quién (participantes), el qué (logro o meta) y el cómo (instrumentos de evaluación del logro) de la práctica simulada.
              br
              |<b>Medibles</b>: emplean un instrumento o formato de evaluación y es esencial en la evaluación de alto nivel.
              br
              |<b>Alcanzables</b>: según el nivel de los participantes y su viabilidad.
              br
              |<b>Realistas</b>: relacionados con el programa formativo, el contexto de las prácticas clínicas, normas, guías y literatura.
              br
              |<b>Basados en etapas</b>: en el marco de un tiempo específico y un modelo y consistentes con los resultados esperados. 

    h3(data-aos="fade-left") c.	Facilitación

    p.mb-5(data-aos="fade-right") Este estándar pretende favorecer el desarrollo de la simulación clínica, de modo que se facilite el cumplimiento de los objetivos y para lo cual es imprescindible el papel del facilitador. No seguir este estándar puede afectar las oportunidades de aprendizaje de los participantes. 
      br
      br
      |Para la aplicación de este estándar se debe tener en cuenta:

    TabsA.color-primario.mb-5
      .tarjeta.p-4(titulo="Facilitación efectiva y<br> facilitador competente" style="background-color: #EDF4FE")
        p(data-aos="fade-right") La facilitación efectiva se genera con la competencia del facilitador que orienta la simulación clínica. Para que un facilitador sea competente, es fundamental que:
        ul(data-aos="fade-right")
          li ●	Tenga una educación formal y específica sobre los ambientes de simulación. 
          li ●	Demuestre y posea conocimientos y habilidades relacionadas con la formación profesional, teorías y modelos de aprendizaje, comprensión del contexto y la diversidad de los participantes. 
          li ●	Incorpore los estándares de las buenas prácticas en el proceso de la simulación.
          li ●	Conozca el funcionamiento y manejo de distintos tipos de simuladores.
          li ●	Retroalimente de manera oportuna y maneje los comentarios y observaciones.
      .tarjeta.p-4(titulo="Actividades preparatorias" style="background-color: #EDF4FE")
        p Son todas aquellas acciones que se ejecutan antes de la experiencia de simulación, en la cual el facilitador tiene por tarea brindar la información relevante para el desarrollo óptimo del ambiente. Aquí, es importante la fase del <em>prebriefing</em>, en la cual la orientación que brinda el instructor será fundamental para el logro de los objetivos de aprendizaje. 
      .tarjeta.p-4(titulo="Pistas y señales <br class='d-flex d-xl-none'>(predeterminadas y<br> no planificadas)" style="background-color: #EDF4FE")
        p Las pistas o señales colaboran en la orientación de la simulación para que los participantes puedan dirigir sus acciones al desarrollo de la práctica y, por consiguiente, el logro de los objetivos. Cuando son predeterminadas, deben incluirse en el diseño de la simulación a modo de previsión y anticipación de las operaciones comunes; en cambio, las no planificadas o salvavidas se dan como respuesta a acciones no anticipadas de los participantes. 
      .tarjeta.p-4(titulo="Apoyo más allá de la <br class='d-flex d-xxl-none'>experiencia simulada" style="background-color: #EDF4FE")
        p La facilitación y el papel del facilitador puede ampliarse más allá de la práctica simulada, debido a que los participantes requieren de mayor tiempo para el <em>feedback</em>, necesitan esclarecer situaciones clínicas o lidiar de manera personal con la situación desarrollada. 
    h3(data-aos="fade-left") d.	Evaluación de los participantes

    p.mb-5(data-aos="fade-right") La evaluación de los participantes es imprescindible para garantizar las buenas prácticas de la simulación clínica. Todas las experiencias de simulación están orientadas al logro de los objetivos, pero no se llega solo con prácticas repetitivas, sino que hay que comprobar que los resultados cumplan con el fin de la situación simulada, y esto solo es posible a través de la evaluación. 
      br
      br
      |Existen unos procedimientos que se deben tener en cuenta para comprender la evaluación de participantes:
    

    LineaTiempoD.color-secundario.linea-tiempo-edit.col-lg-10.col-xl-6.mx-auto.mb-5
      p(numero="1" titulo="Determinar los métodos de evaluación" data-aos="fade-right") Se enfoca en la valoración de un resultado o del logro de un objetivo en un momento particular del proceso de aprendizaje. En el contexto de la simulación, se procura emplear un formato estandarizado que permita obtener un puntaje de aprobación. Para este tipo de evaluación, se debe elegir un formato o instrumento que facilite la valoración del aprendiz y requiere también de un evaluador competente y objetivo. 

      p(numero="2" titulo="Evaluación formativa") Está orientada al logro personal y profesional de los participantes de la simulación. Permite visualizar las aptitudes, las habilidades, las destrezas y los conocimientos de los estudiantes. Además, debe ser continua durante todo el escenario simulado, de manera que se facilite el aprendizaje.

      p(numero="3" titulo="Evaluación sumativa") Se enfoca en la valoración de un resultado o del logro de un objetivo en un momento particular del proceso de aprendizaje. En el contexto de la simulación, se procura emplear un formato estandarizado que permita obtener un puntaje de aprobación. Para este tipo de evaluación, se debe elegir un formato o instrumento que facilite la valoración del aprendiz y requiere también de un evaluador competente y objetivo. 

      p(numero="4" titulo="Evaluación <em>high stakes</em> o de alto nivel ") Este tipo de evaluación se centra en el proceso de aprendizaje final de un estudiante para evaluar el logro de sus objetivos de manera más global. Se ejecuta después de que el participante ha tenido distintas aproximaciones a experiencias de simulación. 

    h3(data-aos="fade-left") e.	Integridad profesional

    p.mb-4(data-aos="fade-right") Durante la experiencia de la simulación, se espera que los comportamientos y las actitudes de los participantes sean éticos y partan de principios personales, como:

    ul.mb-5
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") La honestidad.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") El compromiso.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") El respeto mutuo.
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") La colaboración.
    

    p.mb-5(data-aos="fade-right") Independientemente del rol del participante (facilitador, aprendiz, operador), todos están sujetos a actuar con integridad personal y profesional para desarrollar de forma óptima el ambiente de simulación y lograr los objetivos de aprendizaje. De no cumplirse con este estándar, se puede afectar el ambiente de aprendizaje, las dinámicas del grupo y hasta el autoestima y seguridad de los participantes. 
      br
      br
      |A continuación, se dan las siguientes recomendaciones para el estándar de integridad profesional:

    .col-lg-10.mx-auto.d-flex.flex-wrap.mb-5
      img.col-md-4.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-14.jpg" style="max-width: 295px" data-aos="fade-right" alt="Imagen que resalta la importancia de la integridad profesional en el desarrollo de la práctica simulada")
      .col-md-8.ps-md-4(data-aos="fade-left")
        p.fw-bold -	Fomentar los atributos de la integridad profesional
        p Se centra en aquellos valores y principios que conforman la integridad profesional para el desarrollo de la práctica simulada. En este contexto, se aconseja que el participante promueva actitudes y comportamientos dirigidos a ser integral.
          br
          br
          |Además, este criterio incluye la decisión personal de desenvolverse con integridad profesional y de reconocer los comportamientos o actitudes que pongan en riesgo la práctica simulada, con el fin de disminuirlos y erradicarlos. 
    
    p.mb-5(data-aos="fade-right") -	<b>Seguir los estándares éticos de la profesión</b>
      br
      br
      |Cumplir con los códigos de ética, estándares profesionales, directrices o principios de la profesión, en búsqueda de la excelencia, incorporándolos al ambiente de simulación, como en la siguiente figura:
    
    .tarjeta.p-4.mb-5(style="background: linear-gradient(0deg, rgba(71, 71, 255, 4%) 5%, white 10%,  white 90%, rgba(71, 71, 255, 4%) 96%); overflow: hidden;")
      .col-lg-11.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 3
          p.mb-0.text-small Principios de la integridad profesional
        .col-lg-7.offset-lg-2
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 715px" data-aos="fade-left" alt="Imagen que destaca la importancia de cumplir con los códigos de ética, estándares profesionales, directrices o principios de la profesión en el contexto de la práctica simulada")
          span.text-small Nota. SENA (2022).
    
    .d-flex.flex-wrap.mb-5
      .col-lg-7.pe-lg-4.order-2.order-lg-1
        p.mb-4(data-aos="fade-right") <b>-	Crear y mantener ambientes seguros</b>
          br
          br
          |Generar espacios de comunicación asertiva entre los participantes y promover las relaciones profesionales, de manera que se logre un <em>feedback</em> honesto, efectivo y respetuoso.
        p.mb-4(data-aos="fade-right") <b>-	Exigir confidencialidad y políticas de privacidad</b>
          br
          br
          |este criterio tiene por objetivo garantizar la integridad del participante frente a lo ocurrido en la simulación, asegurar los documentos de tipo escrito o audiovisual, compartirlos solo con aquellos individuos que tengan un interés académico legítimo o, en algunos casos, destruirlos. Este criterio prioriza la conformación y aceptación de políticas de confidencialidad de la práctica simulada.
        h3.mb-4 f.	Operaciones
        
        p Para garantizar las buenas prácticas en la simulación clínica, no solo debe tenerse en cuenta el proceso formativo y pedagógico o el componente ético e integral, también es importante considerar la infraestructura, el personal y los procesos necesarios para realizar programas educativos basados en la simulación clínica. 
          |En este estándar, la administración, los presupuestos y la financiación son un eje importante para apoyar el desarrollo del programa. 
          |Se recomienda tener en cuenta los siguientes procedimientos para garantizar un estándar de buenas prácticas inmersas en la simulación clínica; a continuación, se exponen:
      img.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-16.jpg" style="max-width: 505px" data-aos="fade-left" alt="representa dos aspectos clave para asegurar buenas prácticas en la simulación clínica")

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.linea-tiempo-c-edit.color-secundario(text-small)
        .row.col-lg-10.mx-auto(titulo="Plan estratégico")
          .col-md-4.mb-4.mb-md-auto(data-aos="fade-right")
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-17.svg' style="max-width: 295px" alt="Representación gráfica de un plan estratégico para la simulación clínica")
          .col-md-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Plan estratégico
            p Definir un plan estratégico que permita plantear metas, objetivos y resultados del programa, independientemente de si cuenta o no con el respaldo de una institución u organización. Además, plantear un organigrama que incorpore los roles de quienes lideran, quienes educan y quienes operan los ambientes simulados. 
              br
              br
              |Este plan estratégico también debe implementar: un plan de desarrollo profesional para la actualización del personal; un plan sistemático para la evaluación y mejora de los procesos, así como para la modernización de los equipos o ampliación de los ambientes; un plan financiero que justifique los gastos monetarios y prevea el reemplazo de equipamientos obsoletos o dañados.

        .row.col-lg-10.mx-auto(titulo="Administración del <br>espacio, los recursos y <br>el personal")
          .col-md-4.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-18.svg' style="max-width: 295px" alt="Representación gráfica de un centro de simulación clínica bien administrado")
          .col-md-8.mb-4.mb-md-0
            h4 Administración del espacio, los recursos y el personal 
            p Para que un centro de simulación clínica sea exitoso, debe contar con una adecuada administración de sus espacios, los recursos y el personal. Es importante que se puedan cuidar los bienes y equipamientos que conforman el ambiente de simulación, siempre generando la limpieza de los espacios y el mantenimiento oportuno de los equipos empleados. 
              br
              br
              |Asimismo, un centro de simulación clínica se conforma por personal no solamente del ámbito educativo, sino también personal administrativo, operarios, ingenieros y otro personal esencial que deben conocer con especificidad sus funciones. 

        .row.col-lg-10.mx-auto(titulo="Administración de los <br>recursos financieros")
          .col-md-4.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-19.svg' style="max-width: 295px" alt=" Representación gráfica de un centro de simulación clínica bien administrado")
          .col-md-8.mb-4.mb-md-0
            h4 Administración de los recursos financieros
            p Para que un centro de simulación clínica sea exitoso, debe contar con una adecuada administración de sus espacios, los recursos y el personal. Es importante que se puedan cuidar los bienes y equipamientos que conforman el ambiente de simulación, siempre generando la limpieza de los espacios y el mantenimiento oportuno de los equipos empleados. 
              br
              br
              |Asimismo, un centro de simulación clínica se conforma por personal no solamente del ámbito educativo, sino también personal administrativo, operarios, ingenieros y otro personal esencial que deben conocer con especificidad sus funciones. 

        .row.col-lg-10.mx-auto(titulo="Políticas de <br>sostenimiento del <br>programa")
          .col-md-4.mb-4.mb-md-auto
            figure
              img.mx-auto(src='@/assets/curso/temas/tema1/img-20.svg' style="max-width: 295px" alt="Representación gráfica de las políticas de sostenimiento del programa de simulación clínica")
          .col-md-8.mb-4.mb-md-0
            h4 Políticas de sostenimiento del programa
            p Las políticas de sostenimiento del programa se refieren a todas las directrices que promueven el sostenimiento del programa basado en simulación clínica, como:
              br
              br
              |1. Examinar aspectos relacionados con los recursos humanos, independientemente de la situación laboral, como la carga laboral, las compensaciones, los requisitos profesionales y educativos. 
              br
              br
              |2. Establecer procesos de manejo de información que coincidan con las expectativas y políticas de las organizaciones y las instituciones.   
              br
              br
              |3. Definir los procesos de almacenamiento y uso de los insumos y suministros, y brindar la   información de seguridad necesaria para su manejo de acuerdo con los protocolos regulatorios. 
    Separador 

    .titulo-segundo.color-secundario
      h2#t_1_2 1.2 Impacto de la enseñanza y el aprendizaje en la simulación clínica
    
    .col-lg-10.mx-auto.d-flex.flex-wrap.mb-5
      img.col-md-4.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-14.jpg" style="max-width: 295px" data-aos="fade-right" alt="La imagen muestra a un estudiante de medicina utilizando un simulador médico avanzado para practicar habilidades y aplicar conocimientos adquiridos")
      p.col-md-8.ps-md-4(data-aos="fade-left") Fomentar la confianza en los procesos de formación, de acuerdo con las competencias requeridas en los campos de la salud, genera, además de su desarrollo en habilidades, la destreza en la aplicación de los conocimientos básicos y las técnicas adquiridas al vivir las experiencias simuladas. Los simuladores deben impactar los procesos formativos de tal manera que  proporcionen al aprendiz una experiencia lo más cercana a la realidad, logrando, de esta manera, enfrentarse a los desafíos para dar solución a los eventos clínicos presentados en cada paciente en la vida real.
    p.mb-5(data-aos="fade-right") Cuando el aprendiz se logra situar en el contexto clínico en el que en muchas situaciones o estudios de casos presenta obstáculos, usar ambientes simulados le brinda la seguridad necesaria que le permite aprender y, a la vez, aplicar los conocimientos teóricos encontrados en las competencias básicas de cada programa de formación, como:

    ul.mb-5
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Medicina
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Especialidades en salud
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Enfermería
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Rehabilitación
      li.d-flex
        img(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px" data-aos="fade-right")
        p.ps-4.mb-0(data-aos="fade-left") Odontología y complementarios
    
    p.mb-5(data-aos="fade-right") Teniendo en cuenta lo anterior, la simulación clínica se entiende como el aprendizaje y la enseñanza aplicados de manera integral con el desarrollo de habilidades técnicas, comunicativas o socioemocionales, que pueden verse ausentes en un ambiente tradicional o material audiovisual que, aunque facilita como elemento en el proceso formativo, no es suficiente, pero que se ve complementado con herramientas simuladas. En la siguiente figura, se mencionan algunos atributos que se recomienda tener en cuenta en las simulaciones:

    .tarjeta.p-4.mb-5(style="background: linear-gradient(0deg, rgba(71, 71, 255, 4%) 5%, white 10%,  white 90%, rgba(71, 71, 255, 4%) 96%); overflow: hidden;")
      .col-lg-11.mx-auto
        .titulo-sexto.color-acento-botones
          h5.text-small Figura 4
          p.mb-0.text-small Atributos esenciales en simulación
        .col-lg-11.mx-auto
          img.mb-2.mx-auto(src="@/assets/curso/temas/tema1/img-22.svg" style="max-width: 294px" data-aos="fade-left" alt="tres atributos esenciales en simulación")
          span.text-small Nota. SENA (2022).
    p.mb-5(data-aos="fade-right") La estrategia metodológica encontrada en los escenarios de simulación ofrece a los aprendices que busquen en los errores cometidos oportunidades de mejora, sin que estos causen daño y conservando la seguridad del paciente, brindando la información necesaria y de manera objetiva sobre los conocimientos apropiados mediante la experiencia; esto con el fin de generar confianza no solo en el aprendiz, sino en el instructor o facilitador, quien también encuentra en cada caso un elemento clave para los próximos casos con aprendices. 
      br
      br
      |El siguiente video es un ejemplo del uso de los simuladores como herramienta de enseñanza para el área de la salud (Ciencia UNAM, 2019):
    
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Médicos aprenden con simuladores
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=us3rhmd2r1o&t=91s" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    Separador

    .titulo-segundo.color-secundario
      h2#t_1_3 1.3 Evidencia científica y el futuro de la simulación clínica
    
    p.mb-5(data-aos="fade-right") Todas las experiencias basadas en la simulación han permitido generar reflexiones, cuestionamientos y conclusiones acerca de la práctica clínica. De esta manera, se ha demostrado que la simulación clínica permite aumentar el conocimiento teórico-práctico, las destrezas y habilidades técnicas, además de la autoconfianza, el buen rendimiento, la gestión del riesgo y la seguridad del paciente, proceso en el cual se destaca la evaluación continua de los procesos enfocados a la mejora de los diferentes escenarios de cada programa que forma talento humano en salud.

    .col-lg-10.mx-auto.d-flex.flex-wrap.mb-5
      img.col-md-4.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-24.svg" style="max-width: 295px" data-aos="fade-right" alt="Imagen representativa de la simulación clínica en acción")
      p.col-md-8.ps-md-4(data-aos="fade-left") Todas las experiencias basadas en la simulación han permitido generar reflexiones, cuestionamientos y conclusiones acerca de la práctica clínica. De esta manera, se ha demostrado que la simulación clínica permite aumentar el conocimiento teórico-práctico, las destrezas y habilidades técnicas, además de la autoconfianza, el buen rendimiento, la gestión del riesgo y la seguridad del paciente, proceso en el cual se destaca la evaluación continua de los procesos enfocados a la mejora de los diferentes escenarios de cada programa que forma talento humano en salud. 

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626")  Centro de Simulación Clínica Universidad Javeriana 
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1NSTsn1bvs4" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")
      
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Centro de Simulación Clínica de Barranquilla
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=OCnJlsR8S94" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Unicauca Simulación Clínica
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=48MhnQkclnA" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Laboratorio de Simulación Facultad de Enfermería, UNAL Bogotá
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=o0YMDo1qjk0&t=76s" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-5(style="background: linear-gradient(0deg, #DBF6FF 0%, #E3E3FF 100%);")
      .row.justify-content-around.align-items-center.py-4.px-3
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-23.svg" data-aos="fade-right")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #262626") Laboratorio de Simulación Clínica Pasto
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=zhCW9FpgCK8" target="_blank")
                span Ver
                img.ms-4(src="@/assets/curso/temas/decorador-2.svg" style="max-width: 40px")

    p(data-aos="fade-right") Apreciado aprendiz, se recomienda hacer uso de la plataforma CloudLabs, herramienta dispuesta por el SENA, para facilitar procesos de enseñanza mediante el uso de simuladores.
    p(data-aos="fade-right") Existen dos formas de acceder a CloudLabs:
      br
      |1.	Se encuentra la plataforma de Sofía Plus, link: https://oferta.senasofiaplus.edu.co/sofia-oferta/ 
      br
      |1.	Por medio de la plataforma académica Territorium, link: https://sena.territorio.la/init.php, donde ingresa con sus datos registrados como aprendiz.  
    p.mb-4(data-aos="fade-right") Este espacio está diseñado con el fin de que el aprendiz pueda vivir una experiencia desde un ambiente simulado, donde podrá no solo adquirir conocimientos, sino habilidades a través de la práctica, fortaleciendo destrezas sobre las mismas competencias que lo llevan a cumplir resultados de aprendizaje fijados en los programas de ciencias de la salud.
    p.mb-5(data-aos="fade-right") El siguiente tutorial lo orientará para conocer el uso de esta plataforma:

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KIVQyj-C4Vs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema1',
  components: { TabsA },
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.linea-tiempo-edit
  .linea-tiempo-d__item
    .linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number
        background-color: #F6F6F6
        color: black
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number
        background-color: #E2EEFE
    .linea-tiempo-d__item__content
      background-color: #E2EEFE
</style>
