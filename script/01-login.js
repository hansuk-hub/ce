(function() {

    // function sleep (time) {
    //     return new Promise((resolve) => setTimeout(resolve, time));
    // }

    const getOrderTable = localStorage.getItem("locale");

    if ( getOrderTable) { 
	    console.log("already Login!")
    } else {
        
        const username = document.querySelector('[name=username]')
        const password = document.querySelector('[name=password]')

        // username.setAttribute('value', "colamkt")
        // password.setAttribute('value', "rymd02021##!")
        username.value = 'colamkt'
        password.value = 'rymd02021##!'

        const submit = document.querySelector('.btn.btn-primary')
        submit.click()

        // sleep(5000).then(() => {
        //     const regex = /인증/g
        //     const result = document.body.innerText.match(regex)
        //     if ( result.length >=3 ) {
        //         alert('2차 로그인을 진행해주세요.')
        //     }
        //     console.log ( result.length)
        // });
        console.log ('로그인 완료!')
        
        //  *** 로그인 후 아이디를 저장하는 기능이 필요하다!
        //  발주 정보를 서버에 저장할때 누구 것인지 알아야한다.
        // localStorage.setItem("userInfo", JSON.stringify(result))

    }

        
})()




