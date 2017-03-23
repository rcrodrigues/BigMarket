
CREATE TABLE mercadao.endereco (
                id INTEGER NOT NULL,
                bairro VARCHAR(255),
                cep VARCHAR(255),
                complemento VARCHAR(255),
                estado VARCHAR(255),
                logradouro VARCHAR(255),
                municipio VARCHAR(255),
                numero VARCHAR(255),
                CONSTRAINT endereco_pkey PRIMARY KEY (id)
);


CREATE TABLE mercadao.pessoa (
                id INTEGER NOT NULL,
                cpf VARCHAR(255),
                datanascimento TIMESTAMP,
                email VARCHAR(255),
                nome VARCHAR(255),
                telefone VARCHAR(255),
                endereco_id INTEGER NOT NULL,
                CONSTRAINT pessoa_pkey PRIMARY KEY (id)
);


CREATE TABLE mercadao.usuario (
                id INTEGER NOT NULL,
                login VARCHAR(255),
                senha VARCHAR(255),
                pessoa_id INTEGER NOT NULL,
                CONSTRAINT usuario_pkey PRIMARY KEY (id)
);


CREATE TABLE mercadao.produto (
                id INTEGER NOT NULL,
                aceitatroca BOOLEAN,
                descricao TEXT,
                nascimento TIMESTAMP,
                nome VARCHAR(255),
                produtonovo BOOLEAN,
                preco DOUBLE PRECISION,
                vendido BOOLEAN,
                usuario_id INTEGER NOT NULL,
                CONSTRAINT produto_pkey PRIMARY KEY (id)
);


CREATE TABLE mercadao.midia (
                id INTEGER NOT NULL,
                dado TEXT,
                produto_id INTEGER NOT NULL,
                CONSTRAINT midia_pkey PRIMARY KEY (id)
);


CREATE TABLE mercadao.comentario_produto (
                id INTEGER NOT NULL,
                comentario TEXT,
                email_comentador VARCHAR(255),
                nome_comentador VARCHAR(255),
                produto_id INTEGER NOT NULL,
                CONSTRAINT comentario_produto_pkey PRIMARY KEY (id)
);


ALTER TABLE mercadao.pessoa ADD CONSTRAINT fk_maf0qcpkgi78dxmw8a3eo3js9
FOREIGN KEY (endereco_id)
REFERENCES mercadao.endereco (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.usuario ADD CONSTRAINT fk_r3paqktjbbb5iuok1mvu0s8xg
FOREIGN KEY (pessoa_id)
REFERENCES mercadao.pessoa (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.produto ADD CONSTRAINT fk_3a959l62rnfaarmbsfqulvdge
FOREIGN KEY (usuario_id)
REFERENCES mercadao.usuario (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.comentario_produto ADD CONSTRAINT fk_4asulfpfjdo7d6r5juvhyee2y
FOREIGN KEY (produto_id)
REFERENCES mercadao.produto (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.midia ADD CONSTRAINT fk_ow0b097s96oscfq8trvrekfva
FOREIGN KEY (produto_id)
REFERENCES mercadao.produto (id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;