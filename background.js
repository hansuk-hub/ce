// console.log("back source")

// chrome.tabs.onUpdated.addListener( async function (tabId, changeInfo, tab) {
//     const url = new URL(tab.url)
//     if ( changeInfo.status === "complete" &&
//         url.hostname.includes('airbnb.co.kr') &&
//         url.pathname === '/'
//     ) {
//         chrome.scripting.executeScript({
//             target : { tabId : tab.id },
//             files : ['./content_script1.js'],
//         });
//     }
// });


function sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }



chrome.tabs.onUpdated.addListener( async function (tabId, changeInfo, tab) {
    const url = new URL(tab.url)
    if ( changeInfo.status === "complete" &&
        url.hostname.includes('supplier.coupang.com') &&
        url.pathname === '/scm/purchase/order/list'  
    ) {
        let [{result}] = await chrome.scripting.executeScript({
            target : { tabId : tab.id },
            files : ['./script/02-scrapData.js'],
            })
        console.log(result)
        
        chrome.storage.sync.set( { billIndex : result } )   // bill Index 에 발주 리스트 저장

        sleep(4000)

        let targetBill = await { billNumber : '72326952'}
        // for (let targetBill of result) {
    
        await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/get/'+ targetBill.billNumber } )
        await sleep(4000)

        let [{resultBillCont}] = await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['./script/03-readBills.js'], 
            })

        await sleep(4000)
        await console.log ( 'good')


        // 두번째 스크립트에서 받아온게 출력 및 저장이 안되고 있음
        // resultBillCont 가 비어 있음
        await console.log ( resultBillCont )
        
        
        chrome.storage.sync.set( { chromeBillCont : resultBillCont } )
            
        await console.log ( 'good2')    
        await sleep(4000)


            // await sleep(20000)
        // }


        // console.log ( result.length )
        
        


        // await sleep(3000)


        // let [{result}] = await chrome.scripting.executeScript({
        //     target : { tabId : tab.id },
        //     files : ['./script/02-scrapData.js'],
        // });

     
        // await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/get/'+ result[1].billNumber } )
        


    }
})


chrome.runtime.onMessage.addListener(async function( request, sender, sendResponse) {
    // if ( request.type === "billIndex"){
    //     chrome.storage.sync.set(  { [request.type] :  request.data }   )
    //     const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //     // const targetBillNumber = 
    //     // await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/get/'+ targetBillNumber } )
        
        
    //     await chrome.tabs.update( tab.id, {url : 'https://supplier.coupang.com/scm/purchase/order/get/72679208' } )
    
    
    // }

   


})