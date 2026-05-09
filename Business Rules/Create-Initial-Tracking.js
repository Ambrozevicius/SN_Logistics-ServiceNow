(function executeRule(current, previous) {

    var trackingGR = new GlideRecord('x_1762041_sn_log_0_tracking_event');
    trackingGR.initialize();
    trackingGR.setValue('shipment', current.sys_id);

    // se nao tiver status pega created
    trackingGR.setValue('status', current.status || 'created');
    trackingGR.setValue('location', current.current_center);
    trackingGR.setValue('event_time', new GlideDateTime());
    trackingGR.setValue('description', 'Shipment created');

    trackingGR.insert();

})(current, previous);