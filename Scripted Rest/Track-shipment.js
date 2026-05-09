(function process(request, response) {

    // pega o numero que vem da url
    var trackingNumber = request.pathParams.tracking_number;

    gs.info('tracking number: ' + trackingNumber);

    // aqui faz a query do shipment
    var shipmentGR = new GlideRecord('x_1762041_sn_log_0_shipment');

    shipmentGR.addQuery('number', trackingNumber);

    shipmentGR.query();

    if (shipmentGR.next()) {

        gs.info('shipment found: ' + shipmentGR.number);

        // retorna os dados pro portal
        var result = {};

        result.tracking_number = shipmentGR.getValue('number');
        result.status = shipmentGR.getValue('status');
        result.current_center = shipmentGR.getDisplayValue('current_center');
		//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK duas horas debuggando pra descobrir que eu escrevi errado
        result.estimated_delivery = shipmentGR.getDisplayValue('esimated_delivery').split(' ')[0];
        result.recipient = shipmentGR.getDisplayValue('recipient');

        return result;

    }

    // se nao achar retorna erro
    response.setStatus(404);

    return {
        error: 'Shipment not found'
    };

})(request, response);