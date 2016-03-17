package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import models.Pessoa;
import models.Usuario;
import play.mvc.Controller;
import play.mvc.results.Unauthorized;

public class Autenticacao extends Controller {

	public class LoginInfo {
		public String usuario;
		public String senha;
	}
	
	public static void login() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().create();
		
		LoginInfo loginInfo = gson.fromJson(body, LoginInfo.class);
	    
	    Usuario usuario = Usuario.findByLoginESenha(loginInfo.usuario, loginInfo.senha);
	    
	    if(usuario != null)
	    	renderJSON(usuario);
		
		unauthorized();
	}
	
}
