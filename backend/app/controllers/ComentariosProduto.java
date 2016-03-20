package controllers;

import java.util.Date;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import controllers.Produtos.CreationObject;
import models.ComentarioProduto;
import models.Midia;
import models.Produto;
import models.Usuario;
import play.mvc.Controller;
import utils.Message;

public class ComentariosProduto extends Controller {
	
	public class CreationObject {
		public Integer idProduto;
		public ComentarioProduto comentario;
	}

	public static void create() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		
		CreationObject creationObject = gson.fromJson(body, CreationObject.class);
		
		Produto produto = Produto.findById(creationObject.idProduto);
		ComentarioProduto comentario = creationObject.comentario;
		
		comentario.produto = produto;
		
		comentario.save();
		renderJSON(new Message("Cometário adicionado com sucesso!", true));
		
	}
	
	public static void findAllByProduct(Integer id) {
		
		Produto produto = Produto.findById(id);
		renderJSON(ComentarioProduto.findAllByProduct(produto));
	}
    
}
