# --- !Ups

DROP SEQUENCE IF EXISTS mercadao.pessoa_pessoa_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.usuario_usuario_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.produto_produto_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.comentario_produto_comentario_produto_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.midia_midia_id_seq CASCADE;

CREATE SEQUENCE mercadao.pessoa_pessoa_id_seq;

ALTER TABLE mercadao.pessoa alter pessoa_id set default nextval('mercadao.pessoa_pessoa_id_seq');

ALTER SEQUENCE mercadao.pessoa_pessoa_id_seq OWNED BY mercadao.pessoa.pessoa_id;


CREATE SEQUENCE mercadao.usuario_usuario_id_seq;

ALTER TABLE mercadao.usuario alter usuario_id set default nextval('mercadao.usuario_usuario_id_seq');

ALTER SEQUENCE mercadao.usuario_usuario_id_seq OWNED BY mercadao.usuario.usuario_id;


CREATE SEQUENCE mercadao.produto_produto_id_seq;

ALTER TABLE mercadao.produto alter produto_id set default nextval('mercadao.produto_produto_id_seq');

ALTER SEQUENCE mercadao.produto_produto_id_seq OWNED BY mercadao.produto.produto_id;


CREATE SEQUENCE mercadao.comentario_produto_comentario_produto_id_seq;

ALTER TABLE mercadao.comentario_produto alter comentario_produto_id set default nextval('mercadao.comentario_produto_comentario_produto_id_seq');
 
ALTER SEQUENCE mercadao.comentario_produto_comentario_produto_id_seq OWNED BY mercadao.comentario_produto.comentario_produto_id;


CREATE SEQUENCE mercadao.midia_midia_id_seq;

ALTER TABLE mercadao.midia alter midia_id set default nextval('mercadao.midia_midia_id_seq');

ALTER SEQUENCE mercadao.midia_midia_id_seq OWNED BY mercadao.midia.midia_id;


# --- !Downs

DROP SEQUENCE IF EXISTS mercadao.pessoa_pessoa_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.usuario_usuario_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.produto_produto_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.comentario_produto_comentario_produto_id_seq CASCADE;
DROP SEQUENCE IF EXISTS mercadao.midia_midia_id_seq CASCADE;