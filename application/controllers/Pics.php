<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pics extends CI_Controller {

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

		if(ENVIRONMENT != 'development' && !$this->session->userdata('logged_in'))
			redirect(base_url());

		$this->user = $this->session->userdata('user_id');

		date_default_timezone_set("Asia/Jakarta");
	}

	public function index($id=1)
	{
		$entry = $this->list_model->getEntryById($id)[0];

		if( ENVIRONMENT != 'development' &&
			$entry['user_id'] != $this->user && $entry['verifikator'] != $this->user)
			redirect(base_url());

		$client = $this->getClient(APPPATH . 'tokens.json');
		// API key could not be used to access Drive files, even if it is your own!

		// Service Accounts does not work either! It has its own 'Google Drive' storage, not accessible via web!
		// putenv('GOOGLE_APPLICATION_CREDENTIALS=' . APPPATH . '9b0255821134.json');
		// $client->useApplicationDefaultCredentials(); //

		$client->setScopes( Google_Service_Drive::DRIVE );

		$service = new Google_Service_Drive($client);

		// Print the names and IDs for up to 10 files.
		$optParams = array(
		  'pageSize' => 10,
			'q' => "name='#{$id}_' and trashed=false",
		  'fields' => 'nextPageToken, files(id, name)'
		);
		$results = $service->files->listFiles($optParams);

		$folderId = "";
		if (count($results->getFiles()) == 0) {
		    // create one!
				$fileMetadata = new Google_Service_Drive_DriveFile(array(
				    'name' => "#{$id}_",
				    'mimeType' => 'application/vnd.google-apps.folder',
						'parents' => array('1eib3EY9vpHVUguAP2EeFQTIXbf0sHTai')
					));
				$file = $service->files->create($fileMetadata, array(
				    'fields' => 'id'));
			  $folderId = $file->id;
		} else if (count($results->getFiles()) > 1){
				// it maybe a "substring", e.g. searching for #11 --> caught #113
				// Fixed it with this bit: #11_, #113_
		} else {
			// count == 1

			foreach($results->getFiles() as $folder) {
				$folderId = $folder->getId();
			}
		}

		$this->load->view('pics', array(
			'accessToken' => $client->getAccessToken()['access_token'],
			'folderId' => $folderId,
			'id' => $id
		));

	}

	public function viewer($fileId='1ra9M_PRnno_Xd0lNXuFFsE4mJFvNqcnu') {
		$client = $this->getClient(APPPATH . 'tokens.json');
		$client->setScopes( Google_Service_Drive::DRIVE );
		$service = new Google_Service_Drive($client);

		$meta = $service->files->get($fileId, array(
			'fields' => 'mimeType'
		));
		$media = $service->files->get($fileId, array(
			'alt' => 'media'
		));

		header('Content-Type: ' . $meta->getMimeType() );

		echo $media->getBody()->getContents();
	}

	private function getClient($tokensFile)
	{
	    $client = new Google_Client();
	    $client->setApplicationName('Sekolah Onkogin Picture Services');
	    $client->setScopes(Google_Service_Drive::DRIVE);
	   // $client->setAuthConfig('credentials.json');
	    $client->setAccessType('offline');
	    $client->setPrompt('select_account consent');

			// load tokens from $tokensFile
			$json = file_get_contents($tokensFile);
			$tokens = json_decode($json, true); // echo "<pre>" . var_export($tokens, true) . "</pre>"; exit;
			$client->setClientId($tokens['client_id']);
			$client->setClientSecret($tokens['client_secret']);

	    // Load previously authorized token from a file, if it exists.
	    // The file token.json stores the user's access and refresh tokens, and is
	    // created automatically when the authorization flow completes for the first
	    // time.
	    $tokenPath = APPPATH . 'token.json';
	    if (file_exists($tokenPath)) {
	        $accessToken = json_decode(file_get_contents($tokenPath), true);
	        $client->setAccessToken($accessToken);
	    } else {
				$client->fetchAccessTokenWithRefreshToken($tokens['refresh_token']);
	    }

	    // If there is no previous token or it's expired.
	    if ($client->isAccessTokenExpired()) {
	        // Refresh the token if possible, else fetch a new one.
	        if ($client->getRefreshToken()) {
	            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
	        } else { // THIS CLAUSE SHOULD NEVER BE REACHED
	            // Request authorization from the user.
	            $authUrl = $client->createAuthUrl();
	            printf("Open the following link in your browser:\n%s\n", $authUrl);
	            print 'Enter verification code: ';
	            $authCode = trim(fgets(STDIN));

	            // Exchange authorization code for an access token.
	            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
	            $client->setAccessToken($accessToken);

	            // Check to see if there was an error.
	            if (array_key_exists('error', $accessToken)) {
	                throw new Exception(join(', ', $accessToken));
	            }
	        }
	        // Save the token to a file.
	        if (!file_exists(dirname($tokenPath))) {
	            mkdir(dirname($tokenPath), 0700, true);
	        }
	        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
	    }
	    return $client;
	}
}
