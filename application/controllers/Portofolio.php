<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Portofolio extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct() {
		parent::__construct();

		$this->load->model('list_model');


		if(!$this->session->userdata('logged_in'))
			redirect(base_url());

		if($this->session->userdata('role') == "teacher")
			redirect(base_url('verifikasi'));

		$this->user = $this->session->userdata('user_id');

		date_default_timezone_set("Asia/Jakarta");
	}

	public function index()
	{
		if( !empty($this->input->post()) )
		{

			$data = array();
			// TODO: sudah bener semua kah? di database dll
			$keys = array('user_id', 'nama', 'tanggal', 'lokasi', 'usia', 'nrm', 'diagnosis', 'tindakan', 'kode', 'verifikator');
			// $keys = array('user_id', 'nama', 'tanggal', 'usia', 'diagnosis', 'tindakan', 'kode', 'verifikator');

			foreach($keys as $k) $data[$k] = $this->input->post($k); // TODO: unverified!! needs verification?
			$data['user_id'] = $this->user;
			// $data['tanggal'] = strtotime($data['tanggal']);

			// date_default_timezone_set('Asia/Jakarta');
			// $data['tanggal'] = date('Y-m-d');

			$this->list_model->new_entry($data);
		}

		$viewData['user'] = $this->session->userdata('name');
		$viewData['allEntry'] =
			$this->session->userdata('role') == "admin" ?
				$this->list_model->getAllEntries() :
				$this->list_model->get_entries($this->user);

		foreach($viewData['allEntry'] as &$row) {
			$row['verifikator'] = $this->list_model->getNameById($row['verifikator']);
			if($this->session->userdata('role') == "admin")
				$row['user_id'] = $this->list_model->getNameById($row['user_id']);
		}

		$viewData['verificators'] = $this->list_model->listVerificators();

		$this->load->view('header');
		$this->load->view('portofolio_main', $viewData);
	}

	public function delete($id) {
		$cek = $this->list_model->getEntryById($id);

		if( $cek && $cek[0]['user_id'] == $this->user &&
				!$cek[0]['verified'] && // kalo udah diverifikasi atau ditolak, ga boleh dihapus
		 		$this->list_model->drop_entry($id, $this->user) ) {
			header("refresh: 2;url = " . base_url("portofolio"));
			echo "<strong>Entri {$id}</strong> berhasil dihapus! Mengalihkan Anda ke halaman <a href='". base_url('portofolio')."' >E-Portofolio</a>";
		} else {
			redirect(base_url("portofolio"));
			echo "Operasi gagal!";
		}
	}
}
