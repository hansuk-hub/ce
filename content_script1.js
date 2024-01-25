(function() {
    console.log('content_script1.js')
	 const checkDataLoaded = setInterval(function() {
        const priceCell = document.querySelector('[data-veloute="map/markers/BasePillMarker"]');

        if (priceCell) {
            console.log('priceCell data loaded');
            clearInterval(checkDataLoaded);

            // 메인 로직 실행
            console.log(priceCell.innerText)
        } else {
            console.log('loading..')
        }
    }, 1000); // 매 1000ms마다 체크 (1 second)
})()