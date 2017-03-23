package controllers;

import java.util.Date;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import controllers.Usuarios.PostInfo;
import models.FiltroProduto;
import models.Midia;
import models.Produto;
import models.Usuario;
import play.mvc.Controller;
import utils.Message;

public class Produtos extends Controller {
	
	public class CreationObject {
		public Produto produto;
		public String username;
		public String midia;
		public String placeId;
	}

	public static void create() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		
		CreationObject creationObject = gson.fromJson(body, CreationObject.class);
		
		Produto produto = creationObject.produto;
		Midia midia = new Midia();
		midia.dado = creationObject.midia;
		Usuario usuario = Usuario.findByLogin(creationObject.username);
		
		produto.nascimento = new Date();
		produto.usuario = usuario;
		
		produto.save();
		
		midia.produto = produto;
		midia.save();
		renderJSON(new Message("Produto cadastrado com sucesso!", true));
		
	}
	
	public static void getAll() {
		
		List<Produto> produtos = Produto.findAll();
		renderJSON(produtos);

	}
	
	public static void update() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().create();
		
		CreationObject creationObject = gson.fromJson(body, CreationObject.class);
		
		Produto produto = Produto.findById(creationObject.produto.id);
		
		produto.nome = creationObject.produto.nome;
		produto.descricao = creationObject.produto.descricao;
		produto.preco = creationObject.produto.preco;
		produto.aceitaTroca = creationObject.produto.aceitaTroca;
		produto.novo = creationObject.produto.novo;
		produto.vendido = creationObject.produto.vendido;
		
		produto.save();
		
		Midia midia = Midia.findByProduct(produto);
		midia.dado = creationObject.midia;
		midia.save();
		
		renderJSON(new Message("Produto atualizado com sucesso!", true));
		
	}

}