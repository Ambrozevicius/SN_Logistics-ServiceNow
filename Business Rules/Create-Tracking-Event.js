(function executeRule(current, previous) {

    // não cria tracking repetido
    if (!previous || current.status == previous.status)
        return;

    // verifica se ja existe evento igual
    var gr = new GlideRecord("x_1762041_sn_log_0_tracking_event");
    gr.addQuery('shipment', current.sys_id);
    gr.addQuery('status', current.status);
    gr.orderByDesc('event_time');
    gr.setLimit(1);
    gr.query();
    if (gr.next())
        return;

    // cria novo tracking
    var trackingGR = new GlideRecord("x_1762041_sn_log_0_tracking_event");
    trackingGR.initialize();
    trackingGR.setValue('shipment', current.sys_id);
    trackingGR.setValue('status', current.status);
    trackingGR.setValue('location', current.current_center);
    trackingGR.setValue('event_time', new GlideDateTime());

	//add a mensagem
    var message = '';
    if (current.status == 'posted') {
        message = 'Package received at origin facility';

    } else if (current.status == 'in_transit') {
        message = 'Package is in transit';

    } else if (current.status == 'at_center') {
        message = 'Package arrived at distribution center';

    } else if (current.status == 'out_for_delivery') {
        message = 'Out for delivery';

    } else if (current.status == 'delivered') {
        message = 'Package delivered successfully';

    } else if (current.status == 'delayed') {
        message = 'Delivery delayed';

    } else {
        message = 'Status updated';
    }

    trackingGR.setValue('description', message);
    trackingGR.insert();

})(current, previous);