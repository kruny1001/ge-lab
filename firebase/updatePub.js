var firebase =require('firebase');

var config = {
	apiKey: "AIzaSyBO4CCJzL7U9pFSEv-9ETqVt5dzMNKiwk4",
	authDomain: "bcloud.firebaseapp.com",
	databaseURL: "https://bcloud.firebaseio.com",
	storageBucket: "firebase-bcloud.appspot.com",
	messagingSenderId: "172712893865"
};
firebase.initializeApp(config);


//
//var pubs = [
//	//1
//	{
//		authors:['XJ Ge'], title:" Large-scale analysis of expression signatures reveals hidden links among diverse cellular processes.",
//		year:2011, org:"BMC Systems Biology", section:'5:87',
//		links:[{name:'Full text', addr:"https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Flarge-scale.pdf?alt=media&token=16512d6c-623a-4d02-a68b-32c256b9838f"},{name:'BMC Highly Accessed',addr:'http://bmcsystbiol.biomedcentral.com/articles/10.1186/1752-0509-5-87'}] },
//	//2
//	{
//		authors:['Wang C', 'Chou CH', 'Tseng C', 'Ge X', 'Pinchuk LM.'], title:" Early gene response of human brain microvascular endothelial cells to Listeria monocytogenes infection.",
//		year:2011, org:"Canadian J. Microbiology", section:'57:441-446',
//		links:[{name:'Abstract',addr:'http://www.nrcresearchpress.com/doi/abs/10.1139/w11-018#.V9GprpMrKZM'}] },
//	//3
//	{
//		authors:['KA Graham', 'XJ Ge', 'A de Las Morenas', 'A Tripathi', 'CL Rosenberg'],
//		title:"Gene expression profiles of estrogen receptor positive and estrogen receptor negative breast cancers are detectable in histologically normal epithelium",
//		year:2011, org:"", section:'57:441-446',
//		links:[{name:'Abstract',addr:'http://clincancerres.aacrjournals.org/content/early/2011/01/07/1078-0432.CCR-10-1369.abstract'}] },
//	//4
//	{
//		authors:['K Gedye', 'J Gonzalez-Hernandez', 'Y Ban', 'XJ Ge', 'J Thimmapuram', 'F Sun', 'C Wright', 'S Ali', 'A Boe', 'V Owens'],
//		title:"Gene expression profiles of estrogen receptor positive and estrogen receptor negative breast cancers are detectable in histologically normal epithelium",
//		year:2011, org:"", section:'57:441-446',
//		links:[{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fprairie_cord_grass.pdf?alt=media&token=413f5a31-4a95-4d0c-94c0-98d59c2ef246'}] },
//	//5
//	{
//		authors:['L Shi et al.'],
//		title:"The MicroArray Quality Control (MAQC)-II study of common practices for the development and validation of microarray-based predictive models",
//		year:2010, org:"", section:'28:827-38',
//		links:[{name:'Abstract', addr: 'http://europepmc.org/abstract/MED/20676074'}] },
//	//6
//	{
//		authors:['F Sutton', 'DG Chen', 'XJ Ge', 'D Kenefick'],
//		title:"Gene expression profiles of estrogen receptor positive and estrogen receptor negative breast cancers are detectable in histologically normal epithelium",
//		year:2009, org:"BMC Plant Biology", section:'9:34',
//		links:[{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fcbf_genes.pdf?alt=media&token=7e2cd48c-01c6-46b3-a54c-39d09f50fd70'}] },
//	//7
//	{
//		authors:['H Dong', 'XJ Ge', 'Y Shen', 'L Chen', 'Y Kong', 'H Zhang', 'X Man', 'L Tang', 'H Yuan', 'H Wang', 'G Zhao', 'W Jin.'],
//		title:"Gene expression profile analysis of human hepatocellular carcinoma using SAGE and LongSAGE",
//		year:2009, org:"BMC Med Genomics", section:'2:5',
//		links:[{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fgene_exp_sage.pdf?alt=media&token=b386fca0-603c-457e-bcbb-0a4d0f684b02'}] },
//	//8
//	{
//		authors:['XJ Ge', 'WS Rubinstein', 'Y-C Jung', 'QF Wu'],
//		title:"Genome-wide analysis of antisense transcription with Affymetrix exon array",
//		year:2008, org:"BMC Genomics", section:'9:27',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fantisense_affymetrix.pdf?alt=media&token=8026ce42-7bf2-41d2-ac9c-175094715c5e'},
//			{name:'(BMC Highly Accessed)',addr:'http://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-9-27'}
//		] },
//	//9
//	{
//		authors:['XJ Ge', 'QF Wu', 'SM Wang.'],
//		title:"SAGE detects microRNA precursors",
//		year:2006, org:"BMC Genomics", section:'7:285',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fsage_mirna.pdf?alt=media&token=41def4dc-a67f-4761-bdd5-fe1dac14d791'},
//			{name:'(BMC Highly Accessed)',addr:'http://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-7-285'}
//		] },
//	//10
//	{
//		authors:['XJ Ge', 'Q Wu', 'Y-C Jung', 'J Chen', 'SM Wang. '],
//		title:"A large quantity of novel human antisense transcripts detected by LongSAGE",
//		year:2006, org:"Bioinformatics", section:'22:2475-2479',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fnovel_human.pdf?alt=media&token=9c7f9e43-5f00-419e-a965-49473ed9e1b8'},
//			{name:'(Thomson Scientific “New Hot Paper”)',addr:'http://www.esi-topics.com/nhp/2008/january-08-Wang_Ge.html'},
//		] },
//	//11
//	{
//		authors:['Y Guo', 'Y Chen', 'H Itoh', 'A Watanabe', 'XJ Ge', 'T Kodama', 'H Aburatani.'],
//		title:"Identification and characterization of lin-28 homolog B (LIN28B) in human hepatocellular carcinoma",
//		year:2006, org:"Gene", section:'384:51-61',
//		links:[
//			{name:'Abstract',addr:'http://www.sciencedirect.com/science/article/pii/S0378111906004446'},
//		] },
//	//12
//	{
//		authors:['S Lee', 'J Chen', 'G Zhou', 'RZ Shi', 'G Bouffard', 'M Kocherginsky', 'XJ Ge', 'M Sun', 'N Jayathilaka', 'YC Kim', 'N Emmanuel',
//			'S Bohlander', 'M Minden', 'J Kline', 'O Ozer', 'R Larson', 'M LeBeau', 'E Green J Trent', 'T Karrison',
//			'P Liu', 'SM Wang', 'JD Rowley'],
//		title:"Gene expression profiles in acute myeloid leukemia with common translocations using SAGE",
//		year:2006, org:"Proc. Nat. Acad. Sci. U.S.A.", section:'103:1030-1035',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fmyeloid_leuk.pdf?alt=media&token=30d858b3-3175-4908-93c9-c16525cabc7f'},
//			{name:'(Thomson Scientific “New Hot Paper”)',addr:'http://www.esi-topics.com/nhp/2008/january-08-Wang_Ge.html'},
//		] },
//	//13
//	{
//		authors:['Y Chen', 'Y Guo', 'XJ Ge', 'H Itoh', 'A Watanabe', 'T Fujiwara', 'T Kodama', 'H Aburatani.'],
//		title:"Elevated expression and potential roles of human Sp5, a member of Sp transcription factor family, in human cancers",
//		year:2006, org:"Biochem. Biophys. Res. Commun", section:'340:758-766',
//		links:[
//			{name:'Abstract',addr:'http://www.sciencedirect.com/science/article/pii/S0006291X05027658'},
//		]},
//	//14
//	{
//		authors:['XJ Ge', 'YC Jung', 'QF Wu', 'WA Kibbe', 'SM Wang'],
//		title:"Annotating non-specific SAGE tags with microarray data",
//		year:2006, org:"Genomics", section:'87:173-180',
//		links:[
//			{name:'Abstract',addr:'http://www.sciencedirect.com/science/article/pii/S0888754305002454'}
//		] },
//	//15
//	{
//		authors:['S Lee' , 'D Johnson', 'K Dunbar', 'H Dong', 'XJ Ge', 'YC Kim', 'C Wing', 'N Jayathilaka', 'N Emmanuel', 'CQ Zhou', 'HL Gerber', 'CC Tseng', 'SM Wang'],
//		title:"2.45GHz radiofrequency fields alter gene expression in cultured human cells",
//		year:2005, org:"FEBS Lett.", section:'579:4829-4836',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fradiofrequency.pdf?alt=media&token=43eb2ef1-76e6-4dd8-8bfd-07288c9fd8b8'}
//		] },
//	//16
//	{
//		authors:['XJ Ge', 'S Yamamoto', 'S Tsutsumi', 'Y Midorikawa', 'S Ihara', 'SM Wang','H Aburatani'],
//		title:"Interpreting expression profiles of cancers by genome-wide survey of breadth of expression in normal tissues",
//		year:2005, org:"Genomics", section:'86:127-141',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fexp_profiles_cancers.pdf?alt=media&token=728b1e43-a8c3-49c7-ae9d-1cdd3a51dd02'},
//			{name:'Data',addr:'file:///Users/kruny1001/Desktop/www/www/index/papers/data/data2.html'}
//		] },
//	//17
//	{
//		authors:['T Minami', 'K Horiuchi', 'M Miura', 'MR Abid', 'W Takabe', 'N Noguchi', 'T Kohro', 'XJ Ge', 'H Aburatani', 'T Hamakubo', 'T Kodama', 'WC Aird.'],
//		title:"Vascular endothelial growth factor- and thrombin-induced termination factor, Down syndrome critical region-1, attenuates endothelial cell proliferation and angiogenesis",
//		year:2004, org:"J. Biol. Chem.", section:'279:50537-50554',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fvascular_endo.pdf?alt=media&token=a6a2c300-99b4-4796-b20a-ba1e2dca045d'},
//			{name:'(JBC “Paper of the Week”)',addr:'http://www.jbc.org/content/279/48/e99925.full#FN1'}
//		] },
//	//18
//	{
//		authors:['A Mukasa, K Ueki, XJ Ge, T Ide, T Fujimaki, R Nishikawa, A Asai, M Nakafuku, T Kirino & H Aburatani'],
//		title:"Selective Expression of a Subset of Neuronal Genes in Oligodendroglioma with Chromosome 1p Loss",
//		year:2004, org:"Brain Pathology", section:'14:34-42',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Foligodendroglioma.pdf?alt=media&token=07a41722-1b10-4e29-9e6a-1881b19969af'}
//		] },
//	//19
//	{
//		authors:['XJ Ge, S Tsutsumi, S Iwata & H Aburatani'],
//		title:"Reducing false positives in molecular pattern recognition.",
//		year:2003, org:"Genome Informatics", section:'14:34-43',
//		links:[
//			{name:'(The Best Paper Award) Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Ffalse_positives.pdf?alt=media&token=6567e31b-47d8-4ec1-b1a8-05a287ba7bb0'}
//		] },
//	//20
//	{
//		authors:['S Tsutsumi, T Taketani, K Nishimura, XJ Ge, T Taki, K Sugita, E Ishii, R Hanada, M Ohki, H Aburatani & Y Hayashi. '],
//		title:"Two distinct gene expression signatures in pediatric acute lymphoblastic leukemia with MLL rearrangements",
//		year:2003, org:"Cancer Res.", section:'63:4882-4887',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Flymphoblastic_leuk.pdf?alt=media&token=87b08b5a-5c4b-451a-87e8-10a1e004ffb2'}
//		] },
//	//21
//	{
//		authors:['XJ Ge','S Iwata.'],
//		title:"Learning the parts of objects by auto-association",
//		year:2002, org:"Neural Networks", section:'15:285-295',
//		links:[
//			{name:'Full text',addr:'https://firebasestorage.googleapis.com/v0/b/firebase-bcloud.appspot.com/o/Papers%2Fauto-association.pdf?alt=media&token=b492e02a-bd29-48b5-a87f-4bf953ea7ab2'}
//		] },
//	//22
//	{
//		authors:['XJ Ge', 'S Yonamine', 'YM Mi', 'S Tsutsumi', 'Y Kobune', 'H Aburatani','S Iwata'],
//		title:"A physics-inspired algorithm for information visualization with application to gene expression analysis, Journal of The School of Engineering",
//		year:2000, org:"The University of Tokyo", section:'XLVII:89-103',
//	},
//	//23
//	{
//		authors:['XJ Ge', 'NX Chen', 'WQ Zhang','FW Zhu'],
//		title:"Selective field evaporation in field-ion microscopy for ordered alloys",
//		year:1999, org:"J. of Applied Physics", section:'57:14203-14208',
//	},
//	//24
//	{
//		authors:['NX Chen', 'XJ Ge', 'WQ Zhang', 'FW Zhu'],
//		title:"Atomistic analysis of the field-ion microscopy image of Fe3Al",
//		year:1998, org:"Physical Review B-Condensed Matter", section:'57:14203-14208',
//	},
//	//25
//	{
//		authors:['XJ Ge', 'NX Chen', 'ZD Chen'],
//		title:"Efficient algorithms for 2D arithmetic Fourier transform",
//		year:1997, org:"IEEE Trans. on Signal Processing", section:'45:2136-2140',
//	}
//]
//var pubsRef = firebase.database().ref('pubs');
//
//pubs.forEach(function(val){
//	var newPubRef = pubsRef.push();
//	newPubRef.set(val)
//})
firebase.database().ref('/pubs').once('value', function(snap){
	snap.forEach(function(pub){
		console.log(pub.val().title)
	})
})

