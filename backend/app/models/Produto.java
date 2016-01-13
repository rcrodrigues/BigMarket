package models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(name = "produto", schema = "mercadao")
public class Produto extends GenericModel {
	
	@Id
	@Column(name="produto_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_produto_id_seq")
	@SequenceGenerator(name = "produto_produto_id_seq", sequenceName = "mercadao.produto_produto_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	//public Usuario usuario;
	
	public String nome;
	
	public String descricao;
	
	public Double preco;
	
	@Column(name="aceita_troca")
	public Boolean aceitaTroca;
	
	public Date nascimento;
	
	@Column(name="produto_novo")
	public Boolean novo;
	
	public Boolean vendido;
	
}
