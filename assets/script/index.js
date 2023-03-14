const products = [
    {
        id: 2,
        title: "Ração Úmida Pedigree Sachê Carne ao Molho para Cães Adultos de Raças Pequenas 100 g",
        img: "https://static.petz.com.br/fotos/1624544425002.jpg",
        price: 3.29,
        details: [
            "Indicada para cães adultos;",
            "Refeição 100% completa;",
            "Sem conservantes, sem corantes e sem aromas artificiais;",
            "Suculentos pedacinhos cozidos a vapor;",
            "Balanço ideal de fibras;",
            "Proporciona fezes firmes e fáceis de limpar;",
            "Pelo saudável;",
            "Contém ômega 6 e zinco;",
            "Disponível em embalagens de 100 g.",
        ]
    },
    {
        id: 3,
        title: "Ração Pedigree Nutrição Essencial Carne para Cães Adultos",
        img: "https://static.petz.com.br/fotos/1666882957839.jpg",
        price: 21.99,
        details: [
            "Indicada para cães;",
            "Nutrição essencial sabor carne para cães adultos;",
            "Alimento premium 100% completo e balanceado;",
            "Sem corantes artificiais presentes na ração;",
            "Nutrição essencial com 23 vitaminas e minerais;",
            "Proteína de alta qualidade para manutenção de músculos fortes;",
            "Com ômega 6 para pele e pelo saudáveis de seu cachorro;",
            "Vida saudável: nível ideal de ingredientes para qualidade de vida;",
            "Disponível em embalagens de 900g, 10,1kg, leve 10,1kg pague 9kg, 15kg e leve 15kg pague 13,5kg.",
        ]
    },
    {
        id: 4,
        title: "Biscoito Pedigree Biscrok Multi para Cães Adultos",
        img: "https://static.petz.com.br/fotos/1627910569050.jpg",
        price: 23.19,
        details: [
            "Indicado para cães adultos;",
            "Deliciosos biscoitos assados e crocantes;",
            "Com ômega 6 para pelos mais brilhantes;",
            "Com cálcio para o fortalecimento de ossos e dentes;",
            "Proteínas para o desenvolvimento muscular;",
            "Vitamina e mais sabor para seu cachorro;",
            "Sabor irresistível que seu cão vai adorar;",
            "Momentos de carinho e conexão com o seu cachorro;",
            "Disponível em embalagens de 500 g e 1 kg.",
        ]
    },
    {
        id: 5,
        title: "Ração Pedigree Para Cães Filhotes Raças Pequenas",
        img: 'https://static.petz.com.br/fotos/1630012033940.jpg',
        price: 26.99,
        details: [
            "Indicada para cães filhotes;",
            "Específica para pets de raças pequenas;",
            "Proporciona crescimento saudável e equilibrado;",
            "Com fibras naturais para uma digestão saudável;",
            "Enriquecida com cálcio e proteínas;",
            "Auxilia na redução do tártaro,",
            "Disponível em embalagens de 900 g e 2,7 kg.",
        ]
    },
    {
        id: 6,
        title: "Ração Premier para Gatos Castrados de 6 meses a 6 anos Sabor Salmão",
        img: "https://static.petz.com.br/fotos/1656341614080.jpg",
        price: 29.99,
        details: [
            "Indicada para gatos;",
            "Alimento super premium;",
            "Garante o máximo em saúde e vitalidade aos gatos mediante a cuidados nutricionais específicos;",
            "Tem como foco promover a manutenção do peso ideal por meio de calorias e gorduras reduzidas;",
            "Saúde do trato urinário e controle de bolas de pelos nos gatos castrados dessa faixa etária;",
            "Outra exclusividade são os ovos utilizados na formulação desse alimento;",
            "Provenientes do sistema de criação cage free, no qual as aves são criadas livres de gaiolas, permitindo assim um bem-estar adequado;",
            "Combinação de ingredientes especiais com o alto aproveitamento dos nutrientes;",
            "Reduz o odor e volume das fezes minimizando possíveis inconvenientes de uma vida dentro de casa;",
            "Facilita o convívio entre o tutor e seu gato;",
            "Disponível em embalagens de 500 g, 1,5 kg e 7,5 kg.",
        ]
    },
    {
        id: 7,
        title: "Ração Premier Raças Específicas para Golden Retriever Filhotes Sabor Frango 10,1kg",
        img: "https://static.petz.com.br/fotos/1669836951520.jpg",
        price: 222.99,
        details: [
            "Indicada para Golden Retriever Filhotes;",
            "Nutrição específica;",
            "Pelagem bonita e pele saudável através de ácidos graxos essenciais ômegas 3 e 6, biotina e zinco;",
            "Cuidado articular pela associação exclusiva de ß-Glucano, EPA, DHA, condroitina e glicosamina;",
            "Desenvolvimento excelente",
            "Níveis ótimos de proteína, vitaminas e minerais. Enriquecido com DHA, ômega 3 essencial aos filhotes;",
            "Saúde intestinal",
            "Através da combinação de ingredientes de alta digestibilidade, fibras especiais e prebióticos;",
            "Odor e volume das fezes reduzidos",
            "Seleção de ingredientes especiais que auxiliam na redução do odor das fezes;",
            "Disponível em embalagem de 10,1kg",
        ]
    },
    {
        id: 8,
        title: "Ração Úmida Premier Orgânico para Gatos Adultos Sabor Frango, Chia e Quinoa 70g",
        img: "https://static.petz.com.br/fotos/1669214985663.jpg",
        price: 7.99,
        details: [
            "Indicada para gatos adultos",
            "Ingredientes nobres e orgânicos",
            "Feito com Frango, chia e Quinoa orgânicos, harmonizados com um molho delicioso",
            "Naturalmente saudável",
            "Sem conservantes, sem corantes e sem aromatizantes",
            "Nutritivo - Rico em proteínas, vitaminas e aminoácidos essenciais",
            "Certificado Orgânico IBD e Produto Orgânico",
            "Disponível em embalagem de 70g",
        ]
    },
    {
        id: 9,
        title: "Ração Premier Nutrição Clínica Cardio para Cães de Porte Pequeno",
        img: "https://static.petz.com.br/fotos/1669222377240.jpg",
        price: 324.99,
        details: [
            "Indicada para cães com insuficiência cardíaca;",
            "Sódio controlado",
            "Auxilia na redução da pré-carga e no controle do acúmulo de fluidos;",
            "Teores elevados de taurina e L-carnitina",
            "Auxiliam na contração e no metabolismo energético do miocárdio;",
            "Fósforo moderado",
            "Cuidado da função renal;",
            "Níveis elevados de EPA + DHA",
            "Previnem a perda de massa magra e auxiliam no tratamento de arritmias;",
            "Disponível em embalagem de 2kg e 10,1kg",
        ]
    },
    {
        id: 10,
        title: "Ração Premier Nutrição Clínica Obesidade para Gatos Adultos",
        img: "https://static.petz.com.br/fotos/1588019819404.jpg",
        price: 97.99,
        details: [
            "Indicada para gatos adultos;",
            "Alimentação auxiliar para casos de obesidade;",
            "Proporciona mais vitalidade;",
            "Contém alto nível de proteína; ",
            "Auxilia na manutenção da massa magra;",
            "Disponível em embalagens de 500 g e 1,5 kg.",
        ]
    },
    {
        id: 11,
        title: "Ração Nestlé Purina Pro Plan Para Cães Adultos com Pele Sensível",
        img: "https://static.petz.com.br/fotos/1627315268252.jpg",
        price: 95.19,
        details: [
            "Indicada para cães adultos;",
            "Ideal para pets com pele sensível;",
            "Fórmula de alta tolerância com os melhores ingredientes;",
            "Reforça a proteção cutânea, promove uma pele saudável e uma pelagem brilhante;",
            "Satisfaz as necessidades nutricionais dos pets com transtornos dérmicos;",
            "Disponível em embalagens com 2,5 kg e 15 kg.",
        ]
    },
    {
        id: 12,
        title: "Ração Nestlé Purina Pro Plan para Gatos Adultos Trato Urinário Sabor Frango",
        img: "https://static.petz.com.br/fotos/1627332011678.jpg",
        price: 25.49,
        details: [
            "Indicada para gatos adultos;",
            "Oferece nutrição específica que ajuda a manter o sistema urinário saudável;",
            "Promove a saúde e bem-estar geral dos gatos com predisposição a formação de cálculos urinários;",
            "Combinação de nutrientes que ajudam a proteger a saúde do trato urinário inferior de gatos adultos;",
            "Desenvolvida por cientistas, veterinários e nutricionistas;",
            "Carne de frango como primeiro ingrediente;",
            "Especialmente formulada para obter um pH urinário ligeiramente mais ácido, estimulando o consumo de água;",
            "Disponíveis em embalagens de 400g, 1kg, 3kg e 7,5kg.",
        ]
    }, 
    {
        id: 13,
        title: "Ração Nestlé Purina Pro Plan Reduced Calorie para Cães Adultos de Raças Pequenas Sabor Frango",
        img: "https://static.petz.com.br/fotos/1627392261843.jpg",
        price: 43.85,
        details: [
            "Indicada para cães adultos;",
            "Nutrição avançada para ajudar a reduzir e a manter o peso em cães com tendência a engordar;",
            "Auxilia na obtenção de uma ótima saúde e bem-estar;",
            "Contém antioxidantes naturais",
            "Desenvolvida por cientistas, veterinários e nutricionistas;",
            "20% menos calorias e baixos níveis de gordura;",
            "Fabricada com ingredientes selecionados,",
            "Disponível em embalagem de 1 kg, 2,5 kg e 7,5 kg."
        ]
    },
    {
        id: 14,
        title: "Ração Zootekna para Beija-Flor Nectar 500g",
        img: "https://static.petz.com.br/fotos/1631551659940.jpg",
        price: 47.21,
        details: [
            "Indicado para pássaros;",
            "Alimento premium;",
            "Mantém a saúde dos passarinhos;",
            "Oferece mais vitaminas e energia,",
            "A embalagem contém 500g.",
        ]
    },
    {
        id: 15,
        title: "Alimento Pássaro Petz Farinhada Mel e Ovos para Calopsita - 300g",
        img: "https://static.petz.com.br/fotos/1633436997500.jpg",
        price: 37.99,
        details: [
            "Indicado para calopsitas;",
            "Alimento super premium;",
            "Delicioso;",
            "Nutritivo e divertido;",
            "Não contém corantes artificiais;",
            "Com ômega 3, ômega 6 e minerais quelatados;",
            "Uso de prebióticos e probióticos;",
            "Disponível em embalagem de 300 g.",
        ]
    }, 
    {
        id: 16,
        title: "Ração Nutrópica para Calopsita Sabor Frutas",
        img: "https://static.petz.com.br/fotos/1552671515810.jpg",
        price: 36.90,
        details: [
            "Indicada para calopsita;",
            "É um alimento extrusado completo, cientificamente formulado;",
            "Especialmente desenvolvido para calopsitas;",
            "Elaborado a partir das mais recentes pesquisas em nutrição de calopsitas;",
            "Combina nutritivas partículas extrusadas, repletas de vitaminas e minerais, a deliciosos pedaços de frutas desidratadas;",
            "Disponível em embalagens com 300g, 900g e 5kg.",
        ]
    },
    {
        id: 17,
        title: "Alimento Pássaro Petz Extrusado Natural para Papagaio e Cacatua",
        img: "https://static.petz.com.br/fotos/1633437632346.jpg",
        price: 47.99,
        details: [
            "Indicado para papagaio e cacatua;",
            "Alimento super premium;",
            "Delicioso;",
            "Menos sujeira quando comparado às versões com sementes;",
            "Não contém corantes artificiais;",
            "Com minerais quelatados;",
            "Uso de prebióticos;",
            "Disponível em embalagens de 700 g e 1,2 kg.",
        ]
    }, 
    {
        id: 18,
        title: "Brinquedo Chalesco Para Cães Pelúcia Tartaruga Colorido",
        img: "https://static.petz.com.br/fotos/1456528099504.jpg",
        price: 25.89,
        details: [
            "Indicado para cães;",
            "Além de apresentar formato criativo e divertido;",
            "Possui textura macia de pelúcia;",
            "Garantindo um momento de diversão para o seu amigo;",
            "Ideal para gastar energia e deixar o seu animal de estimação sempre disposto e saudável;",
            "Embalagem em 1 unidade."
        ]
    }, 
    {
        id: 19, 
        title: "Terrário Aquaterrário para Tartaruga Com Filtro Interno",
        img: "https://static.petz.com.br/fotos/1450715259896.jpg",
        price: 1890,
        details: [
            "Indicado para tartarugar;",
            "Presenteie sua tartaruga com muito espaço e qualidade;",
            "Este terrário apresenta um filtro interno que vai auxiliar na purificação de água de seu terrário;",
            "Disponível em embalagem com 1 unidade.",
        ]
    },
    {
        id: 20,
        title: "Alimento para peixe Alcon Guppy 20gr",
        img: "https://static.petz.com.br/fotos/1572633695555.jpg",
        price: 19.99,
        details: [
            "Indicada para peixes de pequeno porte",
            "Alimentação completa em flocos",
            "Não contém corantes artificiais em sua fórmula",
            "Disponível em embalagem com 20 g",
        ]
    }
];

function productInsert() {
    const getCard = document.getElementById("cardContent");

    products.map(product => {
        getCard.innerHTML += `
            <div class="cardContainer" onclick="openProduct(${product.id})">
                <div>
                    <img src="${product.img}" alt="Imagem de ${product.title}">

                    <span class="cardTitle">${product.title}</span>
                    <span>R$${product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</span>
                </div>
            </div>
        `
    });

    console.log("!")
}

function petInsert() {
    const getCard = document.getElementById("cardContent");

    const pets = [
        {
            id: 1,
            name: "Fred",
            img: "./assets/images/adote_dog1.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 2,
            name: "Lola",
            img: "./assets/images/adote_dog2.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 3,
            name: "Daisy",
            img: "./assets/images/adote_dog3.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        { 
            id: 4,
            name: "Luna",
            img: "./assets/images/adote_gato1.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 5,
            name: "Misty",
            img: "./assets/images/adote_gato2.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 6,
            name: "Felix",
            img: "./assets/images/adote_gato3.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 7,
            name: "Pingo",
            img: "./assets/images/adote_hamster1.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 8,
            name: "Coral",
            img: "./assets/images/adote_peixe1.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
        {
            id: 1,
            name: "Kiwi",
            img: "./assets/images/adote_calopsita1.jpg",
            history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in elit sed mauris tincidunt laoreet ut lacinia neque. Aenean egestas dui ut enim mattis tincidunt. Vestibulum facilisis eros non vestibulum pharetra. Suspendisse faucibus in elit id maximus. Morbi ac enim efficitur leo posuere vehicula sit amet et turpis. Curabitur non neque dignissim, efficitur eros non, commodo nisi. Mauris molestie, odio ac dignissim iaculis, ligula justo consequat risus, vel condimentum quam nisi mollis odio.<br><br>Nulla non pretium metus, id lacinia elit. Aliquam in enim quis arcu molestie tempus id eu nibh. Mauris iaculis a libero fringilla scelerisque. Nam id tincidunt urna, non consectetur nisi. Quisque et rhoncus tortor, in ornare ex. Morbi sed posuere augue. Vestibulum blandit ornare ex a egestas. Fusce lacus erat, aliquam vitae tortor a, venenatis tempor sem. In hac habitasse platea dictumst. Fusce nulla est, lacinia ut molestie in, pulvinar in dolor. Fusce ut eros eleifend, tristique ligula sed, tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas aliquet, nibh nec suscipit tempor, elit nisi ultrices nunc, ut varius risus nibh ut mauris. Curabitur tincidunt aliquet fermentum."
        },
    ];

    const getTitle = document.getElementById("title");
    const getPrice = document.getElementById("price");
    const getImage = document.getElementById("productSrc");
    const getDescription = document.getElementById("description");

    pets.map(pet => {
        getCard.innerHTML += `
            <div class="cardContainer" onclick="openPet(${pet.id})">
                <div>
                    <img src="${pet.img}" width="230" height="230" alt="Foto de ${pet.name}">

                    <span>Adote "<span class="cardTitle">${pet.name}</span>"</span>
                    <button class="adotar">Adotar</button>
                </div>
            </div>
        `
    })
}


function checkProduct() {
    const urlParms = new URLSearchParams(window.location.search);

    if(!urlParms.has("productId") || !urlParms.get("productId") || !products[urlParms.get("productId")]) {
        return window.location.href = "./shop.html?error=notFound";
    }

    loadProduct();
}

function loadProduct() {
    
    const getTitle = document.getElementById("title");
    const getPrice = document.getElementById("price");
    const getImage = document.getElementById("productSrc");
    const getDescription = document.getElementById("description");

    products.map(product => {
       getTitle.innerHTML = product.title;
       getPrice.innerHTML = product.price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
       getImage.setAttribute("src", product.img);
       getImage.setAttribute("alt", `Foto do produto ${product.title}`);
       getDescription.innerHTML = product.details;
    })
}

/* ... */
/**
  * @param {Number} id
  **/
function openProduct(id) {
    window.location.href = `./product.html?productId=${id}`;
}

/**
  * @param {Number} id
  **/
function openPet(id) {
    window.location.href = `./adote.html?error=Redirect`;
}
