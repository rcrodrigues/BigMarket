package controllers;

import java.util.ArrayList;
import java.util.List;

import models.Midia;
import models.Produto;
import models.Usuario;
import play.mvc.Controller;
import utils.Message;

public class Midias extends Controller {

    public static void getAll() {
    	
    	renderJSON(Midia.findAll());
    	
    }
    
    public static void getAllByUser(String username) {
    	
    	Usuario usuario = Usuario.findByLogin(username);
    	List<Produto> produtos = Produto.findByUser(usuario);
    	List<Midia> midias = new ArrayList<>();
    	
    	for(Produto produto : produtos) {
    		Midia midia = Midia.find("byProduto", produto).first();
    		midias.add(midia);
    	}

    	renderJSON(midias);
    	
    }
    
    public static void find(Integer id) {
    	
    	Midia midia = Midia.findById(id);
    	
    	renderJSON(midia);
    }
    
    public static void delete(Integer id) {
    	
    	Midia midia = Midia.findById(id);
    	midia.delete();
    	
    	renderJSON(new Message("Produto deletado com sucesso.", true));
    	
    }

}
