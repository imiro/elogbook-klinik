<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Verifikasi extends CI_Controller {

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
		date_default_timezone_set('Asia/Jakarta');

		if(!$this->session->userdata('logged_in') || $this->session->userdata('role') != 'teacher')
			redirect(base_url());

		$this->user = $this->session->userdata('user_id');
	}

	public function index()
	{
		if( !empty($this->input->post()) )
		{
			/*
			$data = array();
			$keys = array('user_id', 'nama', 'usia', 'diagnosis', 'tindakan', 'kode', 'verifikator');

			foreach($keys as $k) $data[$k] = $this->input->post($k); // TODO: unverified!! needs verification?

			date_default_timezone_set('Asia/Jakarta');
			$data['tanggal'] = date('Y-m-d');

			$this->list_model->new_entry($data);
			*/
		}

		$viewData['user'] = $this->session->userdata('name');
		$this->load->view('header');

		$viewData['title'] = "Antrian Verifikasi";
		$viewData['lastheading'] = "Aksi";
		$viewData['allEntry'] = $this->list_model->dapatkanAntrianVerifikasi($this->session->userdata('user_id'));
		if($viewData['allEntry']) {
			foreach($viewData['allEntry'] as &$row) {
				$row['user_id'] = $this->list_model->getNameById($row['user_id']);
			}
			$this->load->view('verifikasi_main', $viewData);
		}

		$viewData['title'] = "Sudah Diproses";
		$viewData['lastheading'] = "Status";
		$viewData['allEntry'] = $this->list_model->dapatkanSudahVerifikasi($this->session->userdata('user_id'));
		if($viewData['allEntry']) {
			foreach($viewData['allEntry'] as &$row) {
				$row['user_id'] = $this->list_model->getNameById($row['user_id']);
			}
			$this->load->view('verifikasi_main', $viewData);
		}

		$this->load->view('footer');
	}

	public function acc($index = NULL) {
		if($index === NULL) {
			redirect("..");
		}

		if($this->list_model->verifyById($index, $this->user, 1)) {
			$this->session->set_flashdata('success', "<strong>Entri #{$index}</strong> berhasil diverifikasi!");
			header("refresh: 1;url = " . base_url("verifikasi"));
			echo "<b>Entri {$index}</b> berhasil diverifikasi! Anda akan diarahkan kembali secara otomatis ke halaman Daftar Verifikasi..";
			echo "\n<br/>Jika pengarahan otomatis tidak berhasil, klik <a href='" . base_url("verifikasi") . "'>di sini</a>";
		}
	}

	public function tolak($index = NULL) {
		if($index === NULL) {
			redirect("..");
		}

		if($this->list_model->verifyById($index, $this->user, -1)) {
			$this->session->set_flashdata('success', "Berhasil menolak verifikasi <strong>entri #{$index}</strong>");
			header("refresh: 1;url = " . base_url("verifikasi"));
			echo "Berhasil menolak verifikasi <b>Entri {$index}</b>! Anda akan diarahkan kembali secara otomatis ke halaman Daftar Verifikasi..";
			echo "\n<br/>Jika pengarahan otomatis tidak berhasil, klik <a href='" . base_url("verifikasi") . "'>di sini</a>";
		}
	}
}
