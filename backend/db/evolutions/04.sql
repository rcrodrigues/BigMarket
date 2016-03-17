# --- !Ups
ALTER TABLE mercadao.usuario DROP COLUMN senha;

ALTER TABLE mercadao.usuario ADD COLUMN senha bytea;
ALTER TABLE mercadao.usuario ALTER COLUMN senha SET NOT NULL;

ALTER TABLE mercadao.usuario ADD COLUMN login text;
ALTER TABLE mercadao.usuario ALTER COLUMN login SET NOT NULL;

ALTER TABLE mercadao.pessoa RENAME COLUMN pessoa_id TO id;
ALTER TABLE mercadao.comentario_produto RENAME COLUMN comentario_produto_id TO id;
ALTER TABLE mercadao.midia RENAME COLUMN midia_id TO id;
ALTER TABLE mercadao.produto RENAME COLUMN produto_id TO id;
ALTER TABLE mercadao.usuario RENAME COLUMN usuario_id TO id;

# --- !Downs