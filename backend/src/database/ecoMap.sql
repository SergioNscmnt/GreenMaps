CREATE SCHEMA ecomap;

CREATE TABLE ecomap.assets ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	nome                 varchar(127)  NOT NULL    ,
	path                 varchar(1023)  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.assets COMMENT 'Não é uma tabela funcional.\n\nFoi criada apenas para lembrar de, futuramente, fazer a ligação dos objetos com os assets reutilizaveis(Ex: icone da lixeira).';

ALTER TABLE ecomap.assets MODIFY id int  NOT NULL  AUTO_INCREMENT COMMENT 'ID do asset.';

ALTER TABLE ecomap.assets MODIFY nome varchar(127)  NOT NULL   COMMENT 'Nome do asset.';

ALTER TABLE ecomap.assets MODIFY path varchar(1023)  NOT NULL   COMMENT 'Caminho para o asset';

CREATE TABLE ecomap.estado ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	estado               varchar(31)  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.estado MODIFY id int  NOT NULL  AUTO_INCREMENT COMMENT 'Nome da unidade federativa.';

ALTER TABLE ecomap.estado MODIFY estado varchar(31)  NOT NULL   COMMENT 'Nome da unidade federativa.';

CREATE TABLE ecomap.tags ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	nome                 varchar(31)  NOT NULL    ,
	descricao            varchar(127)      
 ) engine=InnoDB;

CREATE TABLE ecomap.tipos_de_lixo ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	descricao            varchar(127)  NOT NULL    ,
	nome                 varchar(63)  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.tipos_de_lixo COMMENT 'Provavelmente será pré definido por nós.';

ALTER TABLE ecomap.tipos_de_lixo MODIFY descricao varchar(127)  NOT NULL   COMMENT 'Descrição do tipo de lixo';

CREATE TABLE ecomap.tipos_de_pins ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	nome                 varchar(63)  NOT NULL    ,
	descricao            varchar(127)      ,
	icone                int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE ecomap.tipos_de_ponto ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	tipo                 set('lixeira', 'lixeira de reciclaveis', 'empresa de reciclagem', 'ponto de coleta de reciclaveis', 'descarte de baterias', 'descarte de eletronicos', 'ferro velho')  NOT NULL DEFAULT 'lixeira'   ,
	descricao            varchar(127)      ,
	icone                int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.tipos_de_ponto MODIFY tipo set('lixeira', 'lixeira de reciclaveis', 'empresa de reciclagem', 'ponto de coleta de reciclaveis', 'descarte de baterias', 'descarte de eletronicos', 'ferro velho')  NOT NULL DEFAULT 'lixeira'  COMMENT 'Os tipos serão predefinidos por nós';

ALTER TABLE ecomap.tipos_de_ponto MODIFY descricao varchar(127)     COMMENT 'Descrição do tipo de ponto.';

ALTER TABLE ecomap.tipos_de_ponto MODIFY icone int  NOT NULL   COMMENT 'Icone do tipo de lixeira';

CREATE TABLE ecomap.cidades ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	cidade               varchar(31)  NOT NULL    ,
	estado               int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.cidades MODIFY cidade varchar(31)  NOT NULL   COMMENT 'Nome da cidade';

ALTER TABLE ecomap.cidades MODIFY estado int  NOT NULL   COMMENT 'Unidade federal a qual a cidade pertence';

CREATE TABLE ecomap.map_pins_usuarios ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	nome                 varchar(63)      ,
	loc_geo_latitude     float  NOT NULL    ,
	loc_geo_longitude    float  NOT NULL    ,
	tipo_de_pin          int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.map_pins_usuarios COMMENT 'Pins do usuario';

CREATE TABLE ecomap.usuario ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	alias_usuario        varchar(63)  NOT NULL    ,
	nome_usuario         varchar(750)      ,
	telefone             varchar(15)      ,
	email                varchar(325)      ,
	senha                varchar(255)  NOT NULL    ,
	avatar               int  NOT NULL   ,
	cidade               int  NOT NULL    ,
	estado               int  NOT NULL    ,
	ativo                boolean  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.usuario COMMENT 'As informações do usuario';

ALTER TABLE ecomap.usuario MODIFY id int  NOT NULL  AUTO_INCREMENT COMMENT 'id do usuario';

ALTER TABLE ecomap.usuario MODIFY alias_usuario varchar(63)  NOT NULL   COMMENT 'Nickname do usuario.';

ALTER TABLE ecomap.usuario MODIFY nome_usuario varchar(750)     COMMENT 'Nome real do usuario. Ex: Viniciu da Rosa silva.\n(deveriamos separar o primeiro do segundo nome?)\n\nO maior nome do mundo tem 747 caracteres.';

ALTER TABLE ecomap.usuario MODIFY telefone varchar(15)     COMMENT 'Fixo nao vale :D';

ALTER TABLE ecomap.usuario MODIFY email varchar(325)     COMMENT 'Email do usuario.\n\nO e-mail sera obrigatorio para cadastro.\nO e-mail sera unico(?) e identificara o usuario. Mesmo assim, a coluna ID sera mantida.\n\nO maximo de caracteres de um email é 320(64 antes do @ e 256 depois do @)';

ALTER TABLE ecomap.usuario MODIFY senha varchar(255)  NOT NULL   COMMENT 'Senha de login.\n\nNão esquecer de usar algum metodo de criptografia no futuro, alem de aplicar constraints pra senha não ter menos que 8 caracteres e alguns caracteres estranhos.';

ALTER TABLE ecomap.usuario MODIFY avatar int  NOT NULL  COMMENT 'Icone/foto do avatar do usuario.\n\nA função FLOOR(RAND()*(9-1+1))+1 é pra atribuir uma id de um avatar aleatorio dentre 9(os quais definiremos para usar como default) para quando o usuario nao tiver um.';

ALTER TABLE ecomap.usuario MODIFY cidade int  NOT NULL   COMMENT 'Cidade cadastrada do individuo.';

ALTER TABLE ecomap.usuario MODIFY estado int  NOT NULL   COMMENT 'Unidade federativa cadastrada do individuo.\n\nCampo prescindivel, uma vez que o estado é conectado a cidade.';

ALTER TABLE ecomap.usuario MODIFY ativo boolean  NOT NULL   COMMENT 'Checa se a conta esta ativa ou nao.\n\nPara casos de exclusão, banimento, bloqueio ou coisas do tipo.';

CREATE TABLE ecomap.mtm_pins ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	id_usuario           int  NOT NULL    ,
	id_pin               int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE ecomap.pontos_de_coleta ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	nome                 varchar(127)  NOT NULL DEFAULT "Lixeira"   ,
	loc_geo_latitude     float  NOT NULL    ,
	loc_geo_longitude    float  NOT NULL    ,
	tipo_de_ponto        int  NOT NULL    ,
	descricao            varchar(256)      ,
	ativo                boolean  NOT NULL    ,
	criadop_por          int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.pontos_de_coleta COMMENT 'AKA lixeiras.\n\nÉ necessario uma função para adcionar tipos de lixeiras, ou deixar em aberto como varchar.';

ALTER TABLE ecomap.pontos_de_coleta MODIFY id int  NOT NULL  AUTO_INCREMENT COMMENT 'ID do ponto de coleta';

ALTER TABLE ecomap.pontos_de_coleta MODIFY nome varchar(127)  NOT NULL DEFAULT "Lixeira"  COMMENT 'Nome do ponto de coleta.';

ALTER TABLE ecomap.pontos_de_coleta MODIFY loc_geo_latitude float  NOT NULL   COMMENT 'Localização geografica latitudinal para o mapa.';

ALTER TABLE ecomap.pontos_de_coleta MODIFY loc_geo_longitude float  NOT NULL   COMMENT 'Localização geografica longitudinal para o mapa.';

ALTER TABLE ecomap.pontos_de_coleta MODIFY descricao varchar(256)     COMMENT 'Descrição do ponto de coleta.';

CREATE TABLE ecomap.comentarios_pontos_de_coleta ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	comentario           varchar(255)  NOT NULL    ,
	ponto_coleta         int  NOT NULL    ,
	ativo                boolean  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.comentarios_pontos_de_coleta COMMENT 'Comentarios sobre os pontos de coleta';

ALTER TABLE ecomap.comentarios_pontos_de_coleta MODIFY ponto_coleta int  NOT NULL   COMMENT 'Ponto de coleta que foi comentado.';

CREATE TABLE ecomap.descartes ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	id_usuario           int  NOT NULL    ,
	id_ponto_de_coleta   int  NOT NULL    ,
	id_tipo_lixo         int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE ecomap.mtm_comentarios ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	id_usuario           int  NOT NULL    ,
	id_comentario        int  NOT NULL    
 ) engine=InnoDB;

CREATE TABLE ecomap.mtm_imagens_lixeira ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	id_lixeira           int  NOT NULL    ,
	id_asset             int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.mtm_imagens_lixeira COMMENT 'As imagens cadastradas da lixeira';

CREATE TABLE ecomap.mtm_tipos_de_lixo ( 
	id                   int  NOT NULL  AUTO_INCREMENT  PRIMARY KEY,
	id_ponto_de_coleta   int  NOT NULL    ,
	id_tipo_de_lixo      int  NOT NULL    
 ) engine=InnoDB;

ALTER TABLE ecomap.cidades ADD CONSTRAINT fk_cidades_estado FOREIGN KEY ( estado ) REFERENCES ecomap.estado( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.comentarios_pontos_de_coleta ADD CONSTRAINT fk_comentarios_pontos_de_coleta_pontos_de_coleta FOREIGN KEY ( ponto_coleta ) REFERENCES ecomap.pontos_de_coleta( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.descartes ADD CONSTRAINT fk_descartes_usuario FOREIGN KEY ( id_usuario ) REFERENCES ecomap.usuario( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.descartes ADD CONSTRAINT fk_descartes_pontos_de_coleta FOREIGN KEY ( id_ponto_de_coleta ) REFERENCES ecomap.pontos_de_coleta( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.descartes ADD CONSTRAINT fk_descartes_tipos_de_lixo FOREIGN KEY ( id_tipo_lixo ) REFERENCES ecomap.tipos_de_lixo( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.map_pins_usuarios ADD CONSTRAINT fk_map_pins_usuarios_tipos_de_pins FOREIGN KEY ( tipo_de_pin ) REFERENCES ecomap.tipos_de_pins( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_comentarios ADD CONSTRAINT fk_mtm_comentarios_usuario FOREIGN KEY ( id_usuario ) REFERENCES ecomap.usuario( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_comentarios ADD CONSTRAINT fk_mtm_comentarios_comentarios_pontos_de_coleta FOREIGN KEY ( id_comentario ) REFERENCES ecomap.comentarios_pontos_de_coleta( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_imagens_lixeira ADD CONSTRAINT fk_mtm_imagens_lixeira_pontos_de_coleta FOREIGN KEY ( id_lixeira ) REFERENCES ecomap.pontos_de_coleta( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_imagens_lixeira ADD CONSTRAINT fk_mtm_imagens_lixeira_assets FOREIGN KEY ( id_asset ) REFERENCES ecomap.assets( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_pins ADD CONSTRAINT fk_mtm_pins_usuario FOREIGN KEY ( id_usuario ) REFERENCES ecomap.usuario( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_pins ADD CONSTRAINT fk_mtm_pins_map_pins_usuarios FOREIGN KEY ( id_pin ) REFERENCES ecomap.map_pins_usuarios( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_tipos_de_lixo ADD CONSTRAINT fk_mtm_tipos_de_lixo_pontos_de_coleta FOREIGN KEY ( id_ponto_de_coleta ) REFERENCES ecomap.pontos_de_coleta( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.mtm_tipos_de_lixo ADD CONSTRAINT fk_mtm_tipos_de_lixo_tipos_de_lixo FOREIGN KEY ( id_tipo_de_lixo ) REFERENCES ecomap.tipos_de_lixo( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.pontos_de_coleta ADD CONSTRAINT fk_pontos_de_coleta_usuario FOREIGN KEY ( criadop_por ) REFERENCES ecomap.usuario( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.pontos_de_coleta ADD CONSTRAINT fk_pontos_de_coleta_tipos_de_ponto FOREIGN KEY ( tipo_de_ponto ) REFERENCES ecomap.tipos_de_ponto( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.tipos_de_pins ADD CONSTRAINT fk_tipos_de_pins_assets FOREIGN KEY ( icone ) REFERENCES ecomap.assets( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.tipos_de_ponto ADD CONSTRAINT fk_tipos_de_ponto_assets FOREIGN KEY ( icone ) REFERENCES ecomap.assets( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.usuario ADD CONSTRAINT fk_usuario_cidades FOREIGN KEY ( cidade ) REFERENCES ecomap.cidades( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.usuario ADD CONSTRAINT fk_usuario_estado FOREIGN KEY ( estado ) REFERENCES ecomap.estado( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE ecomap.usuario ADD CONSTRAINT fk_usuario_assets FOREIGN KEY ( avatar ) REFERENCES ecomap.assets( id ) ON DELETE NO ACTION ON UPDATE NO ACTION;
