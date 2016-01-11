# --- !Ups

CREATE SCHEMA mercadao
        AUTHORIZATION postgres;

CREATE TABLE mercadao.pessoa (
                pessoa_id INTEGER NOT NULL,
                nome VARCHAR NOT NULL,
                dataNascimento DATE NOT NULL,
                email VARCHAR NOT NULL,
                cpf BIGINT NOT NULL,
                telefone VARCHAR,
                CONSTRAINT pessoa_id PRIMARY KEY (pessoa_id)
);


CREATE UNIQUE INDEX pessoa_idx
 ON mercadao.pessoa
 ( cpf );

CREATE TABLE mercadao.usuario (
                usuario_id INTEGER NOT NULL,
                pessoa_id INTEGER NOT NULL,
                senha CHAR(40) NOT NULL,
                CONSTRAINT usuario_id PRIMARY KEY (usuario_id)
);


CREATE TABLE mercadao.produto (
                produto_id INTEGER NOT NULL,
                usuario_id INTEGER NOT NULL,
                nome VARCHAR NOT NULL,
                descricao VARCHAR(200),
                preco NUMERIC(19,4),
                aceitaTroca BOOLEAN NOT NULL,
                nascimento TIMESTAMP NOT NULL,
                produtoNovo BOOLEAN NOT NULL,
                vendido BOOLEAN NOT NULL,
                CONSTRAINT produto_id PRIMARY KEY (produto_id)
);


CREATE TABLE mercadao.comentario_produto (
                comentario_produto_id INTEGER NOT NULL,
                produto_id INTEGER NOT NULL,
                comentario VARCHAR(140) NOT NULL,
                nome_comentador VARCHAR,
                email_comentador VARCHAR,
                CONSTRAINT comentario_produto_id PRIMARY KEY (comentario_produto_id)
);


CREATE TABLE mercadao.midia (
                midia_id INTEGER NOT NULL,
                produto_id INTEGER NOT NULL,
                dado VARCHAR NOT NULL,
                CONSTRAINT midia_id PRIMARY KEY (midia_id)
);


ALTER TABLE mercadao.usuario ADD CONSTRAINT pessoa_usuario_fk
FOREIGN KEY (pessoa_id)
REFERENCES mercadao.pessoa (pessoa_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.produto ADD CONSTRAINT usuario_produto_fk
FOREIGN KEY (usuario_id)
REFERENCES mercadao.usuario (usuario_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.midia ADD CONSTRAINT produto_midia_fk
FOREIGN KEY (produto_id)
REFERENCES mercadao.produto (produto_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE mercadao.comentario_produto ADD CONSTRAINT produto_comentario_produto_fk
FOREIGN KEY (produto_id)
REFERENCES mercadao.produto (produto_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

# --- !Downs

DROP SCHEMA mercadao CASCADE;