<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . "/vendor/SSO/SSO.php";
use SSO\SSO;
SSO::setCASPath(dirname(__FILE__) . "/vendor/CAS/CAS.php");

class Vote extends CI_Controller {

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

	public function __construct() {
		parent::__construct();
		$this->load->model('user_model');
		$this->load->helper('form');
		$this->load->helper('url');

		$this->username =  NULL;
		if( SSO::check() ) {
			$user = SSO::getUser();
			$this->username = $user->username;
			$this->user_model->assign_user($user);
		}
	}

	public function index()
	{
		$timelimit = $this->user_model->get_settings('datetime');//'13 Apr 2016 22:00 GMT+7';
		$diff = (strtotime($timelimit) - time()) >= 0;

		$hdata['user'] = FALSE;
		$username = $this->username;

		/*
		if( SSO::check() ) {
			$hdata['user'] = $username = SSO::getUser()->username;
		} */

		$hdata['base'] = base_url();
		$hdata['user'] = $username;
		$hdata['title'] = $hdata['judul'] = $this->user_model->get_settings('judul');
		$this->load->view('header', $hdata);

		// $cdata = $this->mapres_datas();
		// $categories = array('aktivis', 'seni', 'or'); // TODO: change this!
		$categories = array_keys( $this->user_model->get_categories() );

		$pdata['user'] = $username;
		$pdata['pesan'] = $pdata['cpesan'] = NULL;

		if( !empty($this->input->post()) && $username && $diff ) {
			$sc = 0;

			foreach($categories as $c) {
				if($this->input->post($c) !== NULL) {
					$k = $this->input->post($c);

					//TODO: validasi $k
					$this->user_model->memilih('p_' . $c, $k, $username);
					$sc = 1;
				}
			}
			/*
			if($this->input->post('aktivis') !== NULL) {
				$k = $this->input->post('aktivis');

				//TODO: validasi $k
				$this->user_model->memilih('p_aktivis', $k, $username);
				$sc = 1;
			} */

			if( $sc ) {
				$pdata['pesan'] = "Pilihan Anda berhasil disimpan!";
				$pdata['cpesan'] = 'bg-success';
			}
		}

		$pdata['baru'] = NULL;
		$pdata['diff'] = $diff;

		// SHOW SAVED CHOICE IF LOGGED IN, OR MODAL VIEW IF NEW USER
		// $choices = array('aktivis' => -1, 'seni' => -1, 'or' => -1);
		$choices = array();
		foreach($categories as $c) $choices[$c] = '-1';

		if( $username ) {
			$txt = $categories;
			$ada = 0;
			foreach($txt as $v) {
				$choices[$v] = $this->user_model->choice($username, "p_" . $v);
				if($choices[$v] != -1) $ada = 1;
			}
			if(!$ada) $pdata['baru'] = 1;
		}

		// SHOW WARNING MESSAGE IF TIME IS UP
		if( !$diff ) {
			$pdata['pesan'] = $this->user_model->get_settings('oot_message');
			$pdata['cpesan'] = 'bg-warning';
		}
		$this->load->view('pesan_atas', $pdata);

		// $judul = array('aktivis' => "Mapres Aktivis", 'seni' => "Mapres Seni", 'or' => "Mapres Olahraga");
		$judul = $this->user_model->get_categories(true);
		foreach($categories as $c) {
			$this->load->view('cat', array(
					'user' => $pdata['user'],
					'diff' => $pdata['diff'],
					'title' => $judul[$c],
					'choice' => $choices[$c],
					// 'dpo' => $cdata[$c],
					'dpo' => $this->user_model->getCategoryDetailsById($c)['pilihan'],
					'kategori' => $c
			));
		}

	//	$this->load->view('front_page', $pdata);
		$this->load->view('footer_main', array(
			'user' => $pdata['user'],
			'diff' => $pdata['diff']
		));
		$this->load->view('footer',
											array('base' => base_url(),
														'user' => $pdata['user'],
														'diff' => $pdata['diff'],
														'pesan' => $this->user_model->get_settings('pesan_bawah'),
														'timelimit' => $timelimit
			));
	}

	public function login()
	{
		if( SSO::authenticate() ) {
	    $user = SSO::getUser();
			$this->user_model->assign_user($user);
			$this->load->helper('url');
			redirect('index.php');
	  }
	}

	public function logout()
	{
		SSO::logout();
	}
}
