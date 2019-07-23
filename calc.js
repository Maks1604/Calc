
$(() => {
	$('body').on("click", '[id^=n]', buttonNumber_Click );
	
	$("#calc").click( buttonClear_Click );
	$("#clear").click( buttonCalc_Click );
	
	$(".oper").click( buttonOper_Click );
	
	buttonCalc_Click();
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
		case "div" : return "รท";
	}
}

function buttonCalc_Click() {
	let variable = $("#result").text();
	
}
