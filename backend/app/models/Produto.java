package models;

import java.util.Date;

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
@Table(name = "produto", schema = "mercadao")
public class Produto extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_id_seq")
	@SequenceGenerator(name = "produto_id_seq", sequenceName = "mercadao.produto_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	@ManyToOne(cascade = CascadeType.ALL)
	public Usuario usuario;
	
	public String nome;
	
	public String descricao;
	
	public Double preco;
	
	@Column(name="aceitatroca")
	public Boolean aceitaTroca;
	
	public Date nascimento;
	
	@Column(name="produtonovo")
	public Boolean novo;
	
	public Boolean vendido;
	
}
