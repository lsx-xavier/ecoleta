# Anotações da aplicação

- Criado com o react native e expo;

## Anotações de estudos

- Expo -> Retira a necessidade dos emuladores de IOs ou Android, basta apenas intalar o aplicativo EXPO no celular, ele ja vem todas as API's instaladas, como maps, gelocalização e etc...;


Tudo é apresentado dentro das tags do react native (View = div | p, h1, h2... = Text)
Não é feito o css com as class ou id e sim com:

```CSS
const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  }
});
```

No css onde tinha hífen (-) colocamos a próxima letra Maiúscula ao invés do hífen, sempre aspas simples, todos os elementos já vem com DIPLAY: FLEX. Não temos herança de estilo e nem cascata de estilo :(

### Anotação de useState

