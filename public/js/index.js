var socket = io(); 

         socket.on('connect',function (){
             console.log('connected to server');
            socket.emit('NewMsg',{
                to:'jdsk@jnlk.com',
                from:'dfsdf'
            })
         })
         socket.on('disconnect',function (){
             console.log('disconnected from server');
         })

         socket.on('NewMsg',function(msg){
             console.log('New Msg',msg);
         })