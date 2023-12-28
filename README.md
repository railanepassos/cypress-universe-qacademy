# cypress-universe
Desenvolvido durante o curso Universo Cypress promovido pela plataforma https://app.weareqacademy.com sob orientação do Coordenador Fernando Papito. Este projeto contem subprojetos relacionados ao curso, então você precisará navegar entre pastas para rodar o projeto desejado.

## 🟢 training-wheels project

   1. Navigate to dir of the project
      cd training-wheels
   2. Install the dependencies of the project
      yarn install
   3. Run the command
      yarn test

### ✅  Cenários implementados no projeto
#### ▶️ Interação com Alertas, Checkbox, Datepicker, Drag-drop, Hooks, Hobers, IFrames, Radio, Select, Tables, Tabs, Timeout, Toast e Upload.

### ✅  Checklist do Projeto
🏗️ Em construção


## 🟡 samuraibs project
Aqui você terá algumas configurações relacionadas ao front-end e back-end separadamanete para que funcione tudo conforme o esperado, pois é necessário que suba o projeto em sua propria maquina, diferente do anterior que ultiliza uma url na internet para execução dos testes.

#### ▶️ Configurando database para projeto de back-end (api)
O banco de dados será deve ser criado em nuvem.
   1. Navegue para https://elephantsql.com/
   2. Crie conta, caso não possua
   3. Crie uma instância com o suporte deste video https://www.youtube.com/watch?v=BuJj4LCWP_4&pp=ygUMZWxlcGhhbnQgc3Fs
   4. Renomee o arquivo `.env-model` para `.env`
   5. Subistitua `?` de `# PostgreSQL` do arquivo `.env` com as informações de credenciais obtidas no site https://elephantsql.com/

#### ▶️ Configurando database: Criando estrutira de dasos (api)
   1. No terminal do projeto navegue para
   ```bash
      cd samuraibs/apps/api
   ```
   2. Crie a estrutura de dados
   ```bash
      yarn typeorm migration:run
   ```

#### ▶️ Configurando/ subindo o projeto de back-end (api)
   1. Navigate to dir of the project of the backend:
   ```bash
      cd samuraibs/apps/api
   ```
   2. Install the dependencies of the project
   ```bash
      yarn install
   ```
   3. Up the backend project
   ```bash
      yarn start
   ```

#### ▶️ Configurando/ subindo o projeto de front-end (web)
   1. Navigate to dir of the project of the frontend
   ```bash
      cd samuraibs/apps/web
   ```
   2. Install the dependencies of the project
   ```bash
      yarn install
   ```
   3. Up the frontend project (localhost:3000)
   ```bash
      yarn start
   ```

### ✅  Cenários implementados no projeto
🏗️ Em construção

### ✅  Checklist do Projeto
🏗️ Em construção

### ✅  Principais ferramentas e tecnologias ultilizadas
#### ▶️ Javascript - Linguagem de programação ultilizado no desenvolvimento dos testes.
#### ▶️ Nodejs - Ferramenta para execução de codigos javascript fora do navegador.
#### ▶️ Yarn - Gerenciador de pacotes javascript.
#### ▶️ Cypress - Ferramenta de teste.

## 🎓 Certificado 🎓
🏗️ Em construção
