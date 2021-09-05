---
id: tools
title: Utilitários
---

Comandos úteis com ferramentas para facilitar e agilizar sua vida!

### `afk` (`art`, `brb`, `code`, `food`, `game`, `gn`, `work`, `read`, `shower`, `study`, `watch`)
Informe que você está se ausentando do chat

### `crypto` (`bitcoin`, `ethereum`)
Saiba o valor da conversão de uma criptomoeda em reais
```
%crypto <sigla da criptomoeda> <quantidade>
```
```
%bitcoin <quantidade>
```

### `currency` (`dolar`, `euro`, `libra`)
Saiba o valor da conversão de uma moeda em reais
```
%crypto <sigla da moeda> <quantidade>
```
```
%dolar <quantidade>
```

### `isafk`
Verifique se alguém está AFK
```
%isafk <nome do usuário>
```

### `math`
Saiba o resultado de alguma expressão matemática
```
%math (2 * 3 + 4) / 5
```
> **Nota:** para multiplicar, use `*`; para dividir, use `/`; para expoente, use `^`; para expressões mais complexas, consulte: [mathjs.org](https://mathjs.org/docs)

### `rafk` (`rart`, `rbrb`, `rcode`, `rfood`, `rgame`, `rgn`, `rwork`, `rread`, `rshower`, `rstudy`, `rwatch`)
Retome seu status de ausência do chat

### `remind` (`remindme`)
Deixe um lembrete para algum usuário
```
%remind <nome do usuário> <mensagem>
```
```
%remind <nome do usuário> in <tempo> <mensagem>
```
```
%remind <nome do usuário> on <data e hora> <mensagem>
```
```
%remind <ID do lembrete>
```
```
%remind delete <ID do lembrete>
```
> **Nota:** cada usuário pode ter no máximo 7 lembretes simultâneos pendentes

### `reminds`
Veja os IDs dos lembretes que você deixou

### `translate`
Saiba a tradução de alguma mensagem
```
%translate <mensagem do idioma detectado para o idioma padrão>
```
```
%translate es->ru <mensagem do espanhol para russo>
```
```
%translate ->en <mensagem do idioma detectado para o inglês>
```
```
%translate jp-> <mensagem do japonês para o idioma padrão>
```

### `weather` (`wt`)
Saiba o clima atual de alguma cidade
```
%wt <nome da cidade>
```
```
%wt <nome da cidade>, <nome do país>
```
