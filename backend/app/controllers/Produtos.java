package controllers;

import models.Produto;
import play.mvc.Controller;

public class Produtos extends Controller {

	public static void getAll() {
		
		Produto produto = (Produto) Produto.findAll();
		renderJSON(produto);

	}


}