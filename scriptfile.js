var buttonOpenCount = 0;

function removeButton(buttonID) {
    var thisButton = document.getElementById(buttonID);
    thisButton.parentNode.removeChild(thisButton);
}//end removeButton

function checkButtonOpenCount() {
    if (buttonOpenCount == 5) {
        document.getElementById("calcPos").style.display = 'block';
    }
}//end checkButtonOpenCount

function addCurrentAssets() {
    //Creating div
    buttonOpenCount++;
    checkButtonOpenCount();
    var div = document.createElement("div");
    div.setAttribute("class", "contents");
    div.setAttribute("id", "currentAssetsDiv");
    document.getElementById("currentAssets").appendChild(div);

    //Cash
    var div = document.createElement("div");
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "cash");
    label.textContent = "Cash:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "cash");
    input.setAttribute("name", "cash");
    input.setAttribute("style", "text-align: right");
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentAssetsDiv").appendChild(div);

    //Inventory
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "inventory");
    label.textContent = "Inventory:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "inventory");
    input.setAttribute("name", "inventory");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentAssetsDiv").appendChild(div);

    //Supplies
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "supplies");
    label.textContent = "Supplies:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "supplies");
    input.setAttribute("name", "supplies");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentAssetsDiv").appendChild(div);
    
    //Temporary Investments
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "tempinvestments1");
    label.textContent = "Temporary Investments:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "tempinvestments1");
    input.setAttribute("name", "tempinvestments1");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentAssetsDiv").appendChild(div);

    //Total Current Assets
    var div = document.createElement("div");
    div.setAttribute("id", "totalCurrAssets");
    div.textContent = "Total Current Assets:";
    document.getElementById("currentAssetsDiv").appendChild(div);

    //Remove button
    removeButton("currentAssetsButton");
}//end addCurrentAssets

function addCurrentLiab() {
    //Creating div
    buttonOpenCount++;
    checkButtonOpenCount();
    var div = document.createElement("div");
    div.setAttribute("class", "contents");
    div.setAttribute("id", "currentLiabDiv");
    document.getElementById("currentliab").appendChild(div);
    
    //Accounts Payable
    var div = document.createElement("div");
    var label = document.createElement("label");
    var br = document.createElement("br");
    label.setAttribute("for", "accPayable");
    label.textContent = "Accounts Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "accPayable");
    input.setAttribute("name", "accPayable");
    input.setAttribute("style", "text-align: right");
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentLiabDiv").appendChild(div);

    //Notes Payable
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "notesPayable");
    label.textContent = "Notes Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "notesPayable");
    input.setAttribute("name", "notesPayable");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentLiabDiv").appendChild(div);

    //Interest Payable
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "intPayable");
    label.textContent = "Interest Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "intPayable");
    input.setAttribute("name", "intPayable");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentLiabDiv").appendChild(div);

    //Wages Payable
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "wagesPayable");
    label.textContent = "Wages Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "wagesPayable");
    input.setAttribute("name", "wagesPayable");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentLiabDiv").appendChild(div);

    //Accrued Expenses
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "accExpenses");
    label.textContent = "Accrued Expenses:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "accExpenses");
    input.setAttribute("name", "accExpenses");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("currentLiabDiv").appendChild(div);

    //Total Current Liabilities
    var div = document.createElement("div");
    div.setAttribute("id", "totalCurrLiab");
    div.textContent = "Total Current Liabilities:";
    document.getElementById("currentLiabDiv").appendChild(div);

    //Remove button
    removeButton("currentLiabButton");
}

function addInvest() {
    //Creating div
    buttonOpenCount++;
    checkButtonOpenCount();
    var div = document.createElement("div");
    div.setAttribute("class", "contents");
    div.setAttribute("id", "investDiv");
    document.getElementById("investProp").appendChild(div);

    //Land
    var div = document.createElement("div");
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "land");
    label.textContent = "Land:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "land");
    input.setAttribute("name", "land");
    input.setAttribute("style", "text-align: right");
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("investDiv").appendChild(div);

    //Building and Improvements
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "building");
    label.textContent = "Building and Improvements:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "building");
    input.setAttribute("name", "building");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("investDiv").appendChild(div);
    
    //Equipment
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "equip");
    label.textContent = "Equipment:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "equip");
    input.setAttribute("name", "equip");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("investDiv").appendChild(div);

    //Temporary Investments
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "tempinvestments2");
    label.textContent = "Temporary Investments:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "tempinvestments2");
    input.setAttribute("name", "tempinvestments2");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("investDiv").appendChild(div);

    //Total Current Assets
    var div = document.createElement("div");
    div.setAttribute("id", "totalInvest");
    div.textContent = "Total Investment Property and Equipment:";
    document.getElementById("investDiv").appendChild(div);

    //Remove button
    removeButton("investButton");

}//end

function addLong() {
    //Creating div
    buttonOpenCount++;
    checkButtonOpenCount();
    var div = document.createElement("div");
    div.setAttribute("class", "contents");
    div.setAttribute("id", "longDiv");
    document.getElementById("longtermliab").appendChild(div);

    //Notes Payable
    var div = document.createElement("div");
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "notesPayable2");
    label.textContent = "Notes Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "notesPayable2");
    input.setAttribute("name", "notesPayable2");
    input.setAttribute("style", "text-align: right");
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("longDiv").appendChild(div);

    //Bonds Payable
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "bondsPayable");
    label.textContent = "Bonds Payable:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "bondsPayable");
    input.setAttribute("name", "bondsPayable");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("longDiv").appendChild(div);

    //Total Current Liabilities
    var div = document.createElement("div");
    div.setAttribute("id", "totalLong");
    div.textContent = "Total Long-Term Liabilities:";
    document.getElementById("longDiv").appendChild(div);

    //Remove button
    removeButton("longButton");
}//end addLong

function addIntang() {
    //Creating div
    buttonOpenCount++;
    checkButtonOpenCount();
    var div = document.createElement("div");
    div.setAttribute("class", "contents");
    div.setAttribute("id", "intangDiv");
    document.getElementById("intangibles").appendChild(div);

    //Trade Names
    var div = document.createElement("div");
    var br = document.createElement("br");
    var label = document.createElement("label");
    label.setAttribute("for", "tradeNames");
    label.textContent = "Trade Names:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "tradeNames");
    input.setAttribute("name", "tradeNames");
    input.setAttribute("style", "text-align: right");
    div.appendChild(br);
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("intangDiv").appendChild(div);

    //Goodwill
    var div = document.createElement("div");
    var label = document.createElement("label");
    label.setAttribute("for", "goodwill");
    label.textContent = "Goodwill:";
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "goodwill");
    input.setAttribute("name", "goodwill");
    input.setAttribute("style", "text-align: right");
    div.appendChild(label);
    div.appendChild(input);
    document.getElementById("intangDiv").appendChild(div);

    //Total Current Liabilities
    var div = document.createElement("div");
    div.setAttribute("id", "totalIntang");
    div.textContent = "Total Intangibles:";
    document.getElementById("intangDiv").appendChild(div);

    //Remove button
    removeButton("intangButton");
}//end addLong

//------------------------CALCULATIONS---------------------------
//Instance variable declarations
var currentAssets;
var currentLiab;
var investProp;
var longTermLiab;
var intangibles

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//Current Assets
function calcCurrentAssets() {
    //Cash
    var cashString = document.getElementById("cash").value;
    if (cashString == "") {
        var cash = 0;
    }
    else {
        cash = parseFloat(cashString);
    }

    //Inventory
    var inventoryString = document.getElementById("inventory").value;
    if (inventoryString == "") {
        var inventory = 0;
    }
    else {
        inventory = parseFloat(inventoryString);
    }

    //Supplies
    var suppliesString = document.getElementById("supplies").value;
    if (suppliesString == "") {
        var supplies = 0;
    }
    else {
        supplies = parseFloat(suppliesString);
    }

    //Temporary Investments
    var tempInvestments1String = document.getElementById("tempinvestments1").value;
    if (tempInvestments1String == "") {
        var tempInvestments1 = 0;
    }
    else {
        tempInvestments1 = parseFloat(tempInvestments1String);
    }

    currentAssets = cash + inventory + supplies + tempInvestments1;
    var currentAssetsFormat = formatter.format(cash + inventory + supplies + tempInvestments1);
    document.getElementById("totalCurrAssets").innerHTML = `<br>Total Current Assets: ${currentAssetsFormat}`;
}//end calcCurrentAssets

function calcCurrentLiab() {
    //Accounts Payable
    var accPayableString = document.getElementById("accPayable").value;
    if (accPayableString == "") {
        var accPayable = 0;
    }
    else {
        accPayable = parseFloat(accPayableString);
    }

    //Notes Payable
    var notesPayableString = document.getElementById("notesPayable").value;
    if (notesPayableString == "") {
        var notesPayable = 0;
    }
    else {
        notesPayable = parseFloat(notesPayableString);
    }

    //Interest Payable
    var intPayableString = document.getElementById("intPayable").value;
    if (intPayableString == "") {
        var intPayable = 0;
    }
    else {
        intPayable = parseFloat(intPayableString);
    }

    //Wages Payable
    var wagesPayableString = document.getElementById("wagesPayable").value;
    if (wagesPayableString == "") {
        var wagesPayable = 0;
    }
    else {
        wagesPayable = parseFloat(wagesPayableString);
    }

    //Accrued Interest
    var accExpensesString = document.getElementById("accExpenses").value;
    if (accExpensesString == "") {
        var accExpenses = 0;
    }
    else {
        accExpenses = parseFloat(accExpensesString);
    }

    currentLiab = accPayable + notesPayable + intPayable + wagesPayable + accExpenses;
    var currentLiabFormat = formatter.format(currentLiab);
    document.getElementById("totalCurrLiab").innerHTML = `<br>Total Current Liabilities: ${currentLiabFormat}`;
}//end calcCurrentLiab

//Investment Property & Equipment
function calcInvestProp() {
    //Land
    var landString = document.getElementById("land").value;
    if (landString == "") {
        var land = 0;
    }
    else {
        land = parseFloat(landString);
    }

    //Building and Improvements
    var buildingString = document.getElementById("building").value;
    if (buildingString == "") {
        var building = 0;
    }
    else {
        building = parseFloat(buildingString);
    }

    //Equipment
    var equipString = document.getElementById("equip").value;
    if (equipString == "") {
        var equip = 0;
    }
    else {
        equip = parseFloat(equipString);
    }

    //Temporary Investments
    var tempinvestments2String = document.getElementById("tempinvestments2").value;
    if (tempinvestments2String == "") {
        var tempinvestments2 = 0;
    }
    else {
        tempinvestments2 = parseFloat(tempinvestments2String);
    }

    invest = land + building + equip + tempinvestments2;
    var investFormat = formatter.format(invest);
    document.getElementById("totalInvest").innerHTML = `<br>Total Investment Properties and Equipment: ${investFormat}`;
}//end calcCurrentAssets

//Long-Term Liabilities
function calcLongTermLiab() {
    //Notes Payable
    var notesPayable2String = document.getElementById("notesPayable2").value;
    if (notesPayable2String == "") {
        var notesPayable2 = 0;
    }
    else {
        notesPayable2 = parseFloat(notesPayable2String);
    }

    //Bonds Payable
    var bondsPayableString = document.getElementById("bondsPayable").value;
    if (bondsPayableString == "") {
        var bondsPayable = 0;
    }
    else {
        bondsPayable = parseFloat(bondsPayableString);
    }

    longTermLiab = notesPayable2 + bondsPayable;
    var longTermLiabFormat = formatter.format(longTermLiab);
    document.getElementById("totalLong").innerHTML = `<br>Total Long-Term Liabilities: ${longTermLiabFormat}`;
}//end calcCurrentAssets

//Intangibles
function calcIntangibles() {
    //Trade Names
    var tradeNamesString = document.getElementById("tradeNames").value;
    if (tradeNamesString == "") {
        var tradeNames = 0;
    }
    else {
        tradeNames = parseFloat(tradeNamesString);
    }

    //Goodwill
    var goodwillString = document.getElementById("goodwill").value;
    if (goodwillString == "") {
        var goodwill = 0;
    }
    else {
        goodwill = parseFloat(goodwillString);
    }

    intangibles = tradeNames + goodwill;
    var intangiblesFormat = formatter.format(intangibles);
    document.getElementById("totalIntang").innerHTML = `<br>Total Intangibles: ${intangiblesFormat}`;
}//end calcCurrentAssets

function calculatePosition() {
    calcCurrentAssets();
    calcCurrentLiab();
    calcInvestProp();
    calcLongTermLiab();
    calcIntangibles();
    var totalAssets = currentAssets + invest + intangibles;
    var totalAssetsFormat = formatter.format(totalAssets);
    var totalLiab = currentLiab + longTermLiab;
    var totalLiabFormat = formatter.format(totalLiab);
    var position = totalAssets - totalLiab;
    var positionFormat = formatter.format(position);
    document.getElementById('totalassets').innerHTML = `<h3>Total Assets: ${totalAssetsFormat}</h3>`;
    document.getElementById('totalliab').innerHTML = `<h3>Total Liabilities: ${totalLiabFormat}</h3>`;
    document.getElementById('position').innerHTML = `<h3>Position: ${positionFormat}</h3>`;
}

