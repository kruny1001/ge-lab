'use strict';

/**
 * @ngdoc directive
 * @name statsdsuApp.directive:seGrid
 * @description
 * # seGrid
 */
angular.module('statsdsuApp')
  .directive('seGrid', function () {
    return {
      templateUrl: 'views/templates/superEditor/se-grid.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        var canvas = fx.canvas();


        scope.cols = 2;
        scope.items = [
          {
            "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000702.gif?07131433",
            "class": "MS_prod_img_m"
          },
          {
            "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000152.gif?06291052",
            "class": "MS_prod_img_m"
          },
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000732.gif?07151635",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006372.jpg?07151428",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000282.gif?06301142",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006452.gif?07191809",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000005192.jpg?07111818",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000782.jpg?06211724",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006422.gif?06241153",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000852.gif?06081616",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006602.jpg?07131435",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000000012.jpg?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006752.gif?07181104",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006742.jpg?07181131",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006722.jpg?07151131",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000001152.gif?07141355",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006712.jpg?07181132",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000732.gif?07151635",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006702.jpg?07181134",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000000572.gif?07131733",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000001142.jpg?07151627",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006682.gif?07151129",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000004182.jpg?07111814",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006662.jpg?07080913",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000004062.gif?07071028",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006652.jpg?07111340",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006622.jpg?07061606",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000001562.jpg?07051547",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006632.jpg?06281439",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006612.jpg?07061220",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006602.jpg?07131435",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000004872.gif?06231729",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000001412.jpg?06231720",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0250000000422.gif?07071034",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006592.gif?06211722",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000005002.jpg?06211548",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000005382.jpg?06201742",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000002632.jpg?06291622",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000002592.jpg?06171501",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006582.gif?06200908",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006562.jpg?07061609",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006552.gif",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000002842.jpg?06151511",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006542.jpg?06151455",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000001132.jpg?06151550",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006532.gif?06281001",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006522.gif?06131751",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006512.gif?06171422",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006502.jpg?06271444",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000001472.jpg?06231132",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000005012.gif?06031738",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000572.jpg?07131315",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000952.gif?07061721",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000002482.gif?06020859",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000005122.jpg?07181415",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006492.jpg?07111628",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000000222.gif?05310937",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006472.gif?07041636",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006462.jpg?07041631",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006452.gif?07191809",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006442.jpg?05271030",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006422.gif?06241153",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006432.gif?05271030",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000001122.gif?05271029",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0250000000412.jpg?05271028",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000362.gif?05271028",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006402.gif?06131839",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000001112.gif?05271028",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006412.jpg?06131840",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006382.gif?07141709",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000282.gif?06301142",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000272.jpg?05251407",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006372.jpg?07151428",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006362.jpg?05271024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000006342.gif?07131401",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000172.gif?06241057",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000802.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000182.gif?05161612",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000001002.gif?07051718",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000992.jpg?05231959",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000052.gif?05201757",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000982.jpg?06021117",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000952.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000072.jpg?06092139",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000922.jpg?06211752",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000892.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000042.gif?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000882.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000842.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0420000000082.jpg?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000792.gif?06151037",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000082.gif?06021118",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000872.jpg?06291534",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000152.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000000272.gif?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000092.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000062.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0410000000822.jpg?07140925",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000162.jpg?06081627",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000001032.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0430000000282.gif?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000032.jpg?05111310",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0440000000022.gif?05101024",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000001022.jpg?06231124",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000001012.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000972.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000962.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000942.jpg?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000932.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000902.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000862.jpg?07061034",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0190000000832.gif?05161933",
          //  "class": "MS_prod_img_m"
          //},
          //{
          //  "img": "http://hn-hn.co.kr/shopimages/skyskysky/0250000000382.gif?07071029",
          //  "class": "MS_prod_img_m"
          //}
        ]
      }
    };
  });