package models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Query;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;
import play.db.jpa.JPA;

@Entity
@Table(name = "produto", schema = "mercadao")
public class Produto extends GenericModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "produto_id_seq")
	@SequenceGenerator(name = "produto_id_seq", sequenceName = "mercadao.produto_id_seq", allocationSize = 1, initialValue = 1)
	public Integer id;
	
	@ManyToOne
	public Usuario usuario;
	
	public String nome;
	
	@Column(columnDefinition="TEXT")
	public String descricao;
	
	public Double preco;
	
	@Column(name="aceitatroca")
	public Boolean aceitaTroca;
	
	public Date nascimento;
	
	@Column(name="produtonovo")
	public Boolean novo;
	
	@Column(name="place_id_osm")
	public Integer placeId;
	
	public Boolean vendido;
	
	public static List<Produto> findByUser(Usuario usuario) {
		
		List<Produto> produtos = Produto.find("byUsuario", usuario).fetch();
		
		return produtos;
		
	}
	
	public static List<Produto> findByFiltro(FiltroProduto filtro) {
		
		String sql = "select p from " + Produto.class.getSimpleName() + " p ";
		Boolean addedWhere = false;
		
		if(filtro.location != null) {
			
			if(!addedWhere)
				sql += "where p.placeId = " + filtro.location;
			else
				sql += " and p.placeId = " + filtro.location;
			
			addedWhere = true;
		}
		
		if(filtro.nome != null) {
			
			if(!addedWhere)
				sql += "where lower(p.nome) like '%" + filtro.nome.toLowerCase() + "%'";
			else
				sql += " and lower(p.nome) like '%" + filtro.nome.toLowerCase() + "%'";
			
			addedWhere = true;
		}
		
		if(filtro.preco != null) {
			
			if(!addedWhere)
				sql += "where p.preco <= " + filtro.preco;
			else
				sql += " and p.preco <= " + filtro.preco;
			
			addedWhere = true;
		}
		
		if(filtro.aceitaTroca != null) {
			
			if(!addedWhere)
				sql += "where p.aceitaTroca = " + filtro.aceitaTroca;
			else
				sql += " and p.aceitaTroca = " + filtro.aceitaTroca;
			
			addedWhere = true;
		}
		
		if(filtro.novo != null) {
			
			if(!addedWhere)
				sql += "where p.novo = " + filtro.novo;
			else
				sql += " and p.novo = " + filtro.novo;
			
			addedWhere = true;
		}
		
		Query query = JPA.em().createQuery(sql);
		
		List<Produto> produtos = query.getResultList();
		
		return produtos;
	}
	
}
