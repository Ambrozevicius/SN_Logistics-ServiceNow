gs.info('shipment scheduler started');

// pega todos que ainda nao foram entregues
var shipmentGR = new GlideRecord('x_1762041_sn_log_0_shipment');

shipmentGR.addQuery('status', '!=', 'delivered');
shipmentGR.query();

while (shipmentGR.next()) {

    // verifica se atrasou
    if (shipmentGR.estimated_delivery) {

        var now = new GlideDateTime();
        var eta = new GlideDateTime(shipmentGR.estimated_delivery);

        if (now.after(eta) && shipmentGR.status != 'delayed') {

            shipmentGR.status = 'delayed';

            shipmentGR.update();

            gs.info('shipment delayed: ' + shipmentGR.number);

            continue;
        }
    }

    // entrega o shipment automaticamente
    if (shipmentGR.status == 'out_for_delivery') {

        shipmentGR.status = 'delivered';

        shipmentGR.actual_delivery = new GlideDateTime();

        shipmentGR.update();

        gs.info('shipment delivered: ' + shipmentGR.number);

        continue;
    }

    // aqui move entre os centros da rota
    // meu deus que codigo quebrado KKKKKKK
    if (shipmentGR.status == 'in_transit') {

        var stepGR = new GlideRecord('x_1762041_sn_log_0_route_step');

        stepGR.addQuery('route', shipmentGR.route);

        stepGR.orderBy('sequence');

        stepGR.query();

        while (stepGR.next()) {

            if (shipmentGR.current_center == stepGR.center) {

                // vai pro proximo centro
                if (stepGR.next()) {

                    shipmentGR.current_center = stepGR.center;

                    shipmentGR.update();

                    gs.info('shipment moved: ' + shipmentGR.number);

                } else {

                    // ultima parada da rota
                    shipmentGR.status = 'out_for_delivery';

                    shipmentGR.update();

                    gs.info('shipment out for delivery: ' + shipmentGR.number);
                }

                break;
            }
        }
    }
}