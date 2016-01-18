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
@Table(name = "usuario", schema = "mercadao")
public class Usuario extends GenericModel {
	
	@Id
	@Column(name="usuario_id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_usuario_id_seq")
	@SequenceGenerator(name = "usuario_usuario_id_seq", sequenceName = "mercadao.usuario_usuario_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;

	@Column(name="pessoa_id")
	public Pessoa pessoa;
}
