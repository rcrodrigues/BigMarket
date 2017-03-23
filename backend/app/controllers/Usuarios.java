package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import models.Endereco;
import models.Produto;
import models.Usuario;
import play.mvc.Controller;
import utils.Message;

public class Usuarios extends Controller {
	
	public class PostInfo {
		public Usuario usuario;
		public Endereco endereco;
	}

	public static void create() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		
		PostInfo postInfo = gson.fromJson(body, PostInfo.class);
		
		Endereco endereco = postInfo.endereco;
		endereco.save();
		
		Usuario usuario = postInfo.usuario;
		usuario.pessoa.endereco = endereco;
		
		usuario.save();
		renderJSON(new Message("Usuario cadastrado com sucesso.", true));
		
	}
	
	public static void getUserEmail(Integer idProduto) {
		
		Produto produto = Produto.findById(idProduto);
		
		Usuario usuario = produto.usuario;
		
		renderJSON(usuario.pessoa);
		
	}
	
}
