(function() {
    const getBills = document.querySelectorAll('.scmTableArea .scmTable tbody tr')

    const res = []

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
            billMount : row.querySelector ('td:nth-child(17)').innerText


            // URL << 데이터로 생성 가능

            // 입고 유형 << 취합할게 아직은 없음
        }
        res.push(rowData)
    }
    return res

})()