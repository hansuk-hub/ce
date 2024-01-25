( function () {
        // 입고일 유형으로 변경
        const searchDateType = document.querySelector('#searchDateType')
        searchDateType.setAttribute('value', 'WAREHOUSEING_PLAN_DATE')
    
        //
        const startDate = document.querySelector('[name="searchStartDate]')
        startDate.setAttribute('value', '2024-01-25')
    
        const endDate = document.querySelector('[name="searchEndDate]')
        endDate.setAttribute('value', '2024-01-25')
    
        const submit = document.querySelector('#search')
        submit.click()
    
}
)()