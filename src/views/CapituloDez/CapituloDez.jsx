import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import Styles from './/CapituloDez.module.scss';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import { useRouter } from 'next/router';
import { FaBookBookmark } from "react-icons/fa6";
import { PiMagnifyingGlassFill } from "react-icons/pi";

export default function CapituloDez() {
    const router = useRouter();  

  useEffect(() => {
    // Verifica se o usuário está autenticado ao tentar acessar a página
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/'); 
    }
  }, [router]);  

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); 
    router.push('/'); 
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Capítulo Dez: O rio da agonia',
      
    },
    {
      title: 'Joaquim Naves',
      image: '/images/casoIrmaos/arroz.svg',
      alt: 'Capa do livro',
    },
    {
      content: <div>
Já era o quinto dia desde que a polícia começou a arrastar os nosso corpo pelas matas fechadas no entorno de Araguari. A cada dia, ele arrumava um jeito diferente de nos machucar , mais cruel e doído do que no dia anterior.
<br /><br />
O lugar era distante  da cidade. Tava demorando muito pra chegar. Por mais que  a gente não conseguisse olhar pelas janelas, eu conhecia aqueles caminhos muito bem. Já tinha andado com meu caminhão por toda a região. Percebi logo no primeiro dia que a ideia era levar a gente fora da cidade, longe o suficiente para que ninguém ouvisse os nossos gritos ou visse as maldades que aconteciam lá.
<br /><br />
Mas era quando eu descia do carro que aquela angústia batia no peito. Tudo parecia assustador. O barulho do mato sendo amassado pelas botas da polícia. Os pios dos pássaros que em outra vida me fizeram sentir tranquilidade. Os xingos que não paravam mesmo que eu e Bastião já tivéssemos dito tudo o que sabíamos.
<br /><br />
Eu já conhecia bem a crueldade do tenente. sabia que ele era capaz de fazer o mais inocente dos seres a pecar. Nos último dias fui amarrado em árvores, besuntado no mel, colocado para ser comido vivo pelos insetos, espancado, mas nada disso doía tanto quanto às ameaças que o tenente fazia toda hora pra mim e para todos que eu amo. Dizia que iria machucar e matar minha esposa, meus pequenos, minha mãe, meu irmão…
<br /><br />
Nesse dia, o tenente estava mais invocado que o normal. Gritava mais. Batia mais. Ameaçava mais. Queria tirar a confissão de mim de qualquer jeito, de qualquer jeito mesmo!
Reparei que iria ser pior quando a primeira coisa que ouvi dele foi: 
<br /><br />
- Ou vocês confessam hoje ou vão morrer! Esse teatrinho de homens inocentes acaba hoje! - gritou.
<br /><br />
Quando desci do carro nesse dia o aperto no peito foi mais apertado, levaram Bastião pro outro lado da mata, eu não conseguia vê ele, não sabia se tava bem ou o que tavam fazendo com ele. Eu tinha implorado para que não fizessem isso, que deixassem nois junto, mas me ignoraram.
<br /><br />
A única coisa que consegui ouvi nesse dia todo além dos gritos dos tenentes e a risada dos policiais foram os berros de dor do meu irmão, seja lá o que tava acontecendo naquelas bandas tava doendo e muito.
<br /><br />
Um pouco antes de separar eu e o bastião, o tenente mandou um dos policiais me amarrar em uma árvore. Me tremi só de ouvir, passei os último dia quase que inteiro assim, as perna e os braço esticado até ardê, não sei se por causa dos tabefe ou por conta dessa amarração toda, mas eu e meu irmão já não tava mais conseguindo anda. Era uma eternidade que nois passava naquele tronco.
<br /><br />
Num foi diferente dessa vez, o policial que ficou comigo enquanto aquele maluco do tenente foi “dar um jeito no meu irmão” amarrou meus pulso e minhas perna no alto da árvore. Essas árvore aqui da região não é igual aquelas de desenho que nois vê no jornal não, o tronco é todo torcido e entremeia muito sol nela, queimava demais da conta.
<br /><br />
Tudo doía, não faço ideia de quanto tempo passei por lá, só sei que estava quente, muito, muito quente. Queria muito pedir por água mas fiquei com medo do que poderia acontecer comigo, não queria fazer aquela nojeira de beber meu xixi de novo, mas sei que o tenente é capaz de tudo.
<br /><br />
Eu entendo que ele quer descobrir o que aconteceu com Benedito, eu, o bastião, a família inteira também quer mas não foi nois, como poderia ser?! Família não mata família não, Deus não gosta dessas. A gente que foi atrás da polícia. Por que a gente faria isso se fosse a gente?! Eu não matei ninguém, bastião também não, meu sobrinho tava doente em casa, ele num deixaria a Salvina sozinha com essa criança a noite inteira não.
<br /><br />
O tenente volta. Sinto arrepio toda vez que esse homi olha pra mim, é olhar pro próprio diabo. Ele quer que eu confesse uma coisa que eu nunca fiz.
<br /><br />
  - Eu não matei meu primo seu tenente, pelo amor de Deus, eu e o bas….
<br /><br />
Ele me dá um tapa bem na cara, daqueles que não para de formigar por um bom tempo e que você sabe que vai deixar marca.
<br /><br />
- Não ouse blasfemar o nome de Deus seu vagabundo assassino! Você matou o Benedito sim, acha que tá enganando quem aqui?! Ninguém aqui acredita em você, ninguém na cidade acredita. Todo mundo já sabe que essa família é de um bando de assassino. Até as vagabundas da sua mãe e da sua mulher tão metida nisso. Você não tem mais nada, você não é nada.
<br /><br />
- Mas seu tenente, nois não é culpado, nois também quer achar o Benedito, eu juro que o que nois mais quer é achar o Benedito.
<br /><br />
- Pare de mentir agora! Quer saber, cansei de falar com você! A verdade é que ou vocês confessam hoje ou vocês não sairão vivos daqui. Mas por agora fica aí queimando nesse sol que eu vou dar uma palavrinha com o seu irmão.
<br /><br />
Enquanto se distanciava o tenente ainda gritou pro policial do meu lado:
<br /><br />
- Passa mel nele todo, quero ver até quando ele aguenta ser comido por tudo o que é bicho.
<br /><br />
Ele foi embora por um tempo. Ouvi barulho no rio, água mexendo de jeito diferente e torci que fosse alguém, que alguém tivesse vindo buscar nois mas nada. Na estrada também não tinha ninguém que pudesse nos ajudar, e mesmo se tivesse, ou não conseguiriam ou não ia querer mesmo.
<br/><br/>
Desmaiei algumas vezes, mas insistiam em me acordar de novo com um tapa, um jato de água no rosto, com uma batida forte dos galhos que tinha ali em volta na minhas costas. A dor dos bicho me picando é grande demais, a dor de apanhar, a dor de saber que minha família estava passando pela mesma coisa.
<br/><br/>
Quando o tenente voltou eu tava muito cansado, não sabia quanto tempo já tinha passado desde que foi ver o bastião. Meu ouvido fazia um zumzumzum danado, bem lá no fundo eu consegui escutar aquela voz do mal me dizendo:
<br/><br/>
- Está pronto para assumir sua culpa?
<br/><br/>
- Não conseguia levantar minha cabeça, tava pesada demais… tava cansado demais.
<br/><br/>
- Confesse! Confesse ou eu te mato!
<br/><br/>
- Levei um susto. O tenente deu um tiro pro alto que espantou até os pássaros descansando ali perto. Meu coração acelerou e todo meu corpo começou a tremer, eu estava com medo, mas pelo amor de Deus eu não aguentava mais, precisava parar, precisava parar logo.
<br/><br/>
- Pode mata, num fiz nada pro Benedito! Cansei desse sofrimento! Pode mata!
<br/><br/>
- O peito apertava, as lágrimas desciam meu rosto, aquele era meu limite, eu preferia morrer do que passar mais um segundo sequer disso com meu irmão.
<br/><br/>
Confesse! Confesse ou eu mato seu irmão!
<br/><br/>
Queria vomitar, queria sair correndo, gritar com ele, mas nada adiantava. Ele não pode matar meu irmão, ele é um homem bom, um homem honesto, que me mate mas não mate meu irmão. Eu que trouxe Benedito pra cá, eu que fiz sociedade com ele, mesmo não tendo encostado em um fio de cabelo dele a culpa de toda essa bagunça é minha.
<br/><br/>
- Por favor seu tenente! Num faz um trem desses, nois nada fizemo! Bastião num fez nada! Ele nunca faria nada! Já falei pra me matar se quiser mesmo matar um de nois.
<br/><br/>
- Ora seu caipira! Assuma logo que mataram seu primo! Assuma ou eu mato seu irmão!
<br/><br/>
- Seu tenente, por favor! - chorei de soluçar, não conseguia mais falar, ele era ruim demais
<br/><br/>
- Matem! Matem Sebastião! - Gritou o suficiente para que qualquer pessoa naquela mata pudesse escutar
<br/><br/>
E então veio o tiro, e de repente tudo ficou em silêncio em volta de mim. Finalmente esse tenente tirou meu melhor amigo de mim, ele finalmente acabou com meu parceiro. Eu conhecia muito bem as maldade que a polícia era capaz de fazer, mas por algum motivo eu não esperava isso.
<br/><br/>
- E agora? Está pronto para assumir sua culpa, ou prefere o destino do seu irmão?
<br/><br/>
Fiquei quieto, não conseguia nem pensar em como reagir. O tenente foi ficando cada vez mais vermelho, bravo com a situação. Senti sangue escorrendo pelas minhas perna, ele tinha dado um tiro em mim, ia me matar também.
<br/><br/>
Não tinha mais por que manter minha inocência mesmo que ela fosse verdade. Meu irmão já morreu, eu não posso deixar nossas familias sozinha. O que vai ser das criança sem nois por perto? A Salvina já vai ficar destruída com isso, mas como ela vai se manter sem o marido? Como vai ficar minha tonha, minha mãe? Talvez agora com a morte do bastião eu possa mentir que ele quem planejou tudo, ficar menos tempo preso e voltar pra cuidar de todo mundo.
<br/><br/>
- Por favor seu tenente! Eu falo, eu falo tudo! Tudo!
<br/><br/>
Eu já havia feito de tudo para que o tenente me escutasse mas nada bastava, ele queria uma confissão, o governo queria, toda a cidade queria. No dia 12 de Janeiro 1938 vi a vida passar pelos meus olhos, não importava se fosse verdade ou não, eu tinha que falar, não queria o mesmo destino do meu irmão.
<br/><br/>
Não queria morrer. Não podia morrer.

    </div>      
    },
    {
      title:'Tenente Francisco Vieira',
      image: '/images/casoIrmaos/cacetete.svg',
      alt: 'Capa do livro',
    },
    {
      content:<div>
   <br /><br /> De poucas coisas tenho certeza na vida. A primeira é que Deus está sempre conosco e a ele tudo devemos. A segunda, que para nossa pátria devemos dar orgulho. E a última, mas não menos importante, é que a família é o maior bem que temos. Mas, desde que coloquei os pés no pedaço de terra que chamam de Araguari, uma outra coisa se juntou a minha lista de certezas. Algo que é tão claro quanto a luz do dia e não vou descansar enquanto não provar, em nome de todos os cidadãos de bem: os irmãos Naves são culpados pelo latrocínio que causou a morte de Benedito!
    <br /><br />É fato! Benedito Pereira, cidadão de bem, homem honesto e trabalhador, foi assaltado e morto por Sebastião e Joaquim Naves. Seus primos, sangue de seu sangue. Em um ato de crueldade extrema e desprezo por um dos maiores bens que podemos ter na vida - a sua família - os irmãos Naves levaram o primo em um passeio de caminhão à recém inaugurada ponte de Araguari e ali o enganaram. Assim como Caim fez com seu irmão Abel. Você, como um bom cristão, conhece essa história. E essa outra, que parece seguir os mesmos passos de cobiça e inveja da narrativa bíblica, eu vou me encarregar de lhe contar.
    <br /><br />Na ponte, com o falso convite para que fossem beber água, a dupla de assassinos resolveu agir. Joaquim passou uma corda pelo pescoço de Benedito, o enforcando, enquanto Sebastião arrancou as cuecas do primo, onde bem sabia que estava escondida a soma de 12 mil cruzeiros. Sem pensar duas vezes, Joaquim apertou e puxou a corda até que o ar faltou a Benedito. Seus movimentos, antes desesperados, foram perdendo forças até cessarem por completo. A cor lhe sumiu da pele. E esses meliantes nem mudaram de cor para cometer tamanha covardia.
    <br /><br /> Não houve remorso, nem pressa para executar o terrível plano. Joaquim e Sebastião jogaram o corpo de Benedito nas profundezas do rio Araguari. Por certo, se Deus lhes perguntasse pelo primo, como um dia perguntou por Abel a Caim, eles teriam a mesma cara de pau de se fazerem desentendidos. Mas, de Deus nada se esconde. E de mim também não. Eu bem sei que eles deram sumiço das provas do crime. A corda foi jogada floresta adentro, para jamais ser encontrada. Já o dinheiro roubado foi colocado em uma lata de soda cáustica e enterrada aos pés de uma árvore qualquer na beira da estrada que levava de volta a Araguari. Eu não tenho provas, mas é questão de tempo até eu conseguir fazer eles confessarem perante a justiça divina e de nossa pátria amada.<br /><br />
    <br/><br/>Tantas foram as vezes que refiz os passos desses assassinos e nenhuma outra resposta foi possível! A morte de Benedito foi executada a sangue frio, cada detalhe é evidente, a farsa dos irmãos ao buscarem pelo primo “sumido” no dia seguinte por toda a cidade comprova sua culpa. Conseguiram fazer aquele pobre sujeito, Ismael Nascimento, que estava a frente do caso antes de mim cair pela sua atuação fajuta, aquele coitado mal sabia o que estava fazendo, fora posto ali pelo acaso do destino, somente mais um enganado por bandidos cheios de baboseiras.
    <br/><br/>Mas a mim não podem enganar. A verdade sobre o sumiço, sobre a morte de Benedito, era tão óbvia. E os cretinos não cansavam de se fingir inocentes a cada vez que passavam pela delegacia. Não tive então outra alternativa que não fosse os manter onde não pudessem fugir, se esconder, ou pior, outro homem de bem por aí matar! Tive que os prender. São a mazela da sociedade, um perigo para a família brasileira e essa era a única forma de conseguir a confissão dos seus atos de crueldade.
    <br/><br/> Sei de todos os seus passos, cada um de seus atos. E por dias os repeti, uma vez após a outra, em voz alta eu contei e recontei o que fizeram ao pobre primo. Quase como se conta uma história de dormir para uma criança toda noite, eu li cada um dos passos dos irmãos. Em alguns dias, por quatro ou cinco vezes seguidas e mesmo assim, os desgraçados não cediam.
    <br/><br/>Mas eu estava resoluto, dali não sairiam enquanto não assumissem todo o mal que causaram. Com o Estado e Deus a meu favor, não importava o que fosse custar, eles iriam pagar pelo que fizeram. De tudo tentamos: os dois passaram os dias se alimentando somente das próprias mentiras que contavam sobre sua inocência, sofreram na pele as pancadas e golpes que elas representavam para a sociedade, até mesmo mandei que buscassem sua mãe, que claramente fora cúmplice do crime. Mas de nada adiantava.
    <br/><br/>Dias se passaram sem que os dois fossem capazes de admitir sua crueldade. Não poderia sair de Araguari sem solucionar o mistério do caso de Benedito, os bandidos só precisavam assinar sua confissão que já estava pronta. A sociedade e o Estado contavam comigo, era meu dever. Então, por muito tempo pensei o que teria que fazer para que assinassem sua confissão e acabassem de vez com todo esse processo absurdo? O que ainda não havia tentado colocar em prática?
    <br/><br/>A resposta me apareceu em uma noite agradável, quando ainda estava na delegacia, após mais uma das tentativas falhas de conseguir a confissão dos irmãos. Em um momento de reflexão cheguei à conclusão de que a única alternativa seria levar os dois ao local onde tudo acontecera, assim teriam de encarar suas consciências nos olhos enquanto a memórias da noite em que mataram o primo se repetisse por trás de seus olhos. Era isto! A única forma de conseguir que assumissem sua culpa seria colocando-os frente aos seus atos, sua culpa e os sentimentos que causaram naquela noite.
    <br/><br/>Não podia perder tempo, você bem pode imaginar como era importante que esse caso fosse solucionado. Era meu dever com Deus e com o Estado trazer criminosos como eles para a luz da justiça. Assim, ao colocar meus pés na delegacia pela manhã do dia seguinte, meu primeiro ato foi ordenar que preparassem o carro e buscassem os irmãos pois iríamos realizar o interrogatório do dia em campo. Não me preocupei com toda a papelada para a liberação dos réus, isso poderia esperar até as respostas que precisava e já conhecia estarem sobre minha mesa.
    <br/><br/>Quando tudo estava preparado, levamos os meliantes para o carro. O chofer, um homem bom e de direito, perguntou pacientemente qual seria o destino, ao qual respondi prontamente que bastava que seguisse o caminho até a ponte do rio Araguari e quando fosse a hora eu avisaria para estacionar o carro. O subordinado nada declarou sobre minhas ordens e colocou-se a dirigir, o silêncio imperava no carro exceto pelos ocasionais gemido que os irmãos soltavam vez outra. Aos poucos as pequenas casinhas de Araguari foram ficando para trás, dando lugar a paisagem do cerrado mineiro, cheia de árvores tortas e o mato alto da estação.
    <br/><br/>Lembro-me bem dos olhares furtivos que o chofer dava aos irmãos no banco de trás pelo retrovisor, sua expressão mostrava o desprezo que sentia pelos dois. Eu o entendia, como duas pessoas eram capazes de assassinar e roubar alguém de sua própria família? Cada vez mais me indignava com o caso e mais determinado de o solucionar eu ficava.
    <br/><br/>Quando nos encontrávamos já há poucos metros da cena do crime pedi para que o chofer fizesse uma manobra e estacionasse o carro de modo a ficar pronto para retornar para a cidadezinha. Descemos eu, os cabos que trouxe para me auxiliar e o chofer. Ao motorista pedi que ficasse por perto e a postos para retornarmos quando necessário, já aos meus subordinados ordenei que cada um buscasse um irmão e os levasse para lados opostos, os despisse -assim como eles fizeram com seu finado primo- e os prendesse a árvore mais próxima com as cordas mais ásperas que fomos capazes de encontrar.
    <br/><br/>Acompanhei de perto cada passo dos irmãos para que não fossem capazes de escapar. Andavam com dificuldade, é verdade, mas algo que aprendi desde cedo nas academias militares foi nunca subestimar um inimigo. Por sorte eu tinha bons subordinado a meu serviço e em pouco tempo cada irmão estava amarrado a uma árvore, um ficou próximo a ponte e outro mais abaixo perto do rio. Ambos estavam afastados da estrada e da visão dos passantes, perto o suficiente um do outro para que escutassem o que fosse necessário ser ouvido, as longe o bastante para que não pudessem se comunicar.
    <br/><br/>Naquele dia me lembro que estava quente, havíamos saído de Araguari nas primeiras horas da manhã, mas no momento em que os prendemos às árvores o sol já ia alto no céu azul límpido. Não estava com pressa, queria que se lembrassem da dor que infringiram ao seu primo Benedito, sabia que estar no local do crime faria com que o remorso e a culpa aflorassem em seus corações frios. Deixei que os cabos fizessem uma pausa para o almoço desde que ficassem vigilantes dos movimentos dos irmãos, olhando para trás ao longe podia avistar o motorista encostado ao carro com um cigarro na mão.
    <br/><br/>Deixei que uma, duas, três horas se passassem. Do local onde estava eu via a cada minuto as gotas de suor se formando sob a pele dos dois irmãos e escorrendo por seus corpos nus e pálidos na luz do dia. Queria que a exaustão de seus corpos os desse pensar na exaustão que Benedito sofrera antes de dar seu último suspiro, sabia que isso era o que faltava para que confessassem seus crimes. Só quando vi o cansaço tomar conta de suas feições foi que me encaminhei até Sebastião e lhe perguntei:
    <br/><br/>- Está pronto para assumir sua culpa?
    <br/><br/>O sujeito me olhou nos olhos por quase um minuto antes de cuspir aos meus pés. Claro, algumas horas ao sol não seriam suficientes para que o criminoso se redimisse de seus pecados. Chamei um dos cabos e ordenei que untasse Sebastião em mel, quem sabe com mais algumas horas a resposta não seria outra.
    <br/><br/>Me dirigi até Joaquim. Se Sebastião não assumiu sua culpa, o que garantiria que Joaquim o faria? Teria de causar nos dois a mesma urgência que Benedito deve de ter sentido ao perceber que sua vida seria tirada pelo sangue de seu sangue. Foi então que chamei os cabos e os instruí:
    <br/><br/>- Os dois estão perto o suficiente para se escutar, mas não tão perto para que possam conversar, o mesmo vale para nós. Então preciso que estejam atentos! Estarei com um dos irmãos e quando ouvirem  um grito a minha ordem devem atirar. Mas não se animem, precisamos que esses bandidos sejam capazes de assinar sua confissão quando voltarmos para a delegacia!
    <br/><br/>Os dois então voltaram a seus postos, um junto de Joaquim e o outro de Sebastião. Deixei que os criminosos se fatigassem ao sol por mais um par de horas, o movimento na estrada era quase inexistente, um caminhão ou carro passava a cada meia hora mais ou menos, mas ninguém se importava com nada que não fosse seguir seu próprio caminho, seja lá qual fosse
    <br/><br/>Eu sabia que eles assumiriam. Podiam ter aguentado esconder a verdade por muito tempo, mas toda mentira chega a um fim. Ainda que fossem assassinos, acreditava que eram humanos o suficiente para serem tocados pelas memórias das crueldades que cometeram naquele mesmo lugar em que se encontravam. Quem sabe assim, ao contrário de Caim, os irmãos seriam capazes de expressar também seu arrependimento perante a justiça.
    <br/><br/>A repulsa ao me recordar dos passos dos dois no dia em que executaram seu primo me movia. De um impulso me ergui e fui até Joaquim, enquanto me aproximava reconhecia em seu corpo marcas de cada vez em que ele havia negado sua culpa. Ora, esse vai e vem poderia ter sido encerrado há muito tempo, não fosse a insistência em acreditarem ser inocentes! Eu já sabia, o povo já sabia e eles sabiam, o que restava então?
    <br/><br/>- Está pronto para assumir sua culpa?
    <br/><br/>Joaquim nem se deu ao trabalho de erguer a cabeça que pendia no pescoço sob o peito suado.
    <br/><br/>- Confesse! Confesse ou eu te mato!
    <br/><br/>Brandi a pistola que segurava para o alto e atirei. Alguns pássaros saíram voando da árvore mais próxima, mas Joaquim apenas levantou a cabeça assustado, como se houvesse acabado de acordar de um pesadelo.
    <br/><br/>- Pode mata, num fiz nada pro Benedito! Cansei desse sofrimento! Pode mata!
    <br/><br/>Em seus olhos eu podia ver lágrimas se formando, era incrível como seu teatro podia ser convincente. Foi então que percebi, não haveria outra alternativa.
    <br/><br/>- Confesse! Confesse ou eu mato seu irmão!
    <br/><br/>- Por favor seu tenente! Num faz um trem desses, nois nada fizemo! Bastião num fez nada!
    <br/><br/>- Ora seu caipira! Assuma logo que mataram seu primo! Assuma ou eu mato seu irmão!
    <br/><br/>- Seu tenente, por favor! - As lágrimas agora escorriam pelas suas bochechas e a voz lhe sumia na garganta.
    <br/><br/>- Matem! Matem Sebastião!
    <br/><br/>Gritei o mais alto que pude, segundo depois se ouviu um tiro. Os olhos de Joaquim se arregalaram, até então não acreditava que suas ações pudessem tomar tamanhas proporções.
    <br/><br/>- E agora? Está pronto para assumir sua culpa, ou prefere o destino do seu irmão?
    <br/><br/>- Por favor seu tenente! Tende piedade!
    <br/><br/>- Não tem jeito mesmo, atirem!
    <br/><br/>O cabo ao meu lado aponta a arma, vejo sua mão tremer por dois segundos antes dele apertar o gatilho e dar um passo para trás com o impacto. Sangue escorre na perna de joaquim, ainda bem que tenho subordinados tão competentes.
    <br/><br/>- Por piedade seu tenente! Não me mate, eu falo, eu falo tudo! Tudo!
    <br/><br/>Eu sabia que era questão de tempo até que assumissem seu papel no assassinato de Benedito, só precisava usar o que estava ao meu dispor!
</div>
    },
  ];
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={Styles.container}>
        <div className={Styles.menuToggle} onClick={toggleMenu}>
          {isMenuVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`${Styles.menu} ${isMenuVisible ? Styles.show : ''}`}>
          <div className={Styles.menuItemPerfil} onClick={() => router.push('/perfil')}>
            <FaUser style={{ marginRight: '8px' }} />
            Visualizar Perfil
          </div>
          <div className={Styles.menuItemSobreNos} onClick={()=> router.push('/sobre-nos')}>
            <PiMagnifyingGlassFill style={{ marginRight: '8px' }} />
            Sobre nós
          </div>
          <div className={Styles.menuItemBiblioteca} onClick={() => router.push('/land-page')}>
            <FaBookBookmark style={{ marginRight: '8px' }} />
            Biblioteca
          </div>
          <div className={Styles.voltarBotao}>
          <button className={Styles.voltarBotao} onClick={() => router.back()}>Voltar</button>
          </div>
          <div className={Styles.menuItemSair} onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: '8px' }} />
            Sair
          </div>
        </div>



      <div className={`${Styles['navigation-icon']} ${Styles.left}`} onClick={prevSlide}>
        <LeftOutlined />
      </div>

      <div className={Styles['slide-content']}>
        <h3>{slides[currentSlide].title}</h3>

        {slides[currentSlide].image ? (
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            width= {600}
            height= {400}
            className={Styles['image-slide']}
          />
        ) : (
          <p>{slides[currentSlide].content}</p>
        )}
      </div>

      <div className={`${Styles['navigation-icon']} ${Styles.right}`} onClick={nextSlide}>
        <RightOutlined />
      </div>
    </div>
  );
}
