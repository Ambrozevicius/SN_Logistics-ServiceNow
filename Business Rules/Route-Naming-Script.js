(function executeRule(current, previous /*null when async*/) {

    // monta o nome automatico da rota
    // tipo Sao Paulo -> Rio de Janeiro
    var origin = current.origin_center.getDisplayValue();
    var destination = current.destination_center.getDisplayValue();
    current.name = origin + ' -> ' + destination;

})(current, previous);