var ConsoleManager={
            onOpen:function(){
                alert("Console is opened")
            },
            onClose:function(){
                alert("Console is closed")
            },
            init:function(){
                var self = this;
                var x = document.createElement('div');
                var isOpening = false,isOpened=false;
                Object.defineProperty(x, 'id', {
                    get:function(){
                        if(!isOpening){
                            self.onOpen();
                            isOpening=true;
                        }
                        isOpened=true;
                    }
                });
                setInterval(function(){
                    isOpened=false;
                    console.info(x);
                    console.clear();
                    if(!isOpened && isOpening){
                        self.onClose();
                        isOpening=false;
                    }
                },200)
            }
        }

        ConsoleManager.onOpen = function(){
            //Redirect to error page
            try{
                window.open('stop.html',target='_self');
            }catch(err){
                var a = document.createElement("button");
                    a.onclick=function(){
                    window.open('stop.html',target='_self');
                }
                a.click();  
            }
        }
        ConsoleManager.onClose = function(){
            alert("Console is closed!!!!!")
        }
        ConsoleManager.init();


        const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  
      let countDown = new Date('Aug 6, 2021 00:08:30').getTime(),
      
          x = setInterval(function() {
      
            let now = new Date().getTime(),
                distance = countDown - now;
      
            document.getElementById('cd-days').innerText = Math.floor(distance / (day)),
              document.getElementById('cd-hours').innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById('cd-minutes').innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById('cd-seconds').innerText = Math.floor((distance % (minute)) / second);
            
            //do something later when target is reached
            if (distance < 0) {
                clearInterval(x);
              jQuery('.countdown').html("<span class=\"cd-message\">It's the 2021 Canada Games!</span>");
            }
      
          }, second)
      
      