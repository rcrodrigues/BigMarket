package controllers;

import models.Produto;
import play.mvc.Controller;

public class Produtos extends Controller {

	public static void create(Produto produto) {
		
		produto.save();
		renderJSON("Produto cadastrado com sucesso!");
		
	}
	
	public static void getAll() {
		
		Produto produto = (Produto) Produto.findAll();
		renderJSON(produto);

	}


}