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
@Table(name = "midia", schema = "mercadao")
public class Midia extends GenericModel {
	
	@Id
	@Column(name="midia_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "midia_midia_id_seq")
	@SequenceGenerator(name = "midia_midia_id_seq", sequenceName = "mercadao.midia_midia_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;

	@Column(name="produto_id")
	public Produto produto;
	
	public String dado;
}
