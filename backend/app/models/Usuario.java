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
import javax.persistence.JoinColumn;
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
	
	public String senha;
	
	public String login;
	
	public Usuario save() {
		
		try {
			setSenha(this.senha);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return super.save();
		
	}
	
	public void setSenha(String senha) throws Exception {
		this.senha = hashText(senha);
	}

	public static Usuario findByLoginESenha(String login, String senha) throws Exception {
		return Usuario.find("byLoginAndSenha", login, hashText(senha)).first();			
	}

	public static Usuario findByLogin(String login) {
		return Usuario.find("byLogin", login).first();
	}

	public static String convertByteToHex(byte data[]) {
		
        StringBuffer hexData = new StringBuffer();
        for (int byteIndex = 0; byteIndex < data.length; byteIndex++)
            hexData.append(Integer.toString((data[byteIndex] & 0xff) + 0x100, 16).substring(1));
        
        return hexData.toString();
        
    }
    
    public static String hashText(String textToHash) throws Exception {
    	
        final MessageDigest sha512 = MessageDigest.getInstance("SHA-512");
        sha512.update(textToHash.getBytes());
        
        return convertByteToHex(sha512.digest());
        
    }
}
