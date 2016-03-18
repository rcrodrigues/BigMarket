package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.Model;


@Entity
@Table(schema = "mercadao", name = "endereco")
public class Endereco extends Model {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "endereco_id_seq")
	@SequenceGenerator(name = "endereco_id_seq", sequenceName = "mercadao.endereco_id_seq", allocationSize = 1)
	public Integer id;

	public String logradouro;
	public String numero;
	public String complemento;
	public String bairro;
	public String cep;
	public String municipio;

}
