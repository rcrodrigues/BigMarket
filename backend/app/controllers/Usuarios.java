package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import models.Usuario;
import play.mvc.Controller;
import utils.Message;

public class Usuarios extends Controller {

	public static void create() {
		
		String body = request.current().params.get("body");
		
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").create();
		
		Usuario usuario = gson.fromJson(body, Usuario.class);
		
		usuario.save();
		renderJSON(new Message("Usuario cadastrado com sucesso.", true));
		
	}
	
}
