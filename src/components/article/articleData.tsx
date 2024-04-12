const getRandomImageUrl = () => {
  const width = 400; // largura da imagem
  const height = 200; // altura da imagem
  const randomId = Math.floor(Math.random() * 1000); // ID aleatório para a imagem
  return `https://picsum.photos/${width}/${height}?random=${randomId}`;
};

// Exemplo de utilização:
const imageUrl: string = getRandomImageUrl();

export const articles = [
  {
    id: 1,
    title: "Como lidar com metas?",
    content: `
        <p>Cada vez eu me convenço mais da importância que as metas têm em todas áreas da vida. Podemos criar metas para tudo, um melhor relacionamento, sermos melhores pais, passar em algum concurso, juntar um valor em dinheiro e vendas, acredito que em vendas além da importância, ter metas e saber como alcançá-las se torna fundamental para um resultado acima da média.</p>
        <p>Tenho na minha casa um exemplo controverso, minha esposa trabalha com vendas e sempre externa detestar metas, me comunica que não funciona bem sob pressão e as metas se transformam em um fardo para carregar. Como lidar bem com as metas e transformá-las em parceiras de jornada e não um fardo, essa é uma pergunta que muitos devem fazer.</p>
        <h2>Algumas dicas para que a meta seja uma mola propulsora de seus resultados:</h2>
        </br>
        <ol>
          <li><span style="font-weight: bold;">1-</span> Metas sempre devem ser factíveis, não adianta entrar em um túnel totalmente escuro onde você irá se chocar em alguma parede e paralisar. É sempre importante ver a luzinha no fundo, para que ela seja o guia e a medida que ela vá aumentando sua motivação em chegar também aumente.</li>
            </br>
          <li><span style="font-weight: bold;">2-</span> A meta deve ser importante para você e mais ninguém. No caso de uma empresa que cobra metas, você deve achar qual a importância de atingir esta determinada meta lhe trará, pode ser uma promoção, remuneração ou reconhecimento, o importante é achar aonde ela lhe toca o coração.</li>
          </br>
          
          <li><span style="font-weight: bold;">3-</span> Descasque a meta, como assim??? Sonhos se tornam objetivos que se transformam em metas, que por sua vez viram ações e que se transformam em resultados! Comece pelo sonho que você terá mais motivação para buscar as outras etapas!</li>
          </br>
       
          </ol>
        <p>E por último, mas não menos importante, sempre aplique a técnica SMART nas metas, ela lhe facilita mensurar o progresso e fragmenta a meta em menores etapas, fazendo com que a jornada de pequenas conquistas seja mais prazerosa do que o resultado final!</p>
      `,
    imageUrl: imageUrl,
  },
  {
    id: 2,
    title: "Como ser resiliente no Mercado Imobiliário",
    content: `<p>Resiliência é um conceito da física que fala da propriedade que alguns objetos têm de recuperar a forma original depois de uma deformação elástica.</p>
    <p>Há pouco tempo, o termo resiliente foi adotado pelas pessoas que se mantinham firmes mesmo depois de grandes perdas.</p>
    <p>Porém, somos seres humanos e, sendo assim, é impossível nos mantermos sempre no estado de alto astral o tempo inteiro. Desta forma, a resiliência é a capacidade de nos “reerguermos” o mais rápido possível após uma decepção.</p>
    <h2>E como aplicar isso em nosso mercado?</h2>
    <p>Há alguns anos atrás, eu era gestor de uma equipe de lançamentos. Na época, a construtora estava com uma campanha de comissão dobrada, o que traria um valor expressivo, tanto para minha corretora quanto para mim. O contrato estava pronto e a assinatura agendada para um sábado. Como de praxe, cheguei cedo para deixar tudo preparado.</p>
    <p>Quando o cliente sentou na minha frente para iniciarmos a assinatura, eis que ele nos informa que estava sendo transferido para outra cidade e, portanto, estava declinando da compra.</p>
    <p>Nessa hora que aparece a resiliência, pois você não tem tempo de se abater. O negócio é uma última tentativa de reverter, e caso não consiga, que foi o que ocorreu, incentivar a corretora e focar em um próximo negócio.</p>
    <p>Para facilitar a resiliência neste caso, é importante que o corretor tenha uma carteira de clientes bem organizada, estratégias de captação de leads bem definidas e métricas de performance bem claras, pois o corretor de sucesso sabe que não se consegue ganhar todas, e assim como uma porta se fecha, duas se abrem.</p>
    <p>Para finalizar, uma frase que escutei e achei muito legal.</p>
    <h2 style="margin-bottom: 2rem; text-align: center;">“Crie cachorro, gato, ou no meu caso um porquinho da índia, mas não crie expectativas até que esteja tudo concluído!”</h2>
    `,
    imageUrl: imageUrl,
  },
  {
    id: 3,
    title: "Como ser resiliente no Mercado Imobiliário",
    content: `<p>Resiliência é um conceito da física que fala da propriedade que alguns objetos têm de recuperar a forma original depois de uma deformação elástica.</p>
    <p>Há pouco tempo, o termo resiliente foi adotado pelas pessoas que se mantinham firmes mesmo depois de grandes perdas.</p>
    <p>Porém, somos seres humanos e, sendo assim, é impossível nos mantermos sempre no estado de alto astral o tempo inteiro. Desta forma, a resiliência é a capacidade de nos “reerguermos” o mais rápido possível após uma decepção.</p>
    <h2>E como aplicar isso em nosso mercado?</h2>
    <p>Há alguns anos atrás, eu era gestor de uma equipe de lançamentos. Na época, a construtora estava com uma campanha de comissão dobrada, o que traria um valor expressivo, tanto para minha corretora quanto para mim. O contrato estava pronto e a assinatura agendada para um sábado. Como de praxe, cheguei cedo para deixar tudo preparado.</p>
    <p>Quando o cliente sentou na minha frente para iniciarmos a assinatura, eis que ele nos informa que estava sendo transferido para outra cidade e, portanto, estava declinando da compra.</p>
    <p>Nessa hora que aparece a resiliência, pois você não tem tempo de se abater. O negócio é uma última tentativa de reverter, e caso não consiga, que foi o que ocorreu, incentivar a corretora e focar em um próximo negócio.</p>
    <p>Para facilitar a resiliência neste caso, é importante que o corretor tenha uma carteira de clientes bem organizada, estratégias de captação de leads bem definidas e métricas de performance bem claras, pois o corretor de sucesso sabe que não se consegue ganhar todas, e assim como uma porta se fecha, duas se abrem.</p>
    <p>Para finalizar, uma frase que escutei e achei muito legal.</p>
    <h2 style="margin-bottom: 2rem; text-align: center;">“Crie cachorro, gato, ou no meu caso um porquinho da índia, mas não crie expectativas até que esteja tudo concluído!”</h2>
    `,
    imageUrl: imageUrl,
  },
  {
    id: 4,
    title: "Como ser resiliente no Mercado Imobiliário",
    content: `<p>Resiliência é um conceito da física que fala da propriedade que alguns objetos têm de recuperar a forma original depois de uma deformação elástica.</p>
    <p>Há pouco tempo, o termo resiliente foi adotado pelas pessoas que se mantinham firmes mesmo depois de grandes perdas.</p>
    <p>Porém, somos seres humanos e, sendo assim, é impossível nos mantermos sempre no estado de alto astral o tempo inteiro. Desta forma, a resiliência é a capacidade de nos “reerguermos” o mais rápido possível após uma decepção.</p>
    <h2>E como aplicar isso em nosso mercado?</h2>
    <p>Há alguns anos atrás, eu era gestor de uma equipe de lançamentos. Na época, a construtora estava com uma campanha de comissão dobrada, o que traria um valor expressivo, tanto para minha corretora quanto para mim. O contrato estava pronto e a assinatura agendada para um sábado. Como de praxe, cheguei cedo para deixar tudo preparado.</p>
    <p>Quando o cliente sentou na minha frente para iniciarmos a assinatura, eis que ele nos informa que estava sendo transferido para outra cidade e, portanto, estava declinando da compra.</p>
    <p>Nessa hora que aparece a resiliência, pois você não tem tempo de se abater. O negócio é uma última tentativa de reverter, e caso não consiga, que foi o que ocorreu, incentivar a corretora e focar em um próximo negócio.</p>
    <p>Para facilitar a resiliência neste caso, é importante que o corretor tenha uma carteira de clientes bem organizada, estratégias de captação de leads bem definidas e métricas de performance bem claras, pois o corretor de sucesso sabe que não se consegue ganhar todas, e assim como uma porta se fecha, duas se abrem.</p>
    <p>Para finalizar, uma frase que escutei e achei muito legal.</p>
    <h2 style="margin-bottom: 2rem; text-align: center;">“Crie cachorro, gato, ou no meu caso um porquinho da índia, mas não crie expectativas até que esteja tudo concluído!”</h2>
    `,
    imageUrl: imageUrl,
  },
  {
    id: 5,
    title: "Como ser resiliente no Mercado Imobiliário",
    content: `<p>Resiliência é um conceito da física que fala da propriedade que alguns objetos têm de recuperar a forma original depois de uma deformação elástica.</p>
    <p>Há pouco tempo, o termo resiliente foi adotado pelas pessoas que se mantinham firmes mesmo depois de grandes perdas.</p>
    <p>Porém, somos seres humanos e, sendo assim, é impossível nos mantermos sempre no estado de alto astral o tempo inteiro. Desta forma, a resiliência é a capacidade de nos “reerguermos” o mais rápido possível após uma decepção.</p>
    <h2>E como aplicar isso em nosso mercado?</h2>
    <p>Há alguns anos atrás, eu era gestor de uma equipe de lançamentos. Na época, a construtora estava com uma campanha de comissão dobrada, o que traria um valor expressivo, tanto para minha corretora quanto para mim. O contrato estava pronto e a assinatura agendada para um sábado. Como de praxe, cheguei cedo para deixar tudo preparado.</p>
    <p>Quando o cliente sentou na minha frente para iniciarmos a assinatura, eis que ele nos informa que estava sendo transferido para outra cidade e, portanto, estava declinando da compra.</p>
    <p>Nessa hora que aparece a resiliência, pois você não tem tempo de se abater. O negócio é uma última tentativa de reverter, e caso não consiga, que foi o que ocorreu, incentivar a corretora e focar em um próximo negócio.</p>
    <p>Para facilitar a resiliência neste caso, é importante que o corretor tenha uma carteira de clientes bem organizada, estratégias de captação de leads bem definidas e métricas de performance bem claras, pois o corretor de sucesso sabe que não se consegue ganhar todas, e assim como uma porta se fecha, duas se abrem.</p>
    <p>Para finalizar, uma frase que escutei e achei muito legal.</p>
    <h2 style="margin-bottom: 2rem; text-align: center;">“Crie cachorro, gato, ou no meu caso um porquinho da índia, mas não crie expectativas até que esteja tudo concluído!”</h2>
    `,
    imageUrl: imageUrl,
  },
];
