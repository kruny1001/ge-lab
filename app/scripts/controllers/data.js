'use strict';

/**
 * @ngdoc function
 * @name statsdsuApp.controller:DataCtrl
 * @description
 * # DataCtrl
 * Controller of the statsdsuApp
 */
angular.module('statsdsuApp')
  .controller('DataCtrl', function ($scope, $mdMedia, $window) {
    $scope.openWeb = function(addr){
      $window.open(addr);
    }
    $scope.baseURL = 'http://ge-lab.org/gmt/';
    //$scope.title = "Download Gene sets for pathway analysis in model species";
    $scope.title = "Gene Set Files for Pathway Analysis / Enrichment Analysis";
    var data = [
      {
        mainTitle:'Mus musculus (mouse)',
        subTopic:[
          {title: "All gene sets", link:[
            {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_All.xlsx'},
            {name: 'GSEA .gmt format in gene symbol', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_All_gmt-Format.gmt'},
            {name: 'GMT format in Mouse Genome informatics(MGI) ID', addr:'http://ge-lab.org/gskb/2-MousePath/mGSKB_MGI.gmt'},
            {name: 'GMT format in Entrez ID', addr:'http://ge-lab.org/gskb/2-MousePath/mGSKB_Entrez.gmt'},
            {name: 'GMT format in Ensembl ID', addr:'http://ge-lab.org/gskb/2-MousePath/mGSKB_Ensembl.gmt'},
          ]},
          {title: "Gene sets in .gmt format by categories", link:[
            {name: 'Co-expression', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_Co-expression_gmt.gmt'},
            {name: 'Gene Ontology', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_GO_gmt.gmt'},
            {name: 'Cuated Pathway', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_Pathway_gmt.gmt'},
            {name: 'Metabolic', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_Metabolic_gmt.gmt'},
            {name: 'TF targets', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_TF_gmt.gmt'},
            {name: 'miRNA targets', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_miRNA_gmt.gmt'},
            {name: 'Location', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_Location_gmt.gmt'},
            {name: 'Others', addr:'http://ge-lab.org/gskb/2-MousePath/MousePath_Other_gmt.gmt'},
            {name: 'New: TF binding from Chip-Seq', addr:'http://ge-lab.org/gskb/2-MousePath/TFBS_ChipSeq_multiple_sites.zip'},
          ]},
          {title: "Information", link:[
            {name: 'Summary of sources', addr:'http://ge-lab.org/gskb/Table%201-sources.pdf'},
            {name: 'BioDBcore description', addr:'http://ge-lab.org/gskb/GSKB_BioDBcore_info.pdf'},
            {name: 'Public annotaion databases', addr:'http://ge-lab.org/gskb/sources_table.xlsx'},
            {name: 'Original literatures for lists of differentially expressed genes', addr:'http://ge-lab.org/gskb/Literature_citations.xlsx'},
          ]},
        ]
      },
      {
        mainTitle:'Arabidopsis thaliana',
        subTopic:[
          {title: "All gene sets", link:[
            {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/1-AraPath/Excel%20format%20with%20detailed%20information_Aug19-2013.xlsx'}, {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'}
          ]},
          {title: "Gene sets .gmt format by categories", link:[
            {name: 'Co-expression', addr:'http://ge-lab.org/gskb/1-AraPath/Literature%20gene%20sets.gmt'},
            {name: 'Gene Ontology', addr:'http://ge-lab.org/gskb/1-AraPath/Gene%20Ontology.gmt'},
            {name: 'KEGG, AraCye, Plant Ontology, miRNA, \nTF-targets and Computational', addr:'http://ge-lab.org/gskb/1-AraPath/KEGG%20AraCyc%20PO%20miRNA%20TF%20COM.gmt'},
          ]},
        ]
      },
      //
      // {
      //   mainTitle:'Saccharomyces cerevisiae (yeast)',
      //   subTopic:[
      //     {title: "All gene sets", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/3-yeast-resiluts-database/YeastDatabase_all.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/3-yeast-resiluts-database/YeastDatabase_all_gmt.gmt'}
      //     ]},
      //     {title: "Gene sets .gmt format by categories", link:[
      //       {name: 'Co-expression', addr:'http://ge-lab.org/gskb/3-yeast-resiluts-database/YeastDatabase_Literature_gmt.gmt'},
      //       {name: 'Gene Ontology', addr:'http://ge-lab.org/gskb/3-yeast-resiluts-database/YeastDatabase_GO_gmt.gmt'}
      //     ]},
      //   ]
      // },
      // {
      //   mainTitle:'Bos taurus(cow)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/bos_taurus_cow_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/bos_taurus_cow_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Caenorhabditis elegans (nematode)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/caenorhabditis_elegans_nematode_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/caenorhabditis_elegans_nematode_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Canis familiaris (dog)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/canis_familiaris_dog_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/canis_familiaris_dog_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Danio rerio (zerbrafish)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/danio_rerio_zebrafish_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/danio_rerio_zebrafish_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Drosophila melanogaster (fruit-fly)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/Drosophila_melanogaster_fruit-fly_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/Drosophila_melanogaster_fruit-fly_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Equus ferus caballus (horse)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/equus_ferus_caballus_horse_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/equus_ferus_caballus_horse_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Felis catus (cat)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/felis_catus_cat_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/felis_catus-cat_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Gallus gallus (chicken)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/gallus_gallus_chicken_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/gallus_gallus_chicken_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Homo sapiens (human)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/homo_sapiens_human_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/homo_sapiens_human_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Oryctolagus cuniculus (rabbit)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/oryctolagus_cuniculus_rabbit_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/oryctolagus_cuniculus_rabbit_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Pan troglodytes (chimpanzee)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/pan_troglodytes_chimpanzee_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/pan_troglodytes_chimpanzee_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Rattus norvegicus (brown rat)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/rattus_norvegicus_brown-rat_dababase2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/rattus_norvegicus_brown-rat_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Sus scrofa (pig)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/sus_scrofa_pig_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/sus_scrofa_pig_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Xenopus tropicalis (frog)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/xenopus_tropicalis_frog_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/4-animal-Results_database_gmt/xenopus_tropicalis_frog_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Dictyostelium discoideum (slime mold)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/Dictyostelium_discoideum_slime-mold_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/dictyostelium_discoideum_slime-mold_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Leishmania major (aleppo boil)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/leishmania_major_aleppo-boil_databse2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/leishmania_major_aleppo-boil_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Plasmodium falciparum (malarial parasite)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/plasmodium_falciparum_malarial-parasite_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/5-protists-resilts-database/plasmodium_falciparum_malarial-parasite_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Escherichia coli k12 (intestinal bacteria)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/6-prokaryotes-results-database/escherichia_coli_k12_intestinal-bacteria_databse2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/6-prokaryotes-results-database/escherichia_coli_k12_intestinal-bacteria_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Brachypodium distachyon (purple false brome)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Brachypodium_distachyon_purple-false-brome_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Brachypodium_distachyon_purple-false-brome_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Glycine max (soybean)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Glycine_max_soybean_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Glycine_max_soybean_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Hordeum vulgare (barley)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Hordeum_vulgare_barley_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/hordeum_vulgare_barley_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Oryza sativa (Asian rice)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/oryza_sativa_asian-rice_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/oryza_sativa_asian-rice_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Oryza sativa indica (Indica group rice)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Oryza_sativa_indica_Indica-group-rice_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Oryza_sativa_indica_Indica-group-rice_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Physcomitrella patens (moss)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Physcomitrella_patens_moss_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Physcomitrella_patens_moss_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Populus trichocarpa (black cottonwood)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'Excel format with detailed information'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Populus_trichocarpa_black-cottonwood_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Solanum lycopersicum (tomoto)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/solanum_lycopersicum_tomoto_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/solanum_lycopersicum_tomoto_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Solanum tuberosum (potato)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/Solanum_tuberosum_potato_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/Solanum_tuberosum_potato_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Sorghum bicolor (sorghum grass)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/sorghum_bicolor_sorghum-grass_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/sorghum_bicolor_sorghum-grass_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Vitis vinifera (grape vine)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/vitis_vinifera_grape-vine_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/vitis_vinifera_grape-vine_gmt2.gmt'}
      //     ]}
      //   ]
      // },
      // {
      //   mainTitle:'Zea mays (corn)',
      //   subTopic:[
      //     {title: "All gene sets (only Gene Ontology)", link:[
      //       {name: 'Excel format with detailed information', addr:'http://ge-lab.org/gskb/7-plant-results-database/zea_mays_corn_database2.xlsx'},
      //       {name: 'GSEA .gmt format', addr:'http://ge-lab.org/gskb/7-plant-results-database/zea_mays_corn_gmt2.gmtg'}
      //     ]}
      //   ]
      // },
    ]

    var dataPlantAnimal = [
      {
        "name": "Loxodonta africana genes (loxAfr3)",
        "commonName": "African savanna elephant",
        "KEGG": "lav",
        "geneID": "Ensembl",
        "geneSetFil": "Loxodonta_africana_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Saccharomyces cerevisiae genes (R64-1-1)",
        "commonName": "budding yeast",
        "KEGG": "sce",
        "geneID": "Ensembl",
        "geneSetFile": "Saccharomyces_cerevisiae_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Gallus gallus genes (Gallus_gallus-5.0)",
        "commonName": "chicken",
        "KEGG": "gga",
        "geneID": "Ensembl",
        "geneSetFile": "Gallus_gallus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Pan troglodytes genes (CHIMP2.1.4)",
        "commonName": "chimpanzee",
        "KEGG": "ptr",
        "geneID": "Ensembl",
        "geneSetFile": "Pan_troglodytes_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Pelodiscus sinensis genes (PelSin_1.0)",
        "commonName": "Chinese soft-shelled turtle",
        "KEGG": "pss",
        "geneID": "Ensembl",
        "geneSetFile": "Pelodiscus_sinensis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Latimeria chalumnae genes (LatCha1)",
        "commonName": "coelacanth",
        "KEGG": "lcm",
        "geneID": "Ensembl",
        "geneSetFile": "Latimeria_chalumnae_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ficedula albicollis genes (FicAlb_1.4)",
        "commonName": "collared flycatcher",
        "KEGG": "fab",
        "geneID": "Ensembl",
        "geneSetFile": "Ficedula_albicollis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Bos taurus genes (UMD3.1)",
        "commonName": "cow",
        "KEGG": "bta",
        "geneID": "Ensembl",
        "geneSetFile": "Bos_taurus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Canis familiaris genes (CanFam3.1)",
        "commonName": "dog",
        "KEGG": "cfa",
        "geneID": "Ensembl",
        "geneSetFile": "Canis_familiaris_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Felis catus genes (Felis_catus_6.2)",
        "commonName": "domestic cat",
        "KEGG": "fca",
        "geneID": "Ensembl",
        "geneSetFile": "Felis_catus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Drosophila melanogaster genes (BDGP6)",
        "commonName": "fruit fly",
        "KEGG": "dme",
        "geneID": "Ensembl",
        "geneSetFile": "Drosophila_melanogaster_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ailuropoda melanoleuca genes (ailMel1)",
        "commonName": "giant panda",
        "KEGG": "aml",
        "geneID": "Ensembl",
        "geneSetFile": "Ailuropoda_melanoleuca_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Anolis carolinensis genes (AnoCar2.0)",
        "commonName": "green anole",
        "KEGG": "acs",
        "geneID": "Ensembl",
        "geneSetFile": "Anolis_carolinensis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Chlorocebus sabaeus genes (ChlSab1.1)",
        "commonName": "green monkey",
        "KEGG": "csab",
        "geneID": "Ensembl",
        "geneSetFile": "Chlorocebus_sabaeus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Equus caballus genes (EquCab2)",
        "commonName": "horse",
        "KEGG": "ecb",
        "geneID": "Ensembl",
        "geneSetFile": "Equus_caballus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Homo sapiens genes (GRCh38.p7)",
        "commonName": "human",
        "KEGG": "hsa",
        "geneID": "Ensembl",
        "geneSetFile": "Homo_sapiens_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Oryzias latipes genes (MEDAKA1)",
        "commonName": "Japanese medaka",
        "KEGG": "ola",
        "geneID": "Ensembl",
        "geneSetFile": "Oryzias_latipes_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Anas platyrhynchos genes (BGI_duck_1.0)",
        "commonName": "mallard",
        "KEGG": "apla",
        "geneID": "Ensembl",
        "geneSetFile": "Anas_platyrhynchos_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Mus musculus genes (GRCm38.p4)",
        "commonName": "mouse",
        "KEGG": "mmu",
        "geneID": "Ensembl",
        "geneSetFile": "Mus_musculus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Caenorhabditis elegans genes (WBcel235)",
        "commonName": "nematode",
        "KEGG": "cel",
        "geneID": "Ensembl",
        "geneSetFile": "Caenorhabditis_elegans_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Nomascus leucogenys genes (Nleu1.0)",
        "commonName": "northern white-cheeked gibbon",
        "KEGG": "nle",
        "geneID": "Ensembl",
        "geneSetFile": "Nomascus_leucogenys_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Monodelphis domestica genes (BROADO5)",
        "commonName": "opossum",
        "KEGG": "mdo",
        "geneID": "Ensembl",
        "geneSetFile": "Monodelphis_domestica_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Sus scrofa genes (Sscrofa10.2)",
        "commonName": "pig",
        "KEGG": "ssc",
        "geneID": "Ensembl",
        "geneSetFile": "Sus_scrofa_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ornithorhynchus anatinus genes (OANA5)",
        "commonName": "platypus",
        "KEGG": "oaa",
        "geneID": "Ensembl",
        "geneSetFile": "Ornithorhynchus_anatinus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Oryctolagus cuniculus genes (OryCun2.0)",
        "commonName": "rabbit",
        "KEGG": "ocu",
        "geneID": "Ensembl",
        "geneSetFile": "Oryctolagus_cuniculus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Rattus norvegicus genes (Rnor_6.0)",
        "commonName": "rat",
        "KEGG": "rno",
        "geneID": "Ensembl",
        "geneSetFile": "Rattus_norvegicus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Macaca mulatta genes (Mmul_8.0.1)",
        "commonName": "rhesus monkey",
        "KEGG": "mcc",
        "geneID": "Ensembl",
        "geneSetFile": "Macaca_mulatta_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ciona intestinalis genes (KH)",
        "commonName": "sea squirt",
        "KEGG": "cin",
        "geneID": "Ensembl",
        "geneSetFile": "Ciona_intestinalis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ovis aries genes (Oar_v3.1)",
        "commonName": "sheep",
        "KEGG": "oas",
        "geneID": "Ensembl",
        "geneSetFile": "Ovis_aries_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Xiphophorus maculatus genes (Xipmac4.4.2)",
        "commonName": "southern platyfish",
        "KEGG": "xma",
        "geneID": "Ensembl",
        "geneSetFile": "Xiphophorus_maculatus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Tetraodon nigroviridis genes (TETRAODON8)",
        "commonName": "spotted green pufferfish",
        "KEGG": "tng",
        "geneID": "Ensembl",
        "geneSetFile": "Tetraodon_nigroviridis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Pongo abelii genes (PPYG2)",
        "commonName": "Sumatran orangutan",
        "KEGG": "pon",
        "geneID": "Ensembl",
        "geneSetFile": "Pongo_abelii_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Sarcophilus harrisii genes (DEVIL7.0)",
        "commonName": "Tasmanian devil",
        "KEGG": "shr",
        "geneID": "Ensembl",
        "geneSetFile": "Sarcophilus_harrisii_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Takifugu rubripes genes (FUGU4)",
        "commonName": "torafugu",
        "KEGG": "tru",
        "geneID": "Ensembl",
        "geneSetFile": "Takifugu_rubripes_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Meleagris gallopavo genes (UMD2)",
        "commonName": "turkey",
        "KEGG": "mgp",
        "geneID": "Ensembl",
        "geneSetFile": "Meleagris_gallopavo_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Xenopus tropicalis genes (JGI_4.2)",
        "commonName": "western clawed frog",
        "KEGG": "xtr",
        "geneID": "Ensembl",
        "geneSetFile": "Xenopus_tropicalis_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Gorilla gorilla genes (gorGor3.1)",
        "commonName": "western lowland gorilla",
        "KEGG": "ggo",
        "geneID": "Ensembl",
        "geneSetFile": "Gorilla_gorilla_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Callithrix jacchus genes (C_jacchus3.2.1)",
        "commonName": "white-tufted-ear marmoset",
        "KEGG": "cjc",
        "geneID": "Ensembl",
        "geneSetFile": "Callithrix_jacchus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Taeniopygia guttata genes (taeGut3.2.4)",
        "commonName": "zebra finch",
        "KEGG": "tgu",
        "geneID": "Ensembl",
        "geneSetFile": "Taeniopygia_guttata_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Danio rerio genes (GRCz10)",
        "commonName": "zebrafish",
        "KEGG": "dre",
        "geneID": "Ensembl",
        "geneSetFile": "Danio_rerio_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Cavia porcellus genes (cavPor3)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Cavia_porcellus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Gasterosteus aculeatus genes (BROADS1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Gasterosteus_aculeatus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ictidomys tridecemlineatus genes (spetri2)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Ictidomys_tridecemlineatus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Choloepus hoffmanni genes (choHof1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Choloepus_hoffmanni_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ciona savignyi genes (CSAV2.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Ciona_savignyi_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Tursiops truncatus genes (turTru1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Tursiops_truncatus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Oreochromis niloticus genes (Orenil1.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oreochromis_niloticus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Astyanax mexicanus genes (AstMex102)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Astyanax_mexicanus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Petromyzon marinus genes (Pmarinus_7.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Petromyzon_marinus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Erinaceus europaeus genes (HEDGEHOG)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Erinaceus_europaeus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Echinops telfairi genes (TENREC)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Echinops_telfairi_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Dasypus novemcinctus genes (Dasnov3.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Dasypus_novemcinctus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Procavia capensis genes (proCap1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Procavia_capensis_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Myotis lucifugus genes (Myoluc2.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Myotis_lucifugus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Poecilia formosa genes (PoeFor_5.1.2)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Poecilia_formosa_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Tupaia belangeri genes (TREESHREW)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Tupaia_belangeri_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Mustela putorius furo genes (MusPutFur1.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Mustela_putorius_furo_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Pteropus vampyrus genes (pteVam1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Pteropus_vampyrus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Papio anubis genes (PapAnu2.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Papio_anubis_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Vicugna pacos genes (vicPac1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Vicugna_pacos_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Tarsius syrichta genes (tarSyr1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Tarsius_syrichta_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Otolemur garnettii genes (OtoGar3)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Otolemur_garnettii_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Microcebus murinus genes (Mmur_2.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Microcebus_murinus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Lepisosteus oculatus genes (LepOcu1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Lepisosteus_oculatus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Ochotona princeps genes (pika)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Ochotona_princeps_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Dipodomys ordii genes (dipOrd1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Dipodomys_ordii_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Gadus morhua genes (gadMor1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Gadus_morhua_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Sorex araneus genes (COMMON_SHREW1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Sorex_araneus_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Macropus eugenii genes (Meug_1.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Macropus_eugenii_GO_ensembl_gene_id.gmt.gz",
        "species": "Animals"
      },
      {
        "name": "Medicago truncatula genes (MedtrA17_4.0)",
        "commonName": "barrel medic",
        "KEGG": "mtr",
        "geneID": "Ensembl",
        "geneSetFile": "Medicago_truncatula_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Populus trichocarpa genes (JGI2.0)",
        "commonName": "black cottonwood",
        "KEGG": "pop",
        "geneID": "Ensembl",
        "geneSetFile": "Populus_trichocarpa_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Theobroma cacao genes (Theobroma_cacao_20110822)",
        "commonName": "cacao",
        "KEGG": "tcc",
        "geneID": "Ensembl",
        "geneSetFile": "Theobroma_cacao_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Brassica rapa genes (IVFCAASv1)",
        "commonName": "field mustard",
        "KEGG": "brp",
        "geneID": "Ensembl",
        "geneSetFile": "Brassica_rapa_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Setaria italica genes (JGIv2.0)",
        "commonName": "foxtail millet",
        "KEGG": "sita",
        "geneID": "Ensembl",
        "geneSetFile": "Setaria_italica_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza sativa Japonica genes (IRGSP-1.0)",
        "commonName": "Japanese rice",
        "KEGG": "osa",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_sativa_Japonica_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Arabidopsis lyrata genes (v.1.0)",
        "commonName": "lyrate rockcress",
        "KEGG": "aly",
        "geneID": "Ensembl",
        "geneSetFile": "Arabidopsis_lyrata_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Zea mays genes (AGPv4)",
        "commonName": "maize",
        "KEGG": "zma",
        "geneID": "Ensembl",
        "geneSetFile": "Zea_mays_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza brachyantha genes (Oryza_brachyantha.v1.4b)",
        "commonName": "malo sina",
        "KEGG": "obr",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_brachyantha_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Prunus persica genes (Prupe1_0)",
        "commonName": "peach",
        "KEGG": "pper",
        "geneID": "Ensembl",
        "geneSetFile": "Prunus_persica_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Solanum tuberosum genes (SolTub_3.0)",
        "commonName": "potato",
        "KEGG": "sot",
        "geneID": "Ensembl",
        "geneSetFile": "Solanum_tuberosum_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Brassica napus genes (AST_PRJEB5043_v1)",
        "commonName": "rape",
        "KEGG": "bna",
        "geneID": "Ensembl",
        "geneSetFile": "Brassica_napus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Sorghum bicolor genes (Sorbi1)",
        "commonName": "sorghum",
        "KEGG": "sbi",
        "geneID": "Ensembl",
        "geneSetFile": "Sorghum_bicolor_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Glycine max genes (V1.0)",
        "commonName": "soybean",
        "KEGG": "gmx",
        "geneID": "Ensembl",
        "geneSetFile": "Glycine_max_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Arabidopsis thaliana genes (TAIR10)",
        "commonName": "thale cress",
        "KEGG": "ath",
        "geneID": "Ensembl",
        "geneSetFile": "Arabidopsis_thaliana_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Solanum lycopersicum genes (SL2.50)",
        "commonName": "tomato",
        "KEGG": "sly",
        "geneID": "Ensembl",
        "geneSetFile": "Solanum_lycopersicum_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Aegilops tauschii genes (ASM34733v1)",
        "commonName": "wheat D",
        "KEGG": "ats",
        "geneID": "Ensembl",
        "geneSetFile": "Aegilops_tauschii_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Brassica oleracea genes (v2.1)",
        "commonName": "wild cabbage",
        "KEGG": "boe",
        "geneID": "Ensembl",
        "geneSetFile": "Brassica_oleracea_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Musa acuminata genes (MA1)",
        "commonName": "wild Malaysian banana",
        "KEGG": "mus",
        "geneID": "Ensembl",
        "geneSetFile": "Musa_acuminata_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Vitis vinifera genes (IGGP_12x)",
        "commonName": "wine grape",
        "KEGG": "vvi",
        "geneID": "Ensembl",
        "geneSetFile": "Vitis_vinifera_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza nivara genes (AWHD00000000)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_nivara_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Physcomitrella patens genes (ASM242v1)",
        "commonName": "",
        "KEGG": "ppp",
        "geneID": "Ensembl",
        "geneSetFile": "Physcomitrella_patens_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Leersia perrieri genes (Lperr_V1.4)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Leersia_perrieri_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Brachypodium distachyon genes (v1.0)",
        "commonName": "",
        "KEGG": "bdi",
        "geneID": "Ensembl",
        "geneSetFile": "Brachypodium_distachyon_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza punctata genes (AVCL00000000)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_punctata_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza sativa Indica genes (ASM465v1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_sativa_Indica_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Selaginella moellendorffii genes (v1.0)",
        "commonName": "",
        "KEGG": "smo",
        "geneID": "Ensembl",
        "geneSetFile": "Selaginella_moellendorffii_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza glumaepatula genes (ALNU02000000)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_glumaepatula_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza barthii genes (O.barthii_v1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_barthii_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Ostreococcus lucimarinus genes (ASM9206v1)",
        "commonName": "",
        "KEGG": "olu",
        "geneID": "Ensembl",
        "geneSetFile": "Ostreococcus_lucimarinus_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Hordeum vulgare genes (ASM32608v1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Hordeum_vulgare_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza meridionalis genes (Oryza_meridionalis_v1.3)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_meridionalis_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza rufipogon genes (OR_W1943)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_rufipogon_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Triticum aestivum genes (TGACv1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Triticum_aestivum_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Amborella trichopoda genes (AMTR1.0)",
        "commonName": "",
        "KEGG": "atr",
        "geneID": "Ensembl",
        "geneSetFile": "Amborella_trichopoda_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Beta vulgaris subsp. vulgaris genes (RefBeet-1.2.2)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Beta_vulgaris_subsp._vulgaris_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Chlamydomonas reinhardtii genes (v3.1)",
        "commonName": "",
        "KEGG": "cre",
        "geneID": "Ensembl",
        "geneSetFile": "Chlamydomonas_reinhardtii_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza longistaminata genes (O_longistaminata_v1.0)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_longistaminata_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Trifolium pratense genes (Trpr)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Trifolium_pratense_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Cyanidioschyzon merolae genes (ASM9120v1)",
        "commonName": "",
        "KEGG": "cme",
        "geneID": "Ensembl",
        "geneSetFile": "Cyanidioschyzon_merolae_GO_KEGG_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Oryza glaberrima genes (AGI1.1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Oryza_glaberrima_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      },
      {
        "name": "Triticum urartu genes (ASM34745v1)",
        "commonName": "",
        "KEGG": "",
        "geneID": "Ensembl",
        "geneSetFile": "Triticum_urartu_GO_ensembl_gene_id.gmt.gz",
        "species": "Plants"
      }
    ]

    var dataP = [
      {
        mainTitle:'Homo sapiens (GRCh38.p7)',
        kegg:"hsa",
        common:"human",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'VEGA geneID', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
              {name: 'ucsc', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
              {name: 'illumina_humanwg_6_v3', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'illumina_humanht_12_v4', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'illumina_humanht_12_v3', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'hgnc_symbol', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'entrezgene', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'efg_agilent_wholegenome_4x44k_v2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hugene_2_0_st_v1', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hugene_1_0_st_v1', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hugene_1_0_st_v1', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hg_u95av2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hg_u133a_2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hg_u133a', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_hg_u133_plus_2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
            ]},
        ]
      },
      {
        mainTitle:'Mus musculus (GRCm38.p4)',
        kegg:"mmu",
        common:"mouse",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'VEGA geneID', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
              {name: 'ucsc', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
              {name: 'refseq_mrna', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'mgi_symbol', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'mgi_id', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'illumina_mousewg_6_v2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'illumina_mouseref_8_v2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'entrezgene', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'efg_agilent_wholegenome_4x44k_v2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_mouse430a_2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_mouse430_2', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
              {name: 'affy_mogene_1_0_st_v1', addr:'http://ge-lab.org/gskb/1-AraPath/GSEA%20gmt%20format-all.gmt'},
            ]},
        ]
      },
      {
        mainTitle:'Loxodonta africana (loxAfr3)',
        kegg:"lav",
        common:"African savanna elephant",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Saccharomyces cerevisiae (R64-1-1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Gallus gallus (Gallus_gallus-5.0)',
        kegg:"gga",
        common:"chicken",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Pan troglodytes (CHIMP2.1.4)',
        kegg:"ptr",
        common:"chimpanzee",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Pelodiscus sinensis (PelSin_1.0)',
        kegg:"pss",
        common:"Chinese soft-shelled turtle",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Latimeria chalumnae (LatCha1)',
        kegg:"lcm",
        common:"coelacanth",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ficedula albicollis (FicAlb_1.4)',
        kegg:"fab",
        common:"collared flycatcher",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Bos taurus (UMD3.1)',
        kegg:"bta",
        common:"cow",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Canis familiaris (CanFam3.1)',
        kegg:"cfa",
        common:"dog",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Felis catus (Felis_catus_6.2)',
        kegg:"fca",
        common:"domestic cat",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Drosophila melanogaster (BDGP6)',
        kegg:"dme",
        common:"fruit fly",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ailuropoda melanoleuca (ailMel1)	',
        kegg:"aml",
        common:"giant panda",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Anolis carolinensis (AnoCar2.0)',
        kegg:"acs",
        common:"green anole",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Chlorocebus sabaeus (ChlSab1.1)',
        kegg:"csab",
        common:"green monkey",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Equus caballus (EquCab2)',
        kegg:"ecb",
        common:"horse",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oryzias latipes (MEDAKA1)',
        kegg:"ola",
        common:"Japanese medaka",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Anas platyrhynchos (BGI_duck_1.0)',
        kegg:"apla",
        common:"mallard",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Caenorhabditis elegans (WBcel235)',
        kegg:"cel",
        common:"nematode",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Nomascus leucogenys (Nleu1.0)',
        kegg:"nle",
        common:"northern white-cheeked gib",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Monodelphis domestica (BROADO5)',
        kegg:"ssc",
        common:"pig",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Sus scrofa (Sscrofa10.2)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ornithorhynchus anatinus (OANA5)',
        kegg:"oaa",
        common:"platypus",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oryctolagus cuniculus (OryCun2.0)',
        kegg:"ocu",
        common:"rabbit",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Rattus norvegicus (Rnor_6.0)',
        kegg:"rno",
        common:"rat",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Macaca mulatta (Mmul_8.0.1)',
        kegg:"mcc",
        common:"rhesus monkey",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ciona intestinalis (KH)',
        kegg:"cin",
        common:"sea squirt",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ovis aries (Oar_v3.1)',
        kegg:"oas",
        common:"sheep",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Xiphophorus maculatus (Xipmac4.4.2)',
        kegg:"xma",
        common:"southern platyfish",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Tetraodon nigroviridis (TETRAODON8)',
        kegg:"tng",
        common:"spotted green pufferfish",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Pongo abelii (PPYG2)',
        kegg:"pon",
        common:"Sumatran orangutan",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },

      {
        mainTitle:'Sarcophilus harrisii (DEVIL7.0)',
        kegg:"shr",
        common:"Tasmanian devil",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Takifugu rubripes (FUGU4)',
        kegg:"tru",
        common:"torafugu",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Meleagris gallopavo (UMD2)',
        kegg:"mgp",
        common:"turkey",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Xenopus tropicalis (JGI_4.2)',
        kegg:"xtr",
        common:"western clawed frog",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Gorilla gorilla (gorGor3.1)',
        kegg:"ggo",
        common:"western lowland gorilla",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Callithrix jacchus (C_jacchus3.2.1)',
        kegg:"cjc",
        common:"white-tufted-ear marmoset",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Taeniopygia guttata (taeGut3.2.4)',
        kegg:"tgu",
        common:"zebra finch",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Danio rerio (GRCz10)',
        kegg:"dre",
        common:"zebrafish",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Astyanax mexicanus (AstMex102)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Cavia porcellus (cavPor3)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Choloepus hoffmanni (choHof1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ciona savignyi (CSAV2.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Dasypus novemcinctus (Dasnov3.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Dipodomys ordii (dipOrd1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Echinops telfairi (TENREC)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Erinaceus europaeus (HEDGEHOG)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Gadus morhua (gadMor1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Gasterosteus aculeatus (BROADS1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ictidomys tridecemlineatus (spetri2)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Lepisosteus oculatus (LepOcu1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Macropus eugenii (Meug_1.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Microcebus murinus (Mmur_2.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Mustela putorius furo (MusPutFur1.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Myotis lucifugus (Myoluc2.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ochotona princeps (pika)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oreochromis niloticus (Orenil1.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Otolemur garnettii (OtoGar3)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Papio anubis (PapAnu2.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Petromyzon marinus (Pmarinus_7.0)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Poecilia formosa (PoeFor_5.1.2)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Procavia capensis (proCap1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Pteropus vampyrus (pteVam1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Sorex araneus (COMMON_SHREW1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Tarsius syrichta (tarSyr1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Tupaia belangeri (TREESHREW)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Tursiops truncatus (turTru1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Vicugna pacos (vicPac1)',
        kegg:"sce",
        common:"budding yeast",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
    ];

    var dataPlant = [
      {
        mainTitle:'Medicago truncatula (MedtrA17_4.0)',
        kegg:"mtr",
        common:"barrel medic",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Populus trichocarpa (JGI2.0)',
        kegg:"pop",
        common:"black cottonwood",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Theobroma cacao (Theobroma_cacao_20110822)',
        kegg:"tcc",
        common:"cacao",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Brassica rapa (IVFCAASv1)',
        kegg:"brp",
        common:"field mustard",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Setaria italica (JGIv2.0)',
        kegg:"sita",
        common:"foxtail millet",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },{
        mainTitle:'Oryza sativa Japonica (IRGSP-1.0)',
        kegg:"osa",
        common:"Japanese rice",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Arabidopsis lyrata (v.1.0)',
        kegg:"aly",
        common:"lyrate rockcress",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Zea mays (AGPv4)',
        kegg:"zma",
        common:"maize",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oryza brachyantha (Oryza_brachyantha.v1.4b)',
        kegg:"obr",
        common:"malo sina",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Prunus persica (Prupe1_0)',
        kegg:"pper",
        common:"peach",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Solanum tuberosum (SolTub_3.0)',
        kegg:"sot",
        common:"potato",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Brassica napus (AST_PRJEB5043_v1)',
        kegg:"bna",
        common:"rape",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Sorghum bicolor (Sorbi1)',
        kegg:"sbi",
        common:"sorghum",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Glycine max (V1.0)',
        kegg:"gmx",
        common:"soybean",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Arabidopsis thaliana (TAIR10)',
        kegg:"ath",
        common:"thale cress",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Solanum lycopersicum (SL2.50)',
        kegg:"sly",
        common:"tomato",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Aegilops tauschii (ASM34733v1)',
        kegg:"ats",
        common:"wheat D",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Brassica oleracea (v2.1)',
        kegg:"boe",
        common:"wild cabbage",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Musa acuminata (MA1)',
        kegg:"mus",
        common:"wild Malaysian banana",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Vitis vinifera (IGGP_12x)',
        kegg:"vvi",
        common:"wine grape",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Amborella trichopoda (AMTR1.0)',
        kegg:"atr",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Beta vulgaris subsp. vulgaris (RefBeet-1.2.2)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Brachypodium distachyon (v1.0)',
        kegg:"bdi",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Chlamydomonas reinhardtii (v3.1)',
        kegg:"cre",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Cyanidioschyzon merolae (ASM9120v1)',
        kegg:"cme",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Hordeum vulgare (ASM32608v1)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Leersia perrieri (Lperr_V1.4)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },

    {
      mainTitle:'Oryza barthii (O.barthii_v1)',
        kegg:"",
      common:"",
      subTopic:[
      {title: "Geneset Files by ID Type",
        link:[
          {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
        ]},
    ]
    },
    {
      mainTitle:'Oryza glaberrima (AGI1.1)',
        kegg:"",
      common:"",
      subTopic:[
      {title: "Geneset Files by ID Type",
        link:[
          {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
        ]},
    ]
    },
    {
      mainTitle:'Oryza glumaepatula (ALNU02000000)',
        kegg:"",
      common:"",
      subTopic:[
      {title: "Geneset Files by ID Type",
        link:[
          {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
        ]},
    ]
    },
      {
        mainTitle:'Oryza longistaminata (O_longistaminata_v1.0)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },

      {
        mainTitle:'Oryza meridionalis (Oryza_meridionalis_v1.3)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },

      {
        mainTitle:'Oryza nivara (AWHD00000000)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },

      {
        mainTitle:'Oryza punctata (AVCL00000000)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oryza rufipogon (OR_W1943)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Oryza sativa Indica (ASM465v1)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Ostreococcus lucimarinus (ASM9206v1)',
        kegg:"olu",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Physcomitrella patens (ASM242v1)',
        kegg:"ppp",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Selaginella moellendorffii (v1.0)',
        kegg:"smo",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Trifolium pratense (Trpr)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Triticum aestivum (TGACv1)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
      {
        mainTitle:'Triticum urartu (ASM34745v1)',
        kegg:"",
        common:"",
        subTopic:[
          {title: "Geneset Files by ID Type",
            link:[
              {name: 'ensembl_gene_id', addr:'http://ge-lab.org/gmt/Homo_sapiens_GO_KEGG_ottg.gmt.gz'},
            ]},
        ]
      },
    ]


    var result = _.groupBy(dataPlantAnimal, 'species')
    console.log(result);
    var animals = result.Animals;
    var plants = result.Plants;


    var groupSize = Math.ceil((data.length / 1));
    //data = _.sortBy(data, function(o){return o.mainTitle});
    dataP = _.sortBy(dataP, function(o){return o.mainTitle});
    dataPlant = _.sortBy(dataPlant, function(o){return o.mainTitle});
    var groups = _.map(data, function(item, index){
      return index % groupSize === 0 ? data.slice(index, index + groupSize) : null;
    })
      .filter(function(item){ return item;
      });
    var groupsP = _.map(dataP, function(item, index){
      return index % groupSize === 0 ? dataP.slice(index, index + groupSize) : null;
    })
      .filter(function(item){ return item;
      });

    var groupsPlant = _.map(data, function(item, index){
      return index % groupSize === 0 ? dataPlant.slice(index, index + groupSize) : null;
    })
      .filter(function(item){ return item;
      });
    $scope.chunk = groups;
    $scope.chunkAnimal = animals;

    $scope.chunkPlant = plants;
    console.log($scope.chunkPlant)
    $scope.chunkP = groupsP;
    //$scope.chunkPlant = groupsPlant;


  });
