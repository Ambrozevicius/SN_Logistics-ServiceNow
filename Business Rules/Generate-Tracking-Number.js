(function executeRule(current, previous /*null when async*/) {

    if (!current.number) {

        // numero aleatorio igual correios
        var randomNum = Math.floor(100000000 + Math.random() * 900000000);

        current.number = "SN" + randomNum + "BR";
    }

})(current, previous);