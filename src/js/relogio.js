(function() {
  
    const zero = i => {
      if ( i < 10 ) {
        i = '0' + i;
      }
      return i;
    }
    
    const setTime = () => {
      let today = new Date();
      const time = document.querySelector('.time'),
            date = document.querySelector('.date'),
            days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'SEXTOU!', 'Sábado'],
            months = ['01', '02', '03', '04', '05', '06', '07', '08', '09',
                  '10', '11', '12'];
      
      time.innerHTML = zero(today.getHours()) + ':' + zero(today.getMinutes()) + ':' + zero(today.getSeconds());
      date.innerHTML = today.getDate() + '-' + months[today.getMonth()] + '-' + today.getFullYear() + ' ' + days[today.getDay()];
    }
    
    let update = setInterval(setTime, 1000);
    
    /***Event Listener***/
    window.addEventListener('load', setTime, false);
    
  })();