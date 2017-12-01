/**
 * Created by Rodrigo on 9/06/2017.
 */
var controller =app.controller('controlador',function ($scope,$http) {


    $scope.pagMenu=true;
    $scope.inicio=1;


    $scope.entrarMenu = function () {
        $scope.pagMenu=true;
        $scope.inicio=1;
    };
    $scope.EntrarInicio = function () {
        $scope.integrantes=null;
        $scope.inicio=1;
        $scope.introduccion=null;
        $scope.historia=null;
        $scope.actualidad=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarIntegrantes = function () {
        $scope.integrantes=1;
        $scope.inicio=null;
        $scope.introduccion=null;
        $scope.historia=null;
        $scope.actualidad=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };

    $scope.EntrarIntroduccion = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.introduccion=1;
        $scope.historia=null;
        $scope.actualidad=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarHistoria = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.historia=1;
        $scope.introduccion=null;
        $scope.actualidad=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarActualidad = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=1;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarE_S_F_ACTIVOS = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=1;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarE_S_F_PASIVOS = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=1;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarE_S_PATRIMONIO = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=1;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarRatiosEndeudamiento = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=1;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarRatiosLiquidez = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=1;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;
    };
    $scope.EntrarRatiosGestion = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=1;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=null;

    };
    $scope.EntrarRatiosRentabilidad = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=1;
        $scope.conclusiones=null;

    };
    $scope.EntrarConclusiones = function () {
        $scope.integrantes=null;
        $scope.inicio=null;
        $scope.actualidad=null;
        $scope.historia=null;
        $scope.introduccion=null;
        $scope.e_s_f_activos=null;
        $scope.e_s_f_pasivos=null;
        $scope.e_s_f_patrimonio=null;
        $scope.ratiosEndeudamiento=null;
        $scope.ratiosLiquidez=null;
        $scope.ratiosGestion=null;
        $scope.ratiosRentabilidad=null;
        $scope.conclusiones=1;


    };


    });
