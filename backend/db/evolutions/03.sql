# --- !Ups

ALTER COLUMN pessoa.email TYPE text;
ALTER COLUMN pessoa.cpf TYPE text;
ALTER COLUMN pessoa.telefone TYPE text;

ALTER COLUMN produto.nome TYPE text;

ALTER TABLE produto RENAME COLUMN aceitatroca TO aceita_troca;
ALTER TABLE produto RENAME COLUMN produtonovo TO produto_novo;

ALTER TABLE pessoa RENAME COLUMN datanascimento TO data_nascimento;


# --- !Downs