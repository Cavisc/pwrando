# 🔑 PWRando

**PWRando** é um gerador de senhas com aparência de terminal, desenvolvido para proporcionar uma experiência diferenciada e interativa. O projeto foi criado utilizando **React** e **Tailwind CSS**, com suporte a comandos simples que permitem ao usuário navegar e gerar senhas diretamente na interface estilo terminal.

## Funcionalidades

- **Comandos Disponíveis**:
  - `help`: Exibe a lista de comandos disponíveis e suas descrições.
  - `see`: Mostra as senhas geradas anteriormente na sessão.
  - `generate`: Gera uma nova senha com base nos critérios definidos.
  - `clear`: Limpa o histórico de senhas e a saída do terminal.
  - `about`: Fornece informações sobre o PWRando.
- Suporte a armazenamento de comandos e histórico utilizando `sessionStorage`.

## Tecnologias

- **React**: Utilizado para a construção da interface do usuário.
- **Tailwind CSS**: Framework de CSS para estilizar o projeto com agilidade e responsividade.
- **sessionStorage**: Armazena os comandos e outputs temporariamente durante a sessão.

## Como Usar

1. Abra o site e explore a interface estilo terminal.
2. Digite `help` para ver a lista de comandos disponíveis.
3. Use o comando `generate` para criar uma nova senha.
4. Utilize `see` para visualizar as senhas já geradas.
5. Para limpar o terminal, utilize o comando `clear`.
6. Descubra mais sobre o projeto digitando `about`.

## Aviso Importante

- O PWRando foi criado com o objetivo de gerar senhas seguras e práticas para uso geral.
- **Certifique-se de armazenar as senhas com segurança**, pois o site não mantém um histórico persistente após o encerramento da sessão.

## Acessando o Site

A aplicação está disponível online. Acesse pelo link abaixo para explorar e utilizar o PWRando:

[Visite o site](https://pwrando.vercel.app/)

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório:

   ```bash
   git clone https://github.com/Cavisc/pwrando.git

   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd pwrando

   ```

3. Instale as dependências:

   ```bash
   npm install

   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev

   ```

5. Abra o navegador e acesse o endereço fornecido no terminal (geralmente, será algo como http://localhost:3000 ou http://127.0.0.1:5173).
