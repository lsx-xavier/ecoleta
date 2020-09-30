# Anotações da aplicação

- Criamos uma SPA Single Page Aplication;
- Criamos a home com um botao para direcionar para criação do ponto de troca.
- Criamos o formulário do ponto de coleta com mapa que pega a localização (latitude, longitude) no click.

## Anotações de estudos

JSX -> Sintaxe de XML (html) dentro do javascript ou typescript;
Components -> Pequenos trechos de HTML, JS e enfins, Conteudos/objetos que podem ser repetidos (ex: cards, header, lista);
Propriedades -> São atributos que enviamos para os components (ex: <Header title="Hello world" />);
Interface ->  É uma forma de definir uma tipagem de um objecto, string e etc... "esta ligado com as propriedades";
Estado -> Armazenar uma informação apartir do componente, input como exemplo, informações mantidas pelo próprio componente;

  ### Anotação de useState

  Fica acessível em tempo real para a aplicação!

  const [counter, setCounter] = useState(0);
  Retorna -> [valor do estado, Função para atualizar o valor do estado]

  Sempre que criamos um estado para um array ou objeto, precisamos manualmente o tipo da variavel para armazenamento. Criando uma interface!