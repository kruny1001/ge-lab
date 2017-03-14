'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:SoftwareCtrl
 * @description
 * # SoftwareCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('SoftwareCtrl', function ($scope, $location, $window) {
    $scope.openWeb  = function(link, internal, external){
      console.log(internal)
      if(internal)
        $location.path(link)
      else if(external)
        $window.open(link, '_self');
      else
        $window.open(link, 'target=_blank');
    }
    $scope.softwares = [
      //{name:'Enrichment analysis of gene lists', link:'http://ge-lab.org:7000/related', internal: false,  external: true, disabled:false},
      {name:'iDEP: Integrated Differential Expression and Pathway analysis', link:'http://ge-lab.org:3838/idep/', internal: false, external: true, disabled:false},
      {name:'ShinyGO: Gene Ontology Enrichment Analysis', link:'http://ge-lab.org:3838/go/', internal: false, external: true, disabled:false},
      {name:'GSKB: Gene set knowledge base for Pathway Analysis in Mouse', link:'http://ge-lab.org/gs', internal: false, external: true, disabled:false},
      {name:'GSKB: Bioconductor Package',
        link:'http://ge-lab.org/dm/gskb_1.1.0.tar.gz',internal: false, external: true, disabled:false},
      {name:'AraPath: Arabidopsis pathway data (now part of GSKB)', link:'http://ge-lab.org/gs', internal: false, external: true, disabled:true},
      {name:'PPInfer: a Bioconductor package for inferring related proteins using protein interaction network',
        link:'http://ge-lab.org/dm/PPInfer_0.99.0.tar.gz', internal: false, external: true, disabled:true},
      //{name:'ArraySearch: Similar expression profiles in Arabodopsis', link:'http://ge-lab.org:3000', internal: false, external: true, disabled:false},


    ];
    $scope.data = [
      {name:'Download gene sets for pathway analysis in model species', link:'data', internal: true},
      // {name:'Download gene set files derived from KEGG', link:'http://ge-lab.org/kegg/db'},
      // {name:'Download gene set files derived from Gene Octology', link:'http://ge-lab.org/gsea/db'},
      {name:'Gene expression for antisense transcripts in human, mouse, and rat', link:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE41462', internal: false},
      {name:'Expression data for normal human tissues', link:'https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE2361', internal: false},
    ];
  });
