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
@Table(name = "midia", schema = "mercadao")
public class Midia extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "midia_id_seq")
	@SequenceGenerator(name = "midia_id_seq", sequenceName = "mercadao.midia_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;

	@ManyToOne(cascade = CascadeType.ALL)
	public Produto produto;
	
	@Column(columnDefinition="TEXT")
	public String dado;
	
	public static Midia findByProduct(Produto produto) {
		
		Midia midia = Midia.find("byProduto", produto).first();
		
		return midia;
		
	}
}
