(function executeRule(current, previous) {

    // evita de rodar sem rota
    if (!current.route || current.status == previous.status)
        return;

    // pega os centros da rota
    var stepGR = new GlideRecord("x_1762041_sn_log_0_route_step");
    stepGR.addQuery('route', current.route);
    stepGR.orderBy('sequence');
    stepGR.query();
    var steps = [];

    while (stepGR.next()) {
        steps.push(stepGR.center.toString());
    }
    // se nao tiver centro nao faz nada
    if (steps.length == 0)
        return;

    // aqui atualiza com base no status
    if (current.status == 'posted') {

        current.current_center = steps[0];
    }

    if (current.status == 'in_transit') {

        current.current_center = steps[0];
    }
    if (current.status == 'at_center') {

        current.current_center = steps[1] || steps[0];
    }

})(current, previous);