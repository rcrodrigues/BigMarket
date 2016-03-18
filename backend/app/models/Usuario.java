package models;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;

@Entity
@Table(name = "usuario", schema = "mercadao")
public class Usuario extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usuario_id_seq")
	@SequenceGenerator(name = "usuario_id_seq", sequenceName = "mercadao.usuario_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;

	@OneToOne(cascade=CascadeType.ALL)
	public Pessoa pessoa;
	
	public byte[] senha;
	
	public String login;
	
	public void setSenha(String senha) {
		this.senha = getSha512(senha);
	}

	public static Usuario findByLoginESenha(String login, String password) {
		return Usuario.find("byLoginAndSenha", login, getSha512(password)).first();			
	}

	public static Usuario findByLogin(String login) {
		return Usuario.find("byLogin", login).first();
	}

	public static byte[] getSha512(String value) {
		try {
			return MessageDigest.getInstance("SHA-512").digest(value.getBytes("UTF-8"));
		}
		catch (NoSuchAlgorithmException e) {
			throw new RuntimeException(e);
		}
		catch (UnsupportedEncodingException e) {
			throw new RuntimeException(e);
		}
	}
}
