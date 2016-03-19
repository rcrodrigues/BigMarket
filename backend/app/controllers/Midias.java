package controllers;

import models.Midia;
import play.mvc.*;

public class Midias extends Controller {

    public static void getAll() {
    	
    	renderJSON(Midia.findAll());
    	
    }

}
