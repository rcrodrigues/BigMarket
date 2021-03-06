package models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(name = "comentario_produto", schema = "mercadao")
public class ComentarioProduto extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "comentario_produto_id_seq")
	@SequenceGenerator(name = "comentario_produto_id_seq", sequenceName = "mercadao.comentario_produto_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	@ManyToOne
	public Produto produto;
	
	@Column(columnDefinition="TEXT")
	public String comentario;
	
	@Column(name="nome_comentador")
	public String nomeComentador;
	
	@Column(name="email_comentador")
	public String emailComentador;

	
	public static List<ComentarioProduto> findAllByProduct(Produto produto) {
		
		List<ComentarioProduto> comentarios = ComentarioProduto.find("byProduto", produto).fetch();
		
		return comentarios;
		
	}
}
