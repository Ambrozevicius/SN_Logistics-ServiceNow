(function executeRule(current, previous) {

    // sem in_route||out_for_delivery ignora
    if (!current.route)
        return;

    // verifica atraso
    if (current.estimated_delivery) {

        var now = new GlideDateTime();

        if (now.after(current.estimated_delivery)) {

            current.status = 'delayed';

            return;
        }
    }

    // pega ultimo centro da rota
    var stepGR = new GlideRecord('x_1762041_sn_log_0_route_step');

    stepGR.addQuery('route', current.route);

    stepGR.orderByDesc('sequence');

    stepGR.setLimit(1);

    stepGR.query();

    if (stepGR.next()) {

        // se chegou no ultimo centro vira out_for_delivery
        if (current.current_center == stepGR.center) {

            if (current.status != 'delivered') {

                current.status = 'out_for_delivery';
            }
        }
    }

})(current, previous);