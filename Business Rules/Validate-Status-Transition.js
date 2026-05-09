(function executeRule(current, previous) {

    if (!previous || current.status == previous.status)
        return;

    var oldStatus = previous.status.toString();
    var newStatus = current.status.toString();
    var valid = false;

    if (oldStatus == 'created' && newStatus == 'posted') {
        valid = true;

    } else if (oldStatus == 'posted' && newStatus == 'in_transit') {
        valid = true;

    } else if (oldStatus == 'in_transit' && newStatus == 'at_center') {
        valid = true;

    } else if (oldStatus == 'in_transit' && newStatus == 'delayed') {
        valid = true;

    } else if (oldStatus == 'at_center' && newStatus == 'out_for_delivery') {
        valid = true;

    } else if (oldStatus == 'out_for_delivery' && newStatus == 'delivered') {
        valid = true;

    } else if (oldStatus == 'out_for_delivery' && newStatus == 'delayed') {
        valid = true;

    } else if (oldStatus == 'delayed' && newStatus == 'in_transit') {
        valid = true;

    } else if (oldStatus == 'delayed' && newStatus == 'out_for_delivery') {
        valid = true;
    }

    if (valid != true) {
        gs.addErrorMessage(
            'Invalid status transition from ' +
            oldStatus +
            ' to ' +
            newStatus
        );
        current.setAbortAction(true);
    }

})(current, previous);