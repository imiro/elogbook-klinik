<div id="container">
    <div id="main" class="mainlong">
        <div class="inputContainer">
            <form action="" method="POST">
                <table style="width: 100%;">

                    <tr>
                        <td colspan="2">
                            Pusat rujukan untuk ginekologi-onkologi?
                        </td>
                        <td>
                            <select class="styled-select" name="inData[1]">
                                    <option value=false ng-selected="inData[1] == false">No</option>
                                    <option value=true ng-selected="inData[1] == true">Yes</option>
                                </select>
                        </td>
                        <td>
                            <div class="info" ng-click="doInfo(0)"></div>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2">
                            Usia pasien saat pemeriksaan
                        </td>
                        <td>
                            <input  id="row0" type="number" placeholder="Years" name="inData[0]" >
                        </td>
                        <td>

                        </td>
                    </tr>


                    <tr>
                        <td colspan="2">Ada ascites?</td>
                        <td>
                            <select class="styled-select" name="inData[7]">
                            <option value=false ng-selected="inData[7] == false">No</option>
                            <option value=true ng-selected="inData[7] == true">Yes</option>
                        </select>
                        </td>
                        <td></td>
                    </tr>

                    <tr>
                        <td colspan="2">Diameter terpanjang lesi</td>
                        <td><input id="row2" type="number" placeholder="mm" name="inData[2]" ></td>
                        <td><div class="info" ng-click="doInfo(1)"></div></td>
                    </tr>

                    <tr>
                        <td colspan="2">Diameter terpanjang dari lesi padat terbesar (Maximal diameter of the largest solid part)</td>
                        <td><input id="row3" type="number" placeholder="mm" name="inData[3]"></td>
                        <td><div class="info" ng-click="doInfo(2)"></div></td>
                    </tr>

                    <tr>
                        <td colspan="2">Lebih dari 10 locules?</td>
                        <td><select class="styled-select" name="inData[4]">
                            <option value=false ng-selected="inData[4] == false">No</option>
                            <option value=true ng-selected="inData[4] == true">Yes</option>
                        </select>
                        </td>
                        <td><div class="info" ng-click="doInfo(3)"></div></td>
                    </tr>

                    <tr>
                        <td colspan="2">Jumlah papilasi (papillary projections)</td>
                        <td>
                            <select class="styled-select" id="row5" name="inData[5]">
                            <option value=0 ng-selected="inData[5] == 0">None</option>
                            <option value=1 ng-selected="inData[5] == 1">One</option>
                            <option value=2 ng-selected="inData[5] == 2">Two</option>
                            <option value=3 ng-selected="inData[5] == 3">Three</option>
                            <option value=4 ng-selected="inData[5] == 4">More than Three</option>
                        </select>
                        </td>
                        <td><div class="info" ng-click="doInfo(4)"></div></td>
                    </tr>

                    <tr>
                        <td colspan="2">Terdapat acoustic shadow?</td>
                        <td>
                            <select class="styled-select" name="inData[6]">
                            <option value=false ng-selected="inData[6] == false">No</option>
                            <option value=true ng-selected="inData[6] == true">Yes</option>
                        </select>
                        </td>
                        <td><div class="info" ng-click="doInfo(5)"></div></td>
                    </tr>

                    <tr>
                        <td>CA-125 (U/ml)</td><td style="width:30px";></td>
                        <td colspan="3"><input class="ca-input" id="row8" type="number" placeholder="N/A" name="inData[8]" ></td>

                    </tr>

                </table>
            </form>
                </div>
        <div style="padding-bottom: 20px;">
        <div class="btn btn-primary" onclick="doResults()">Hitung</div>
        <div class="btn btn-warning" onclick="doClear()">Clear data</div>

        <script type='text/javascript'>

        function doResults() {
            document.forms[0].submit();
        }

        </script>
    </div>
    </div>

</div>
