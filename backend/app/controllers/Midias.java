package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import models.Midia;
import play.mvc.Controller;

public class Midias extends Controller {

    public static void getAll() {
    	
    	renderJSON(Midia.findAll());
    	
    }
    
    public static void find(Integer id) {
    	
//    	String body = request.current().params.get("body");
//    	Gson gson = new GsonBuilder().create();
//    	
//    	Integer id = gson.fromJson(body, Integer.class);
    	
    	Midia midia = Midia.findById(id);
    	
    	renderJSON(midia);
    }

}
