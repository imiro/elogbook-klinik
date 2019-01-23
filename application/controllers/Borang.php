<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Borang extends CI_Controller {

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

		$this->load->model('minicex_model');

		if(!$this->session->userdata('logged_in'))
			redirect(base_url());

		// if($this->session->userdata('role') == "student")
		// 	redirect(base_url('dashboard')); // not always? student may see their own minicex result ?

		$this->user = $this->session->userdata('user_id');

		date_default_timezone_set("Asia/Jakarta");
	}

	public function index($id = 0)
	{
		$viewData = array();

		if( !empty($this->input->post()) )
		{

			$data = array();
			// TODO: verifikasi 'keys'.
			// $keys = array('student_id', 'nama', 'tanggal', 'lokasi', 'usia', 'nrm', 'diagnosis', 'tindakan', 'kode', 'verifikator');
			// foreach($keys as $k) $data[$k] = $this->input->post($k); // TODO: unverified!! needs verification?
			foreach($_POST as $k => $v) $data[$k] = $this->input->post($k);
			$data['spv_id'] = $this->user;
			var_dump($data,'<br/>');
			
			$result_id = $this->minicex_model->newEntry($data); // TODO: what if this operation failed?

			if($result_id) $id = $result_id;
			return;
		}

		$viewData['students'] = $this->minicex_model->getStudents();


		$this->load->view('portofolio/header');
		$this->load->view('borang/minicex', $viewData);
		$this->load->view('portofolio/end_of');
	}

	public function view($id) {

	}

	public function delete($id) {
		$cek = $this->list_model->getEntryById($id);

		if( $cek && $cek[0]['user_id'] == $this->user &&
				!$cek[0]['verified'] && // kalo udah diverifikasi atau ditolak, ga boleh dihapus
		 		$this->list_model->drop_entry($id, $this->user) ) {
			$this->session->set_flashdata('success', "<strong>Entri #{$id}</strong> berhasil dihapus!");
			header("refresh: 1;url = " . base_url("portofolio"));
			echo "<strong>Entri {$id}</strong> berhasil dihapus! Mengalihkan Anda ke halaman <a href='". base_url('portofolio')."' >E-Portofolio</a>";
		} else {
			redirect(base_url("portofolio"));
			echo "Operasi gagal!";
		}
	}

}
