(async function() {
    const billsCont = []
    

    function runc() {
        return new Promise(function(resolvec) {
            
            const checkDataLoadedbill = setInterval(function() {
                var tables = document.getElementsByClassName('scmTable productInfo');
   
                if (tables.length > 0 ) {

                    clearInterval(checkDataLoadedbill)
                    var billContTable = tables[7]

                    // 선택한 테이블이 존재하는지 확인
                    var billContTr = billContTable.querySelector('tbody')
                    var getTr = billContTr.querySelectorAll('tr[data-sku-seq]')

                    getTr.forEach(function(row) {
    
                        let getTd = row.querySelectorAll('td')
                        let rowDatas = {
                            proSKU : getTd[1].innerText.replace('\n','') ,  // sku
                            proBarcode : getTd[2].innerText.split('\n')[0] ,  // barcode 
                            proName : getTd[2].innerText.split('\n')[1] ,  // 상품명
                            proQty : getTd[4].innerText.replace(',','') ,  // 수량
                            proPrice : getTd[6].innerText.replace(',','') ,  // 발주 단가
                            proMount : getTd[9].innerText.replace(',','')   // 발주 합계가
                        }
                        billsCont.push( rowDatas )
                    })

                console.log (billsCont)
                console.log( resolvec(billsCont))
                }else {
                    console.log('발주서 내용에 검색 결과 없음 또는 로딩중....')
                }
            }, 1000);
        })
    }


    const resultBillCont = await runc()

    return resultBillCont
})()






                

// (function() {
//     // 7번째 테이블에 발주 내용이 있다.
//     var tables = document.getElementsByClassName('scmTable productInfo');
//     var billContTable = tables[6];
    
//     // 선택한 테이블이 존재하는지 확인
//     var billContTr = billContTable.querySelector('tbody')
//     var getTr = billContTr.querySelectorAll('tr[data-sku-seq]')

//     let res = []

//     getTr.forEach(function(row) {
 
//         let getTd = row.querySelectorAll('td')
//         let rowData = {
//             proSKU : getTd[1].innerText.replace('\n','') ,  // sku
//             proBarcode : getTd[2].innerText.split('\n')[0] ,  // barcode 
//             proName : getTd[2].innerText.split('\n')[1] ,  // 상품명
//             proQty : getTd[4].innerText.replace(',','') ,  // 수량
//             proPrice : getTd[6].innerText.replace(',','') ,  // 발주 단가
//             proMount : getTd[9].innerText.replace(',','')   // 발주 합계가
//         }
//         res.push( rowData )
//     })
//     return res
// })()