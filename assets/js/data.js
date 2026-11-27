/**
 * RODRIGUES TUR - Central Data & i18n Dictionary
 * Ecosystem: HelpUS Technology
 * Domain: rodriguestour.helpusbr.com
 * Updated with official new 2027 itineraries from D:\AntiG\rodriguestur\docs
 */

const RODRIGUES_DATA = {
  profile: {
    brandName: "Rodrigues Tur",
    companyLegalName: "Rodrigues Tur Viagens & Turismo",
    tagline: "Sua melhor experiência em viagens aéreas e rodoviárias",
    coordinators: "Elisa Rodrigues & Bruno Rodrigues",
    phone1: "(83) 98760-5812",
    phone1Raw: "5583987605812",
    phone2: "(83) 99659-5988",
    phone2Raw: "5583996595988",
    email1: "elisareceita2@gmail.com",
    email2: "elisareceita@hotmail.com",
    instagram: "rodriguesturpb",
    instagramUrl: "https://www.instagram.com/rodriguesturpb/",
    originLocation: "João Pessoa & Campina Grande - Paraíba",
    cadastur: "Regularizado CADASTUR / Ministério do Turismo",
    avatarImg: "assets/images/rodrigues-avatar.png",
    helpusLogoImg: "assets/images/helpus-logo.png"
  },

  announcements: [
    "🌊 NOVO ROTEIRO 2027: Foz do Iguaçu, Paraguai (Ciudad del Este), Cataratas & Itaipu (04 a 08/Mar/2027) — Inscrições Abertas!",
    "🙏 NOVO ROTEIRO 2027: Brasília, Goiânia, Festa do Divino Pai Eterno (Trindade) & Caldas Novas (21 a 25/Maio/2027) — Vagas Limitadas!",
    "🎉 EXCURSÃO REALIZADA COM SUCESSO: Confira as fotos da viagem a Aparecida, Canção Nova e Campos do Jordão na Galeria Oficial!",
    "✈️ Embarques com Guia Acompanhante Elisa & Bruno Rodrigues saindo de João Pessoa (Castro Pinto) e Campina Grande!",
    "💳 Parcele seu sonho de viagem em até 10x ou 12x no cartão com condições facilitadas!",
    "🙏 Mais de 10 anos realizando sonhos, turismo religioso, passeios culturais e viagens em família!"
  ],

  stories: [
    {
      id: "foz2027",
      title: "Foz do Iguaçu",
      thumb: "assets/images/dest-foz-iguacu.jpg",
      date: "Mar 2027",
      description: "Cataratas do Iguaçu (Brasil e Argentina), compras na Tríplice Fronteira do Paraguai, Parque das Aves e Usina de Itaipu."
    },
    {
      id: "trindade2027",
      title: "Trindade & Caldas",
      thumb: "assets/images/dest-trindade.jpg",
      date: "Maio 2027",
      description: "Santuário do Divino Pai Eterno em Trindade com Santa Missa, Rodovia dos Romeiros, águas termais de Caldas Novas e Brasília cívica."
    },
    {
      id: "aparecida",
      title: "Aparecida 2026",
      thumb: "assets/images/dest-aparecida.jpg",
      date: "Nov 2026",
      description: "Roteiro de Fé e Emoção: Santuário Nacional, Canção Nova, Frei Galvão e o charme serrano de Campos do Jordão."
    },
    {
      id: "salvador",
      title: "Salvador / BA",
      thumb: "assets/images/post-salvador.png",
      date: "Excursão",
      description: "Pelourinho, Farol da Barra, Igreja do Bonfim e praias baianas com grupo animado e aéreo incluso!"
    },
    {
      id: "brasilia",
      title: "Brasília / GO",
      thumb: "assets/images/post-brasilia-grupo.png",
      date: "Grupo Oficial",
      description: "Nossos queridos passageiros com a camisa oficial Rodrigues Tur embarcando rumo ao Centro-Oeste!"
    },
    {
      id: "gramado2019",
      title: "Gramado",
      thumb: "assets/images/story-gramado-2019.png",
      date: "Serra Gaúcha",
      description: "O encanto inesquecível da Serra Gaúcha, Lago Negro, Maria Fumaça e fábricas de chocolate artesanal."
    },
    {
      id: "curitiba2019",
      title: "Curitiba",
      thumb: "assets/images/story-curitiba-2019.png",
      date: "Trem da Serra",
      description: "Jardim Botânico de Curitiba, Ópera de Arame e a histórica descida de trem pela Serra do Mar até Morretes."
    },
    {
      id: "destaques",
      title: "Destaques",
      thumb: "assets/images/story-destaques.png",
      date: "Coleção",
      description: "Momentos especiais registrados pelos nossos viajantes em todos os cantos do Brasil."
    }
  ],

  packages: [
    {
      id: "foz-iguacu-2027",
      title: "Foz do Iguaçu, Paraguai & Cataratas (Brasil e Argentina)",
      subtitle: "Maravilhas da Natureza, Compras Internacionais em Ciudad del Este, Parque das Aves e Itaipu",
      featured: true,
      category: "natureza",
      categoryLabel: "Natureza & Compras no Paraguai",
      status: "Confirmada • Março 2027",
      dates: "04 a 08 de Março de 2027",
      duration: "5 Dias / 4 Noites",
      transport: "Aéreo + Traslados Inclusos",
      departure: "João Pessoa (Aeroporto Castro Pinto)",
      image: "assets/images/dest-foz-iguacu.jpg",
      pdfUrl: "assets/docs/Foz_do_Iguacu_Roteiro_RodriguesTur_Marco_2027.pdf",
      pricePix: 2980,
      priceInstallments: 3290,
      installmentsText: "10x de R$ 329,00 sem juros",
      highlights: [
        "Passagem aérea ida e volta de João Pessoa (Aeroporto Castro Pinto) para Foz do Iguaçu",
        "Hospedagem selecionada com café da manhã incluso",
        "Traslados completos de chegada e saída do aeroporto ao hotel",
        "Dia livre de compras em Ciudad del Este (Paraguai), polo comercial com mais de 2.600 lojas",
        "Travessia da emblemática Ponte Internacional da Amizade na Tríplice Fronteira",
        "Visita completa às Cataratas Brasileiras (Parque Nacional do Iguaçu)",
        "Visita às Cataratas Argentinas com passeio de trem panorâmico até a majestosa Garganta do Diabo",
        "Passeio imersivo no Parque das Aves, maior parque de preservação de aves da América Latina",
        "Visita técnica à grandiosa Usina Hidrelétrica de Itaipu com filme explicativo e mirante do vertedouro",
        "Acompanhamento presencial dedicado de Elisa Rodrigues (Rodrigues Tur)"
      ],
      itinerary: [
        {
          day: "Dia 1 • 04/03/2027 (Quinta-feira)",
          title: "João Pessoa ✈️ Foz do Iguaçu & Check-in",
          desc: "Comparecimento ao Aeroporto Castro Pinto (JPA) em horário a combinar para embarque com destino a Foz do Iguaçu. Recepção em Foz do Iguaçu e traslado ao hotel. Entrada nos apartamentos de acordo com a disponibilidade do hotel e descanso para o início das atividades."
        },
        {
          day: "Dia 2 • 05/03/2027 (Sexta-feira)",
          title: "Dia Livre para Compras no Paraguai (Ciudad del Este)",
          desc: "Dia todo livre para atividades independentes e compras na segunda cidade mais importante do Paraguai, Ciudad del Este, que forma a tríplice fronteira entre Brasil, Paraguai e Argentina. Cidades ligadas pela Ponte Internacional da Amizade. Grande atividade comercial com média de 2.600 lojas com eletrônicos, perfumes, bolsas, tênis, informática e artigos importados com excelentes preços."
        },
        {
          day: "Dia 3 • 06/03/2027 (Sábado)",
          title: "Cataratas Brasileiras & Cataratas Argentinas (Garganta do Diabo)",
          desc: "Dia inteiro dedicado a contemplar uma das 7 Maravilhas da Natureza. Lado Brasileiro: 275 saltos por onde escoam cerca de um trilhão de litros de água por segundo com vistas panorâmicas colossais. Lado Argentino: contato direto com a natureza por trilhas superiores e inferiores, além do inesquecível passeio de trem do Centro de Visitantes até a espetacular Garganta do Diabo."
        },
        {
          day: "Dia 4 • 07/03/2027 (Domingo)",
          title: "Parque das Aves & Usina Hidrelétrica de Itaipu",
          desc: "Pela manhã, visita ao Parque das Aves: caminhada de 1 a 2 horas em mata nativa com viveiros de imersão de aves tropicais do mundo todo, répteis e borboletário. À tarde, visita à imponente Usina Hidrelétrica de Itaipu: recepção com filme explicativo sobre a colossal obra e visita ao mirante principal para contemplar o vertedouro."
        },
        {
          day: "Dia 5 • 08/03/2027 (Segunda-feira)",
          title: "Foz do Iguaçu ✈️ João Pessoa (Retorno)",
          desc: "Após o café da manhã, em horário a combinar, traslado ao aeroporto para embarque em nosso voo de retorno a João Pessoa, levando memórias inesquecíveis, compras e novos amigos."
        }
      ],
      rules: [
        "Por motivo de força maior, a ordem do programa poderá ser invertida ou alterada;",
        "CANCELAMENTO: Até 30 dias da saída multa de 10%, até 07 dias antes 50%;",
        "Preços e condições sujeitos à alteração, desde que não pagos;",
        "Acomodação nos apartamentos de acordo com a disponibilidade do hotel;",
        "Nossos preços não incluem extras de caráter pessoal, assim como passeios opcionais;",
        "A excursão sairá com um mínimo de 15 pessoas;",
        "Preço inclui aéreo, hotel, traslado de chegada e saída, cataratas brasileiras, cataratas argentinas e Itaipu;",
        "Torna-se obrigatória a apresentação da Carteira de Identidade (RG original com no máximo 10 anos de expedição) ou Certidão de Nascimento na aquisição e no embarque."
      ]
    },

    {
      id: "brasilia-trindade-caldas-2027",
      title: "Brasília, Goiânia, Trindade & Caldas Novas",
      subtitle: "Festa e Fé no Santuário do Divino Pai Eterno, Águas Termais e Circuito Cívico",
      featured: true,
      category: "religioso",
      categoryLabel: "Turismo Religioso & Termas",
      status: "Confirmada • Maio 2027",
      dates: "21 a 25 de Maio de 2027",
      duration: "5 Dias / 4 Noites",
      transport: "Aéreo + Ônibus Executivo Climatizado",
      departure: "João Pessoa (Aeroporto Castro Pinto)",
      image: "assets/images/dest-trindade.jpg",
      pdfUrl: "assets/docs/Brasilia_Trindade_CaldasNovas_RodriguesTur_Maio_2027.pdf",
      pricePix: 2450,
      priceInstallments: 2690,
      installmentsText: "10x de R$ 269,00 sem juros",
      highlights: [
        "Passagem aérea ida e volta de João Pessoa (Aeroporto Castro Pinto) para Brasília",
        "Transporte em ônibus executivo climatizado durante todo o roteiro interestadual",
        "Hospedagem confortável com café da manhã incluso",
        "Visita ao Santuário Basílica do DIVINO PAI ETERNO em Trindade com participação na Santa Missa",
        "Passagem pela Rodovia dos Romeiros com os 18km de painéis da Via Sacra",
        "Passeio pelos principais pontos turísticos de Goiânia com parada especial para compras de confecções",
        "Dia especial em Caldas Novas, a maior estância hidrotermal do mundo, com suas famosas águas quentes curativas",
        "Visita ao Jardim Japonês, Shopping Serra Verde, Cachaçaria Vale das Águas Quentes e degustação de doces artesanais típicos",
        "City tour completo pelos monumentos e igrejas históricas de Brasília",
        "Acompanhamento atencioso e familiar de Elisa Rodrigues (Rodrigues Tur)"
      ],
      itinerary: [
        {
          day: "Dia 1 • 21/05/2027 (Sexta-feira)",
          title: "João Pessoa ✈️ Brasília & Tour Cívico",
          desc: "Comparecimento ao Aeroporto Castro Pinto com 2 horas de antecedência do voo com destino a Brasília. Chegada na capital federal e início do tour panorâmico com visita às famosas igrejas (Catedral Metropolitana, Dom Bosco) e principais pontos turísticos e cívicos."
        },
        {
          day: "Dias 2 e 3 • 22 e 23/05/2027 (Sábado e Domingo)",
          title: "Brasília ➔ Goiânia & Santuário do Divino Pai Eterno (Trindade)",
          desc: "Após o café da manhã, viagem com destino a Goiânia e acomodação no hotel. Passeio turístico por Goiânia com parada para compras. Seguiremos pela Rodovia dos Romeiros (18 km ornamentados com painéis da Via Sacra e a Paixão de Cristo) até Trindade, capital da fé fundada em 1840. Participação nas celebrações e Santa Missa no Santuário Basílica do Divino Pai Eterno."
        },
        {
          day: "Dia 4 • 24/05/2027 (Segunda-feira)",
          title: "Goiânia ➔ Caldas Novas (Águas Termais & Tradições)",
          desc: "Saída às 08:00h para Caldas Novas, maior estância hidrotermal do mundo com suas piscinas de águas quentes naturais. Visita aos principais pontos: Jardim Japonês com paisagismo oriental e casa de fazenda tradicional, Shopping Serra Verde, varejo de doces artesanais para degustação e Cachaçaria Vale das Águas Quentes. Após o jantar, retorno para hotel."
        },
        {
          day: "Dia 5 • 25/05/2027 (Terça-feira)",
          title: "Goiânia / Brasília ✈️ João Pessoa (Retorno)",
          desc: "Após o café da manhã, check-out do hotel e últimas visitas aos pontos turísticos de Brasília. Em seguida, traslado ao aeroporto para embarque no voo de retorno a João Pessoa com o coração cheio de graças e renovação espiritual."
        }
      ],
      rules: [
        "Por motivo de força maior, a ordem do programa poderá ser invertida ou alterada;",
        "CANCELAMENTO: Até 30 dias da saída multa de 20%, até 07 dias antes 50%;",
        "Preços e condições sujeitos à alteração, desde que não pagos;",
        "Nossos preços não incluem extras de caráter pessoal, assim como passeios opcionais;",
        "A excursão sairá com um mínimo de 15 pessoas;",
        "No embarque é obrigatório apresentar Carteira de Identidade original ou Certidão de Nascimento."
      ]
    },

    {
      id: "salvador-bahia-2026",
      title: "Salvador / Bahia Histórico & Litoral dos Encantos",
      subtitle: "A Magia do Pelourinho, Farol da Barra e o Pôr do Sol Baiano",
      featured: false,
      category: "praia",
      categoryLabel: "Litoral & Cultura",
      status: "Confirmada",
      dates: "Saídas Programadas • Consulte Próxima Turma",
      duration: "5 Dias / 4 Noites",
      transport: "Aéreo Ida e Volta + Traslados",
      departure: "Campina Grande / João Pessoa",
      image: "assets/images/dest-salvador.jpg",
      flyerImg: "assets/images/post-salvador.png",
      pdfUrl: null,
      pricePix: 1080,
      priceInstallments: 1200,
      installmentsText: "10x de R$ 120,00 sem juros",
      highlights: [
        "Aéreo ida e volta saindo de Campina Grande/PB ou João Pessoa/PB para Salvador/BA",
        "Hospedagem selecionada com piscina e café da manhã incluso",
        "City Tour pelo Pelourinho, Igreja de São Francisco e Elevador Lacerda",
        "Visita ao Farol da Barra, Igreja do Bonfim e Mercado Modelo",
        "Traslados privativos aeroporto / hotel / passeios",
        "Tempo livre para curtir as praias de Itapuã e Stella Maris",
        "Guia acompanhante da Rodrigues Tur desde o embarque"
      ],
      itinerary: [
        {
          day: "Dia 1",
          title: "Embarque Campina Grande / JPA ✈️ Salvador",
          desc: "Apresentação no aeroporto para voo rumo à capital baiana. Recepção no aeroporto de Salvador e traslado privativo para o hotel. Tarde livre para descanso à beira da piscina."
        },
        {
          day: "Dia 2",
          title: "Pelourinho, Centro Histórico & Elevador Lacerda",
          desc: "Passeio guiado pelas ladeiras históricas do Pelourinho, Catedral Basílica e almoço com culinária típica baiana. À tarde, descida no Elevador Lacerda e compras de artesanato no Mercado Modelo."
        },
        {
          day: "Dia 3",
          title: "Circuito Farol da Barra & Igreja do Senhor do Bonfim",
          desc: "Visita matinal à tradicional Colina Sagrada para amarrar as fitinhas na Igreja do Bonfim. À tarde, visitação ao Forte de Santo Antônio da Barra (Farol da Barra) para contemplar o pôr do sol na Baía de Todos os Santos."
        },
        {
          day: "Dia 4",
          title: "Praias & Dia Livre para Lazer",
          desc: "Dia livre para curtir a orla soteropolitana, saborear o famoso acarajé de Dinha no Rio Vermelho e desfrutar do comércio local."
        },
        {
          day: "Dia 5",
          title: "Check-out & Voo de Retorno para a Paraíba",
          desc: "Após o café da manhã, tempo livre para últimas fotos e traslado até o aeroporto para o voo de volta para a Paraíba."
        }
      ],
      rules: [
        "Pacote promocional com vagas limitadas;",
        "Acomodação em quartos duplos ou triplos climatizados;",
        "Aéreo com franquia de bagagem de mão de até 10kg inclusa."
      ]
    },

    {
      id: "gramado-serra-gaucha",
      title: "Gramado, Canela & Bento Gonçalves",
      subtitle: "O Encanto Europeu da Serra Gaúcha e Natal Luz",
      featured: false,
      category: "serra",
      categoryLabel: "Serras & Gastronomia",
      status: "Alta Temporada • Vagas Reduzidas",
      dates: "Temporada de Inverno e Natal Luz",
      duration: "6 Dias / 5 Noites",
      transport: "Aéreo + Ônibus de Turismo Leito",
      departure: "João Pessoa (JPA)",
      image: "assets/images/dest-gramado.jpg",
      pdfUrl: null,
      pricePix: 3200,
      priceInstallments: 3450,
      installmentsText: "10x de R$ 345,00 sem juros",
      highlights: [
        "Aéreo ida e volta João Pessoa ✈️ Porto Alegre",
        "Hospedagem de alto padrão com café colonial em Gramado",
        "Visitas ao Lago Negro, Mini Mundo e Rua Coberta",
        "Ingressos e transfers para espetáculos do Natal Luz",
        "Passeio na Maria Fumaça com degustação de vinhos e espumantes",
        "Visita a fábricas de chocolates artesanais e vinícolas coloniais",
        "Acompanhamento presencial de guia da equipe Rodrigues Tur"
      ],
      itinerary: [
        {
          day: "Dia 1",
          title: "Chegada em Porto Alegre & Subida da Serra",
          desc: "Desembarque no RS e viagem panorâmica pela Rota Romântica até Gramado. Check-in e primeira noite na charmosa Rua Coberta iluminada."
        },
        {
          day: "Dia 2",
          title: "Tour Gramado & Lago Negro",
          desc: "Manhã de pedalinho no Lago Negro cercado de hortênsias e pinheiros. Visita ao Mini Mundo e fábricas de chocolates artesanais."
        },
        {
          day: "Dia 3",
          title: "Canela & Cascata do Caracol",
          desc: "Visita à imponente Catedral de Pedra em Canela, Parque do Caracol com bondinhos aéreos e Castelinho do Caracol."
        },
        {
          day: "Dia 4",
          title: "Trem Maria Fumaça & Vale dos Vinhedos",
          desc: "Passeio emocionante a bordo da Maria Fumaça com dança típica italiana, música e degustação. Almoço colonial e visita a vinícola."
        },
        {
          day: "Dia 5",
          title: "Espetáculo do Natal Luz & Dia Livre",
          desc: "Dia para compras de roupas de couro e lã, patinação no gelo e noite com espetáculo oficial do Natal Luz de Gramado."
        },
        {
          day: "Dia 6",
          title: "Despedida da Serra & Retorno à Paraíba",
          desc: "Café colonial caprichado e traslado para Porto Alegre para o voo de volta."
        }
      ],
      rules: [
        "Valores sujeitos a alteração de malha aérea antes da emissão;",
        "Ingressos dos shows do Natal Luz com lugares marcados."
      ]
    },

    {
      id: "curitiba-morretes-trem",
      title: "Curitiba Charmosa & Trem pela Serra do Mar",
      subtitle: "A Capital Mais Verde do País e a Descida Histórica de Trem",
      featured: false,
      category: "cultural",
      categoryLabel: "Ecológico & Cultural",
      status: "Inscrições Abertas",
      dates: "Saídas Programadas 2026/2027",
      duration: "5 Dias / 4 Noites",
      transport: "Aéreo + Trem da Serra do Mar + Ônibus",
      departure: "João Pessoa (JPA)",
      image: "assets/images/dest-curitiba.jpg",
      pdfUrl: null,
      pricePix: 2190,
      priceInstallments: 2390,
      installmentsText: "10x de R$ 239,00 sem juros",
      highlights: [
        "Aéreo ida e volta de João Pessoa para Curitiba",
        "Hotel categoria 4 estrelas bem localizado no Batel/Centro",
        "Jardim Botânico de Curitiba, Ópera de Arame e Bosque do Papa",
        "Passeio épico de trem pela Ferrovia Paranaguá-Curitiba através da Serra do Mar",
        "Almoço típico com o famoso Barreado em Morretes",
        "City tour completo pelos parques ecológicos e museus de Curitiba"
      ],
      itinerary: [
        {
          day: "Dia 1",
          title: "Chegada em Curitiba & Acomodação",
          desc: "Desembarque no aeroporto Afonso Pena e traslado ao hotel. Passeio leve na Praça Tiradentes e Rua das Flores."
        },
        {
          day: "Dia 2",
          title: "Jardim Botânico & Parques de Curitiba",
          desc: "Manhã na estufa de vidro icônica do Jardim Botânico. À tarde, visitação à Ópera de Arame, Parque Tanguá e Memorial Ucraniano."
        },
        {
          day: "Dia 3",
          title: "O Lendário Passeio de Trem até Morretes",
          desc: "Embarque na estação ferroviária para uma das viagens de trem mais belas do mundo, atravessando pontes, túneis e cachoeiras na Mata Atlântica. Chegada em Morretes para o tradicional almoço de Barreado."
        },
        {
          day: "Dia 4",
          title: "Museu Oscar Niemeyer & Gastronomia Italiana em Santa Felicidade",
          desc: "Visita ao 'Museu do Olho' e tarde de degustação e compras de vinhos e queijos no bairro italiano de Santa Felicidade."
        },
        {
          day: "Dia 5",
          title: "Últimas compras no Mercado Municipal & Retorno",
          desc: "Manhã de compras gastronômicas no Mercado Municipal de Curitiba e traslado ao aeroporto para retorno à Paraíba."
        }
      ],
      rules: [
        "Passeio de trem na categoria turística com serviço de bordo;",
        "Excursão com mínimo de 20 passageiros confirmados."
      ]
    },

    {
      id: "sao-paulo-compras-cultura",
      title: "São Paulo de Compras, Moda & Grandes Espetáculos",
      subtitle: "O Maior Polo Comercial da América Latina e Alta Gastronomia",
      featured: false,
      category: "compras",
      categoryLabel: "Compras & Metrópole",
      status: "Inscrições Abertas",
      dates: "Saídas Mensais",
      duration: "4 Dias / 3 Noites",
      transport: "Aéreo + Traslados",
      departure: "João Pessoa / Campina Grande",
      image: "assets/images/dest-saopaulo.jpg",
      pdfUrl: null,
      pricePix: 1720,
      priceInstallments: 1890,
      installmentsText: "10x de R$ 189,00 sem juros",
      highlights: [
        "Aéreo ida e volta saindo de João Pessoa",
        "Hotel no centro com facilidade total de deslocamento",
        "Roteiro guiado para compras na Rua 25 de Março, Brás e Bom Retiro",
        "City tour na Avenida Paulista, MASP e Parque Ibirapuera",
        "Visita ao bairro japonês da Liberdade e Mercadão Municipal com pastel de bacalhau e sanduíche de mortadela",
        "Segurança reforçada e apoio constante para suas compras e bagagens"
      ],
      itinerary: [
        {
          day: "Dia 1",
          title: "Chegada em São Paulo & Início das Atividades",
          desc: "Voo matinal para São Paulo. Check-in no hotel e primeiras compras orientadas no polo têxtil."
        },
        {
          day: "Dia 2",
          title: "Dia Intenso de Compras: Brás & 25 de Março",
          desc: "Saída especial bem cedo para aproveitar as melhores ofertas e novidades de confecções, calçados e acessórios nos maiores atacados e varejos do país."
        },
        {
          day: "Dia 3",
          title: "Avenida Paulista, Liberdade & Alta Gastronomia",
          desc: "Passeio cultural pela Avenida Paulista, visita ao bairro oriental da Liberdade com feirinha tradicional e almoço no Mercado Municipal."
        },
        {
          day: "Dia 4",
          title: "Manhã Livre & Embarque de Retorno",
          desc: "Horário para organização das bagagens, checkout e traslado ao aeroporto de Congonhas/Guarulhos com destino à Paraíba."
        }
      ],
      rules: [
        "Acompanhamento com dicas de segurança e lojas parceiras;",
        "Possibilidade de contratação de mala despachada adicional de 23kg."
      ]
    }
  ],

  testimonials: [
    {
      name: "Dona Maria do Socorro Andrade",
      city: "João Pessoa - PB",
      tour: "Aparecida do Norte & Canção Nova",
      rating: 5,
      comment: "Viajar com a Elisa e o Bruno é como viajar com a nossa própria família! Cuidado extremo, hotel maravilhoso, comida farta e momentos de oração inesquecíveis. Já vou para a minha terceira viagem com a Rodrigues Tur!"
    },
    {
      name: "Severino Silva & Família",
      city: "Campina Grande - PB",
      tour: "Salvador / BA",
      rating: 5,
      comment: "Organização impecável do começo ao fim! Os voos pontuais, o ônibus super confortável e o carinho com os idosos é o grande diferencial deles. Parabéns Rodrigues Tur!"
    },
    {
      name: "Cláudia & Roberto Medeiros",
      city: "Cabedelo - PB",
      tour: "Gramado / Serra Gaúcha",
      rating: 5,
      comment: "Fizemos a viagem de Gramado com a Rodrigues Tur e foi tudo perfeito! O guia nos acompanhou nos restaurantes, no Natal Luz e nas compras. Recomendo de olhos fechados!"
    },
    {
      name: "Francisca das Chagas",
      city: "Guarabira - PB",
      tour: "Brasília, Trindade & Caldas Novas",
      rating: 5,
      comment: "Foi um sonho realizado. Nós ganhamos camisa personalizada, fiz muitos amigos no grupo e a Elisa resolve tudo com uma calma e atenção que dá muita segurança para quem viaja sozinho."
    }
  ],

  faqs: [
    {
      q: "Quem acompanha os grupos durante as viagens?",
      a: "Todas as nossas viagens contam com o acompanhamento presencial e dedicado dos próprios diretores da empresa, Elisa Rodrigues e Bruno Rodrigues, além de guias locais credenciados pelo CADASTUR e Ministério do Turismo nos destinos."
    },
    {
      q: "De onde saem os voos e excursões rodoviárias?",
      a: "Nossos grupos partem principalmente da Paraíba: saídas aéreas pelo Aeroporto Castro Pinto (João Pessoa) ou Aeroporto Presidente João Suassuna (Campina Grande), além de pontos de encontro estratégicos para transporte rodoviário."
    },
    {
      q: "Como funcionam as formas de pagamento e parcelamento?",
      a: "Facilitamos sua viagem com desconto especial para pagamento à vista via Pix ou transferência bancária, além de parcelamento em até 10x ou 12x no cartão de crédito. O contrato e recibos são enviados diretamente por e-mail e WhatsApp."
    },
    {
      q: "O que está incluso nos novos pacotes de Foz do Iguaçu e Trindade/Caldas Novas 2027?",
      a: "Em Foz do Iguaçu (04 a 08/Março/2027), estão inclusos: aéreo ida e volta, hotel com café da manhã, traslados, Cataratas Brasileiras, Cataratas Argentinas (com trem até Garganta do Diabo), compras no Paraguai em Ciudad del Este, Parque das Aves e Usina de Itaipu. Em Brasília, Trindade e Caldas Novas (21 a 25/Maio/2027), inclui: aéreo, ônibus executivo climatizado, hotel com café, celebrações e Santa Missa no Santuário do Divino Pai Eterno em Trindade, tour cívico em Brasília e dia relaxante nas águas termais de Caldas Novas."
    },
    {
      q: "Pessoas sozinhas ou da terceira idade podem participar com segurança?",
      a: "Com certeza! Essa é a nossa maior especialidade. Nossos grupos são extremamente acolhedores, ninguém fica desassistido. Oferecemos auxílio total no check-in dos aeroportos, manuseio de bagagens e acompanhamento atencioso em todas as paradas."
    },
    {
      q: "Quais documentos são exigidos para o embarque?",
      a: "É obrigatória a apresentação do documento de identificação original com foto em perfeito estado (RG emitido há menos de 10 anos ou CNH válida) ou Certidão de Nascimento original para crianças de até 11 anos acompanhadas dos responsáveis legais. Para viagens com passagem por fronteira (como Foz do Iguaçu / Paraguai e Argentina), o RG com no máximo 10 anos de expedição é estritamente obrigatório."
    }
  ],

  // i18n Translations Dictionary
  i18n: {
    pt: {
      siteTitle: "Rodrigues Tur | Excursões Aéreas e Rodoviárias em Grupo",
      navHome: "Início",
      navTours: "Próximos Roteiros",
      navStories: "Destaques Instagram",
      navAbout: "Sobre Nós",
      navTestimonials: "Depoimentos",
      navFaq: "Dúvidas Frequentes",
      navCustomTour: "Viagem Sob Medida",
      btnReserveWhatsapp: "Fale no WhatsApp",
      btnViewItinerary: "Ver Roteiro Completo",
      btnDownloadPdf: "Baixar Roteiro em PDF",
      heroBadge: "✨ Turismo de Fé, Lazer & Família desde a Paraíba",
      heroHeadline: "Viaje com Segurança, Conforto e a Alegria de Estar em Família",
      heroSub: "Excursões aéreas e rodoviárias em grupo saindo de João Pessoa e Campina Grande com acompanhamento integral de Elisa e Bruno Rodrigues.",
      searchPlaceholder: "Para onde você quer viajar? (Ex: Foz do Iguaçu, Trindade, Caldas Novas, Salvador...)",
      categoryAll: "Todos os Destinos",
      categoryNatureza: "Natureza & Cataratas",
      categoryReligioso: "Turismo Religioso",
      categorySerra: "Serras & Frio",
      categoryPraia: "Praias & Litoral",
      categoryCompras: "Compras & Fronteira",
      categoryCultural: "Cultural & Cívico",
      featuredBadge: "Roteiro em Destaque",
      departureLabel: "Embarque:",
      durationLabel: "Duração:",
      priceFrom: "A partir de",
      pricePixBadge: "com desconto no Pix",
      installmentsLabel: "Ou parcelado em:",
      includedItems: "O Que Está Incluso Neste Pacote:",
      itineraryTimelineTitle: "Itinerário Detalhado Dia a Dia",
      rulesTitle: "Observações Importantes & Condições Gerais",
      simulatorTitle: "Simulador de Viagem & Reserva Imediata",
      simulatorSub: "Calcule os valores para sua família e fale direto com a Elisa no WhatsApp:",
      simSelectTour: "Selecione o Roteiro Desejado:",
      simPassengers: "Número de Viajantes:",
      simRoomType: "Tipo de Acomodação:",
      simRoomDouble: "Quarto Duplo (2 pessoas)",
      simRoomTriple: "Quarto Triplo (3 pessoas)",
      simRoomSingle: "Quarto Individual (1 pessoa)",
      simPaymentMethod: "Forma de Pagamento:",
      simPixOption: "À Vista via Pix (Melhor Preço)",
      simCardOption: "Parcelado no Cartão de Crédito (Até 10x)",
      simTotalEstimated: "Total Estimado da Viagem:",
      simInstallmentValue: "Parcelas de:",
      simBtnBook: "Enviar Reserva para Elisa e Bruno no WhatsApp",
      whyUsTitle: "Por Que Viajar com a Rodrigues Tur?",
      whyUsSub: "Veja os motivos que fazem nossos clientes viajarem conosco ano após ano:",
      whyCard1Title: "Acompanhamento de Verdade",
      whyCard1Desc: "Elisa e Bruno Rodrigues acompanham você desde o portão de embarque na Paraíba até o retorno para casa.",
      whyCard2Title: "Hotéis & Ônibus de Qualidade",
      whyCard2Desc: "Hospedagens criteriosamente selecionadas com café farto e ônibus leito turismo com ar-condicionado e conforto total.",
      whyCard3Title: "Turismo Religioso com Propósito",
      whyCard3Desc: "Roteiros com missas, momentos de espiritualidade e visitas aos maiores santuários do Brasil com tranquilidade.",
      whyCard4Title: "Segurança & Cadastur",
      whyCard4Desc: "Agência 100% legalizada no Ministério do Turismo, com seguro-viagem nacional incluso em todas as nossas saídas.",
      instagramTitle: "Direto do Nosso Instagram @rodriguesturpb",
      instagramSub: "Acompanhe nossos grupos felizes, paisagens deslumbrantes e histórias de cada aventura:",
      btnFollowInstagram: "Seguir @rodriguesturpb no Instagram",
      cookieTitle: "🍪 Política de Cookies e Privacidade (LGPD)",
      cookieDesc: "Utilizamos cookies e tecnologias semelhantes essenciais para garantir a melhor navegação, segurança e medição anônima de desempenho, em total conformidade com a LGPD.",
      cookieAccept: "Aceitar Todos os Cookies",
      cookieSettings: "Preferências de Cookies",
      footerLegalHelpUs: "HelpUS LLC • Soluções Inteligentes em Tecnologia",
      footerDevNote: "Plataforma desenvolvida e mantida pela HelpUS Technology sob governança global AntiG."
    },

    en: {
      siteTitle: "Rodrigues Tur | Group Air and Bus Tours in Brazil",
      navHome: "Home",
      navTours: "Upcoming Tours",
      navStories: "Instagram Highlights",
      navAbout: "About Us",
      navTestimonials: "Testimonials",
      navFaq: "FAQ",
      navCustomTour: "Custom Tours",
      btnReserveWhatsapp: "Chat on WhatsApp",
      btnViewItinerary: "View Full Itinerary",
      btnDownloadPdf: "Download PDF Itinerary",
      heroBadge: "✨ Faith, Leisure & Family Tourism from Paraíba",
      heroHeadline: "Travel with Safety, Comfort and the Joy of Family Care",
      heroSub: "Guided air and executive bus group tours departing from João Pessoa and Campina Grande with Elisa & Bruno Rodrigues.",
      searchPlaceholder: "Where would you like to travel? (e.g. Iguazu Falls, Trindade, Caldas Novas, Salvador...)",
      categoryAll: "All Destinations",
      categoryNatureza: "Nature & Waterfalls",
      categoryReligioso: "Religious Tourism",
      categorySerra: "Mountains & Scenic",
      categoryPraia: "Beaches & Coast",
      categoryCompras: "Shopping & Border",
      categoryCultural: "Cultural & Heritage",
      featuredBadge: "Featured Tour",
      departureLabel: "Departure:",
      durationLabel: "Duration:",
      priceFrom: "Starting at",
      pricePixBadge: "with instant discount",
      installmentsLabel: "Or in installments:",
      includedItems: "What's Included in This Package:",
      itineraryTimelineTitle: "Detailed Day-by-Day Itinerary",
      rulesTitle: "Important Terms & Travel Policy",
      simulatorTitle: "Trip Simulator & Direct Booking",
      simulatorSub: "Calculate costs for your family and chat directly with Elisa on WhatsApp:",
      simSelectTour: "Select Desired Tour:",
      simPassengers: "Number of Travelers:",
      simRoomType: "Accommodation Type:",
      simRoomDouble: "Double Room (2 people)",
      simRoomTriple: "Triple Room (3 people)",
      simRoomSingle: "Single Room (1 person)",
      simPaymentMethod: "Payment Method:",
      simPixOption: "Cash / Wire (Best Price)",
      simCardOption: "Credit Card (Up to 10x)",
      simTotalEstimated: "Estimated Total:",
      simInstallmentValue: "Installments of:",
      simBtnBook: "Send Booking Request via WhatsApp",
      whyUsTitle: "Why Choose Rodrigues Tur?",
      whyUsSub: "Discover why our clients travel with us year after year:",
      whyCard1Title: "Dedicated Tour Escorts",
      whyCard1Desc: "Elisa & Bruno Rodrigues accompany you from the departure gate in Paraíba all the way back home.",
      whyCard2Title: "Selected Hotels & Premium Buses",
      whyCard2Desc: "Handpicked hotels with generous breakfast and executive air-conditioned touring buses.",
      whyCard3Title: "Meaningful Faith Journeys",
      whyCard3Desc: "Tours featuring holy masses, spiritual peace and visits to Brazil's most sacred shrines.",
      whyCard4Title: "Registered & Insured",
      whyCard4Desc: "Fully certified by the Ministry of Tourism (CADASTUR) with national travel insurance included.",
      instagramTitle: "Directly from Our Instagram @rodriguesturpb",
      instagramSub: "See our joyful travelers, stunning landscapes and real highlights:",
      btnFollowInstagram: "Follow @rodriguesturpb on Instagram",
      cookieTitle: "🍪 Cookies & Privacy Policy (LGPD Compliance)",
      cookieDesc: "We use essential cookies to guarantee secure browsing and anonymous traffic analytics, in compliance with LGPD.",
      cookieAccept: "Accept All Cookies",
      cookieSettings: "Cookie Preferences",
      footerLegalHelpUs: "HelpUS LLC • Intelligent Technology Solutions",
      footerDevNote: "Platform engineered and operated by HelpUS Technology under AntiG global governance."
    },

    es: {
      siteTitle: "Rodrigues Tur | Excursiones Aéreas y Terrestres en Grupo",
      navHome: "Inicio",
      navTours: "Próximos Viajes",
      navStories: "Historias de Instagram",
      navAbout: "Quiénes Somos",
      navTestimonials: "Testimonios",
      navFaq: "Preguntas Frecuentes",
      navCustomTour: "Viaje a Medida",
      btnReserveWhatsapp: "Contactar por WhatsApp",
      btnViewItinerary: "Ver Itinerario Completo",
      btnDownloadPdf: "Descargar Itinerario en PDF",
      heroBadge: "✨ Turismo de Fe, Placer y Familia desde Paraíba",
      heroHeadline: "Viaje con Seguridad, Confort y la Alegría de Sentirse en Familia",
      heroSub: "Excursiones aéreas y en autobús ejecutivo en grupo saliendo de João Pessoa y Campina Grande con Elisa y Bruno Rodrigues.",
      searchPlaceholder: "¿A dónde desea viajar? (Ej: Foz do Iguazú, Trindade, Caldas Novas, Salvador...)",
      categoryAll: "Todos los Destinos",
      categoryNatureza: "Naturaleza y Cataratas",
      categoryReligioso: "Turismo Religioso",
      categorySerra: "Sierras y Montañas",
      categoryPraia: "Playas y Costa",
      categoryCompras: "Compras y Frontera",
      categoryCultural: "Cultural y Cívico",
      featuredBadge: "Paquete Destacado",
      departureLabel: "Salida:",
      durationLabel: "Duración:",
      priceFrom: "A partir de",
      pricePixBadge: "con descuento al contado",
      installmentsLabel: "O en cuotas:",
      includedItems: "Qué Incluye Este Paquete:",
      itineraryTimelineTitle: "Itinerario Detallado Día por Día",
      rulesTitle: "Condiciones Generales y Políticas de Viaje",
      simulatorTitle: "Simulador de Viaje y Reserva Inmediata",
      simulatorSub: "Calcule los valores para su grupo y hable directo con Elisa por WhatsApp:",
      simSelectTour: "Seleccione el Viaje Deseado:",
      simPassengers: "Número de Pasajeros:",
      simRoomType: "Tipo de Habitación:",
      simRoomDouble: "Habitación Doble (2 personas)",
      simRoomTriple: "Habitación Triple (3 personas)",
      simRoomSingle: "Habitación Individual (1 persona)",
      simPaymentMethod: "Forma de Pago:",
      simPixOption: "Contado / Transferencia (Mejor Precio)",
      simCardOption: "Tarjeta de Crédito (Hasta 10 cuotas)",
      simTotalEstimated: "Total Estimado del Viaje:",
      simInstallmentValue: "Cuotas de:",
      simBtnBook: "Enviar Reserva a Elisa y Bruno por WhatsApp",
      whyUsTitle: "¿Por Qué Elegir Rodrigues Tur?",
      whyUsSub: "Vea por qué nuestros pasajeros siguen viajando con nosotros año tras año:",
      whyCard1Title: "Acompañamiento Personalizado",
      whyCard1Desc: "Elisa y Bruno Rodrigues le acompañan desde el embarque en Paraíba hasta el regreso seguro a casa.",
      whyCard2Title: "Hoteles Seleccionados y Confort",
      whyCard2Desc: "Hoteles con excelente desayuno y autobuses ejecutivos con aire acondicionado y máxima comodidad.",
      whyCard3Title: "Turismo Religioso con Devoción",
      whyCard3Desc: "Rutas con misas, momentos de reflexión y visitas a los mayores santuarios de Brasil.",
      whyCard4Title: "Seguridad y Certificación",
      whyCard4Desc: "Agencia registrada en el Ministerio de Turismo (CADASTUR) con seguro de viaje nacional incluido.",
      instagramTitle: "Directo de Nuestro Instagram @rodriguesturpb",
      instagramSub: "Siga a nuestros grupos felices, paisajes deslumbrantes y momentos mágicos:",
      btnFollowInstagram: "Seguir a @rodriguesturpb en Instagram",
      cookieTitle: "🍪 Política de Cookies y Privacidad (LGPD)",
      cookieDesc: "Utilizamos cookies esenciales para garantizar una navegación segura y análisis anónimo de rendimiento, conforme a la LGPD.",
      cookieAccept: "Aceptar Todas las Cookies",
      cookieSettings: "Preferencias de Cookies",
      footerLegalHelpUs: "HelpUS LLC • Soluciones Inteligentes en Tecnología",
      footerDevNote: "Plataforma desarrollada y gestionada por HelpUS Technology bajo la gobernanza global AntiG."
    }
  }
};
