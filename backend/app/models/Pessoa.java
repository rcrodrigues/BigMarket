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
@Table(name = "pessoa", schema = "mercadao")
public class Pessoa extends GenericModel{
	
	@Id
	@Column(name="pessoa_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pessoa_pessoa_id_seq")
	@SequenceGenerator(name = "pessoa_pessoa_id_seq", sequenceName = "mercadao.pessoa_pessoa_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	public String nome;
	
	@Column(name="datanascimento")
	public Date dataNascimento;
	
	public String email;
	
	public String cpf;
	
	public String telefone;

}
