<!-- FORM to ADD ITEM -->
<?php if($this->session->userdata('role') == "student") { ?>
<form class="form-inline text-center" id="formTambah" action="" method="post">
  <input type="text" id="datepicker" name="tanggal" value="<?php echo date('Y-m-d'); ?>" class="form-control" placeholder="Tanggal"/>
  <input type="text" name="nama" value="" class='form-control' placeholder="Nama pasien" />
  <input type="text" name="usia" value="" class='form-control' placeholder="Usia" />
  <input type="text" name="nrm" value="" class='form-control' placeholder="NRM" />
  <input type="text" name="diagnosis" value="" class='form-control' placeholder="Diagnosis" />
  <select class='form-control' name='lokasi' placeholder='Lokasi'>
    <option value="poliklinik">Poliklinik</option>
    <option value="ok">Ruang Operasi</option>
    <option value="igd">Instalasi Gawat Darurat</option>
    <option value="icu">Intensive Care Unit</option>
  </select>
  <input type="text" name="tindakan" value="" class='form-control' placeholder="Tindakan" />
  <select class='form-control' name='kode'>
    <option value="1">Observasi</option>
    <option value="2">Asistensi</option>
    <option value="3">Operator dalam Pengawasan</option>
    <option value="4">Operator Mandiri</option>
    <option value="5">Konsultasi</option>
  </select>
  <select class='form-control' name='verifikator'>
      <option value="" > --- PILIH VERIFIKATOR --- </option>
    <?php foreach($verificators as $vid => $vname) { ?>
      <option value="<?php echo $vid; ?>"><?php echo $vname; ?></option>
    <?php } ?>
  </select>
  <input  type="button" data-toggle="modal" data-target="#modalKonfirmasiTambah" value="Tambah" class="btn btn-primary" />
</form>
<?php } ?>
<!-- END OF: FORM to ADD ITEM -->
