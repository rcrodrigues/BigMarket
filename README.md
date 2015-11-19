### Como rodar o projeto

### 1 - Pré-requisitos

#### 1.1 - Instalando o PostgreSQL 

Instale o PostgreSQL pelo apt-get :

    sudo apt-get install postgresql

Inicialize o PostgreSQL com o comando:

    sudo service postgresql start

Caso houver alguma dependencia faltando, instale-a utilizando o apt-get install e re-execute o comando acima.

#### 1.2 - Instalando o Node.js

Execute o seguinte comando no terminal para instalar o Curl:

    sudo apt-get install curl

Em seguida execute o comando a baixo: 

    curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -

Assim que terminar o comando anterior execute o seguinte para instalar o Node.js:

    sudo apt-get install nodejs

#### 1.3 - Instalando o Play Framework

Baixe o Play 1.4.0 no site do Play Framework:

    https://www.playframework.com/download#older-versions

Em seguida extraia o play na pasta onde você fez o download.

Execute o comando a baixo para criar a pasta do play na pasta `opt`:

    sudo mkdir /opt/playframework

Agora devemos mover a pasta do play para a pasta que acabamos de criar, para isso execute o comando (lembre-se de substituir `pasta_onde_extraiu_o_play` pela pasta onde você extraiu o play):

    sudo mv `pasta_onde_extraiu_o_play`/play-1.4.0 /opt/playframework/

Falta, agora, informar para o sistema onde o play está localizado, para isso executamos o comando (lembre-se de substituir X pela versão do play):

    sudo update-alternatives --install /usr/bin/play play /opt/playframework/play-1.4.0/play 1

Pronto! Agora para verificar se está tudo certo, é só digitar o comando:

    play

Se aparecer a versão que você baixou tudo está certo.

#### 1.4 - Instalando o PGAdmin

Instale o PGAdmin pelo apt-get :

    sudo apt-get install pgadmin3


### 2- Configuração do Banco de Dados ###

#### 2.1 - Criar banco de dados :

Executar os comandos abaixo no terminal
    
Execute o seguinte comando no terminal para mudar o usuário para postgres:

    sudo su postgres

Execute os seguintes comandos para criar os bancos e configurar para que os mesmos utilizem o PostGIS:

    createdb -E UTF8 --lc-collate='pt_BR.UTF-8' --lc-ctype='pt_BR.UTF-8' -T template0 mercadao
    
    createdb -E UTF8 --lc-collate='pt_BR.UTF-8' --lc-ctype='pt_BR.UTF-8' -T template0 mercadao_test
    
#### 2.2 - Criar usuários:

Utilize o PgAdmin para conectar-se no banco e execute as SQLs abaixo, utilizando o usuário "postgres":

Obs.: Caso o PgAdmin precise de senha, execute os comandos a seguir: $ psql -U postgres postgres e depois $ \password postgres (digite sua senha quando pedir).

Execute os comandos abaixo:
    
    CREATE ROLE mercadao_user LOGIN
    ENCRYPTED PASSWORD 'mercadao_user'
    SUPERUSER INHERIT NOCREATEDB NOCREATEROLE;
    
-----

### 3 - Configurando a aplicação

Baixe o projeto:

    git clone git@github.com:rcrodrigues/software-engineering-project.git


Entre na pasta do backend, baixe as dependências, e execute as evolutions para o banco de desenvolvimento e teste:

    cd  software-engineering-project/backend
    play deps --sync
    play evolutions:apply
    play evolutions:apply --%test

Volte à raiz do projeto e entre na pasta frontend. Depois execute os comandos abaixo para baixar dependências e configurar o frontend:

    npm install
    bower install
    grunt
    
-----

### 4 - Testando a aplicação

Para testar o sistema, execute o comando `play run` na pasta backend e acesse o endereço abaixo:

    http://localhost:9000/

---------

### 5 - Populando banco de dados com usuários e outros dados auxiliares para o desenvolvimento

Vá no projeto analise na pasta `/backend/db/seeds/` e execute todos os scripts dessa pasta em seu banco de dados. Para fazer isso, execute o seguinte comando no terminal para cada script:

    psql -h localhost -p 5432 -d nome_do_banco -U postgres -f /pasta_raiz_do_projeto_solicitacao/backend/db/seeds/nome_do_seed.sql 

---------
