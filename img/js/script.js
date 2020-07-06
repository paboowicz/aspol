//alert ('a');
function showOgl(id)
{
    window.open('indexb429.html?id=oglshow&amp;oid='+id, 'Ogloszenie','left=100,top=100,toolbar=no,directories=no,scrollbars=1,resizable=1,status=no,menubar=0,width=500,height=350');
}
function wo(id,title,w,h)
{
    window.open(id, title,'toolbar=no,directories=no,scrollbars=1,resizable=1,status=no,menubar=0,width='+w+',height='+h+'');
}


function showPrzet(id,par)
{
    window.open('indexd671.html?id=przetshow&amp;oid='+id+'&par='+par, 'Przetarg','left=100,top=100,toolbar=no,directories=no,scrollbars=1,resizable=1,status=no,menubar=0,width=500,height=350');
}

function showNewBook(id)
{
    window.open('index4e10.html?id=bookshow&amp;oid='+id,'Wpis','left=100,top=100,toolbar=no,directories=no,scrollbars=1,resizable=1,status=no,menubar=0,width=500,height=350');
}

function showNewForum(id,id2)
{
    window.open('index939a.html?id=forumshow&amp;oid='+id+'&oid2='+id2,'Wpis','left=100,top=100,toolbar=no,directories=no,scrollbars=1,resizable=1,status=no,menubar=0,width=500,height=350');
}


function pomoc (oid,wys,szer,typ)
{
//    var nazwa = "Galeria"+Math.ceil(Math.random()*100);
//    var nazwa = "Galeria"+Math.random();
   var nazwa = "Galeria";
    var pomoc = window.open("indexdc11.html?img="+oid+"&typ="+typ, nazwa,"toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,width="+szer+",height="+wys+",scrollbars=no");
}

function pow (oid,wys,szer,typ)
{
//    var nazwa = "Galeria"+Math.ceil(Math.random()*100);
//   var nazwa = "Galeria"+Math.random();
   var nazwa = "Galeria";
    var pomoc = window.open("indexff90.html?pow="+oid+"&typ="+typ, nazwa,"toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,width="+szer+",height="+wys+",scrollbars=no");
}

				
function search(id)
{
    document.form_skocz.ids.value = id;
    document.form_skocz.submit();
}
						      
function showPicOferta(oid,wys,szer,typ)
 {
    var nazwa = "Oferta";
    var pomoc = window.open ("sys/img5445.html?id="+oid+"&typ="+typ, nazwa,"toolbar=no,location=no,  directories=no,status=no,menubar=no,resizable=yes,width="+wys+",height="+szer+",scrollbars=no");
}
	   
	   						      