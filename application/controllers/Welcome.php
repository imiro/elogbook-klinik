<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

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
		$this->load->helper('url');

		$this->load->model('list_model');

		$this->user = 'student'; //TODO! only a mock
	}

	public function index()
	{
		if( !empty($this->input->post()) )
		{
			$data = array();
			$keys = array('user_id', 'nama', 'usia', 'diagnosis', 'tindakan', 'kode', 'verifikator');

			foreach($keys as $k) $data[$k] = $this->input->post($k); // TODO: unverified!! needs verification?

			date_default_timezone_set('Asia/Jakarta');
			$data['tanggal'] = date('Y-m-d');

			$this->list_model->new_entry($data);
		}

		$viewData['user'] = $this->user;
		$viewData['allEntry'] = $this->list_model->get_entries($this->user);

		$this->load->view('header', $viewData);
	}
}
