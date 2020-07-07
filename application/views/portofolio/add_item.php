<!-- FORM to ADD ITEM -->
<form class="form-inline text-center" id="formTambah" action="" method="post">
  <select class='form-control' name='stase'>
      <option value="" > --- PILIH STASE --- </option>
    <?php foreach($stase as $vid => $vname) { ?>
      <option value="<?php echo $vid; if($vid==$stase_terakhir) echo '" selected="selected"' ?>"><?php echo $vname; ?></option>
    <?php } ?>
  </select>
  <select class='form-control' name='wahana'>
      <option value="" > --- RS --- </option>
    <?php foreach($list_wahana as $vid => $vname) { ?>
      <option value="<?php echo $vid; if($vid==$wahana_terakhir) echo '" selected="selected"'?>"><?php echo $vname; ?></option>
    <?php } ?>
  </select>
  <input type="text" id="datepicker" name="tanggal" value="<?php echo date('Y-m-d'); ?>" class="form-control" placeholder="Tanggal"/>
  <input type="text" name="nama" value="" class='form-control' placeholder="Nama pasien" />
  <input type="text" name="usia" value="" class='form-control' placeholder="Usia" size=4 maxlength=3 />
  <select name='satuanusia' class='form-control' >
    <option value="tahun">tahun</option>
    <option value="bulan">bulan</option>
  </select>
  <input type="text" name="nrm" value="" class='form-control' placeholder="NRM" />
  <input type="text" name="diagnosis" value="" class='form-control' placeholder="Diagnosis" />
  <select class='form-control' name='lokasi' placeholder='Lokasi'>
    <option value="poliklinik">Poliklinik</option>
    <option value="ranap">Rawat Inap</option>
    <option value="igd">Instalasi Gawat Darurat</option>
    <option value="ok">Ruang Operasi</option>
    <option value="vk">Ruang Bersalin</option>
    <option value="icu">ICU/HCU/ICCU</option>
  </select>
  <select class='form-control' name='kegiatan' placeholder='Lokasi'>
    <option value="nontindakan">Anamnesis / PF / Edukasi</option>
    <option value="tindakan">Tindakan</option>
  </select>
  <input type="text" name="tindakan" value="" class='form-control opt-tindakan' placeholder="Tindakan" style='display: none;'/>
  <select class='form-control opt-tindakan' name='kode' style='display: none;'>
    <option value="1">Observasi</option>
    <option value="2">Asistensi</option>
    <option value="3">Operator dalam Supervasi Tidak Langsung</option>
    <option value="4">Operator dalam Supervasi Langsung</option>
    <option value="5">Operator Mandiri</option>
  </select>
  <input  type="button" data-toggle="modal" data-target="#modalKonfirmasiTambah" value="Tambah" class="btn btn-primary" />
</form>

<script type='text/javascript'>
console.log('cuy')
console.log(document.querySelector('[name=kegiatan]'))
document.querySelector('[name=kegiatan]').addEventListener('change', function(e) {
  document.querySelectorAll('.opt-tindakan')
            .forEach(el => el.style.display= e.target.value=='tindakan' ? '' : 'none')
})
</script>

<style type='text/css'>
form > * {
  margin: 3px 1px;
}
</style>
<!-- END OF: FORM to ADD ITEM -->
