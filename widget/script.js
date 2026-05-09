//client controler
api.controller = function($scope, $http, $timeout) {

    // guarda os dados do shipment
    $scope.shipment = {};

    //dark/light mode
    $timeout(function() {

        var toggleButton = document.getElementById('theme-toggle');
        var pagina = document.getElementById('pagina');

        // deixa dark por padrao
        pagina.classList.remove('light');
        pagina.classList.add('dark');

        $scope.trocarcor = function() {
            pagina.classList.toggle('light');
            pagina.classList.toggle('dark');

            if (pagina.classList.contains('light')) {
                toggleButton.innerHTML = '<i class="bx bx-moon"></i>';
            } else {
                toggleButton.innerHTML = '<i class="bx bx-sun"></i>';
            }
        };

    });

    //chama a api
    $scope.buscarShipment = function() {

        var tracking = $scope.trackingNumber;

        // limpa erro antigo
        $scope.erro = '';

        // chama o rest
        $http.get('/api/x_1762041_sn_log_0/sn_logistics_api/track/' + tracking)

        .then(function(response) {

            // joga os dados na tela
            $scope.shipment = response.data.result;

        }, function(error) {

            // se nao achar mostra erro
            $scope.erro = 'Shipment not found';
			alert("Tente com SN560240832BR :)");

            // cpa da pra fazer isso melhor depois 
            console.log(error);

        });
    };
};