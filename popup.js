const moveUrlButton = document.querySelector('#moveURLbtn')
const login01Button = document.querySelector('#login')
const linkPurchaseOrderButton = document.querySelector('#link-purchase-order')
const inputDateButton = document.querySelector('#inputDate')
const getBillNumber = document.querySelector('#getBillNumberButton')
const moveBillPageBtn = document.querySelector('#moveBillPage')
const billContSaveBtn = document.querySelector('#billContSave')


moveUrlButton.addEventListener('click', moveUrlToSupplier)
login01Button.addEventListener('click', handleLogin01ButtonClicked )
linkPurchaseOrderButton.addEventListener('click', handleLinkPurchaseOrderButtonClicked )
inputDateButton.addEventListener('click', autoinputDate )
getBillNumber.addEventListener('click', scrapBillNumber )
moveBillPageBtn.addEventListener('click', moveBillPagefnc )
billContSaveBtn.addEventListener('click', billContSavefnc )


async function moveUrlToSupplier() {

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com'} )

    // 로그인 체크 유무
	const [{result}] = await chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ['./script/00-checkLogin.js'], 
	  });
}

async function handleLogin01ButtonClicked() {

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	const [{result}] = await chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  files: ['./script/01-login.js'], 
	});
}

async function handleLinkPurchaseOrderButtonClicked() {
	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/list'} )
}

async function autoinputDate() {
	startDate = '2024-01-25'
	endDate = '2024-01-25'

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/list?page=1&searchDateType=WAREHOUSING_PLAN_DATE&searchStartDate=' + startDate + '&searchEndDate=' + endDate + '&centerCode=&purchaseOrderSeq=&vendorPaymentInfoSeq=&purchaseOrderStatus='} )

	
	// const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	// const [{result}] = await chrome.scripting.executeScript({
	//   target: { tabId: tab.id },
	//   files: ['./script/03-submit-purchase-order.js'], 
	// });
    // console.log (`popup.js : ${result}`)
	// return result
}


async function scrapBillNumber() {

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	const [{result}] = await chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  files: ['./script/04-getBillNumber.js'], 
	});

	console.log ( result)
	localStorage.setItem("purchase-order", JSON.stringify(result))
}


async function moveBillPagefnc() {

	const getOrderTable = localStorage.getItem("purchase-order");
	const parsedData = JSON.parse(getOrderTable);

	// 일단 한개의 발주 번호만  읽어와서 이동한다.
	let billNumber = parsedData[0].billNumber  
	
	
	// 모든 발주 번호 출력 
	// for ( row of parsedData ) {
	// 	tempbillNumber = row.billNumber
	// 	console.log ( tempbillNumber)  
	// }

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/get/' + billNumber} )
}


async function billContSavefnc() {

	const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	const [{result}] = await chrome.scripting.executeScript({
	  target: { tabId: tab.id },
	  files: ['./script/05-readBills.js'], 
	});
	// console.log ( result)
	localStorage.setItem("bill-cont", JSON.stringify(result))
}

