package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.sun.net.httpserver.Authenticator.Result;

import models.Pessoa;
import models.Usuario;
import net.sf.oval.configuration.annotation.Constraints;
import play.data.validation.Required;
import play.mvc.Controller;
import play.mvc.results.Unauthorized;
import utils.Message;

public class Autenticacao extends Controller {

	public static class LoginInfo {
		public static String login;
		public String senha;
	}
	
	public static void login() {

		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().create();
		
		LoginInfo loginInfo = gson.fromJson(body, LoginInfo.class);
		
		Usuario usuario = Usuario.findByLoginESenha(loginInfo.login, loginInfo.senha);
		
		if(usuario == null) {
			
			renderJSON(new Message("Email ou senha incorretos", false));
			
		} else {
			
			session.clear();
			session.put("username", LoginInfo.login);
			renderJSON(new Message("Login efetuado com sucesso", true));
			
		}
		
	}


	public static void logout() {
		
		session.clear();
		renderJSON(new Message("Deslogado com sucesso", true));
		
	}

	public static void isAuthenticated() {
		
		if(session.get("username") == null) {
			unauthorized();
		} else {
			renderJSON(new Message("Usuário já está logado", true));
		}
		
	}
	
}
