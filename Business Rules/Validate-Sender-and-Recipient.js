(function executeRule(current, previous) {

	// nao da pra criar shipment com sender e recipient igual 
    if (current.sender && current.recipient) {

        if (current.sender == current.recipient) {
            gs.addErrorMessage('Sender e Recipient não podem ser a mesma pessoa');
            current.setAbortAction(true);
        }

    }

})(current, previous);