# --- !Ups

ALTER TABLE mercadao.pessoa
	ALTER COLUMN email TYPE text,
	ALTER COLUMN cpf TYPE text,
	ALTER COLUMN telefone TYPE text;

ALTER TABLE mercadao.produto
	ALTER COLUMN nome TYPE text;

ALTER TABLE mercadao.midia
	ALTER COLUMN dado TYPE text;

ALTER TABLE mercadao.comentario_produto
	ALTER COLUMN nome_comentador TYPE text,
	ALTER COLUMN email_comentador TYPE text;

# --- !Downs