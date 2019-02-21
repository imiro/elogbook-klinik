<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kalkulator extends CI_Controller {

	/**
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct() {
		parent::__construct();

		$this->load->model('list_model');

		if(ENVIRONMENT != 'development' && !$this->session->userdata('logged_in'))
			redirect(base_url());

		$this->user = $this->session->userdata('user_id');

		date_default_timezone_set("Asia/Jakarta");
	}

	public function index() {
		$this->risiko();
	}

	public function egfr() {
			$this->load->view('kalkulator/egfr');
	}

	public function risiko()
	{
		$this->load->view('portofolio/header');
		if( $this->input->post() ) {

			$outData = $this->hitungRisiko($this->input->post('inData'));

			$this->load->view('kalkulator/risiko_results', array('outData' => $outData));
		}

		$this->load->view('kalkulator/risiko');
	}

	/*
	 *
	 * @param array inData - array of input datas
	 *
	 * @returns array outData - some calculated numbers representing risks following IOTA prediction model. we will display them using IOTA's own graphical methods
	 */
	private function hitungRisiko($inData) {
				$selector = array(0,1,2,3,4);

				$inData[1] = $inData[1] === 'true' || $inData[1] === true;
        $inData[4] = $inData[4] === 'true' || $inData[4] === true;
        $inData[6] = $inData[6] === 'true' || $inData[6] === true;
        $inData[7] = $inData[7] === 'true' || $inData[7] === true;

				$z = $inData[8];
        // ==================
        if ($z == null)
            $a1 = exp(-7.412534 + 0.430701 * log($inData[2]) / log(2)
                + 1.167767 * ($inData[7] === true ? 1 : 0)
                + 0.003489 * $inData[0] + 7.117925 * ($inData[3] / $inData[2])
                - 5.74135 * (pow(($inData[3] / $inData[2]), 2))
                + 1.343699 * ($inData[4] === true ? 1 : 0)
                + 0.607211 * $selector[$inData[5]]
                + 0.983227 * ($inData[1] === true ? 1 : 0) - 2.11885 * ($inData[6] === true ? 1 : 0)
                );
        else
            $a1 = exp(-7.577663 + 0.372046 * log($inData[2]) / log(2)
                + 0.971061 * ($inData[7] === true ? 1 : 0)
                + 0.004506 * $inData[0] + 6.967853 * ($inData[3] / $inData[2])
                - 5.65588 * (pow(($inData[3] / $inData[2]), 2))
                + 1.375079 * ($inData[4] === true ? 1 : 0)
                + 0.604238 * $selector[$inData[5]]
                + 0.953043 * ($inData[1] === true ? 1 : 0) - 2.04157 * ($inData[6] === true ? 1 : 0)
                + 0.111642 * log($inData[8]) / log(2)
                );

        if ($z == null)
            $a2 = exp(-12.201607 + 0.98728 * log($inData[2]) / log(2)
                + 0.77054 * ($inData[7] === true ? 1 : 0) + 0.017607 * $inData[0]
                + 10.07145 * ($inData[3] / $inData[2]) - 6.17742 * (pow(($inData[3] / $inData[2]), 2))
                + 0.763081 * ($inData[4] === true ? 1 : 0)
                + 0.410449 * $selector[$inData[5]]
                + 0.543677 * ($inData[1] === true ? 1 : 0) - 1.98073 * ($inData[6] === true ? 1 : 0)
                );
        else
            $a2 = exp(-12.276041 + 0.87353 * log($inData[2]) / log(2)
                + 0.452731 * ($inData[7] === true ? 1 : 0) + 0.01726 * $inData[0]
                + 9.583053 * ($inData[3] / $inData[2]) - 5.83319 * (pow(($inData[3] / $inData[2]), 2))
                + 0.791873 * ($inData[4] === true ? 1 : 0)
                + 0.400369 * $selector[$inData[5]]
                + 0.452484 * ($inData[1] === true ? 1 : 0) - 1.87763 * ($inData[6] === true ? 1 : 0)
                + 0.197249 * log($inData[8]) / log(2)
                );

        if ($z == null)
            $a3 = exp(-12.826207 + 0.759002 * log($inData[2]) / log(2) + 2.691276 * ($inData[7] === true ? 1 : 0)
                + 0.045172 * $inData[0] + 11.83296 * ($inData[3] / $inData[2])
                - 6.64336 * (pow(($inData[3] / $inData[2]), 2))
                + 0.316444 * ($inData[4] === true ? 1 : 0)
                + 0.390959 * $selector[$inData[5]]
                + 0.929483 * ($inData[1] === true ? 1 : 0) - 2.94082 * ($inData[6] === true ? 1 : 0)
                );
        else
            $a3 = exp(-14.91583 + 0.430477 * log($inData[2]) / log(2) + 1.348408 * ($inData[7] === true ? 1 : 0)
                + 0.051239 * $inData[0] + 10.37696 * ($inData[3] / $inData[2])
                - 5.70975 * (pow(($inData[3] / $inData[2]), 2))
                + 0.273692 * ($inData[4] === true ? 1 : 0)
                + 0.389874 * $selector[$inData[5]]
                + 0.459021 * ($inData[1] === true ? 1 : 0) - 2.35516 * ($inData[6] === true ? 1 : 0)
                + 0.765456 * log($inData[8]) / log(2)
                );

        if ($z == null)
            $a4 = exp(-11.424379 + 0.560396 * log($inData[2]) / log(2)
                + 2.185574 * ($inData[7] === true ? 1 : 0)
                + 0.033407 * $inData[0] + 7.264105 * ($inData[3] / $inData[2])
                - 2.77392 * (pow(($inData[3] / $inData[2]), 2))
                + 0.983394 * ($inData[4] === true ? 1 : 0)
                + 0.199164 * $selector[$inData[5]]
                + 0.906249 * ($inData[1] === true ? 1 : 0) - 2.63702 * ($inData[6] === true ? 1 : 0)
                );
        else
            $a4 = exp(-11.909267 + 0.449025 * log($inData[2]) / log(2)
                + 1.636407 * ($inData[7] === true ? 1 : 0)
                + 0.033601 * $inData[0] + 6.644939 * ($inData[3] / $inData[2])
                - 2.3033 * (pow(($inData[3] / $inData[2]), 2))
                + 0.89998 * ($inData[4] === true ? 1 : 0)
                + 0.215645 * $selector[$inData[5]]
                + 0.808887 * ($inData[1] === true ? 1 : 0) - 2.49845 * ($inData[6] === true ? 1 : 0)
                + 0.276166 * log($inData[8]) / log(2)
                );

								//new w   -11,909267+0,449025*LOG(B14;2)+1,636407*(B19="Yes")+0,033601*B12+6,644939*(B15/B14)-2,3033*((B15/B14)^2)+0,89998*(B16="Yes")+0,215645*IF(B17=R7;1;IF(B17=R8;2;IF(B17=R9;3;IF(B17=R10;4;0))))+0,808887*(B13="Yes")-2,49845*(B18="Yes")+0,276166*LOG(B20;2)

			  $outData = array(
            null, //
            $a4 / (1 + $a1 + $a2 + $a3 + $a4),
            $a3 / (1 + $a1 + $a2 + $a3 + $a4),
            $a2 / (1 + $a1 + $a2 + $a3 + $a4),
            $a1 / (1 + $a1 + $a2 + $a3 + $a4),
            1 / (1 + $a1 + $a2 + $a3 + $a4)
        );
        $outData[0] = $outData[1] + $outData[2] + $outData[3] + $outData[4];
        // $outData is in Decimal percentage

				for($i = 0;$i < count($outData);++$i) {
					$outData[$i] = number_format($outData[$i]*100, 1);
				}
				return $outData;
	}

}
