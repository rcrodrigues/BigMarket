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
		public String username;
		public String password;
	}
	
	public static String sessionUsername;
	
	public static void login() throws Exception {

		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().create();
		
		LoginInfo loginInfo = gson.fromJson(body, LoginInfo.class);
		
		if(loginInfo.username == null || loginInfo.password == null)
			renderJSON(new Message("Email ou senha incorretos", false));
		
		sessionUsername = loginInfo.username;
		
		Usuario usuario = Usuario.findByLoginESenha(loginInfo.username, loginInfo.password);
		
		if(usuario == null) {
			
			renderJSON(new Message("Email ou senha incorretos", false));
			
		} else {
			
			session.clear();
			session.put("username", sessionUsername);
			renderJSON(new Message("Login efetuado com sucesso", true));
			
		}
		
	}


	public static void logout() {
		
		session.clear();
		renderJSON(new Message("Deslogado com sucesso", true));
		
	}

	public static void isAuthenticated() {
		
		if(session.get("username") == null) {
			renderJSON(new Message("Não existe usuário logado", false));
		} else {
			renderJSON(new Message(session.get("username"), true));
		}
		
	}
	
}
