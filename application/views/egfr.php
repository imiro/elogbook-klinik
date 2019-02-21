<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="<?=base_url()?>assets/images/codeigniter_logo.png" type="image/x-icon">

    <title>Sekolah OnkoGin</title>

    <!-- Bootstrap Core CSS -->
    <link href="<?=base_url()?>assets/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="<?=base_url()?>assets/css/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="<?=base_url()?>assets/css/sb-admin-2.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="<?=base_url()?>assets/css/font-awesome.min.css" rel="stylesheet" type="text/css">

</head>

<body>
<center>           

     <P> </P> 
     <H3>Creatinine Clearance Calculator</H3>
     
     <H3>Estimating the creatinine clearance of patient</H3> 

     <DIV CLASS="detail"> 
        <DIV CLASS="calcbox"><SCRIPT TYPE="text/javascript"><!--
function calculate() {
 var c = new Number(); var ia,ib,ic,id,oa,ob,oc,od,oe,og;ia=parseFloat(document.calculator.ia.value);ib=parseFloat(document.calculator.ib.value);ic=parseFloat(document.calculator.ic.value);

oa = (140-ia)*(ic)*(1/ib)/72*0.85;

if(oa.toPrecision) { oa=oa; } document.calculator.oa.value = oa;
 return false;
}
// --></SCRIPT> 
          <FORM ONSUBMIT="return calculate()" NAME="calculator" ACTION=""> 
             <TABLE CLASS="calc" BORDER="0" CELLSPACING="1" CELLPADDING="0"
              WIDTH="300"> 
                <TR> 
                  <TD><SMALL><I>Usia</I></SMALL></TD> 
                  <TD><INPUT TYPE="text" NAME="ia" VALUE="0" SIZE="10"
                     CLASS="infield" ONBLUR="calculate();"></TD> 
                  <TD></TD> 
                </TR> 
                <TR> 
                  <TD><SMALL><I>Kreatinin Serum (mg/dL)</I></SMALL></TD> 
                  <TD><INPUT TYPE="text" NAME="ib" VALUE="0" SIZE="10"
                     CLASS="infield" ONBLUR="calculate();"></TD> 
                  <TD></TD> 
                </TR> 
                <TR> 
                  <TD><SMALL><I>Berat badan:</I></SMALL></TD> 
                  <TD><INPUT TYPE="text" NAME="ic" VALUE="0" SIZE="10"
                     CLASS="infield" ONBLUR="calculate();"></TD> 
                  <TD></TD> 
                </TR> 
                <TR> 
                  <TD COLSPAN="3"><HR></TD> 
                </TR> 
                <TR> 
                  <TD><SMALL><I>eGFR</I></SMALL></TD> 
                  <TD><INPUT TYPE="text" NAME="oa" VALUE="Wait" SIZE="10"
                     READONLY="readonly" CLASS="outfield"></TD> 
             </TABLE></FORM><br><br>

<a href="<?=base_url('dashboard')?>"> <button onclick="popup()">Kembali</button> </a>

<script>
function popup() {
  alert("Jangan lupa cek status portofolio Anda!");
}
</script>

</center>

    <!-- jQuery -->
    <script src="<?=base_url()?>assets/js/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="<?=base_url()?>assets/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?=base_url()?>assets/js/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="<?=base_url()?>assets/js/sb-admin-2.js"></script>

</body>

</html>
