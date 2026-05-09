(function executeRule(current, previous) {

    if (current.status != 'created') {
        gs.addErrorMessage('Impossível criar com status diferente de "created"');
        current.setAbortAction(true);
    }
	//n sei se vale a pena, porque aí tem que ficar atualizando 

})(current, previous);