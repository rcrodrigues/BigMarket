package models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(name = "comentario_produto", schema = "mercadao")
public class ComentarioProduto extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comentario_produto_comentario_produto_id_seq")
	@SequenceGenerator(name = "comentario_produto_comentario_produto_id_seq", sequenceName = "mercadao.comentario_produto_comentario_produto_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	@Column(name="produto_id")
	public Produto produto;
	
	public String comentario;
	
	@Column(name="nome_comentador")
	public String nomeComentador;
	
	@Column(name="email_comentador")
	public String emailComentador;

}
