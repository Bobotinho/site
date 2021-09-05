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

### `movie`
Recebe informações ou sugestões de filme, e até onde assistí-lo
```
%movie <nome ou URL do IMDb do filme>
```
```
%movie <recommendation|similar> <nome ou URL do IMDb do filme>
```
```
%movie <now|upcoming|popular|top|trend>
```
```
%movie discover <nome do serviço de streaming>
```
> **Nota:**
> - `recommendation`: recomendação de filme baseada no filme informado;
> - `similar`: filme com o gênero e palavras-chave similares ao do filme informado;
> - `now`: filme aleatório que está em cartaz nos cinemas brasileiros;
> - `upcoming`: filme aleatório que em breve estará em cartaz nos cinemas brasileiros;
> - `popular`: filme aleatório que está entre os mais populares do dia;
> - `top`: filme aleatório que está entre os mais bem votados do dia;
> - `trend`: filme aleatório que está entre as tendências do dia;
> - `discover`: filme aleatório que está no serviço de streaming informado (netflix, prime, disney+, itunes, google, looke, fox, mubi, star+, paramount+, hbo, claro, telecine, globo)

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

### `tv`
Recebe informações ou sugestões de uma série, e até onde assistí-la
```
%tv <nome ou URL do IMDb da série>
```
```
%tv <recommendation|similar> <nome ou URL do IMDb da série>
```
```
%tv <now|popular|top|trend>
```
```
%tv discover <nome do serviço de streaming>
```
> **Nota:**
> - `recommendation`: recomendação de série baseada na série informada;
> - `similar`: série com o gênero e palavras-chave similares ao da série informada;
> - `now`: série aleatória que está no ar atualmente;
> - `popular`: série aleatória que está entre as mais populares do dia;
> - `top`: série aleatória que está entre as mais bem votadas do dia;
> - `trend`: série aleatória que está entre as tendências do dia;
> - `discover`: série aleatória que está no serviço de streaming informado (netflix, prime, disney, looke, fox, star, paramount, hbo, crunchyroll, claro, globo)

### `weather` (`wt`)
Saiba o clima atual de alguma cidade
```
%wt <nome da cidade>
```
```
%wt <nome da cidade>, <sigla do país>
```
