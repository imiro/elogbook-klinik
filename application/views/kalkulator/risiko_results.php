<div id="container">
    <div id="main">
        <table class="result-table">
            <tr>
                <td><div class="riskColor one"></div></td>
                <td><div class="riskText">Risk of Metastatic Cancer to the Adnexa</div></td>
                <td><div class="riskPercent"><?=$outData[1];?>%</div></td>
            </tr>
            <tr>
                <td><div class="riskColor two"></div></td>
                <td><div class="riskText">Risk of stage II-IV Ovarian cancer</div></td>
                <td><div class="riskPercent"><?=$outData[2];?>%</div></td>
            </tr>
            <tr>
                <td><div class="riskColor three"></div></td>
                <td><div class="riskText">Risk of stage I Ovarian cancer</div></td>
                <td><div class="riskPercent"><?=$outData[3];?>%</div></td>
            </tr>
            <tr>
                <td><div class="riskColor four"></div></td>
                <td><div class="riskText">Risk of Borderline Tumor</div></td>
                <td><div class="riskPercent"><?=$outData[4];?>%</div></td>
            </tr>
            <tr></tr>
            <tr>
                <td><div class="arrow-right red1"></div></td>
                <td><div class="riskText bold red">Risk of Malignancy</div></td>
                <td><div class="riskPercent bold red"><?=$outData[0];?>%</div></td>
            </tr>
            <tr>
                <td><div class="arrow-right green1"></div></td>
                <td><div class="riskText bold green">Chance of Benign Tumor</div></td>
                <td><div class="riskPercent bold green"><?=$outData[5];?>%</div></td>
            </tr>
        </table>

        <div class="graphContainer">
            <div class="chooseGraph">Check the Charts</div>
            <div class="graph-cont">
                <div class="graphBtn1" ng-click="goStacked()"></div>
                <div class="graphBtn2" ng-click="goRadar()"></div>
            </div>
        </div>
        <br><br>
</div>
</div>
