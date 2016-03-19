package exceptions;

import play.i18n.Messages;

public class GenericException extends RuntimeException {

	private String chaveMensagemUsuario;
	private Object [] args;
	
	public GenericException () {
	
	}
	
	public GenericException (Throwable throwable) {
		super(throwable);
	}
	
	public String getMensagemUsuario () {
		return Messages.get(chaveMensagemUsuario, args);
	}
	
	public GenericException mensagemUsuario(String chaveMensagem, Object ... args) {
		this.args = args;
		this.chaveMensagemUsuario = chaveMensagem;
		return this;
	}

}