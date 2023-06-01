export default {
  global: {
    componenteFormativo:
      'Resultados del método de enseñanza y aprendizaje en simulación clínica',
    descripcionCurso:
      'Los modelos para la formación en ciencias de la salud encontrados en la actualidad con la implementación de la práctica gracias a los ambientes simulados dan respuesta a la necesidad de la innovación y la transformación digital, que, como herramientas, se han convertido en estrategias que motivan el desarrollo en las actividades clínicas, evaluando las competencias y resultados para cada programa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco en la evaluación para simulación clínica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Buenas prácticas en la aplicación de ambientes en simulación clínica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Impacto de la enseñanza y el aprendizaje de simulación clínica',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Evidencia científica y el futuro de la simulación clínica',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Marco en la evaluación para Simulación Clínica.',
      referencia:
        'Entels. (2016). <em>Evaluación sumativa. Evaluación Formativa.</em>',
      tipo: 'PDF',
      link:
        'https://www.edu.xunta.gal/centros/cpicruce/system/files/tiposevaluacion.pdf',
    },
    {
      tema: 'Marco en la evaluación para Simulación Clínica.',
      referencia:
        'Sociedad Latinoamericana de Cuidados Intensivos Pediátricos. (2017). <em>Manual de Simulación Clínica de la SLACIP.</em> Malevaje Editorial.',
      tipo: 'PDF',
      link:
        'https://slacip.org/descargas/Manual_de_Simulacion_Clinica-SLACIP.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje',
      significado:
        'proceso a través del cual el comportamiento y la conducta son alterados o desarrollados por medio de la práctica y la experiencia.',
    },
    {
      termino: 'Ambiente simulado',
      significado:
        'es una técnica que busca recrear aspectos de la realidad cotidiana de manera controlada y supervisada.',
    },
    {
      termino: '<em>Brief</em>',
      significado:
        'información e indicaciones dadas a los profesionales o pacientes simulados que participan en un escenario que permite prepararse completamente para las interacciones con los participantes.',
    },
    {
      termino: 'Guía en simulación',
      significado:
        'una recomendación sobre las cualidades para la fidelidad en simulación, la validez en simulación, el programa de simulación o la evaluación formativa o sumativa.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de procedimientos que se siguen en una investigación científica, estudio o una exposición doctrinal',
    },
    {
      termino: 'Modelo interactivo',
      significado:
        'simulador de situación, práctica o conjunto de acciones que permite el aprendizaje y que varía de acuerdo con la participación humana.',
    },
    {
      termino: 'Modalidad',
      significado:
        'referente al o los tipos de simulación que se usan como parte de la actividad de simulación; por ejemplo, entrenadores de habilidades, simulación basada en maniquí, computadoras, realidad virtual, etc.',
    },
    {
      termino: 'Normativa',
      significado:
        'un conjunto de normas y reglas que tiene como finalidad regular y asegurar las cantidades y características en la reproducción o servicio de los bienes de consumo entre personas físicas y/o jurídicas.',
    },
    {
      termino: 'Observación',
      significado:
        'método de <em>debriefing</em> donde se declara lo que se observa en la ejecución de la simulación.',
    },
    {
      termino: 'Realidad Aumentada',
      significado:
        'estímulos sintéticos son superpuestos a los objetos del mundo real, generalmente, para hacer que la información, que de otra manera es imperceptible para los sentidos humanos, sea perceptible.',
    },
    {
      termino: 'Realidad Virtual',
      significado:
        'uso de la tecnología informática para crear un mundo tridimensional interactivo en el que los objetos tienen una sensación de presencia espacial; ambiente/entorno virtual y mundo virtual son sinónimos de realidad virtual.',
    },
    {
      termino: 'Simulación discreta',
      significado:
        'proceso de codificación del comportamiento de un sistema complejo como una secuencia ordenada de eventos bien definidos.',
    },
    {
      termino: 'Simulación en salud',
      significado:
        'técnica que crea una situación o ambiente para permitir que las personas experimenten una representación de un evento de atención en salud real, con el propósito de practicar, aprender y evaluar.',
    },
    {
      termino: 'Riesgo',
      significado: 'contingencia o proximidad de un daño o peligro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Barrios, S., Urrutia, M. y Rubio, M. (2017). Impacto de la simulación en el desarrollo de la autoeficacia y del locus de control en estudiantes de enfermería. <em>Educación Médica Superior</em>, 31(1).',
      link: 'http://ref.scielo.org/75jz7v',
    },
    {
      referencia:
        'Ciencia UNAM. (2019). <em>Médicos aprenden con simuladores</em> [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=us3rhmd2r1o&t=91s',
    },
    {
      referencia:
        'Díaz-Salas, L. (2021). Impacto de la simulación clínica en la evaluación y metodología de aprendizaje. <em>Informador Técnico</em>, 86(1), p. 136-146.',
      link: 'https://doi.org/10.23850/22565035.3752',
    },
    {
      referencia:
        'Entels. (2016). <em>Evaluación sumativa. Evaluación Formativa.</em>',
      link:
        'https://www.edu.xunta.gal/centros/cpicruce/system/files/tiposevaluacion.pdf',
    },
    {
      referencia:
        'Fundación Universitaria del Área Andina. (2013). <em>Simulación clínica: herramientas innovadoras para la educación en salud.</em>',
      link: 'https://digitk.areandina.edu.co/handle/areandina/479',
    },
    {
      referencia:
        'Galindo, C. (2013). <em>Percepción de los estudiantes de enfermería de la Pontificia Universidad Javeriana sobre el uso de la simulación clínica como estrategia de aprendizaje.</em> Pontificia Universidad Javeriana.',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/13763/GalindoZambranoCarolAndrea2013.pdf?sequence=3&isAllowed=y',
    },
    {
      referencia:
        'INACSL Standards Committee. (2016). INACSL standards of best practice: SimulationSM Simulation design. <em>Clinical Simulation in Nursing</em>, 12(S), p. S5-S12.',
      link: 'http://dx.doi.org/10.1016/j.ecns.2016.09.005',
    },
    {
      referencia:
        'Morales, S., Ávila, S., Daniel, A., Molina, F., Olvera, H., Ortiz, A. y Strassburger, K. (2017). <em>¿Cómo se construyen los escenarios para la enseñanza basada en simulación clínica?</em> Primer Encuentro Internacional de Simulación.',
      link: 'https://www.medigraphic.com/pdfs/facmed/un-2017/uns171e.pdf',
    },
    {
      referencia:
        'Naval Air Station Fort Lauderdale Museum. (s. f.). <em>The Link Trainer Flight Simulator.</em>',
      link: 'https://www.nasflmuseum.com/link-trainer.htm',
    },
    {
      referencia:
        'Rodríguez, Dangeolo. (2021). <em>Definición de Simulación. ConceptoDefinición</em>',
      link: 'https://conceptodefinicion.de/simulacion/',
    },
    {
      referencia:
        'Sociedad Latinoamericana de Cuidados Intensivos Pediátricos. (2017). <em>Manual de Simulación Clínica de la SLACIP</em>. Malevaje Editorial.',
      link:
        'https://slacip.org/descargas/Manual_de_Simulacion_Clinica-SLACIP.pdf',
    },
    {
      referencia:
        'Trampal, Á. (2020) <em>La Simulación clínica no es un juego. Parte II. De la teoría a la emoción.</em> Enfermero de Simulación.',
      link:
        'https://enfermerodesimulacion.com/2020/06/21/lasimulacionnoesunjuegoparteii/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
