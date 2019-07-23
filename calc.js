
$(() => {
	$('body').on("click", '[id^=n]', buttonNumber_Click );
	
	$("#clear").click( buttonClear_Click );
	$("#calc").click( buttonCalc_Click );
	
	$(".oper").click( buttonOper_Click );
	
	buttonClear_Click();
});

function buttonNumber_Click(args) {
	let number = $(this).attr('id').substr(1);
	let result = $("#result");
	result.text( result.text() + number );
}

function buttonClear_Click() {
	$("#result").text("");
}

function buttonOper_Click() {
	let data = $(this).attr('data');
	let oper = selectOper(data);
	let result = $("#result");
	let text = `${result.text()} ${oper} `;
	result.text( text );
}

function selectOper(oper) {
	switch(oper) {
		case "add" : return "+";
		case "sub" : return "-";
		case "mul" : return "*";
		case "div" : return "÷";
	}
}

function buttonCalc_Click() {
	let result = $("#result");
	let items = result.text().split(' ');
	let counter = Number(items[0]);
		
	for( let i = 1; i < items.length; i+=2 ) {
		counter = executeOper(counter, items[i], Number(items[i + 1]));
	}
		
	result.text(counter);
}

function executeOper( varA, oper, varB ) {
	switch(oper) {
		case "+" : return varA + varB;
		case "-" : return varA - varB;
		case "*" : return varA * varB;
		case "÷" : return varA / varB;
	}
}
