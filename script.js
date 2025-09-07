document.getElementById('loginBtn').
    addEventListener('click',
        function (){
            // window.location.href = './home.html'
            const numbers = document.getElementById('numbers')
            const pin = document.getElementById('pin')

            const phoneNumber = 1743929833
            const pinNumber = 1234
            
            if(numbers.value == phoneNumber && pin.value == pinNumber){
                window.location.href = './home.html'
            }
            else{
                alert("Wrong pin or wrong number")
            }
        }
    )