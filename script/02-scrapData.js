(async function() {
    const res = []

    function run() {
        return new Promise(function(resolve) {

            const checkDataLoaded = setInterval(function() {
                const getBills = document.querySelectorAll('.scmTableArea .scmTable tbody tr')

                if (getBills.length > 0 ) {
                    console.log('data loaded')
                    clearInterval(checkDataLoaded)

                    // 메인 로직 실행
                    for ( row of getBills ) {
                        const rowData = {
                            // 입고일  << 정해져서 취합함

                            // 센터
                            inCenter : row.querySelector ('td:nth-child(13)').innerText ,
                            // 발주번호
                            billNumber : row.querySelector ('td:nth-child(2) :nth-child(1)').innerText,
                            // 수량
                            billQty : row.querySelector ('td:nth-child(15)').innerText,
                            // 금액
                            billAmount : row.querySelector ('td:nth-child(17)').innerText
                            
                            // URL << 데이터로 생성 가능
                            // 입고 유형 << 취합할게 아직은 없음
                        }
                        res.push(rowData)
                    }
            
                    console.log(res)
    
                    console.log( resolve(res) )
                } else {
                    console.log('검색 결과 없음 또는 로딩중....')
                }
            }, 1000); 

        }) 
    }

    const result = await run()

    return result
})()



// (function() {
    
//     const res = []
//     console.log('content_script1.js')
// 	 const checkDataLoaded = setInterval(function() {
//         const getBills = document.querySelectorAll('.scmTableArea .scmTable tbody tr')

//         if (getBills.length > 0 ) {
//             console.log('data loaded');
//             clearInterval(checkDataLoaded);

//             // 메인 로직 실행
//             for ( row of getBills ) {
//                 const rowData = {
//                     // 입고일  << 정해져서 취합함

//                     // 센터
//                     inCenter : row.querySelector ('td:nth-child(13)').innerText ,

//                     // 발주번호
//                     billNumber : row.querySelector ('td:nth-child(2) :nth-child(1)').innerText,

//                     // 수량
//                     billQty : row.querySelector ('td:nth-child(15)').innerText,


//                     // 금액
//                     billMount : row.querySelector ('td:nth-child(17)').innerText


//                     // URL << 데이터로 생성 가능

//                     // 입고 유형 << 취합할게 아직은 없음
//                 }
//                 res.push(rowData)
//             }
    
//             console.log(res)
            
//         chrome.runtime.sendMessage({ type : "billIndex", data : res })
//         } else {
//             console.log('검색 결과 없음 또는 로딩중....')

//         }
//     }, 1000); // 매 1000ms마다 체크 (1 second)
    

    

   
//     return res

// })()


